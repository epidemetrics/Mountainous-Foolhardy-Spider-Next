import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-wrapper">
          <div className="footer-container">
            <div className="footer-top-grid">
              <div className="footer-brand-column">
                <div className="footer-logo-lockup">
                  <div className="footer-logo-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12l2 2l4-4"></path>
                      </g>
                    </svg>
                    <img
                      src="/mntds1-200h.jpg"
                      alt="image"
                      className="footer-image"
                    />
                  </div>
                  <span className="footer-brand-name">NMNYC</span>
                </div>
                <p className="footer-brand-tagline">
                  Nigeria Malaria &amp; NTD Youth Corps. Mobilizing a generation
                  to eliminate Malaria and Neglected Tropical Diseases across
                  Nigeria.
                </p>
                <div className="footer-social-cluster">
                  <a href="#" className="footer-link10">
                    <div aria-label="Facebook" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="footer-link11">
                    <div aria-label="Twitter" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 4.01c-1 .49-1.98.689-3 .99c-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4c0 0-4.182 7.433 4 11c-1.872 1.247-3.739 2.088-6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58-1.04 6.522-3.723 7.651-7.742a13.8 13.8 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="footer-link12">
                    <div aria-label="Instagram" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="footer-link13">
                    <div aria-label="LinkedIn" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M8 11v5m0-8v.01M12 16v-5m4 5v-3a2 2 0 1 0-4 0"></path>
                          <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-newsletter-column">
                <h3 className="footer-column-title">Join the Movement</h3>
                <p className="footer-newsletter-text">
                  Stay updated on our national health campaigns and youth
                  leadership opportunities.
                </p>
                <form
                  action="/subscribe"
                  method="POST"
                  data-form-id="dc7be2f9-60ca-4909-bb61-4af15eb48198"
                  className="footer-newsletter-form"
                >
                  <div className="footer-input-group">
                    <input
                      type="email"
                      id="thq_textinput_1sLt"
                      name="textinput"
                      required
                      aria-label="Email for newsletter"
                      placeholder="Email Address"
                      data-form-field-id="thq_textinput_1sLt"
                      className="footer-input"
                    />
                    <button
                      id="thq_button_qQ1S"
                      name="button"
                      type="submit"
                      aria-label="Subscribe"
                      data-form-field-id="thq_button_qQ1S"
                      className="footer-submit-btn"
                    >
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 12h14m-7-7l7 7l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer-sitemap-grid">
              <div className="footer-nav-column">
                <h3 className="footer-column-title">Organization</h3>
                <ul className="footer-link-list">
                  <li>
                    <Link href="/">
                      <a>
                        <div className="footer-link">
                          <span>Home</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>About NMNYC</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <Link href="/our-impact">
                      <a>
                        <div className="footer-link">
                          <span>Our Impact</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Leadership Team</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Governance</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-column">
                <h3 className="footer-column-title">Programs</h3>
                <ul className="footer-link-list">
                  <li>
                    <Link href="/programs">
                      <a>
                        <div className="footer-link">
                          <span>Malaria Prevention</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/programs">
                      <a>
                        <div className="footer-link">
                          <span>NTD Action Program</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/programs">
                      <a>
                        <div className="footer-link">
                          <span>Youth Health Academy</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/programs">
                      <a>
                        <div className="footer-link">
                          <span>Rural Outreach</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/programs">
                      <a>
                        <div className="footer-link">
                          <span>Health Education</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-column">
                <h3 className="footer-column-title">Community</h3>
                <ul className="footer-link-list">
                  <li>
                    <Link href="/volunteer-hub">
                      <a>
                        <div className="footer-link">
                          <span>Volunteer Hub</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/volunteer-hub">
                      <a>
                        <div className="footer-link">
                          <span>Youth Ambassadors</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>State Chapters</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Success Stories</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Partner with Us</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-column">
                <h3 className="footer-column-title">Contact Us</h3>
                <ul className="footer-contact-list">
                  <li className="footer-contact-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </g>
                    </svg>
                    <span>National Secretariat, Abuja, Nigeria</span>
                  </li>
                  <li className="footer-contact-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>+234 800 MALARIA</span>
                  </li>
                  <li className="footer-contact-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                    <span>impact@nmnyc.org.ng</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom-bar">
              <div className="footer-legal-links">
                <p className="footer-copyright">
                  © 2026 Nigeria Malaria &amp; NTD Youth Corps. All Rights
                  Reserved.
                </p>
                <div className="footer-legal-cluster">
                  <a href="#" className="footer-link29">
                    <div className="footer-legal-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#" className="footer-link30">
                    <div className="footer-legal-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                  <a href="#" className="footer-link31">
                    <div className="footer-legal-link">
                      <span>Transparency Report</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-badge-cluster">
                <div
                  title="Federal Ministry of Health Partner"
                  className="footer-badge"
                >
                  <span>FMOH Partner</span>
                </div>
                <div title="Verified NGO" className="footer-badge">
                  <span>Verified NGO</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-interactions">
(function(){
  const footerNewsletterForm = document.querySelector(".footer-newsletter-form")
  if (footerNewsletterForm) {
    footerNewsletterForm.addEventListener("submit", (e) => {
      const input = footerNewsletterForm.querySelector(".footer-input")
      if (input && input.checkValidity()) {
        const btn = footerNewsletterForm.querySelector(".footer-submit-btn")
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12l5 5L20 7"/></svg>'
        btn.style.backgroundColor = "#2ecc71"
        input.value = "Subscribed Successfully!"
        input.disabled = true
      }
    })
  }

  const footerLinks = document.querySelectorAll(".footer-link")
  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transition = "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .footer-link10 {
            display: contents;
          }
          .footer-link11 {
            display: contents;
          }
          .footer-link12 {
            display: contents;
          }
          .footer-link13 {
            display: contents;
          }
          .footer-link29 {
            display: contents;
          }
          .footer-link30 {
            display: contents;
          }
          .footer-link31 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
          @media (max-width: 991px) {
            .footer-image {
              width: 100%;
              height: 100%;
            }
          }
          @media (max-width: 767px) {
            .footer-image {
              width: 100%;
              height: 100%;
            }
          }
          @media (max-width: 479px) {
            .footer-image {
              width: 100%;
              height: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Footer
