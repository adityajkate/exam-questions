'use client';

import { useEffect, useState } from 'react';
import { Watcher } from './Watcher';
import './Watcher.css';

const DEFAULT_COUNT = 367;
const API_URL =
  'https://countapi.mileshilliard.com/api/v1/hit/adityajkate_exam_questions_prod';

// Module-level guard to prevent React 19 / StrictMode double-hit in dev (< 2.5s)
let lastHitTime = 0;
let cachedLiveCount: number | null = null;

export function Footer() {
  const [visitorCount, setVisitorCount] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('exam_visitor_count_prod');
        if (saved) {
          const parsed = parseInt(saved, 10);
          if (!Number.isNaN(parsed) && parsed > 0) {
            return parsed.toLocaleString();
          }
        }
      } catch {
        // ignore
      }
    }
    return DEFAULT_COUNT.toLocaleString();
  });

  useEffect(() => {
    let isMounted = true;

    // Immediately check localStorage
    try {
      const saved = localStorage.getItem('exam_visitor_count_prod');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!Number.isNaN(parsed) && parsed > 0) {
          setVisitorCount(parsed.toLocaleString());
        }
      }
    } catch {
      // ignore
    }

    const now = Date.now();
    // If hit was called less than 2.5s ago (e.g. React StrictMode remount),
    // use /get/ instead of /hit/ to guarantee deduplication
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
        if (!Number.isNaN(val) && val > 0) {
          cachedLiveCount = val;
          try {
            localStorage.setItem('exam_visitor_count_prod', String(val));
          } catch {
            // ignore
          }
          setVisitorCount(val.toLocaleString());
        }
      })
      .catch(() => {
        if (!isMounted) return;
        if (cachedLiveCount !== null && cachedLiveCount > 0) {
          setVisitorCount(cachedLiveCount.toLocaleString());
        } else {
          try {
            const saved = localStorage.getItem('exam_visitor_count_prod');
            if (saved) {
              const parsed = parseInt(saved, 10);
              if (!Number.isNaN(parsed) && parsed > 0) {
                setVisitorCount(parsed.toLocaleString());
                return;
              }
            }
          } catch {
            // ignore
          }
          setVisitorCount(DEFAULT_COUNT.toLocaleString());
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
        <span className="counter-value" suppressHydrationWarning>
          {visitorCount}
        </span>
        <span className="counter-label">visitors</span>
      </div>
    </div>
  );
}
