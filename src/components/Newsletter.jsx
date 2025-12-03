import React, { useState } from 'react';

const Newsletter = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [saved, setSaved] = useState(false);

  const subscribe = () => {
    if (!email.includes('@')) return;
    const list = JSON.parse(localStorage.getItem('newsletter_emails') || '[]');
    if (!list.includes(email)) list.unshift(email);
    localStorage.setItem('newsletter_emails', JSON.stringify(list.slice(0, 100)));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
    setEmail('');
  };

  return (
    <div className={`flex gap-3 items-center ${className}`}>
      <input aria-label="newsletter email" placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)}
        className="px-3 py-2 rounded-lg bg-arctic-800/40 text-text-primary placeholder:text-text-secondary focus:outline-none flex-1" />
      <button onClick={subscribe} className="bg-arctic-blue text-white px-4 py-2 rounded-lg">Subscribe</button>
      {saved && <span className="text-sm text-arctic-ice ml-2">Saved ✓</span>}
    </div>
  );
};

export default Newsletter;
