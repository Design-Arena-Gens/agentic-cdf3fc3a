import Link from 'next/link';
import CapabilityCard from '../components/CapabilityCard';

const capabilities = [
  {
    title: 'Build and Deploy Web Apps',
    description: 'Scaffold Next.js apps, implement features, run builds, and deploy to Vercel.',
    cta: 'See Health Check',
    href: '/api/ping'
  },
  {
    title: 'Code Search & Refactors',
    description: 'Find symbols across the repo and apply safe, well-structured edits.',
    cta: 'View Repo README',
    href: 'https://github.com/'
  },
  {
    title: 'APIs & Backend Routes',
    description: 'Create REST/route handlers with input validation and clear error responses.',
    cta: 'Open Example',
    href: '/api/ping'
  },
  {
    title: 'Automated CI-friendly Workflows',
    description: 'Run installs, builds, tests, and produce reliable, reproducible outputs.',
    cta: 'Trigger Build Locally',
    href: 'https://nextjs.org/docs'
  }
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div className="badge">AI Agent</div>
        <h1>What can I do?</h1>
        <p className="subtitle">
          End-to-end software execution: from editing code to shipping to production.
        </p>
        <div className="actions">
          <Link className="button primary" href="/api/ping">Quick Health Check</Link>
          <a className="button secondary" href="https://vercel.com" target="_blank" rel="noreferrer">Deploy Platform</a>
        </div>
      </section>

      <section className="grid">
        {capabilities.map((c) => (
          <CapabilityCard key={c.title} {...c} />
        ))}
      </section>

      <footer className="footer">
        <span>Deployed on Vercel. Built with Next.js.</span>
      </footer>
    </main>
  );
}
