'use client';

import { useEffect, useState } from 'react';

const target = new Date('2026-10-31T00:00:00-03:00').getTime();
const initial = { days: 0, hours: 0, minutes: 0, seconds: 0 };
function getTimeLeft() { const difference = Math.max(0, target - Date.now()); return { days: Math.floor(difference / 86_400_000), hours: Math.floor((difference / 3_600_000) % 24), minutes: Math.floor((difference / 60_000) % 60), seconds: Math.floor((difference / 1_000) % 60) }; }
export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(initial);
  useEffect(() => { const update = () => setTimeLeft(getTimeLeft()); update(); const timer = window.setInterval(update, 1000); return () => window.clearInterval(timer); }, []);
  return <div className="countdown" aria-label="Contagem regressiva para 31 de outubro de 2026">{Object.entries(timeLeft).map(([label, value]) => <div key={label}><strong>{String(value).padStart(2, '0')}</strong><span>{label === 'minutes' ? 'MIN' : label === 'seconds' ? 'SEG' : label.toUpperCase()}</span></div>)}</div>;
}
