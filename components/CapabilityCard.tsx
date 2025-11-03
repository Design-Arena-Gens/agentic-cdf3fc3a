import Link from 'next/link';

export default function CapabilityCard({ title, description, cta, href }: {
  title: string;
  description: string;
  cta: string;
  href: string;
}) {
  const isExternal = href.startsWith('http');
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {isExternal ? (
        <a href={href} target="_blank" rel="noreferrer">{cta} ?</a>
      ) : (
        <Link href={href}>{cta} ?</Link>
      )}
    </article>
  );
}
