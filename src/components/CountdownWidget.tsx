'use client';

import { useEffect, useState } from 'react';
import { subjects } from '../data/subjects';

export function CountdownWidget() {
  const [label, setLabel] = useState('DL EXAM IN');
  const [timeStr, setTimeStr] = useState('--d --h --m --s');

  useEffect(() => {
    function updateCountdown() {
      const now = Date.now();
      let nextExam = null;

      for (const subj of subjects) {
        const time = new Date(subj.examDateISO).getTime();
        if (time > now) {
          nextExam = { name: subj.code, time };
          break;
        }
      }

      if (!nextExam) {
        setLabel('ALL EXAMS');
        setTimeStr('OVER');
        return;
      }

      const distance = nextExam.time - now;
      setLabel(`${nextExam.name} EXAM IN`);

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const fmt = (n: number) => (n < 10 ? '0' + n : String(n));
      setTimeStr(`${days}d ${fmt(hours)}h ${fmt(minutes)}m ${fmt(seconds)}s`);
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="exam-countdown" aria-label={`Countdown: ${label} ${timeStr}`}>
      <div className="countdown-label">{label}</div>
      <div className="countdown-time">{timeStr}</div>
    </div>
  );
}
