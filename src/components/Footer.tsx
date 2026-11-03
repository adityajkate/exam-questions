'use client';

import { useEffect, useRef, useState } from 'react';
import { Watcher } from './Watcher';
import './Watcher.css';

const BASE_OFFSET = 0;
const API_URL =
  'https://countapi.mileshilliard.com/api/v1/hit/adityajkate_exam_questions_prod';

// Module-level guard to prevent React 19 / StrictMode double-hit in dev (< 2.5s)
let lastHitTime = 0;
let cachedLiveCount: number | null = null;

export function Footer() {
  const [visitorCount, setVisitorCount] = useState<string>('0');
  const hasMounted = useRef(false);

  useEffect(() => {
    // Guard within component lifecycle
    if (hasMounted.current) return;
    hasMounted.current = true;

    let isMounted = true;

    // Clear legacy session lock from earlier tests
    try {
      sessionStorage.removeItem('has_counted_visit_prod');
    } catch {
      // ignore
    }

    // Read cached count from localStorage for instant display
    try {
      const saved = localStorage.getItem('exam_visitor_count_prod');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!Number.isNaN(parsed) && parsed >= 0) {
          setVisitorCount(parsed.toLocaleString());
        }
      }
    } catch {
      // ignore
    }

    const now = Date.now();
    // If hit was called less than 2.5s ago (e.g. React StrictMode double-mount),
    // use /get/ instead of /hit/ to guarantee exactly +1 count
    const isRapidRemount = now - lastHitTime < 2500;
    const requestUrl = isRapidRemount
      ? 'https://countapi.mileshilliard.com/api/v1/get/adityajkate_exam_questions_prod'
      : API_URL;

    if (!isRapidRemount) {
      lastHitTime = now;
    }

    fetch(requestUrl)
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
          cachedLiveCount = total;
          try {
            localStorage.setItem('exam_visitor_count_prod', String(total));
          } catch {
            // ignore storage errors
          }
          setVisitorCount(total.toLocaleString());
        }
      })
      .catch(() => {
        if (!isMounted) return;
        if (cachedLiveCount !== null) {
          setVisitorCount(cachedLiveCount.toLocaleString());
        }
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
        <span className="footer-credit">
          made by Aditya with{' '}
          <span className="love-text">
            love
            <svg
              className="love-heart-svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>
        </span>
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
