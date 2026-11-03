'use client';

import { useEffect, useRef, useState } from 'react';
import { Watcher } from './Watcher';
import './Watcher.css';

const BASE_OFFSET = 0;

export function Footer() {
  const [visitorCount, setVisitorCount] = useState<string>('0');
  const hasRequested = useRef(false);

  useEffect(() => {
    // Guard against React 19 / StrictMode double-mounting
    if (hasRequested.current) return;
    hasRequested.current = true;

    let isMounted = true;

    // Check if this visitor was already counted during this browser session
    let isNewSession = true;
    try {
      if (sessionStorage.getItem('has_counted_visit_prod')) {
        isNewSession = false;
      }
    } catch {
      // ignore sessionStorage access errors
    }

    // Call /hit/ to increment on first visit in session, or /get/ to read without incrementing on refresh
    const endpoint = isNewSession ? 'hit' : 'get';
    const apiUrl = `https://countapi.mileshilliard.com/api/v1/${endpoint}/adityajkate_exam_questions_prod`;

    let cachedCount = BASE_OFFSET;
    try {
      const saved = localStorage.getItem('exam_visitor_count_prod');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!Number.isNaN(parsed)) {
          cachedCount = parsed;
          setVisitorCount(cachedCount.toLocaleString());
        }
      }
    } catch {
      // ignore localStorage errors
    }

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Counter API returned status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!isMounted) return;
        const val = Number(data?.value ?? data?.count);
        if (!Number.isNaN(val) && val >= 0) {
          const total = val + BASE_OFFSET;
          try {
            localStorage.setItem('exam_visitor_count_prod', String(total));
            if (isNewSession) {
              sessionStorage.setItem('has_counted_visit_prod', 'true');
            }
          } catch {
            // ignore storage errors
          }
          setVisitorCount(total.toLocaleString());
        }
      })
      .catch(() => {
        if (!isMounted) return;
        const currentCount = cachedCount || (isNewSession ? 1 : 0);
        setVisitorCount(currentCount.toLocaleString());
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="minimal-footer">
      <div style={{ marginBottom: '0.65rem' }}>
        <Watcher
          follow={60}
          bounce={85}
          size={50}
          shape="Ball"
          eyes="Slant"
        />
      </div>
      <a
        href="https://github.com/adityajkate/exam-questions"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub Repository"
      >
        <span className="footer-credit">made by Aditya :)</span>
      </a>
      <div className="visitor-counter">
        <svg
          className="counter-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
            fill="currentColor"
          />
        </svg>
        <span className="counter-value">{visitorCount}</span>
        <span className="counter-label">visitors</span>
      </div>
    </div>
  );
}
