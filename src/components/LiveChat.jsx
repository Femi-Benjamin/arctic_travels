import React, { useState } from 'react';

const LiveChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => JSON.parse(sessionStorage.getItem('live_chat') || '[]'));
  const [text, setText] = useState('');

  const send = () => {
    if (!text.trim()) return;
    const next = [...messages, { id: Date.now(), text, by: 'you', createdAt: new Date().toISOString() }];
    setMessages(next);
    sessionStorage.setItem('live_chat', JSON.stringify(next));
    setText('');
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {open && (
        <div className="w-80 bg-arctic-800/90 border border-arctic-700/30 rounded-xl shadow-2xl p-3 text-text-primary">
          <div className="flex items-center justify-between mb-2">
            <strong>Live Support</strong>
            <button onClick={()=>setOpen(false)} className="text-text-secondary">✕</button>
          </div>
          <div className="h-48 overflow-auto p-2 space-y-2 bg-arctic-800/40 rounded">
            {messages.length === 0 ? (
              <div className="text-sm text-text-secondary">Start the chat — we'll get back to you soon.</div>
            ) : (
              messages.map(m => (
                <div key={m.id} className="text-sm">
                  <div className="text-xs text-text-secondary">{new Date(m.createdAt).toLocaleTimeString()}</div>
                  <div className="bg-arctic-700/30 p-2 rounded mt-1">{m.text}</div>
                </div>
              ))
            )}
          </div>
          <div className="mt-2 flex gap-2">
            <input value={text} onChange={e=>setText(e.target.value)} placeholder="Type a message" className="flex-1 px-2 py-1 rounded bg-arctic-700/20 text-text-primary" />
            <button onClick={send} className="px-3 py-1 rounded bg-arctic-blue text-white">Send</button>
          </div>
        </div>
      )}

      {!open && (
        <button onClick={()=>setOpen(true)} className="bg-arctic-blue text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center">💬</button>
      )}
    </div>
  );
};

export default LiveChat;
