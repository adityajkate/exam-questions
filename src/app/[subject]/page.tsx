import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSubjectBySlug, getAllSubjects } from '../../data/subjects';
import { CountdownWidget } from '../../components/CountdownWidget';
import { MathText } from '../../components/MathText';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ subject: string }>;
}

export async function generateStaticParams() {
  const subjects = getAllSubjects();
  return subjects.map((s) => ({
    subject: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subject: subjectSlug } = await params;
  const subject = getSubjectBySlug(subjectSlug);
  if (!subject) return { title: 'Subject Not Found' };

  const title = `${subject.code} - ${subject.name} Past Exam Questions`;
  const description = `Prepare for Mumbai University ${subject.name} (${subject.code}) Semester VII examination. Browse ${subject.totalQuestions} curated questions (${subject.total5M} 5-markers, ${subject.total10M} 10-markers) organized across ${subject.units.length} syllabus units with exam year badges.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${subject.slug}`,
    },
    openGraph: {
      title: `${title} | Mumbai University Sem 7`,
      description,
      url: `/${subject.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function SubjectPage({ params }: PageProps) {
  const { subject: subjectSlug } = await params;
  const subject = getSubjectBySlug(subjectSlug);

  if (!subject) {
    notFound();
  }

  const subjectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: subject.name,
    courseCode: subject.code,
    description: subject.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'University of Mumbai',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Blended',
      startDate: subject.examDateISO,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subjectJsonLd) }}
      />

      <CountdownWidget />

      <div className="questions-view" style={{ display: 'block' }}>
        <Link
          href="/"
          className="back-button fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          ← Back to Subjects
        </Link>

        <div className="subject-header fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2
            style={{
              color: 'var(--color-accent)',
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              marginLeft: '-0.04em',
            }}
          >
            {subject.code}
          </h2>
          <div
            className="subject-name"
            style={{
              fontSize: '1.5rem',
              marginTop: '1rem',
              color: 'var(--color-text-secondary)',
            }}
          >
            {subject.name}
          </div>
        </div>

        {subject.units.length === 0 ? (
          <div
            className="unit fade-in-up"
            style={{
              animationDelay: '0.3s',
              textAlign: 'center',
              padding: '4rem 1rem',
            }}
          >
            <div
              style={{
                fontSize: '1.25rem',
                color: 'var(--color-text-secondary)',
                marginBottom: '0.5rem',
              }}
            >
              No questions available yet.
            </div>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--color-text-secondary)',
                opacity: 0.7,
              }}
            >
              Questions for this subject are being compiled and will be added soon.
            </p>
          </div>
        ) : (
          subject.units.map((unit, idx) => (
            <div
              key={unit.number}
              className="unit fade-in-up"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <div
                className="unit-title"
                style={{
                  color: 'var(--color-text-primary)',
                  fontSize: '2rem',
                }}
              >
                {unit.title}
              </div>

              {unit.questions5.length > 0 && (
                <div className="marks-section">
                  <div
                    className="marks-header five-marks"
                    style={{ borderRadius: '4px', padding: '0.5rem 1rem' }}
                  >
                    5 MARKS
                  </div>
                  {unit.questions5.map((q) => (
                    <div key={q.id} className="question">
                      <strong>{q.number}.</strong> <MathText content={q.cleanText} />{' '}
                      {q.years.map((yr, yIdx) => (
                        <span key={yIdx} className="year-badge">
                          {yr}
                        </span>
                      ))}
                      {q.hasDiagram && q.diagramUrl && (
                        <div className="question-diagram-wrapper">
                          <div className="diagram-header">
                            <span className="diagram-tag">GIVEN DIAGRAM</span>
                            <a
                              href={q.diagramUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="diagram-expand-btn"
                              title="Open full resolution in new tab"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                width="12"
                                height="12"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                              </svg>
                              Full resolution
                            </a>
                          </div>
                          <div className="diagram-image-container">
                            <a
                              href={q.diagramUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Click to view full image"
                            >
                              <img
                                src={q.diagramUrl}
                                alt={`Diagram for question ${q.number}`}
                                className="question-diagram-img"
                                loading="lazy"
                              />
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {unit.questions10.length > 0 && (
                <div className="marks-section">
                  <div
                    className="marks-header ten-marks"
                    style={{ borderRadius: '4px', padding: '0.5rem 1rem' }}
                  >
                    10 MARKS
                  </div>
                  {unit.questions10.map((q) => (
                    <div key={q.id} className="question">
                      <strong>{q.number}.</strong> <MathText content={q.cleanText} />{' '}
                      {q.years.map((yr, yIdx) => (
                        <span key={yIdx} className="year-badge">
                          {yr}
                        </span>
                      ))}
                      {q.hasDiagram && q.diagramUrl && (
                        <div className="question-diagram-wrapper">
                          <div className="diagram-header">
                            <span className="diagram-tag">GIVEN DIAGRAM</span>
                            <a
                              href={q.diagramUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="diagram-expand-btn"
                              title="Open full resolution in new tab"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                width="12"
                                height="12"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                              </svg>
                              Full resolution
                            </a>
                          </div>
                          <div className="diagram-image-container">
                            <a
                              href={q.diagramUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Click to view full image"
                            >
                              <img
                                src={q.diagramUrl}
                                alt={`Diagram for question ${q.number}`}
                                className="question-diagram-img"
                                loading="lazy"
                              />
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
        <div className="subject-end-banner">
          <p className="end-banner-quote">
            That’s enough, I guess... go sleep now, syllabus is an ocean anyway.
          </p>
          <Link href="/" className="end-banner-back">
            ← Back to all subjects
          </Link>
        </div>
      </div>
    </>
  );
}
