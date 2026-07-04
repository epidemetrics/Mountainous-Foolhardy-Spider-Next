import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Programs = (props) => {
  return (
    <>
      <div className="programs-container1">
        <Head>
          <title>
            Programs - Nigeria Malaria & NTD Youth Corps | Youth Action for
            Health Equity
          </title>
          <meta
            name="description"
            content="Youth-led organization combating malaria and NTDs in Nigeria through advocacy, community outreach, volunteerism, and public health action."
          />
          <meta
            property="og:title"
            content="Programs - Nigeria Malaria &amp; NTD Youth Corps | Youth Action for Health Equity"
          />
          <meta
            property="og:description"
            content="Youth-led organization combating malaria and NTDs in Nigeria through advocacy, community outreach, volunteerism, and public health action."
          />
          <link
            rel="canonical"
            href="https://mountainous-foolhardy-spider-9r64uu.teleporthq.site/programs"
          />
          <meta
            property="og:url"
            content="https://mountainous-foolhardy-spider-9r64uu.teleporthq.site/programs"
          />
        </Head>
        <Navigation></Navigation>
        <section className="programs-hero">
          <div className="programs-hero-video-container">
            <video
              src="https://videos.pexels.com/video-files/19676254/19676254-hd_1280_720_24fps.mp4"
              loop
              muted
              poster="https://images.pexels.com/videos/19676254/pictures/preview-0.jpeg"
              autoPlay="true"
              playsInline
              className="programs-hero-video"
            ></video>
            <div className="programs-hero-overlay"></div>
          </div>
          <div className="programs-hero-content">
            <h1 className="hero-title">National Strategic Health Programs</h1>
            <p className="hero-subtitle">
              Mobilizing the youth of Nigeria to eliminate Malaria and Neglected
              Tropical Diseases through evidence-based interventions, community
              leadership, and sustainable health outreach.
            </p>
            <div className="programs-hero-stats">
              <div className="programs-hero-stat-item">
                <span data-target="1200000" className="hero-stat-number">
                  0
                </span>
                <span className="hero-stat-label">Lives Impacted</span>
              </div>
              <div className="programs-hero-stat-item">
                <span data-target="36" className="hero-stat-number">
                  0
                </span>
                <span className="hero-stat-label">States Active</span>
              </div>
              <div className="programs-hero-stat-item">
                <span data-target="50000" className="hero-stat-number">
                  0
                </span>
                <span className="hero-stat-label">Youth Corps Members</span>
              </div>
            </div>
            <div className="programs-hero-actions">
              <a href="#program-cards" className="programs-link10">
                <div className="btn btn-primary btn-lg">
                  <span>Explore Programs</span>
                </div>
              </a>
              <a href="#volunteer" className="programs-link11">
                <div className="btn-outline btn btn-lg">
                  <span>Join the Corps</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section id="program-cards" className="program-cards-section">
          <div className="section-header">
            <h2 className="section-title">Our Flagship Initiatives</h2>
            <p className="section-content">
              Comprehensive health strategies designed for national scale and
              community-level impact.
            </p>
          </div>
          <div className="program-grid">
            <div className="program-card">
              <div className="program-card-image">
                <img
                  alt="Malaria Prevention"
                  src="https://images.pexels.com/photos/33132346/pexels-photo-33132346.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="program-badge">
                  <span>Malaria</span>
                </div>
              </div>
              <div className="program-card-body">
                <h3 className="section-subtitle">
                  Malaria Prevention Initiative
                </h3>
                <p className="section-content">
                  Scaling up vector control and rapid diagnostic testing across
                  vulnerable rural communities.
                </p>
                <div className="program-metrics">
                  <span>85% Reduction Goal</span>
                  <span>12.5k Tests Conducted</span>
                </div>
                <div className="program-card-footer">
                  <a href="#" className="programs-link12">
                    <div className="btn btn-sm btn-accent">
                      <span>Learn More</span>
                    </div>
                  </a>
                  <button className="btn btn-link btn-sm">Volunteer</button>
                </div>
              </div>
            </div>
            <div className="program-card">
              <div className="program-card-image">
                <img
                  alt="Bed Net Distribution"
                  src="https://images.pexels.com/photos/37907654/pexels-photo-37907654.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="program-badge">
                  <span>Prevention</span>
                </div>
              </div>
              <div className="program-card-body">
                <h3 className="section-subtitle">Bed Net Distribution</h3>
                <p className="section-content">
                  Last-mile delivery of Long-Lasting Insecticidal Nets (LLINs)
                  to high-burden households.
                </p>
                <div className="program-metrics">
                  <span>500k Nets Distributed</span>
                  <span>2.1m Households Covered</span>
                </div>
                <div className="program-card-footer">
                  <a href="#" className="programs-link13">
                    <div className="btn btn-sm btn-accent">
                      <span>Learn More</span>
                    </div>
                  </a>
                  <button className="btn btn-link btn-sm">Volunteer</button>
                </div>
              </div>
            </div>
            <div className="program-card">
              <div className="program-card-image">
                <img
                  alt="NTD Action"
                  src="https://images.pexels.com/photos/37285163/pexels-photo-37285163.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="program-badge">
                  <span>NTD Action</span>
                </div>
              </div>
              <div className="program-card-body">
                <h3 className="section-subtitle">NTD Action Program</h3>
                <p className="section-content">
                  Eliminating Neglected Tropical Diseases through Mass Drug
                  Administration and hygiene education.
                </p>
                <div className="program-metrics">
                  <span>15 States Reached</span>
                  <span>Preventive Chemotherapy</span>
                </div>
                <div className="program-card-footer">
                  <a href="#" className="programs-link14">
                    <div className="btn btn-sm btn-accent">
                      <span>Learn More</span>
                    </div>
                  </a>
                  <button className="btn btn-link btn-sm">Volunteer</button>
                </div>
              </div>
            </div>
            <div className="program-card">
              <div className="program-card-image">
                <img
                  alt="Youth Leadership"
                  src="https://images.pexels.com/photos/8248290/pexels-photo-8248290.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="program-badge">
                  <span>Leadership</span>
                </div>
              </div>
              <div className="program-card-body">
                <h3 className="section-subtitle">
                  Youth Health Leadership Academy
                </h3>
                <p className="section-content">
                  Training the next generation of public health leaders in
                  advocacy, policy, and field operations.
                </p>
                <div className="program-metrics">
                  <span>5k Graduates</span>
                  <span>36 State Chapters</span>
                </div>
                <div className="program-card-footer">
                  <a href="#" className="programs-link15">
                    <div className="btn btn-sm btn-accent">
                      <span>Learn More</span>
                    </div>
                  </a>
                  <button className="btn btn-link btn-sm">Apply Now</button>
                </div>
              </div>
            </div>
            <div className="program-card">
              <div className="program-card-image">
                <img
                  alt="Community Outreach"
                  src="https://images.pexels.com/photos/33127835/pexels-photo-33127835.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="program-badge">
                  <span>Outreach</span>
                </div>
              </div>
              <div className="program-card-body">
                <h3 className="section-subtitle">Community Health Outreach</h3>
                <p className="section-content">
                  Mobile clinics and rural health workers providing essential
                  primary care and disease screening.
                </p>
                <div className="program-metrics">
                  <span>250+ Rural Clinics</span>
                  <span>Daily Operations</span>
                </div>
                <div className="program-card-footer">
                  <a href="#" className="programs-link16">
                    <div className="btn btn-sm btn-accent">
                      <span>Learn More</span>
                    </div>
                  </a>
                  <button className="btn btn-link btn-sm">Volunteer</button>
                </div>
              </div>
            </div>
            <div className="program-card">
              <div className="program-card-image">
                <img
                  alt="Research Support"
                  src="https://images.pexels.com/photos/29941469/pexels-photo-29941469.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="program-badge">
                  <span>Research</span>
                </div>
              </div>
              <div className="program-card-body">
                <h3 className="section-subtitle">
                  Data &amp; Research Support
                </h3>
                <p className="section-content">
                  Evidence gathering and impact monitoring to ensure every
                  intervention is data-driven.
                </p>
                <div className="program-metrics">
                  <span>Real-time Tracking</span>
                  <span>Policy Advocacy</span>
                </div>
                <div className="program-card-footer">
                  <a href="#" className="programs-link17">
                    <div className="btn btn-sm btn-accent">
                      <span>Learn More</span>
                    </div>
                  </a>
                  <button className="btn btn-link btn-sm">Partner</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="impact-dashboard">
          <div className="impact-container">
            <div className="impact-header">
              <h2 className="section-title">Measurable Health Impact</h2>
              <p className="section-content">
                Our programs are defined by transparency and verified results
                across Nigeria.
              </p>
            </div>
            <div className="impact-grid">
              <div className="impact-card">
                <div className="impact-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7 21s9.286-9.841 9.286-13.841a3.86 3.86 0 0 0-1.182-3.008A4.13 4.13 0 0 0 12 3.007A4.13 4.13 0 0 0 8.896 4.15a3.86 3.86 0 0 0-1.182 3.01C7.714 11.16 17 21 17 21"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="impact-info">
                  <h4 data-target="842000" className="impact-number">
                    0
                  </h4>
                  <span className="impact-label">Communities Reached</span>
                </div>
              </div>
              <div className="impact-card">
                <div className="impact-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
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
                <div className="impact-info">
                  <h4 data-target="1500000" className="impact-number">
                    0
                  </h4>
                  <span className="impact-label">Bed Nets Distributed</span>
                </div>
              </div>
              <div className="impact-card">
                <div className="impact-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m8 9l5 5v7H8v-4m0 4H3v-7l5-5m1 1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17h-8m0-14v.01M17 7v.01M17 11v.01M17 15v.01"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="impact-info">
                  <h4 data-target="24500" className="impact-number">
                    0
                  </h4>
                  <span className="impact-label">Youth Leaders Trained</span>
                </div>
              </div>
              <div className="impact-card">
                <div className="impact-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 13v-1h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h2.5"></path>
                      <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-2 7l3-3l2 2l4-4"></path>
                      <path d="M19 17h3v3"></path>
                    </g>
                  </svg>
                </div>
                <div className="impact-info">
                  <h4 data-target="3200000" className="impact-number">
                    0
                  </h4>
                  <span className="impact-label">NTD Treatments Supported</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="program-process">
          <div className="section-header">
            <h2 className="section-title">Program Implementation Cycle</h2>
            <p className="section-content">
              Our rigorous 5-step process ensures maximum efficiency and
              community ownership.
            </p>
          </div>
          <div className="process-stepper">
            <div className="process-step">
              <div className="step-number">
                <span>01</span>
              </div>
              <div className="step-content">
                <h4 className="section-subtitle">Strategic Planning</h4>
                <p className="section-content">
                  Analyzing disease burden data and mapping high-priority
                  communities for intervention.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">
                <span>02</span>
              </div>
              <div className="step-content">
                <h4 className="section-subtitle">Community Engagement</h4>
                <p className="section-content">
                  Mobilizing local leaders and stakeholders to ensure cultural
                  alignment and trust.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">
                <span>03</span>
              </div>
              <div className="step-content">
                <h4 className="section-subtitle">Corps Deployment</h4>
                <p className="section-content">
                  Deploying trained youth health workers for on-ground
                  distribution and health education.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">
                <span>04</span>
              </div>
              <div className="step-content">
                <h4 className="section-subtitle">Monitoring &amp; Support</h4>
                <p className="section-content">
                  Real-time data collection and technical assistance to field
                  teams throughout the campaign.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">
                <span>05</span>
              </div>
              <div className="step-content">
                <h4 className="section-subtitle">Impact Evaluation</h4>
                <p className="section-content">
                  Post-intervention assessment to measure outcomes and refine
                  future program models.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="volunteer" className="volunteer-opportunities">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Join the Movement</h2>
              <p className="section-content">
                Choose a role that matches your skills and passion for public
                health. Training provided for all positions.
              </p>
            </div>
            <div className="opportunities-grid">
              <div className="opportunity-card">
                <div className="opportunity-header">
                  <h4 className="section-subtitle">Health Educator</h4>
                  <span className="opportunity-tag">Malaria Program</span>
                </div>
                <p className="section-content">
                  Lead community workshops on malaria prevention, net usage, and
                  early diagnosis.
                </p>
                <ul className="opportunity-details">
                  <li>
                    <strong>Commitment:</strong>
                    <span>
                      {' '}
                      10 hrs/week
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <strong>Training:</strong>
                    <span>
                      {' '}
                      2-day workshop
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                </ul>
                <a href="#">
                  <div className="btn-outline btn btn-sm">
                    <span>Apply Now</span>
                  </div>
                </a>
              </div>
              <div className="opportunity-card">
                <div className="opportunity-header">
                  <h4 className="section-subtitle">Logistics Coordinator</h4>
                  <span className="opportunity-tag">Bed Net Distribution</span>
                </div>
                <p className="section-content">
                  Manage the supply chain and distribution points for LLINs in
                  rural local government areas.
                </p>
                <ul className="opportunity-details">
                  <li>
                    <strong>Commitment:</strong>
                    <span>
                      {' '}
                      Full-time (Campaign)
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <strong>Training:</strong>
                    <span>
                      {' '}
                      Supply Chain Cert
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                </ul>
                <a href="#">
                  <div className="btn-outline btn btn-sm">
                    <span>Apply Now</span>
                  </div>
                </a>
              </div>
              <div className="opportunity-card">
                <div className="opportunity-header">
                  <h4 className="section-subtitle">NTD Field Officer</h4>
                  <span className="opportunity-tag">NTD Action</span>
                </div>
                <p className="section-content">
                  Support Mass Drug Administration (MDA) campaigns and conduct
                  hygiene sensitization.
                </p>
                <ul className="opportunity-details">
                  <li>
                    <strong>Commitment:</strong>
                    <span>
                      {' '}
                      15 hrs/week
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <strong>Training:</strong>
                    <span>
                      {' '}
                      Clinical Basics
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                </ul>
                <a href="#">
                  <div className="btn-outline btn btn-sm">
                    <span>Apply Now</span>
                  </div>
                </a>
              </div>
              <div className="opportunity-card">
                <div className="opportunity-header">
                  <h4 className="section-subtitle">Advocacy Lead</h4>
                  <span className="opportunity-tag">Leadership Academy</span>
                </div>
                <p className="section-content">
                  Engage with state-level policy makers to advocate for
                  increased health funding.
                </p>
                <ul className="opportunity-details">
                  <li>
                    <strong>Commitment:</strong>
                    <span>
                      {' '}
                      5 hrs/week
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <strong>Training:</strong>
                    <span>
                      {' '}
                      Policy Training
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                </ul>
                <a href="#">
                  <div className="btn-outline btn btn-sm">
                    <span>Apply Now</span>
                  </div>
                </a>
              </div>
              <div className="opportunity-card">
                <div className="opportunity-header">
                  <h4 className="section-subtitle">Data Collector</h4>
                  <span className="opportunity-tag">Research Support</span>
                </div>
                <p className="section-content">
                  Utilize mobile tools to gather health metrics and community
                  feedback during outreach.
                </p>
                <ul className="opportunity-details">
                  <li>
                    <strong>Commitment:</strong>
                    <span>
                      {' '}
                      Flexible
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <strong>Training:</strong>
                    <span>
                      {' '}
                      Digital Tools Prep
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                </ul>
                <a href="#">
                  <div className="btn-outline btn btn-sm">
                    <span>Apply Now</span>
                  </div>
                </a>
              </div>
              <div className="opportunity-card">
                <div className="opportunity-header">
                  <h4 className="section-subtitle">Rural Outreach Nurse</h4>
                  <span className="opportunity-tag">Community Health</span>
                </div>
                <p className="section-content">
                  Provide basic clinical support and screening in remote mobile
                  clinic settings.
                </p>
                <ul className="opportunity-details">
                  <li>
                    <strong>Commitment:</strong>
                    <span>
                      {' '}
                      Weekend Shifts
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <strong>Training:</strong>
                    <span>
                      {' '}
                      Field Medicine
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                </ul>
                <a href="#">
                  <div className="btn-outline btn btn-sm">
                    <span>Apply Now</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-rail">
          <div className="section-header">
            <h2 className="section-title">Voices from the Field</h2>
            <p className="section-content">
              Real stories of change from our youth corps members and the
              communities we serve.
            </p>
          </div>
          <div className="rail-container">
            <div className="rail-track">
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img
                    alt="Sarah Adams"
                    src="https://images.pexels.com/photos/34717769/pexels-photo-34717769.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="testimonial-content">
                  <p className="section-content">
                    &quot;Seeing a community finally protected by bed nets after
                    years of malaria cases is the most rewarding experience of
                    my youth service.&quot;
                  </p>
                  <div className="testimonial-meta">
                    <h5 className="section-subtitle">Sarah Adams</h5>
                    <span className="testimonial-role">
                      State Coordinator, Kano
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img
                    alt="Ibrahim Musa"
                    src="https://images.pexels.com/photos/37285156/pexels-photo-37285156.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="testimonial-content">
                  <p className="section-content">
                    &quot;The Leadership Academy gave me the tools to not just
                    identify health problems, but to organize my peers to solve
                    them.&quot;
                  </p>
                  <div className="testimonial-meta">
                    <h5 className="section-subtitle">Ibrahim Musa</h5>
                    <span className="testimonial-role">
                      Academy Graduate, Gombe
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img
                    alt="Dr. Amaka Okafor"
                    src="https://images.pexels.com/photos/33127693/pexels-photo-33127693.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="testimonial-content">
                  <p className="section-content">
                    &quot;NMNYC&apos;s approach to NTDs is revolutionary. They
                    bring youth energy to the most difficult-to-reach rural
                    regions.&quot;
                  </p>
                  <div className="testimonial-meta">
                    <h5 className="section-subtitle">Dr. Amaka Okafor</h5>
                    <span className="testimonial-role">Technical Partner</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img
                    alt="Blessing Etim"
                    src="https://images.pexels.com/photos/9823014/pexels-photo-9823014.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="testimonial-content">
                  <p className="section-content">
                    &quot;As a volunteer, I learned that small actions like
                    teaching a family how to use a net can save lives every
                    single night.&quot;
                  </p>
                  <div className="testimonial-meta">
                    <h5 className="section-subtitle">Blessing Etim</h5>
                    <span className="testimonial-role">
                      Field Volunteer, Lagos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-partners">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                Leadership &amp; Strategic Partners
              </h2>
              <p className="section-content">
                Guided by experts, supported by global health institutions.
              </p>
            </div>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-photo">
                  <img
                    alt="Program Director"
                    src="https://images.pexels.com/photos/33127869/pexels-photo-33127869.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="team-info">
                  <h4 className="section-subtitle">Dr. Funke Balogun</h4>
                  <p className="team-role">National Program Director</p>
                  <div className="team-contact">
                    <a href="#">
                      <div className="btn-link">
                        <span>Contact</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-card">
                <div className="team-photo">
                  <img
                    alt="Operations Lead"
                    src="https://images.pexels.com/photos/35043676/pexels-photo-35043676.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="team-info">
                  <h4 className="section-subtitle">Chidi Okoro</h4>
                  <p className="team-role">Head of Field Operations</p>
                  <div className="team-contact">
                    <a href="#">
                      <div className="btn-link">
                        <span>Contact</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-card">
                <div className="team-photo">
                  <img
                    alt="NTD Lead"
                    src="https://images.pexels.com/photos/34185235/pexels-photo-34185235.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="team-info">
                  <h4 className="section-subtitle">Aisha Bello</h4>
                  <p className="team-role">NTD Strategy Lead</p>
                  <div className="team-contact">
                    <a href="#">
                      <div className="btn-link">
                        <span>Contact</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="partner-card">
                <div className="partner-logo">
                  <span className="partner-placeholder">
                    Federal Ministry of Health
                  </span>
                </div>
                <p className="section-content">Strategic National Partner</p>
              </div>
              <div className="partner-card">
                <div className="partner-logo">
                  <span className="partner-placeholder">WHO Nigeria</span>
                </div>
                <p className="section-content">Technical Advisory Partner</p>
              </div>
              <div className="partner-card">
                <div className="partner-logo">
                  <span className="partner-placeholder">Global Fund</span>
                </div>
                <p className="section-content">Program Funding Partner</p>
              </div>
            </div>
          </div>
        </section>
        <section className="program-cta">
          <div className="container">
            <div className="cta-card">
              <div className="cta-content">
                <h2 className="section-title">
                  A Generation Against Malaria &amp; NTDs
                </h2>
                <p className="section-content">
                  &quot;The fight against Malaria and Neglected Tropical
                  Diseases will be won when every young Nigerian becomes a
                  champion for healthier communities.&quot;
                </p>
                <div className="cta-actions">
                  <a href="#" className="programs-link27">
                    <div className="btn btn-primary btn-lg">
                      <span>Apply to Volunteer</span>
                    </div>
                  </a>
                  <a href="#" className="programs-link28">
                    <div className="btn-secondary btn btn-lg">
                      <span>Partner With Us</span>
                    </div>
                  </a>
                  <a href="#" className="programs-link29">
                    <div className="btn btn-accent btn-lg">
                      <span>Donate to Program</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="cta-visual">
                <div className="floating-badge">
                  <span className="badge-number">100%</span>
                  <span className="badge-text">Direct Impact</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="programs-container2">
          <div className="programs-container3">
            <Script
              html={`<script defer data-name="programs-hub-logic">
(function(){
  // Intersection Observer for Counter Animations
  const startCounters = () => {
    const stats = document.querySelectorAll("[data-target]")

    const observerOptions = {
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target
          const countTo = parseInt(target.getAttribute("data-target"))
          const duration = 2000 // 2 seconds
          const startTime = performance.now()

          const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Easing function for smoother finish
            const easedProgress = 1 - Math.pow(1 - progress, 3)
            const currentCount = Math.floor(easedProgress * countTo)

            target.innerText = currentCount.toLocaleString()

            if (progress < 1) {
              requestAnimationFrame(updateCount)
            } else {
              target.innerText = countTo.toLocaleString() + (countTo > 100 ? "+" : "")
            }
          }

          requestAnimationFrame(updateCount)
          observer.unobserve(target)
        }
      })
    }, observerOptions)

    stats.forEach((stat) => observer.observe(stat))
  }

  // Smooth Card Rail Scroll (Optional Enhancement)
  const initRailScroll = () => {
    const track = document.querySelector(".rail-track")
    if (!track) return

    let isDown = false
    letstartX
    let scrollLeft

    track.addEventListener("mousedown", (e) => {
      isDown = true
      track.classList.add("active")
      startX = e.pageX - track.offsetLeft
      scrollLeft = track.scrollLeft
    })

    track.addEventListener("mouseleave", () => {
      isDown = false
    })

    track.addEventListener("mouseup", () => {
      isDown = false
    })

    track.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - track.offsetLeft
      const walk = (x - startX) * 2
      track.scrollLeft = scrollLeft - walk
    })
  }

  // Initialize all components
  startCounters()
  initRailScroll()
})()
</script>`}
            ></Script>
          </div>
        </div>
        <div className="programs-container4">
          <div className="programs-container5">
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
          .programs-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .programs-link10 {
            display: contents;
          }
          .programs-link11 {
            display: contents;
          }
          .programs-link12 {
            display: contents;
          }
          .programs-link13 {
            display: contents;
          }
          .programs-link14 {
            display: contents;
          }
          .programs-link15 {
            display: contents;
          }
          .programs-link16 {
            display: contents;
          }
          .programs-link17 {
            display: contents;
          }
          .programs-link27 {
            display: contents;
          }
          .programs-link28 {
            display: contents;
          }
          .programs-link29 {
            display: contents;
          }
          .programs-container2 {
            display: none;
          }
          .programs-container3 {
            display: contents;
          }
          .programs-container4 {
            display: none;
          }
          .programs-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Programs
