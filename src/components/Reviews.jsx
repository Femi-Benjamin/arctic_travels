import React, { useEffect, useState } from 'react';

const storageKey = (type, id) => `reviews_${type}_${id}`;

const Reviews = ({ type = 'pass', id }) => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(storageKey(type, id));
    if (stored) setReviews(JSON.parse(stored));
  }, [type, id]);

  const addReview = () => {
    if (!comment.trim()) return;
    const item = { id: Date.now(), rating, comment, createdAt: new Date().toISOString() };
    const next = [item, ...reviews];
    setReviews(next);
    localStorage.setItem(storageKey(type, id), JSON.stringify(next));
    setComment('');
    setRating(5);
  };

  return (
    <div className="mt-6">
      <h4 className="text-lg font-bold text-text-primary mb-2">Reviews</h4>
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-3">
          <select value={rating} onChange={e=>setRating(Number(e.target.value))} className="p-2 rounded-md bg-arctic-700/20 text-text-primary border border-arctic-700/20">
            <option value={5}>5 — Excellent</option>
            <option value={4}>4 — Very good</option>
            <option value={3}>3 — Good</option>
            <option value={2}>2 — Fair</option>
            <option value={1}>1 — Poor</option>
          </select>
          <input value={comment} onChange={e=>setComment(e.target.value)} placeholder="Share your thoughts" className="flex-1 px-3 py-2 rounded-md bg-arctic-700/20 text-text-primary" />
          <button onClick={addReview} className="bg-arctic-blue text-white px-4 py-2 rounded-md">Add</button>
        </div>
      </div>

      <div className="space-y-3">
        {reviews.length === 0 ? (
          <div className="text-text-secondary text-sm">No reviews yet — be the first to add one.</div>
        ) : reviews.map(r => (
          <div key={r.id} className="p-3 rounded-md bg-arctic-700/20 border border-arctic-700/20">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-arctic-ice/30 flex items-center justify-center text-sm font-bold text-text-primary">{r.rating}</div>
                <div className="text-sm text-text-primary">{r.comment}</div>
              </div>
              <div className="text-xs text-text-secondary">{new Date(r.createdAt).toLocaleDateString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
