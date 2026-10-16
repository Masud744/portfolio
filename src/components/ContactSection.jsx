import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Mail, Check, Copy, ArrowUpRight, Send } from "lucide-react";
import Github from "./GithubIcon";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulating quick transmission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-description">
            Available for embedded firmware engineering, edge AI research collaborations, and commercial IoT development.
          </p>
        </header>

        <div className="contact-layout">
          {/* Direct Communication Channels */}
          <div className="contact-info-block">
            <div className="contact-direct-card">
              <div>
                <span className="meta-label">Direct Email</span>
                <div className="email-copy-row" style={{ marginTop: "6px" }}>
                  <span className="email-val">{personalInfo.email}</span>
                  <button
                    className="btn-copy-action"
                    onClick={handleCopyEmail}
                    type="button"
                    title="Copy email address"
                  >
                    {copied ? (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "var(--status-green)" }}>
                        <Check size={12} /> Copied
                      </span>
                    ) : (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                        <Copy size={12} /> Copy
                      </span>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <span className="meta-label">Location &amp; Working Hours</span>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                  Dhaka, Bangladesh (UTC+6) &bull; Responsive within 24 hours.
                </p>
              </div>

              <div>
                <span className="meta-label">External Profiles</span>
                <div style={{ display: "flex", gap: "10px", marginTop: "8px", flexWrap: "wrap" }}>
                  <a
                    href="https://github.com/Masud744"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-action"
                  >
                    <Github size={13} />
                    <span>GitHub</span>
                    <ArrowUpRight size={11} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/shahriar-alom-masud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-action"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight size={11} />
                  </a>

                  <a
                    href="https://wa.me/8801740071118"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-action"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Message Dispatch Form */}
          <form className="contact-form" onSubmit={handleFormSubmit}>
            {submitted && (
              <div className="form-status-alert">
                Message recorded successfully. Thank you for reaching out.
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="form-name" className="form-label">Your Name</label>
                <input
                  id="form-name"
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. Alex Mercer"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-email" className="form-label">Email Address</label>
                <input
                  id="form-email"
                  type="email"
                  required
                  className="form-input"
                  placeholder="e.g. alex@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="form-msg" className="form-label">Message</label>
              <textarea
                id="form-msg"
                required
                className="form-textarea"
                placeholder="Outline your project scope, hardware target, or inquiry..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{ justifyContent: "center", marginTop: "4px" }}
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              <Send size={13} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
