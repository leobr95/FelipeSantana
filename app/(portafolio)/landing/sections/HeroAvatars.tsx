import Image from 'next/image';
import '../styles/HeroAvatars.css';

const people = [
  { src: '/portfolio/avatars/a1.jpg', alt: 'Persona 1' },
  { src: '/portfolio/avatars/a2.jpg', alt: 'Persona 2' },
  { src: '/portfolio/avatars/a3.jpg', alt: 'Persona 3' },
  { src: '/portfolio/avatars/a4.jpg', alt: 'Persona 4' },
  { src: '/portfolio/avatars/a5.jpg', alt: 'Persona 5' },
  { src: '/portfolio/avatars/a6.jpg', alt: 'Persona 6' },
  { src: '/portfolio/avatars/a7.jpg', alt: 'Persona 7' },
];

export default function HeroAvatars() {
  return (
    <div className="chl-avatars-wrap" aria-hidden="true">
      <div className="container">
        <div className="chl-avatars">
          {people.map((p, i) => (
            <figure className={`card tilt-${i % 5}`} key={i}>
              <Image
                src={p.src}
                alt={p.alt}
                width={280}
                height={320}
                sizes="(max-width: 640px) 44vw, (max-width: 1024px) 26vw, 280px"
                priority={i < 3}
              />
              <figcaption>{/* opcional */}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
