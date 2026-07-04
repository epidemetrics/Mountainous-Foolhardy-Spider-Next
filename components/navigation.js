import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav className="navigation-wrapper">
          <div className="navigation-container">
            <div className="navigation-links-left navigation-links">
              <a href="Homepage" className="navigation-link10">
                <div className="navigation-link">
                  <span>Home</span>
                </div>
              </a>
              <div className="navigation-dropdown">
                <button className="navigation-link navigation-dropdown-trigger">
                  <span>
                    {' '}
                    Programs
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    className="navigation-thq-navigation-icon-sm-elm"
                  >
                    <path
                      d="m6 9l6 6l6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div className="navigation-dropdown-content">
                  <Link href="/programs">
                    <a>
                      <div className="navigation-dropdown-link">
                        <span>Malaria Initiative</span>
                      </div>
                    </a>
                  </Link>
                  <Link href="/programs">
                    <a>
                      <div className="navigation-dropdown-link">
                        <span>NTD Action</span>
                      </div>
                    </a>
                  </Link>
                  <Link href="/programs">
                    <a>
                      <div className="navigation-dropdown-link">
                        <span>Leadership Academy</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/">
              <a className="navigation-link14">
                <div className="navigation-logo-container">
                  <div className="navigation-logo-shield">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="navigation-logo-text">
                    <span className="navigation-brand-main">NMNYC</span>
                    <span className="navigation-brand-sub">Youth Corps</span>
                  </div>
                </div>
              </a>
            </Link>
            <div className="navigation-links-right navigation-links">
              <Link href="/our-impact">
                <a className="navigation-link15">
                  <div className="navigation-link">
                    <span>Our Impact</span>
                  </div>
                </a>
              </Link>
              <Link href="/volunteer-hub">
                <a className="navigation-link16">
                  <div className="navigation-link">
                    <span>Volunteer</span>
                  </div>
                </a>
              </Link>
              <a href="Donate" className="navigation-link17">
                <div className="navigation-cta btn btn-primary btn-sm">
                  <span>Donate Now</span>
                </div>
              </a>
            </div>
            <button
              id="nav-toggle"
              aria-label="Toggle navigation"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                className="navigation-icon-menu"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <div id="mobile-overlay" className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <Link href="/">
              <a className="navigation-link18">
                <div className="navigation-logo-container">
                  <div className="navigation-logo-shield">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="navigation-brand-main">NMNYC</span>
                </div>
              </a>
            </Link>
            <button
              id="nav-close"
              aria-label="Close navigation"
              className="navigation-mobile-close"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="m2 2l20 20M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71M9.309 3.652A12.3 12.3 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a10 10 0 0 1-.08 1.264"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-content">
            <a href="Homepage" className="navigation-link19">
              <div className="navigation-mobile-link">
                <span>Home</span>
              </div>
            </a>
            <Link href="/our-impact">
              <a className="navigation-link20">
                <div className="navigation-mobile-link">
                  <span>Our Impact</span>
                </div>
              </a>
            </Link>
            <Link href="/programs">
              <a className="navigation-link21">
                <div className="navigation-mobile-link">
                  <span>Programs</span>
                </div>
              </a>
            </Link>
            <Link href="/volunteer-hub">
              <a className="navigation-link22">
                <div className="navigation-mobile-link">
                  <span>Volunteer Hub</span>
                </div>
              </a>
            </Link>
            <a href="Donate" className="navigation-link23">
              <div className="navigation-mobile-link">
                <span>Donate</span>
              </div>
            </a>
            <div className="navigation-mobile-footer">
              <a href="Donate">
                <div className="btn btn-primary btn-lg">
                  <span>Support Our Mission</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const toggleBtn = document.getElementById("nav-toggle")
  const closeBtn = document.getElementById("nav-close")
  const overlay = document.getElementById("mobile-overlay")
  const body = document.body

  const openMenu = () => {
    overlay.classList.add("is-active")
    toggleBtn.setAttribute("aria-expanded", "true")
    body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    overlay.classList.remove("is-active")
    toggleBtn.setAttribute("aria-expanded", "false")
    body.style.overflow = ""
  }

  toggleBtn.addEventListener("click", openMenu)
  closeBtn.addEventListener("click", closeMenu)

  // Close menu on link clicks
  const mobileLinks = overlay.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  // Scroll visibility logic
  let lastScroll = 0
  const navWrapper = document.querySelector(".navigation-wrapper")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      navWrapper.style.transform = "translateY(0)"
      navWrapper.style.boxShadow = "none"
      return
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down
      navWrapper.style.transform = "translateY(-100%)"
    } else if (currentScroll < lastScroll) {
      // Scrolling up
      navWrapper.style.transform = "translateY(0)"
      navWrapper.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"
    }

    lastScroll = currentScroll
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-link10 {
            display: contents;
          }
          .navigation-thq-navigation-icon-sm-elm {
            width: 14px;
            height: 14px;
            transition: transform 0.3s ease;
          }
          .navigation-link14 {
            display: contents;
          }
          .navigation-link15 {
            display: contents;
          }
          .navigation-link16 {
            display: contents;
          }
          .navigation-link17 {
            display: contents;
          }
          .navigation-link18 {
            display: contents;
          }
          .navigation-link19 {
            display: contents;
          }
          .navigation-link20 {
            display: contents;
          }
          .navigation-link21 {
            display: contents;
          }
          .navigation-link22 {
            display: contents;
          }
          .navigation-link23 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
