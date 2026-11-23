'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="contact-form" action="https://formspree.io/f/mvgrkgay" method="POST" onSubmit={handleSubmit}>
      <h3>Send a message</h3>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="form-honeypot" />
      <input type="hidden" name="_subject" value="Portfolio inquiry for Nikhil Khambhayta" />
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required placeholder="Your name" maxLength={200} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" name="_replyto" type="email" autoComplete="email" required placeholder="you@example.com" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell me about your project or opportunity"
          maxLength={10000}
        />
      </div>
      <button className="button" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      <p className="form-note" aria-live="polite" role={status === 'error' ? 'alert' : 'status'}>
        {status === 'success' && 'Thanks for reaching out. Your message has been sent.'}
        {status === 'error' && 'Your message could not be sent. Please try again or email me directly.'}
        {status === 'idle' && 'Your message will be sent securely through Formspree.'}
        {status === 'sending' && 'Sending your message…'}
      </p>
    </form>
  );
}
