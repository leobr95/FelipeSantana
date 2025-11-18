'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone, MdContentCopy, MdCheckCircle } from 'react-icons/md';
import '@/app/(portafolio)/landing/styles/Contact.css';

const WHATSAPP_PERSONAL = '573054282291';
const LLAMADAS         = '573054282291';
const WHATSAPP_EMPRESA = '573054282291';
const MAIL_TO          = 'psicologofelipe6@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`+57 ${LLAMADAS.replace(/^57/,'')}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch { /* ignore */ }
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name:  String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      msg:   String(fd.get('message') || ''),
    };

    // SIN POST por defecto → abre el cliente de correo
    if (!process.env.NEXT_PUBLIC_CONTACT_API) {
      window.location.href = `mailto:${MAIL_TO}?subject=Contacto%20desde%20Web&body=${encodeURIComponent(
        `Nombre: ${payload.name}\nEmail: ${payload.email}\n\n${payload.msg}`
      )}`;
      return;
    }

    try {
      setStatus('sending');
      const res = await fetch(process.env.NEXT_PUBLIC_CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('fail');
      setStatus('ok');
      e.currentTarget.reset();
    } catch {
      setStatus('error');
    } finally {
      setStatus('idle');
    }
  }

  const wspText = encodeURIComponent('Hola, vengo de tu web. ¿Podemos hablar?');
  const wspPersonalHref = `https://wa.me/${WHATSAPP_PERSONAL}?text=${wspText}`;
  const wspEmpresaHref  = `https://wa.me/${WHATSAPP_EMPRESA}?text=${wspText}`;

  return (
    <section className="ctc container">
      <header className="ctc-head">
        <h2 className="ctc-title">Contacta conmigo</h2>
        <p className="ctc-sub">
          Respuesta rápida por WhatsApp o correo. También puedo devolver la llamada.
        </p>
      </header>

      <div className="ctc-grid">
        {/* Tarjeta lateral */}
        <aside className="ctc-card">
          <div className="ctc-card-head">
            <div className="ctc-avatar" aria-hidden>CFM</div>
            <div className="ctc-card-meta">
              <h3>Christian F. Meneses S.</h3>
              <p>Psicólogo</p>
            </div>
          </div>

          <ul className="ctc-lines" role="list">
            <li>
              <MdPhone aria-hidden />
              <span><strong>Llamadas:</strong> +57 {LLAMADAS.replace(/^57/,'')}</span>
              <button className="link-ghost" onClick={handleCopy} aria-label="Copiar número">
                {copied ? <><MdCheckCircle/> Copiado</> : <><MdContentCopy/> Copiar</>}
              </button>
            </li>
            <li>
              <MdEmail aria-hidden />
              <a href={`mailto:${MAIL_TO}`} className="link">{MAIL_TO}</a>
            </li>
          </ul>

          <div className="ctc-actions">
            <a className="pill-btn primary"  href={wspPersonalHref} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp aria-hidden /> WhatsApp Personal
            </a>
            <a className="pill-btn outline"  href={wspEmpresaHref}  target="_blank" rel="noopener noreferrer">
              <FaWhatsapp aria-hidden /> WhatsApp Empresa
            </a>
          </div>
        </aside>

        {/* Formulario */}
        <div className="ctc-form">
          <h3 className="ctc-form-title"><MdEmail aria-hidden /> Envíame un correo</h3>

          <form onSubmit={onSubmit} noValidate>
            <div className="row">
              <label className="in">
                <span>Nombre</span>
                <input name="name" type="text" placeholder="Tu nombre" required />
              </label>
              <label className="in">
                <span>Email</span>
                <input name="email" type="email" placeholder="tu@correo.com" required />
              </label>
            </div>

            <label className="in">
              <span>Mensaje</span>
              <textarea name="message" rows={5} placeholder="Cuéntame brevemente sobre el servicio que quieres solicitar" required />
            </label>

            <div className="form-actions">
              <button className="pill-btn primary" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
              </button>

              {!process.env.NEXT_PUBLIC_CONTACT_API && (
                <a className="link-ghost" href={`mailto:${MAIL_TO}?subject=Contacto%20desde%20Portafolio`}>
                  Usar cliente de correo
                </a>
              )}
            </div>

            {status === 'ok' && <p className="form-ok">¡Gracias! Te responderé muy pronto.</p>}
            {status === 'error' && <p className="form-err">Ocurrió un error. Intenta de nuevo o usa el botón de correo.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
