import React, { useState } from 'react'

const FAQItem = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const idStr = `faq-${id}`;

  return (
    <div className="border-b border-arctic-700/30 py-4" role="region" aria-labelledby={idStr}>
      <button
        id={idStr}
        aria-expanded={isOpen}
        className="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2 focus:ring-arctic-blue/30 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-text-primary">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-arctic-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-text-primary leading-relaxed animate-fade-in" aria-live="polite">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [query, setQuery] = useState('');

  const faqs = [
    {
      question: "What is the best time to visit for skiing?",
      answer: "The best time for skiing depends on the destination. Generally, January to March offers the best snow conditions in the Northern Hemisphere."
    },
    {
      question: "Do you offer equipment rentals?",
      answer: "Yes, all our packages include options for high-quality equipment rentals. You can also bring your own gear if you prefer."
    },
    {
      question: "Is travel insurance included?",
      answer: "Basic travel insurance is included in our premium packages. For standard packages, we strongly recommend purchasing comprehensive travel insurance separately."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We offer a full refund for cancellations made up to 30 days before the trip. Cancellations within 30 days may be subject to a fee."
    },
    {
      question: "Are the trips suitable for beginners?",
      answer: "Absolutely! We have specific packages designed for beginners that include lessons from certified instructors."
    }
  ];

  const results = faqs.filter(f => (
    f.question.toLowerCase().includes(query.toLowerCase()) || f.answer.toLowerCase().includes(query.toLowerCase())
  ));

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-text-primary">Frequently Asked Questions</h1>
        <p className="text-text-primary">Everything you need to know about your next adventure.</p>
        <div className="mt-4 w-full flex items-center justify-center">
          <input aria-label="Search FAQs" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search question or answer" className="w-full md:w-2/3 px-4 py-3 rounded-lg bg-arctic-800/40 text-text-primary placeholder:text-text-secondary focus:outline-none" />
        </div>
      </div>

      <div className="space-y-2">
        {results.length ? results.map((faq, index) => (
          <FAQItem key={index} id={index} question={faq.question} answer={faq.answer} />
        )) : (
          <div className="text-text-secondary text-center py-8">No FAQs match "{query}"</div>
        )}
      </div>
    </div>
  )
}

export default FAQ