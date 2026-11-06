import Link from 'next/link';
import { subjects } from '../data/subjects';
import { CountdownWidget } from '../components/CountdownWidget';
import { Footer } from '../components/Footer';
import TechText from '../components/TechText';

export default function HomePage() {
  return (
    <>
      <CountdownWidget />

      <div className="hero">
        <h1 className="hero-title" id="hero-title">
          <span className="sr-only">Exam Questions</span>
          <TechText
            text="Exam Questions"
            fontWeight={700}
            fontSize={150}
            fontFamily="'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif"
            color="currentColor"
            accentColor="#ff4d00"
            letterSpacing={-0.04}
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            intro="none"
            introDuration={2}
            clickKick
            guides={false}
            sweep={false}
          />
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
