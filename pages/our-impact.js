import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const OurImpact = (props) => {
  return (
    <>
      <div className="our-impact-container10">
        <Head>
          <title>Our-Impact - Mountainous Foolhardy Spider</title>
          <meta
            property="og:title"
            content="Our-Impact - Mountainous Foolhardy Spider"
          />
          <link
            rel="canonical"
            href="https://mountainous-foolhardy-spider-9r64uu.teleporthq.site/our-impact"
          />
          <meta
            property="og:url"
            content="https://mountainous-foolhardy-spider-9r64uu.teleporthq.site/our-impact"
          />
        </Head>
        <Navigation></Navigation>
        <div className="our-impact-container11">
          <div className="our-impact-container12">
            <Script
              html={`<style>
section {
  padding: var(--spacing-4xl) 0;
  overflow: hidden;
}
summary {
  list-style: none;
  padding: var(--spacing-xl);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: var(--font-size-lg);
  background: var(--color-surface);
}
summary::-webkit-details-marker {
  display: none;
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="impact-hero">
          <div className="impact-hero-media">
            <video
              src="https://videos.pexels.com/video-files/19676256/19676256-hd_1280_720_24fps.mp4"
              loop
              muted
              poster="https://images.pexels.com/videos/19676256/pictures/preview-0.jpeg"
              autoPlay="true"
              playsInline
            ></video>
            <div className="impact-hero-overlay"></div>
          </div>
          <div className="impact-hero-container">
            <div className="impact-hero-content">
              <h1 className="our-impact-hero-title hero-title">
                A Generation Against Malaria &amp; NTDs
              </h1>
              <p className="hero-subtitle">
                The fight against Malaria and Neglected Tropical Diseases will
                be won when every young Nigerian becomes a champion for
                healthier communities.
              </p>
              <div className="impact-hero-controls">
                <div className="toggle-wrapper">
                  <button data-type="cumulative" className="active toggle-btn">
                    Cumulative
                  </button>
                  <button data-type="annual" className="toggle-btn">
                    Annual 2025
                  </button>
                </div>
              </div>
              <div className="impact-hero-stats">
                <div className="stat-item">
                  <span
                    data-annual="340"
                    data-cumulative="1250"
                    className="our-impact-stat-number"
                  >
                    0
                  </span>
                  <span className="our-impact-stat-label">
                    Communities Reached
                  </span>
                </div>
                <div className="stat-item">
                  <span
                    data-annual="120000"
                    data-cumulative="850000"
                    className="our-impact-stat-number"
                  >
                    0
                  </span>
                  <span className="our-impact-stat-label">
                    Bed Nets Distributed
                  </span>
                </div>
                <div className="stat-item">
                  <span
                    data-annual="4200"
                    data-cumulative="15000"
                    className="our-impact-stat-number"
                  >
                    0
                  </span>
                  <span className="our-impact-stat-label">
                    Youth Volunteers
                  </span>
                </div>
                <div className="stat-item">
                  <span
                    data-annual="95000"
                    data-cumulative="450000"
                    className="our-impact-stat-number"
                  >
                    0
                  </span>
                  <span className="our-impact-stat-label">
                    Households Impacted
                  </span>
                </div>
                <div className="stat-item">
                  <span
                    data-annual="580"
                    data-cumulative="2400"
                    className="our-impact-stat-number"
                  >
                    0
                  </span>
                  <span className="our-impact-stat-label">
                    Campaigns Delivered
                  </span>
                </div>
              </div>
              <div className="impact-hero-actions">
                <a href="#dashboard" className="our-impact-link10">
                  <div className="btn btn-primary btn-lg">
                    <span>Explore Dashboard</span>
                  </div>
                </a>
                <a href="#volunteer" className="our-impact-link11">
                  <div className="btn-outline btn btn-lg">
                    <span>Join the Movement</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="impact-hero-map-spotlight">
              <div className="spotlight-card">
                <div className="spotlight-header">
                  <div className="icon-box">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"></path>
                    </svg>
                  </div>
                  <span className="section-subtitle">Hotspot Coverage</span>
                </div>
                <div className="spotlight-list">
                  <div className="spotlight-item">
                    <span className="state-name">Kano State</span>
                    <span className="state-val">98% Reach</span>
                  </div>
                  <div className="spotlight-item">
                    <span className="state-name">Lagos State</span>
                    <span className="state-val">94% Reach</span>
                  </div>
                  <div className="spotlight-item">
                    <span className="state-name">Oyo State</span>
                    <span className="state-val">91% Reach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="state-explorer">
          <div className="state-explorer-container">
            <div className="state-explorer-grid">
              <div className="map-visual-column">
                <div className="map-wrapper">
                  <div className="nigeria-map-placeholder">
                    <div
                      data-state="Kano"
                      className="our-impact-thq-map-marker-elm1 our-impact-map-marker"
                    ></div>
                    <div
                      data-state="Lagos"
                      className="our-impact-thq-map-marker-elm2 our-impact-map-marker"
                    ></div>
                    <div
                      data-state="Borno"
                      className="our-impact-thq-map-marker-elm3 our-impact-map-marker"
                    ></div>
                    <div
                      data-state="Abuja"
                      className="our-impact-thq-map-marker-elm4 our-impact-map-marker"
                    ></div>
                    <div
                      data-state="Rivers"
                      className="our-impact-thq-map-marker-elm5 our-impact-map-marker"
                    ></div>
                    <img
                      alt="Nigeria Coverage Map"
                      src="https://images.pexels.com/photos/29232960/pexels-photo-29232960.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="map-bg-image"
                    />
                  </div>
                  <div className="map-legend">
                    <div className="legend-item">
                      <span className="dot high"></span>
                      <span>
                        {' '}
                        High Impact
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="legend-item">
                      <span className="dot medium"></span>
                      <span>
                        {' '}
                        Active
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="legend-item">
                      <span className="dot low"></span>
                      <span>
                        {' '}
                        Emerging
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="data-content-column">
                <h2 className="section-title">National Coverage Explorer</h2>
                <p className="section-content">
                  Our youth-led movement spans across the 36 states and the FCT.
                  Click on a state to explore local health metrics and program
                  efficacy.
                </p>
                <div id="state-data-card" className="state-data-card">
                  <div className="card-header">
                    <h3 className="state-title">Select a State</h3>
                    <span className="our-impact-status-badge">Live Data</span>
                  </div>
                  <div className="card-metrics">
                    <div className="metric-row">
                      <span className="metric-label">Youth Volunteers</span>
                      <span className="metric-value">--</span>
                    </div>
                    <div className="metric-row">
                      <span className="metric-label">Households Reached</span>
                      <span className="metric-value">--</span>
                    </div>
                    <div className="metric-row">
                      <span className="metric-label">NTD Interventions</span>
                      <span className="metric-value">--</span>
                    </div>
                  </div>
                  <div className="card-partners">
                    <span className="partner-label">Key Partners:</span>
                    <div className="partner-logos">
                      <div className="logo-circle">
                        <span>WHO</span>
                      </div>
                      <div className="logo-circle">
                        <span>NCDC</span>
                      </div>
                      <div className="logo-circle">
                        <span>FMOH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="metrics-grid">
          <div className="metrics-container">
            <div className="metrics-header">
              <h2 className="section-title">Visual Impact Dashboard</h2>
              <div className="filter-controls">
                <button className="active filter-btn">All Time</button>
                <button className="filter-btn">Last Quarter</button>
                <button className="filter-btn">This Month</button>
              </div>
            </div>
            <div className="metrics-wrapper">
              <div className="metric-card">
                <div className="card-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </svg>
                </div>
                <div className="card-body">
                  <span className="card-number">1.2M+</span>
                  <span className="card-label">Communities Reached</span>
                  <p className="card-micro">Impact: 1 community per $45</p>
                </div>
              </div>
              <div className="metric-card">
                <div className="card-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <div className="card-body">
                  <span className="card-number">850K</span>
                  <span className="card-label">Bed Nets Distributed</span>
                  <p className="card-micro">Coverage: 88% Target Reached</p>
                </div>
              </div>
              <div className="metric-card">
                <div className="card-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 21a8 8 0 0 0-16 0"></path>
                    <circle r="5" cx="10" cy="8"></circle>
                    <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
                  </svg>
                </div>
                <div className="card-body">
                  <span className="card-number">15,000</span>
                  <span className="card-label">Youth Volunteers</span>
                  <p className="card-micro">Leadership: 120 State Leads</p>
                </div>
              </div>
              <div className="metric-card">
                <div className="card-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </div>
                <div className="card-body">
                  <span className="card-number">450K</span>
                  <span className="card-label">Households Impacted</span>
                  <p className="card-micro">Prevention: 65% Reduction rate</p>
                </div>
              </div>
              <div className="metric-card">
                <div className="card-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                </div>
                <div className="card-body">
                  <span className="card-number">2,400</span>
                  <span className="card-label">Campaigns Delivered</span>
                  <p className="card-micro">Reach: 18.5M Nigerians</p>
                </div>
              </div>
              <div className="metric-card">
                <div className="card-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m14.45 13.39l5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837a.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95M2 15l6 6"></path>
                  </svg>
                </div>
                <div className="card-body">
                  <span className="card-number">12,500</span>
                  <span className="card-label">NTD Interventions</span>
                  <p className="card-micro">Efficiency: 92% Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="program-accordion">
          <div className="program-container">
            <div className="program-header">
              <h2 className="section-title">Impact by Program</h2>
              <p className="section-content">
                Discover how our specialized initiatives are transforming public
                health across Nigeria through youth-led action.
              </p>
            </div>
            <div className="accordion-wrapper">
              <details open="true" className="our-impact-program-item">
                <summary>
                  <span className="summary-title">
                    Malaria Prevention Initiative
                  </span>
                  <span className="summary-icon"></span>
                </summary>
                <div className="program-details">
                  <div className="details-grid">
                    <div className="details-info">
                      <h4 className="details-subtitle">
                        Strategic Mosquito Control
                      </h4>
                      <p>
                        Deployment of Long-Lasting Insecticidal Nets (LLINs) and
                        Indoor Residual Spraying (IRS) in high-risk rural areas.
                      </p>
                      <ul className="outcomes-list">
                        <li>
                          <span>850,000 Nets distributed in 2024</span>
                        </li>
                        <li>
                          <span>40% Reduction in local malaria cases</span>
                        </li>
                        <li>
                          <span>
                            2,500 Youth trained in distribution logistics
                          </span>
                        </li>
                      </ul>
                      <a href="#">
                        <div className="btn btn-link">
                          <span>View Program Details</span>
                        </div>
                      </a>
                    </div>
                    <div className="details-story">
                      <blockquote className="story-quote">
                        <span>
                          {' '}
                          &quot;Before the youth corps arrived, our clinic was
                          overwhelmed. Now, we see fewer children with fever
                          every month.&quot;
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <cite>— Dr. Amadi, Community Health Center</cite>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </details>
              <details className="our-impact-program-item">
                <summary>
                  <span className="summary-title">NTD Action Program</span>
                  <span className="summary-icon"></span>
                </summary>
                <div className="program-details">
                  <div className="details-grid">
                    <div className="details-info">
                      <h4 className="details-subtitle">
                        Eliminating Neglected Diseases
                      </h4>
                      <p>
                        Mass drug administration and morbidity management for
                        diseases like Lymphatic Filariasis and Onchocerciasis.
                      </p>
                      <ul className="outcomes-list">
                        <li>
                          <span>12,500 Targeted interventions completed</span>
                        </li>
                        <li>
                          <span>Awareness campaigns in 15 languages</span>
                        </li>
                        <li>
                          <span>Active surveillance in 12 states</span>
                        </li>
                      </ul>
                      <a href="#">
                        <div className="btn btn-link">
                          <span>View Program Details</span>
                        </div>
                      </a>
                    </div>
                    <div className="details-story">
                      <blockquote className="story-quote">
                        <span>
                          {' '}
                          &quot;Education is our strongest shield against the
                          diseases that society often forgets.&quot;
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <cite>— Sarah J., NTD Lead Advocate</cite>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </details>
              <details className="our-impact-program-item">
                <summary>
                  <span className="summary-title">
                    Youth Health Leadership Academy
                  </span>
                  <span className="summary-icon"></span>
                </summary>
                <div className="program-details">
                  <div className="details-grid">
                    <div className="details-info">
                      <h4 className="details-subtitle">
                        Empowering Future Leaders
                      </h4>
                      <p>
                        Capacity building for young professionals in public
                        health policy, advocacy, and community mobilization.
                      </p>
                      <ul className="outcomes-list">
                        <li>
                          <span>4,200 Certified health ambassadors</span>
                        </li>
                        <li>
                          <span>120 Policy briefs submitted to government</span>
                        </li>
                        <li>
                          <span>Global health fellowship opportunities</span>
                        </li>
                      </ul>
                      <a href="#">
                        <div className="btn btn-link">
                          <span>View Program Details</span>
                        </div>
                      </a>
                    </div>
                    <div className="details-story">
                      <blockquote className="story-quote">
                        <span>
                          {' '}
                          &quot;The academy gave me the tools to turn my passion
                          for health into a measurable movement.&quot;
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <cite>— Ibrahim K., Academy Graduate</cite>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </details>
              <details className="our-impact-program-item">
                <summary>
                  <span className="summary-title">
                    Community Health Outreach
                  </span>
                  <span className="summary-icon"></span>
                </summary>
                <div className="program-details">
                  <div className="details-grid">
                    <div className="details-info">
                      <h4 className="details-subtitle">
                        Direct Field Intervention
                      </h4>
                      <p>
                        Mobile clinics and door-to-door health education
                        reaching the most vulnerable &quot;last-mile&quot;
                        populations.
                      </p>
                      <ul className="outcomes-list">
                        <li>
                          <span>1.2M People reached via direct outreach</span>
                        </li>
                        <li>
                          <span>
                            Home-based care training for 5,000 mothers
                          </span>
                        </li>
                        <li>
                          <span>Real-time data reporting from the field</span>
                        </li>
                      </ul>
                      <a href="#">
                        <div className="btn btn-link">
                          <span>View Program Details</span>
                        </div>
                      </a>
                    </div>
                    <div className="details-story">
                      <blockquote className="story-quote">
                        <span>
                          {' '}
                          &quot;We don&apos;t wait for them to come to the
                          hospital; we take the hospital to them.&quot;
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <cite>— Mercy O., Field Coordinator</cite>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="spotlight-carousel">
          <div className="spotlight-container">
            <div className="carousel-header">
              <h2 className="section-title">Voices of Impact</h2>
              <p className="section-content">
                Real stories from the youth volunteers and community members at
                the heart of our mission.
              </p>
            </div>
            <div className="carousel-track-wrapper">
              <div id="carousel-track" className="carousel-track">
                <div className="carousel-slide">
                  <div className="slide-card">
                    <div className="slide-image">
                      <img
                        alt="Volunteer Chidi"
                        src="https://images.pexels.com/photos/8061644/pexels-photo-8061644.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      />
                    </div>
                    <div className="slide-content">
                      <div className="slide-badge">
                        <span>Volunteer Spotlight</span>
                      </div>
                      <p className="slide-text">
                        &quot;Leading the distribution in Enugu was
                        life-changing. We reached 500 households in just 3
                        days.&quot;
                      </p>
                      <div className="slide-author">
                        <strong>Chidi Okoro</strong>
                        <span>State Coordinator, Enugu</span>
                      </div>
                      <div className="slide-result">
                        <span>Result: 98% Net Usage Rate</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-slide">
                  <div className="slide-card">
                    <div className="slide-image">
                      <img
                        alt="Beneficiary Fatima"
                        src="https://images.pexels.com/photos/9968321/pexels-photo-9968321.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      />
                    </div>
                    <div className="slide-content">
                      <div className="slide-badge">
                        <span>Community Success</span>
                      </div>
                      <p className="slide-text">
                        &quot;The youth volunteers taught us how to protect our
                        children from NTDs. Our village is healthier now.&quot;
                      </p>
                      <div className="slide-author">
                        <strong>Fatima Yusuf</strong>
                        <span>Community Leader, Kaduna</span>
                      </div>
                      <div className="slide-result">
                        <span>Result: 0 New NTD Cases</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-slide">
                  <div className="slide-card">
                    <div className="slide-image">
                      <img
                        alt="Ambassador Tunde"
                        src="https://images.pexels.com/photos/15188781/pexels-photo-15188781.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      />
                    </div>
                    <div className="slide-content">
                      <div className="slide-badge">
                        <span>Youth Ambassador</span>
                      </div>
                      <p className="slide-text">
                        &quot;Advocating for better health policy at the state
                        level has shown me the power of youth voices.&quot;
                      </p>
                      <div className="slide-author">
                        <strong>Tunde Bakare</strong>
                        <span>Health Policy Fellow</span>
                      </div>
                      <div className="slide-result">
                        <span>Result: 3 Policy Amendments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-nav">
                <button id="prevBtn" className="nav-btn">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </button>
                <button id="nextBtn" className="nav-btn">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="methodology">
          <div className="methodology-container">
            <div className="methodology-header">
              <h2 className="section-title">
                Transparency &amp; Accountability
              </h2>
              <p className="section-content">
                We are committed to the highest standards of data integrity. Our
                impact reporting is verified by independent partners.
              </p>
            </div>
            <div className="methodology-accordion">
              <details open="true" className="method-item">
                <summary>
                  <span>Data Sources &amp; Collection Methods</span>
                </summary>
                <div className="method-content">
                  <p>
                    Our data is collected in real-time by field volunteers using
                    the DHIS2-integrated mobile platform. Every distribution and
                    intervention is geotagged and timestamped to ensure
                    accuracy.
                  </p>
                  <ul className="method-list">
                    <li>
                      <span>Direct field reporting via NMNYC Mobile App</span>
                    </li>
                    <li>
                      <span>
                        Integration with National Malaria Elimination Program
                        (NMEP) databases
                      </span>
                    </li>
                    <li>
                      <span>Community-level household surveys</span>
                    </li>
                  </ul>
                </div>
              </details>
              <details className="method-item">
                <summary>
                  <span>Verification &amp; Quality Assurance</span>
                </summary>
                <div className="method-content">
                  <p>
                    A multi-tier verification process ensures that all reported
                    figures represent genuine impact on the ground.
                  </p>
                  <ul className="method-list">
                    <li>
                      <span>Tier 1: State Coordinator digital sign-off</span>
                    </li>
                    <li>
                      <span>
                        Tier 2: Random spot-checks by National M&amp;E Team
                      </span>
                    </li>
                    <li>
                      <span>
                        Tier 3: Annual independent audit by international health
                        partners
                      </span>
                    </li>
                  </ul>
                </div>
              </details>
              <details className="method-item">
                <summary>
                  <span>Reporting Cycles &amp; Datasets</span>
                </summary>
                <div className="method-content">
                  <p>
                    We believe in open data. Our full datasets are made
                    available for research and public scrutiny on a quarterly
                    basis.
                  </p>
                  <div className="download-box">
                    <a href="#" className="our-impact-link16">
                      <div className="btn-outline btn btn-sm">
                        <span>Download 2024 Impact Report (PDF)</span>
                      </div>
                    </a>
                    <a href="#" className="our-impact-link17">
                      <div className="btn-outline btn btn-sm">
                        <span>Access Raw Data (CSV)</span>
                      </div>
                    </a>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="live-feed">
          <div className="live-feed-container">
            <div className="live-feed-header">
              <h2 className="section-title">Live Activity Feed</h2>
              <div className="feed-filters">
                <select className="feed-select">
                  <option>All Programs</option>
                  <option>Malaria</option>
                  <option>NTD</option>
                  <option>Training</option>
                </select>
                <select className="feed-select">
                  <option>All States</option>
                  <option>Lagos</option>
                  <option>Kano</option>
                  <option>Rivers</option>
                </select>
              </div>
            </div>
            <div className="timeline-vertical">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-time">2 Hours Ago</span>
                  <h4 className="timeline-title">
                    Bed Net Distribution Launched
                  </h4>
                  <p>
                    Distribution of 5,000 LLINs commenced in Alimosho LGA, Lagos
                    State.
                  </p>
                  <div className="timeline-tags">
                    <span className="tag">#MalariaPrevention</span>
                    <span className="tag">Lagos</span>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-time">6 Hours Ago</span>
                  <h4 className="timeline-title">
                    Volunteer Training Completed
                  </h4>
                  <p>
                    45 new health ambassadors certified in NTD surveillance in
                    Kano.
                  </p>
                  <div className="timeline-tags">
                    <span className="tag">#YouthAcademy</span>
                    <span className="tag">Kano</span>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-time">Yesterday</span>
                  <h4 className="timeline-title">Rural Outreach Program</h4>
                  <p>
                    Mobile clinic reached 3 remote villages in Oyo state,
                    treating 150 cases.
                  </p>
                  <div className="timeline-tags">
                    <span className="tag">#CommunityHealth</span>
                    <span className="tag">Oyo</span>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-time">2 Days Ago</span>
                  <h4 className="timeline-title">NTD Advocacy Session</h4>
                  <p>
                    Stakeholder meeting with Ministry of Health representatives
                    in Abuja.
                  </p>
                  <div className="timeline-tags">
                    <span className="tag">#Advocacy</span>
                    <span className="tag">FCT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="impact-cta">
          <div className="impact-cta-container">
            <div className="our-impact-cta-grid">
              <div className="primary our-impact-cta-card">
                <div className="cta-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </svg>
                </div>
                <h3 className="section-title">Join the Movement</h3>
                <p className="section-content">
                  Become a volunteer health ambassador. Your time and leadership
                  can save lives in your own community.
                </p>
                <a href="#" className="our-impact-link18">
                  <div className="btn btn-primary btn-lg">
                    <span>Volunteer Now</span>
                  </div>
                </a>
                <span className="our-impact-cta-impact">
                  Impact: 1 Volunteer = 50 Households reached
                </span>
              </div>
              <div className="secondary our-impact-cta-card">
                <div className="cta-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </div>
                <h3 className="section-title">Support Our Mission</h3>
                <p className="section-content">
                  Your donations fund bed nets, medication, and youth training
                  programs across Nigeria.
                </p>
                <a href="#" className="our-impact-link19">
                  <div className="btn btn-accent btn-lg">
                    <span>Donate Today</span>
                  </div>
                </a>
                <span className="our-impact-cta-impact">
                  Impact: $10 = 2 Bed nets distributed
                </span>
              </div>
              <div className="outline our-impact-cta-card">
                <div className="cta-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h3 className="section-title">Partner With Us</h3>
                <p className="section-content">
                  Leverage our national youth network for large-scale public
                  health interventions and research.
                </p>
                <a href="#" className="our-impact-link20">
                  <div className="btn-outline btn btn-lg">
                    <span>Partner Inquiry</span>
                  </div>
                </a>
                <span className="our-impact-cta-impact">
                  Impact: Scale interventions nationwide
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="our-impact-container20">
          <div className="our-impact-container21">
            <Script
              html={`<script defer data-name="impact-dashboard-logic">
(function(){
  // Animated Counters
  const animateCounters = () => {
    const counters = document.querySelectorAll(".stat-number")
    const type = document.querySelector(".toggle-btn.active").dataset.type

    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute(\`data-\${type}\`))
      const count = +counter.innerText.replace(/,/g, "")
      const increment = target / 100

      if (count < target) {
        counter.innerText = Math.ceil(count + increment).toLocaleString()
        setTimeout(() => animateCounters(), 10)
      } else {
        counter.innerText = target.toLocaleString()
      }
    })
  }

  // Toggle Functionality
  const toggleBtns = document.querySelectorAll(".toggle-btn")
  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      const counters = document.querySelectorAll(".stat-number")
      counters.forEach((c) => (c.innerText = "0"))
      animateCounters()
    })
  })

  // State Map Explorer Interaction
  const markers = document.querySelectorAll(".map-marker")
  const stateCard = document.getElementById("state-data-card")
  const stateTitle = stateCard.querySelector(".state-title")
  const stateMetrics = stateCard.querySelectorAll(".metric-value")

  const stateData = {
    Kano: { volunteers: "1,240", reach: "85,000", ntd: "3,200" },
    Lagos: { volunteers: "2,100", reach: "120,000", ntd: "1,500" },
    Borno: { volunteers: "850", reach: "42,000", ntd: "5,100" },
    Abuja: { volunteers: "1,100", reach: "65,000", ntd: "1,200" },
    Rivers: { volunteers: "940", reach: "72,000", ntd: "2,100" },
  }

  markers.forEach((marker) => {
    marker.addEventListener("click", () => {
      const state = marker.dataset.state
      const data = stateData[state]

      stateCard.style.transform = "scale(0.95)"

      setTimeout(() => {
        stateTitle.innerText = state + " State"
        stateMetrics[0].innerText = data.volunteers
        stateMetrics[1].innerText = data.reach
        stateMetrics[2].innerText = data.ntd
        stateCard.style.transform = "scale(1)"
        stateCard.style.borderColor = "var(--color-primary)"
      }, 200)
    })
  })

  // Carousel Logic
  const track = document.getElementById("carousel-track")
  const slides = document.querySelectorAll(".carousel-slide")
  const nextBtn = document.getElementById("nextBtn")
  const prevBtn = document.getElementById("prevBtn")
  let currentSlide = 0

  const updateCarousel = () => {
    track.style.transform = \`translateX(-\${currentSlide * 100}%)\`
  }

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length
    updateCarousel()
  })

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    updateCarousel()
  })

  // Intersection Observer for Animations
  const observerOptions = {
    threshold: 0.2,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("impact-hero")) {
          animateCounters()
        }
        entry.target.classList.add("animate-in")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="our-impact-container22">
          <div className="our-impact-container23">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-20px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .our-impact-container10 {
            width: 100%;
            min-height: 100vh;
          }
          .our-impact-container11 {
            display: none;
          }
          .our-impact-container12 {
            display: contents;
          }
          .our-impact-link10 {
            display: contents;
          }
          .our-impact-link11 {
            display: contents;
          }
          .our-impact-thq-map-marker-elm1 {
            top: 30%;
            left: 55%;
          }
          .our-impact-thq-map-marker-elm2 {
            top: 75%;
            left: 25%;
          }
          .our-impact-thq-map-marker-elm3 {
            top: 45%;
            left: 75%;
          }
          .our-impact-thq-map-marker-elm4 {
            top: 65%;
            left: 45%;
          }
          .our-impact-thq-map-marker-elm5 {
            top: 85%;
            left: 65%;
          }
          .our-impact-link16 {
            display: contents;
          }
          .our-impact-link17 {
            display: contents;
          }
          .our-impact-link18 {
            display: contents;
          }
          .our-impact-link19 {
            display: contents;
          }
          .our-impact-link20 {
            display: contents;
          }
          .our-impact-container20 {
            display: none;
          }
          .our-impact-container21 {
            display: contents;
          }
          .our-impact-container22 {
            display: none;
          }
          .our-impact-container23 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default OurImpact
