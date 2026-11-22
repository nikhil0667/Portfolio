'use client';

import React, { useState } from 'react';

export default function ShareButton() {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const shareData = {
    title: 'Nikhil Khambhayta | Software Engineer',
    text: 'Check out Nikhil Khambhayta\'s Portfolio — Mobile Application Developer at Shivaay Soft & MCA Graduate (Flutter, Java, Spring Boot, Next.js)',
    url: 'https://nikhilkhambhayta.vercel.app/'
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if (err.name !== 'AbortError') {
          setIsOpen(true);
        }
      }
    } else {
      setIsOpen(true);
    }
  };

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(shareData.url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  const downloadVCard = () => {
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Nikhil Khambhayta',
      'N:Khambhayta;Nikhil;;;',
      'TITLE:Mobile Application Developer & Software Engineer',
      'ORG:Shivaay Soft',
      'EMAIL;TYPE=INTERNET,WORK:nikhilkhambhayta@gmail.com',
      'URL:https://nikhilkhambhayta.vercel.app',
      'ADR;TYPE=WORK:;;Surat;Gujarat;;India',
      'X-SOCIALPROFILE;TYPE=linkedin:https://linkedin.com/in/nikhil-khambhayta',
      'X-SOCIALPROFILE;TYPE=github:https://github.com/nikhil0667',
      'NOTE:Mobile App Developer (Flutter, Dart, Java, Spring Boot, Next.js). MCA from LDRP-ITR (GTU).',
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Nikhil_Khambhayta.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`;

  return (
    <>
      <button
        type="button"
        className="share-trigger-btn"
        onClick={handleNativeShare}
        aria-label="Share Nikhil Khambhayta Portfolio"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
        <span>Share Profile</span>
      </button>

      {isOpen && (
        <div className="share-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="share-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="share-modal-header">
              <h3>Share Nikhil’s Profile</h3>
              <button
                type="button"
                className="share-modal-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close share dialog"
              >
                ✕
              </button>
            </div>
            <p className="share-modal-desc">
              Share Nikhil Khambhayta’s portfolio with recruiters, engineering managers, or your tech network.
            </p>

            <div className="share-options-grid">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="share-option-card whatsapp"
              >
                <span className="share-icon">💬</span>
                <span>WhatsApp</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="share-option-card linkedin"
              >
                <span className="share-icon">💼</span>
                <span>LinkedIn</span>
              </a>

              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="share-option-card twitter"
              >
                <span className="share-icon">🐦</span>
                <span>X / Twitter</span>
              </a>

              <button
                type="button"
                onClick={downloadVCard}
                className="share-option-card vcard"
              >
                <span className="share-icon">📇</span>
                <span>Save Contact (vCard)</span>
              </button>
            </div>

            <div className="share-link-copy-row">
              <input
                type="text"
                readOnly
                value={shareData.url}
                className="share-link-input"
              />
              <button
                type="button"
                onClick={handleCopyLink}
                className="share-copy-btn"
              >
                {copied ? '✓ Copied' : 'Copy Link'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

