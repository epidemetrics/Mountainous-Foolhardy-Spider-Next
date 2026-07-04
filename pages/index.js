import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>
            Nigeria Malaria & NTD Youth Corps | Youth Action for Health Equity
          </title>
          <meta
            name="description"
            content="Youth-led organization combating malaria and NTDs in Nigeria through advocacy, community outreach, volunteerism, and public health action."
          />
          <meta
            property="og:title"
            content="Nigeria Malaria &amp; NTD Youth Corps | Youth Action for Health Equity"
          />
          <meta
            property="og:description"
            content="Youth-led organization combating malaria and NTDs in Nigeria through advocacy, community outreach, volunteerism, and public health action."
          />
          <link
            rel="canonical"
            href="https://mountainous-foolhardy-spider-9r64uu.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://mountainous-foolhardy-spider-9r64uu.teleporthq.site/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-impact">
          <div className="hero-video-wrapper">
            <video
              src="https://videos.pexels.com/video-files/19676254/19676254-hd_1280_720_24fps.mp4"
              loop
              muted
              poster="https://images.pexels.com/videos/19676254/pictures/preview-0.jpeg"
              autoPlay="true"
              playsInline
            ></video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title home-hero-title">
              Mobilizing Youth to Eliminate Malaria &amp; NTDs
            </h1>
            <p className="hero-subtitle">
              Empowering the next generation of Nigerian health leaders to build
              disease-free communities through advocacy, outreach, and
              innovation.
            </p>
            <div className="hero-actions">
              <a href="#volunteer" className="home-link10">
                <div className="btn btn-primary btn-lg">
                  <span>Volunteer Now</span>
                </div>
              </a>
              <a href="#donate" className="home-link11">
                <div className="btn-secondary btn btn-lg">
                  <span>Support the Mission</span>
                </div>
              </a>
              <a href="#programs" className="home-link12">
                <div className="btn-outline btn btn-lg">
                  <span>Explore Programs</span>
                </div>
              </a>
            </div>
            <div className="hero-stats-glass">
              <div className="hero-stat-item">
                <span data-target="50000" className="stat-number">
                  0
                </span>
                <span className="stat-label">Volunteers Mobilized</span>
              </div>
              <div className="hero-stat-item">
                <span data-target="36" className="stat-number">
                  0
                </span>
                <span className="stat-label">States Covered</span>
              </div>
              <div className="hero-stat-item">
                <span data-target="120000" className="stat-number">
                  0
                </span>
                <span className="stat-label">Bed Nets Distributed</span>
              </div>
              <div className="hero-stat-item">
                <span data-target="250000" className="stat-number">
                  0
                </span>
                <span className="stat-label">Households Reached</span>
              </div>
            </div>
          </div>
        </section>
        <section className="flagship-teaser">
          <div className="flagship-bg">
            <img
              alt="Youth Health Advocacy"
              src="https://images.pexels.com/photos/29232960/pexels-photo-29232960.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            />
            <div className="flagship-scrim"></div>
          </div>
          <div className="flagship-container">
            <div className="flagship-header">
              <h2 className="section-title">
                A Generation Against Malaria &amp; NTDs
              </h2>
              <blockquote className="flagship-quote">
                <span>
                  &quot;The fight against Malaria and Neglected Tropical
                  Diseases will be won when every young Nigerian becomes a
                  champion for healthier communities.&quot;
                </span>
              </blockquote>
            </div>
            <div className="flagship-grid">
              <div className="youth-story-card">
                <img
                  alt="Success Story 1"
                  src="https://images.pexels.com/photos/32562419/pexels-photo-32562419.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="story-content">
                  <span className="story-tag">Advocacy</span>
                  <h3>Ismail&apos;s Impact in Kano</h3>
                  <p>
                    Leading community education sessions that reduced local
                    malaria cases by 40%.
                  </p>
                </div>
              </div>
              <div className="youth-story-card">
                <img
                  alt="Success Story 2"
                  src="https://images.pexels.com/photos/37285156/pexels-photo-37285156.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="story-content">
                  <span className="story-tag">Outreach</span>
                  <h3>Amina&apos;s Rural Mission</h3>
                  <p>
                    Distributed 5,000+ bed nets to hard-to-reach riverine
                    communities in the Delta.
                  </p>
                </div>
              </div>
              <div className="youth-story-card">
                <img
                  alt="Success Story 3"
                  src="https://images.pexels.com/photos/8248433/pexels-photo-8248433.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="story-content">
                  <span className="story-tag">Research</span>
                  <h3>Chisom&apos;s NTD Data</h3>
                  <p>
                    Mapping neglected tropical diseases to optimize government
                    intervention strategies.
                  </p>
                </div>
              </div>
            </div>
            <div className="flagship-map-preview">
              <div className="map-text">
                <h3>National Impact Map</h3>
                <p>
                  Explore our real-time intervention data across all 36 states
                  and FCT.
                </p>
                <a href="#impact">
                  <div className="btn btn-link">
                    <span>View Full Impact Dashboard</span>
                  </div>
                </a>
              </div>
              <div className="map-visual">
                <svg viewBox="0 0 200 150" className="mini-nigeria-map">
                  <path
                    d="M40,20 L160,20 L180,80 L140,130 L60,130 L20,80 Z"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                  ></path>
                  <circle
                    r="5"
                    cx="100"
                    cy="75"
                    fill="var(--color-secondary)"
                    className="map-pulse"
                  ></circle>
                  <circle
                    r="3"
                    cx="60"
                    cy="50"
                    fill="var(--color-secondary)"
                  ></circle>
                  <circle
                    r="3"
                    cx="140"
                    cy="90"
                    fill="var(--color-secondary)"
                  ></circle>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="mission-snapshot">
          <div className="mission-container">
            <div className="mission-card">
              <div className="mission-icon-wrapper">
                <svg
                  fill="none"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  stroke="var(--color-primary)"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p className="section-content">
                To mobilize, train, and deploy Nigerian youth as frontline
                catalysts for the total elimination of Malaria and Neglected
                Tropical Diseases.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon-wrapper">
                <svg
                  fill="none"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  stroke="var(--color-primary)"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p className="section-content">
                A healthy, resilient, and disease-free Nigeria where every
                citizen thrives, led by the energy and innovation of its youth.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon-wrapper">
                <svg
                  fill="none"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  stroke="var(--color-primary)"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle r="4" cx="9" cy="7"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Core Values</h3>
              <p className="section-content">
                Integrity, Youth Leadership, Community Empowerment, Innovation,
                and Public Health Excellence in all we do.
              </p>
            </div>
          </div>
          <div className="mission-footer">
            <p>Driven by accountability and national impact.</p>
            <a href="#about">
              <div className="btn btn-link">
                <span>Learn about our Governance &amp; Leadership</span>
              </div>
            </a>
          </div>
        </section>
        <section id="programs" className="programs-access">
          <div className="programs-container">
            <h2 className="section-title">Our Strategic Programs</h2>
            <div className="programs-grid">
              <div className="program-item">
                <div className="program-image">
                  <img
                    alt="Malaria Prevention"
                    src="https://images.pexels.com/photos/11892319/pexels-photo-11892319.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="program-info">
                  <h3>Malaria Prevention Initiative</h3>
                  <p>
                    Mass bed net distribution, indoor residual spraying
                    advocacy, and community-led drainage clearing projects.
                  </p>
                  <a href="#malaria-program" className="home-link15">
                    <div className="btn-outline btn btn-sm">
                      <span>Learn More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="program-item">
                <div className="program-image">
                  <img
                    alt="NTD Action"
                    src="https://images.pexels.com/photos/33127835/pexels-photo-33127835.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="program-info">
                  <h3>NTD Action Program</h3>
                  <p>
                    Targeting Elephantiasis, River Blindness, and Trachoma
                    through mass drug administration and hygiene education.
                  </p>
                  <a href="#ntd-program" className="home-link16">
                    <div className="btn-outline btn btn-sm">
                      <span>Learn More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="program-item">
                <div className="program-image">
                  <img
                    alt="Leadership Academy"
                    src="https://images.pexels.com/photos/20177473/pexels-photo-20177473.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="program-info">
                  <h3>Youth Health Leadership Academy</h3>
                  <p>
                    Training the next generation of global health diplomats,
                    researchers, and public health policy advocates.
                  </p>
                  <a href="#academy" className="home-link17">
                    <div className="btn-outline btn btn-sm">
                      <span>Learn More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="program-item">
                <div className="program-image">
                  <img
                    alt="Community Outreach"
                    src="https://images.pexels.com/photos/37285159/pexels-photo-37285159.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="program-info">
                  <h3>Community Health Outreach</h3>
                  <p>
                    Mobile clinics and health education units reaching
                    Nigeria&apos;s most vulnerable last-mile populations.
                  </p>
                  <a href="#outreach" className="home-link18">
                    <div className="btn-outline btn btn-sm">
                      <span>Learn More</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="volunteer" className="volunteer-cta">
          <div className="volunteer-split">
            <div className="volunteer-info-panel">
              <h2 className="section-title">Join the Movement</h2>
              <p className="section-content">
                Become a champion for a healthier Nigeria. Our volunteers gain
                access to specialized training, leadership roles, and national
                health networks.
              </p>
              <ul className="volunteer-benefits">
                <li>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="var(--color-secondary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Certified Public Health Training</span>
                </li>
                <li>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="var(--color-secondary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>State &amp; National Leadership Roles</span>
                </li>
                <li>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="var(--color-secondary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Community Impact Recognition</span>
                </li>
              </ul>
              <div className="state-chapters">
                <span className="chapter-label">Active Chapters:</span>
                <div className="chapter-badges">
                  <span className="badge">Lagos</span>
                  <span className="badge">Kano</span>
                  <span className="badge">Enugu</span>
                  <span className="badge">Abuja</span>
                  <span className="badge">Rivers</span>
                  <span className="badge">+31 More</span>
                </div>
              </div>
            </div>
            <div className="volunteer-form-panel">
              <div className="form-glass">
                <h3>Start Your Journey</h3>
                <form
                  action="/volunteer-signup"
                  method="POST"
                  data-form-id="8e03529e-05a4-4e8d-902a-ec31b4c3bc60"
                  className="signup-form"
                >
                  <div className="form-group">
                    <label htmlFor="v-email">Email Address</label>
                    <input
                      type="email"
                      id="v-email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      data-form-field-id="v-email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="v-state">State of Residence</label>
                    <select
                      id="v-state"
                      name="state"
                      required
                      data-form-field-id="v-state"
                    >
                      <option value="true">Select State</option>
                      <option value="abuja">FCT Abuja</option>
                      <option value="lagos">Lagos</option>
                      <option value="kano">Kano</option>
                      <option value="others">Other States</option>
                    </select>
                  </div>
                  <button
                    id="thq_button_AFQl"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_AFQl"
                    className="btn btn-accent btn-lg"
                  >
                    Join the Corps
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="impact" className="impact-snapshot">
          <div className="impact-wrapper">
            <div className="impact-visual-panel">
              <div className="interactive-map-container">
                <img
                  alt="Community Health"
                  src="https://images.pexels.com/photos/14500355/pexels-photo-14500355.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="map-bg-img"
                />
                <div className="map-overlay-content">
                  <div className="home-thq-map-marker-elm1 map-marker"></div>
                  <div className="home-thq-map-marker-elm2 map-marker"></div>
                  <div className="home-thq-map-marker-elm3 map-marker"></div>
                  <div className="map-tooltip">
                    <strong>Active Intervention</strong>
                    <span>Kwara State: 15,000 households reached</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="impact-stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div data-target="1500" className="stat-value">
                  <span>0</span>
                </div>
                <div className="stat-name">
                  <span>Communities Reached</span>
                </div>
                <a href="#data" className="home-link19">
                  <div className="stat-source">
                    <span>Source: 2025 Annual Report</span>
                  </div>
                </a>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                  </svg>
                </div>
                <div data-target="36" className="stat-value">
                  <span>0</span>
                </div>
                <div className="stat-name">
                  <span>States Covered</span>
                </div>
                <a href="#data" className="home-link20">
                  <div className="stat-source">
                    <span>Verified Operations</span>
                  </div>
                </a>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div data-target="120" className="stat-value">
                  <span>0</span>
                </div>
                <div className="stat-name">
                  <span>NTD Interventions (k)</span>
                </div>
                <a href="#data" className="home-link21">
                  <div className="stat-source">
                    <span>Health Ministry Data</span>
                  </div>
                </a>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <rect
                      x="3"
                      y="3"
                      rx="2"
                      ry="2"
                      width="18"
                      height="18"
                    ></rect>
                    <line x1="3" x2="21" y1="9" y2="9"></line>
                    <line x1="9" x2="9" y1="21" y2="9"></line>
                  </svg>
                </div>
                <div data-target="500" className="stat-value">
                  <span>0</span>
                </div>
                <div className="stat-name">
                  <span>Campaigns Delivered</span>
                </div>
                <a href="#data" className="home-link22">
                  <div className="stat-source">
                    <span>Engagement Metrics</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="partner-credibility">
          <div className="partner-scroller-wrapper">
            <div className="partner-track">
              <div className="partner-logo">
                <span>Federal Ministry of Health</span>
              </div>
              <div className="partner-logo">
                <span>WHO Nigeria</span>
              </div>
              <div className="partner-logo">
                <span>UNICEF</span>
              </div>
              <div className="partner-logo">
                <span>Global Fund</span>
              </div>
              <div className="partner-logo">
                <span>USAID</span>
              </div>
              <div className="partner-logo">
                <span>RBM Partnership to end Malaria</span>
              </div>
              <div className="partner-logo">
                <span>Federal Ministry of Health</span>
              </div>
              <div className="partner-logo">
                <span>African Leaders Malaria Alliance (ALMA)</span>
              </div>
              <div className="partner-logo">
                <span>UNICEF</span>
              </div>
              <div className="partner-logo">
                <span>Global Fund</span>
              </div>
            </div>
          </div>
          <div className="partner-blurb">
            <p>
              Our work is powered by strategic partnerships with leading
              government agencies, international development organizations, and
              academic institutions worldwide.
            </p>
          </div>
        </section>
        <section className="news-preview">
          <div className="news-header">
            <h2 className="section-title">Latest from the Field</h2>
            <div className="news-nav">
              <a href="#news">
                <div className="btn-outline btn btn-sm">
                  <span>View All News</span>
                </div>
              </a>
            </div>
          </div>
          <div className="news-rail">
            <article className="news-card">
              <div className="news-image">
                <img
                  alt="Event 1"
                  src="https://images.pexels.com/photos/6472412/pexels-photo-6472412.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="news-body">
                <time datetime="2025-05-15">May 15, 2025</time>
                <h3>
                  National Youth Health Summit: Mobilizing 10k New Champions
                </h3>
                <p>
                  Leaders gathered in Abuja to strategize on the 2026
                  elimination goals for Malaria.
                </p>
                <a href="#article1" className="home-link24">
                  <div className="btn-link">
                    <span>Read Full Story</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="news-card">
              <div className="news-image">
                <img
                  alt="Event 2"
                  src="https://images.pexels.com/photos/3995736/pexels-photo-3995736.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="news-body">
                <time datetime="2025-04-22">April 22, 2025</time>
                <h3>
                  NTD Awareness Week: Reaching Rural Communities in Sokoto
                </h3>
                <p>
                  Our mobile units successfully treated 5,000 cases of Neglected
                  Tropical Diseases.
                </p>
                <a href="#article2" className="home-link25">
                  <div className="btn-link">
                    <span>Read Full Story</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="news-card">
              <div className="news-image">
                <img
                  alt="Event 3"
                  src="https://images.pexels.com/photos/9190883/pexels-photo-9190883.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="news-body">
                <time datetime="2025-03-10">March 10, 2025</time>
                <h3>Innovation Grant: Scaling Community Surveillance Tech</h3>
                <p>
                  NMNYC receives funding to pilot AI-driven mosquito breeding
                  site mapping.
                </p>
                <a href="#article3" className="home-link26">
                  <div className="btn-link">
                    <span>Read Full Story</span>
                  </div>
                </a>
              </div>
            </article>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<script defer data-name="nmnyc-animations">
