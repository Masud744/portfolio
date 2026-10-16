import React from "react";
import Github from "./GithubIcon";
import { Mail, MessageCircle } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { playHover, playClick } from "../utils/sound";

export default function SideRails() {
  return (
    <>
      {/* Left Social Rail */}
      <aside className="fixed-social-rail" aria-label="Social Links Rail">
        <ul className="rail-list">
          <li>
            <a
              href="https://github.com/Masud744"
              target="_blank"
              rel="noopener noreferrer"
              className="rail-link"
              title="GitHub Profile"
              onMouseEnter={playHover}
              onClick={playClick}
            >
              <Github size={18} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shahriar-alom-masud"
              target="_blank"
              rel="noopener noreferrer"
              className="rail-link"
              title="LinkedIn Profile"
              onMouseEnter={playHover}
              onClick={playClick}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/8801740071118"
              target="_blank"
              rel="noopener noreferrer"
              className="rail-link"
              title="WhatsApp Contact"
              onMouseEnter={playHover}
              onClick={playClick}
            >
              <MessageCircle size={18} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/share/17eXZPb3cR/"
              target="_blank"
              rel="noopener noreferrer"
              className="rail-link"
              title="Facebook Profile"
              onMouseEnter={playHover}
              onClick={playClick}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${personalInfo.email}`}
              className="rail-link"
              title="Direct Email"
              onMouseEnter={playHover}
              onClick={playClick}
            >
              <Mail size={18} />
            </a>
          </li>
        </ul>
        <div className="rail-line" />
      </aside>

      {/* Right Email Rail */}
      <aside className="fixed-email-rail" aria-label="Email Rail">
        <a
          href={`mailto:${personalInfo.email}`}
          className="rail-email-text"
          onMouseEnter={playHover}
          onClick={playClick}
        >
          {personalInfo.email}
        </a>
        <div className="rail-line" />
      </aside>
    </>
  );
}
