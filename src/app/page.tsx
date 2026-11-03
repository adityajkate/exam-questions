import Link from 'next/link';
import { subjects } from '../data/subjects';
import { CountdownWidget } from '../components/CountdownWidget';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <CountdownWidget />

      <div className="hero">
        <h1 className="hero-title" id="hero-title">
          Exam Questions
        </h1>
        <div className="hero-badge">SEM - VII (AIDS, AIML, DS)</div>
        <p className="hero-subtitle">
          The best way to study — curated Mumbai University PYQs
        </p>
      </div>

      <div className="subjects-grid">
        {subjects.map((subject) => (
          <Link
            key={subject.slug}
            href={`/${subject.slug}`}
            className="subject-card"
            data-subject={subject.slug}
          >
            <div className="subject-code">{subject.code}</div>
            <div className="subject-name">{subject.name}</div>
            <div className="subject-date">{subject.examDate}</div>
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
}