(function(){
  // Animate stats on scroll
  const animateCounters = () => {
    const counters = document.querySelectorAll(".stat-number, .stat-value")
    const speed = 200

    const observerOptions = {
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target
          const updateCount = () => {
            const target = parseInt(counter.getAttribute("data-target"))
            const count = parseInt(counter.innerText)
            const inc = target / speed

            if (count < target) {
              counter.innerText = Math.ceil(count + inc)
              setTimeout(updateCount, 1)
            } else {
              counter.innerText = target.toLocaleString() + (target > 100 ? "+" : "")
            }
          }
          updateCount()
          observer.unobserve(counter)
        }
      })
    }, observerOptions)

    counters.forEach((counter) => observer.observe(counter))
  }

  // Interactive Map Tooltip Logic
  const setupMapInteractions = () => {
    const markers = document.querySelectorAll(".map-marker")
    const tooltip = document.querySelector(".map-tooltip")

    const tooltipData = [
      { title: "Kwara Outreach", desc: "15,000 households reached" },
      { title: "Kano Prevention", desc: "8,000 bed nets distributed" },
      { title: "Delta NTD Action", desc: "500 rural treatments" },
    ]

    markers.forEach((marker, index) => {
      marker.addEventListener("mouseenter", (e) => {
        const data = tooltipData[index % tooltipData.length]
        tooltip.querySelector("strong").innerText = data.title
        tooltip.querySelector("span").innerText = data.desc
        tooltip.style.display = "block"
        tooltip.style.top = e.target.offsetTop - 60 + "px"
        tooltip.style.left = e.target.offsetLeft - 50 + "px"
      })

      marker.addEventListener("mouseleave", () => {
        tooltip.style.display = "none"
      })
    })
  }

  // Initialize
  animateCounters()
  setupMapInteractions()

  // Parallax effect for flagship background
  window.addEventListener("scroll", () => {
    const flagshipBg = document.querySelector(".flagship-bg img")
    if (flagshipBg) {
      const scrollPos = window.pageYOffset
      const parentOffset = flagshipBg.parentElement.parentElement.offsetTop
      if (scrollPos > parentOffset - window.innerHeight) {
        const yPos = (scrollPos - parentOffset) * 0.2
        flagshipBg.style.transform = \`translateY(\${yPos}px)\`
      }
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<style>
        @keyframes pulse {0% {r: 5;
opacity: 1;}
100% {r: 15;
opacity: 0;}}@keyframes scroll {0% {transform: translateX(0);}
100% {transform: translateX(-50%);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-link10 {
            display: contents;
          }
          .home-link11 {
            display: contents;
          }
          .home-link12 {
            display: contents;
          }
          .home-link15 {
            display: contents;
          }
          .home-link16 {
            display: contents;
          }
          .home-link17 {
            display: contents;
          }
          .home-link18 {
            display: contents;
          }
          .home-thq-map-marker-elm1 {
            top: 20%;
            left: 30%;
          }
          .home-thq-map-marker-elm2 {
            top: 50%;
            left: 70%;
          }
          .home-thq-map-marker-elm3 {
            top: 80%;
            left: 40%;
          }
          .home-link19 {
            display: contents;
          }
          .home-link20 {
            display: contents;
          }
          .home-link21 {
            display: contents;
          }
          .home-link22 {
            display: contents;
          }
          .home-link24 {
            display: contents;
          }
          .home-link25 {
            display: contents;
          }
          .home-link26 {
            display: contents;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
