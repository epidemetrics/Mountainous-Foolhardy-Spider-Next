import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const VolunteerHub = (props) => {
  return (
    <>
      <div className="volunteer-hub-container1">
        <Head>
          <title>Volunteer-Hub - Mountainous Foolhardy Spider</title>
          <meta
            property="og:title"
            content="Volunteer-Hub - Mountainous Foolhardy Spider"
          />
          <link
            rel="canonical"
            href="https://mountainous-foolhardy-spider-9r64uu.teleporthq.site/volunteer-hub"
          />
          <meta
            property="og:url"
            content="https://mountainous-foolhardy-spider-9r64uu.teleporthq.site/volunteer-hub"
          />
        </Head>
        <Navigation></Navigation>
        <section className="volunteer-hero">
          <div className="volunteer-hero-media">
            <video
              src="https://videos.pexels.com/video-files/7469814/7469814-hd_1920_1080_25fps.mp4"
              loop
              muted
              poster="https://images.pexels.com/videos/7469814/pictures/preview-0.jpg"
              autoPlay="true"
              playsInline
            ></video>
            <div className="volunteer-hero-overlay"></div>
          </div>
          <div className="volunteer-hero-container">
            <div className="volunteer-hero-content">
              <div className="volunteer-hero-badge">
                <span>Nigeria&apos;s Youth Leading the Way</span>
              </div>
              <h1 className="hero-title">
                A Generation Against Malaria &amp; NTDs
              </h1>
              <p className="hero-subtitle">
                &quot;The fight against Malaria and Neglected Tropical Diseases
                will be won when every young Nigerian becomes a champion for
                healthier communities.&quot;
              </p>
              <div className="volunteer-hero-actions">
                <a href="#application-form" className="volunteer-hub-link10">
                  <div className="btn-xl btn btn-primary">
                    <span>Apply to Join Now</span>
                  </div>
                </a>
                <a href="#chapters" className="volunteer-hub-link11">
                  <div className="btn-xl btn-outline btn">
                    <span>Find Local Chapter</span>
                  </div>
                </a>
              </div>
              <div className="volunteer-hero-stats">
                <div className="stat-item">
                  <span
                    data-target="15000"
                    className="volunteer-hub-stat-number"
                  >
                    0
                  </span>
                  <span className="volunteer-hub-stat-label">
                    Active Volunteers
                  </span>
                </div>
                <div className="stat-item">
                  <span data-target="36" className="volunteer-hub-stat-number">
                    0
                  </span>
                  <span className="volunteer-hub-stat-label">
                    States Covered
                  </span>
                </div>
                <div className="stat-item">
                  <span data-target="2" className="volunteer-hub-stat-number">
                    0
                  </span>
                  <span className="volunteer-hub-stat-label">
                    Million Impacted
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="benefits-section">
          <div className="benefits-container">
            <div className="benefits-header">
              <h2 className="section-title">Why Join the Movement?</h2>
              <p className="section-content">
                Discover the pathways to leadership and professional growth
                through community service.
              </p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
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
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path>
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="benefit-title">Professional Certification</h3>
                <p className="section-content">
                  Earn industry-recognized certificates in public health
                  advocacy and community leadership.
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-2 8v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1M15 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2 5h2a2 2 0 0 1 2 2v1M5 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-2 8v-1a2 2 0 0 1 2-2h2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="benefit-title">Leadership Pathways</h3>
                <p className="section-content">
                  Advance from local volunteer to State Coordinator or National
                  Youth Ambassador roles.
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
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
                </div>
                <h3 className="benefit-title">Skill Development</h3>
                <p className="section-content">
                  Master data collection, health education, and strategic
                  communication techniques.
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
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
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="benefit-title">Exclusive Incentives</h3>
                <p className="section-content">
                  Access to travel grants, conference sponsorships, and
                  networking with global partners.
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
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
                </div>
                <h3 className="benefit-title">National Networking</h3>
                <p className="section-content">
                  Connect with thousands of like-minded young leaders across all
                  36 Nigerian states.
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
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
                      <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                      <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="benefit-title">Impact Mentorship</h3>
                <p className="section-content">
                  Receive guidance from experienced public health professionals
                  and policy makers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="chapters" className="chapters-section">
          <div className="chapters-container">
            <div className="chapters-header">
              <h2 className="section-title">National Presence</h2>
              <p className="section-content">
                Connect with your local chapter and start making an impact in
                your community today.
              </p>
            </div>
            <div className="chapters-table-wrapper">
              <table className="chapters-table">
                <thead>
                  <tr>
                    <th>
                      <span>State Chapter</span>
                    </th>
                    <th>
                      <span>Chapter Lead</span>
                    </th>
                    <th>
                      <span>Active Status</span>
                    </th>
                    <th>
                      <span>Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="state-info">
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
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
                        <span>Lagos State</span>
                      </div>
                    </td>
                    <td>
                      <span>Tunde Adewale</span>
                    </td>
                    <td>
                      <span className="active status-badge">Highly Active</span>
                    </td>
                    <td>
                      <a href="#">
                        <div className="btn btn-primary btn-sm">
                          <span>Join Chapter</span>
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="state-info">
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
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
                        <span>Kano State</span>
                      </div>
                    </td>
                    <td>
                      <span>Amina Ibrahim</span>
                    </td>
                    <td>
                      <span className="active status-badge">Highly Active</span>
                    </td>
                    <td>
                      <a href="#">
                        <div className="btn btn-primary btn-sm">
                          <span>Join Chapter</span>
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="state-info">
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
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
                        <span>FCT Abuja</span>
                      </div>
                    </td>
                    <td>
                      <span>Chidi Okoro</span>
                    </td>
                    <td>
                      <span className="active status-badge">Highly Active</span>
                    </td>
                    <td>
                      <a href="#">
                        <div className="btn btn-primary btn-sm">
                          <span>Join Chapter</span>
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="state-info">
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
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
                        <span>Rivers State</span>
                      </div>
                    </td>
                    <td>
                      <span>Blessing Nwosu</span>
                    </td>
                    <td>
                      <span className="status-badge moderate">
                        Moderately Active
                      </span>
                    </td>
                    <td>
                      <a href="#">
                        <div className="btn btn-primary btn-sm">
                          <span>Join Chapter</span>
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="state-info">
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
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
                        <span>Kaduna State</span>
                      </div>
                    </td>
                    <td>
                      <span>Musa Yusuf</span>
                    </td>
                    <td>
                      <span className="active status-badge">Highly Active</span>
                    </td>
                    <td>
                      <a href="#">
                        <div className="btn btn-primary btn-sm">
                          <span>Join Chapter</span>
                        </div>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section id="application-form" className="application-section">
          <div className="application-container">
            <div className="application-card">
              <div className="application-header">
                <h2 className="section-title">Join the Corps</h2>
                <p className="section-content">
                  Complete the multi-step application to begin your journey as a
                  public health champion.
                </p>
              </div>
              <form
                action="/submit-application"
                method="POST"
                data-form-id="fc26e191-ea60-4e37-8db7-873d5df967aa"
                className="application-form"
              >
                <div id="step-1" className="active form-step">
                  <div className="form-grid">
                    <div className="volunteer-hub-form-group">
                      <label htmlFor="full-name">Full Name</label>
                      <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        required
                        placeholder="Enter your full name"
                        data-form-field-id="full-name"
                      />
                    </div>
                    <div className="volunteer-hub-form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="your.email@example.com"
                        data-form-field-id="email"
                      />
                    </div>
                    <div className="volunteer-hub-form-group">
                      <label htmlFor="state">Primary State of Residence</label>
                      <select
                        id="state"
                        name="state"
                        required
                        data-form-field-id="state"
                      >
                        <option value="true">Select State</option>
                        <option value="lagos">Lagos</option>
                        <option value="kano">Kano</option>
                        <option value="fct">FCT Abuja</option>
                        <option value="rivers">Rivers</option>
                        <option value="kaduna">Kaduna</option>
                      </select>
                    </div>
                    <div className="volunteer-hub-form-group">
                      <label htmlFor="role">Preferred Role</label>
                      <select
                        id="role"
                        name="role"
                        required
                        data-form-field-id="role"
                      >
                        <option value="true">Select Role</option>
                        <option value="advocate">Health Advocate</option>
                        <option value="outreach">
                          Community Outreach Lead
                        </option>
                        <option value="research">Research Assistant</option>
                        <option value="ambassador">Youth Ambassador</option>
                      </select>
                    </div>
                  </div>
                  <div className="volunteer-hub-form-group">
                    <label htmlFor="skills">Key Skills &amp; Experience</label>
                    <textarea
                      id="skills"
                      name="skills"
                      required
                      minLength="20"
                      placeholder="Briefly describe your skills and why you want to join..."
                      data-form-field-id="skills"
                    ></textarea>
                  </div>
                  <div className="volunteer-hub-form-group">
                    <label htmlFor="resume">Upload CV/Resume (Optional)</label>
                    <div className="file-upload">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        data-form-field-id="resume"
                      />
                      <span>Click to upload or drag and drop</span>
                    </div>
                  </div>
                  <button
                    id="thq_button_WeW-"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_WeW-"
                    className="btn btn-primary btn-lg"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="training-section">
          <div className="training-container">
            <div className="training-header">
              <h2 className="section-title">Academy &amp; E-Learning</h2>
              <p className="section-content">
                Access world-class training modules designed to equip you for
                impact.
              </p>
            </div>
            <div className="training-grid">
              <div className="training-card">
                <div className="training-image">
                  <img
                    alt="Health Advocacy Training"
                    src="https://images.pexels.com/photos/8248290/pexels-photo-8248290.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <span className="training-tag">Core Module</span>
                </div>
                <div className="training-content">
                  <h3 className="benefit-title">Malaria Advocacy 101</h3>
                  <p className="section-content">
                    Learn the fundamentals of public health policy and how to
                    influence community leaders.
                  </p>
                  <div className="training-meta">
                    <span>Next Cohort: Oct 15</span>
                    <a href="#" className="volunteer-hub-link17">
                      <div className="btn btn-link">
                        <span>Enroll Now</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="training-card">
                <div className="training-image">
                  <img
                    alt="NTD Prevention Course"
                    src="https://images.pexels.com/photos/33132346/pexels-photo-33132346.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <span className="training-tag">Advanced</span>
                </div>
                <div className="training-content">
                  <h3 className="benefit-title">NTD Action Program</h3>
                  <p className="section-content">
                    Specialized training on identifying and preventing Neglected
                    Tropical Diseases in rural areas.
                  </p>
                  <div className="training-meta">
                    <span>Self-Paced</span>
                    <a href="#" className="volunteer-hub-link18">
                      <div className="btn btn-link">
                        <span>Start Learning</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="training-card">
                <div className="training-image">
                  <img
                    alt="Leadership Academy"
                    src="https://images.pexels.com/photos/32562419/pexels-photo-32562419.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <span className="training-tag">Leadership</span>
                </div>
                <div className="training-content">
                  <h3 className="benefit-title">
                    Youth Health Leadership Academy
                  </h3>
                  <p className="section-content">
                    Intensive 6-month program for aspiring health coordinators
                    and national leads.
                  </p>
                  <div className="training-meta">
                    <span>Applications Open</span>
                    <a href="#" className="volunteer-hub-link19">
                      <div className="btn btn-link">
                        <span>View Details</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="training-card">
                <div className="training-image">
                  <img
                    alt="Data Collection Training"
                    src="https://images.pexels.com/photos/30688589/pexels-photo-30688589.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <span className="training-tag">Technical</span>
                </div>
                <div className="training-content">
                  <h3 className="benefit-title">Community Data Collection</h3>
                  <p className="section-content">
                    Master mobile tools and methodologies for accurate health
                    reporting and research support.
                  </p>
                  <div className="training-meta">
                    <span>Ongoing</span>
                    <a href="#" className="volunteer-hub-link20">
                      <div className="btn btn-link">
                        <span>Enroll Now</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="onboarding-section">
          <div className="onboarding-container">
            <div className="onboarding-header">
              <h2 className="section-title">Your Journey to Impact</h2>
              <p className="section-content">
                A clear, structured path from application to active community
                deployment.
              </p>
            </div>
            <div className="onboarding-steps">
              <div className="step-item">
                <div className="volunteer-hub-step-number">
                  <span>01</span>
                </div>
                <div className="step-line"></div>
                <h3 className="step-title">Apply Online</h3>
                <p className="section-content">
                  Submit your details and role preferences through our secure
                  portal.
                </p>
              </div>
              <div className="step-item">
                <div className="volunteer-hub-step-number">
                  <span>02</span>
                </div>
                <div className="step-line"></div>
                <h3 className="step-title">Vetting &amp; Screening</h3>
                <p className="section-content">
                  Our team reviews applications to ensure mission alignment and
                  basic requirements.
                </p>
              </div>
              <div className="step-item">
                <div className="volunteer-hub-step-number">
                  <span>03</span>
                </div>
                <div className="step-line"></div>
                <h3 className="step-title">Training &amp; Certification</h3>
                <p className="section-content">
                  Complete the mandatory Health Advocate Core Module in our
                  Academy.
                </p>
              </div>
              <div className="step-item">
                <div className="volunteer-hub-step-number">
                  <span>04</span>
                </div>
                <div className="step-line"></div>
                <h3 className="step-title">Active Deployment</h3>
                <p className="section-content">
                  Join your local chapter and start participating in community
                  interventions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="testimonials-container">
            <div className="testimonials-header">
              <h2 className="section-title">Voices of Change</h2>
              <p className="section-content">
                See how our volunteers are transforming their communities and
                their careers.
              </p>
            </div>
            <div className="volunteer-hub-testimonials-rail">
              <div className="volunteer-hub-testimonial-card">
                <div className="volunteer-hub-testimonial-image">
                  <img
                    alt="Success Story 1"
                    src="https://images.pexels.com/photos/9968321/pexels-photo-9968321.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="volunteer-hub-testimonial-content">
                  <p className="section-content">
                    &quot;Joining the Corps gave me a platform to lead. I
                    started as a volunteer in Lagos and now I coordinate health
                    outreach programs for over 500 children.&quot;
                  </p>
                  <div className="testimonial-author">
                    <strong>Funmi Olatunji</strong>
                    <span>State Coordinator, Lagos</span>
                  </div>
                </div>
              </div>
              <div className="volunteer-hub-testimonial-card">
                <div className="volunteer-hub-testimonial-image">
                  <img
                    alt="Success Story 2"
                    src="https://images.pexels.com/photos/8061644/pexels-photo-8061644.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="volunteer-hub-testimonial-content">
                  <p className="section-content">
                    &quot;The training I received on NTDs was eye-opening.
                    We&apos;ve successfully reached 10 remote villages in Kano,
                    providing education that actually saves lives.&quot;
                  </p>
                  <div className="testimonial-author">
                    <strong>Ahmed Bello</strong>
                    <span>Community Lead, Kano</span>
                  </div>
                </div>
              </div>
              <div className="volunteer-hub-testimonial-card">
                <div className="volunteer-hub-testimonial-image">
                  <img
                    alt="Success Story 3"
                    src="https://images.pexels.com/photos/8061690/pexels-photo-8061690.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="volunteer-hub-testimonial-content">
                  <p className="section-content">
                    &quot;The Youth Leadership Academy changed my career
                    trajectory. I&apos;m now pursuing a Master&apos;s in Global
                    Health, fully supported by the network I built here.&quot;
                  </p>
                  <div className="testimonial-author">
                    <strong>Nneka Williams</strong>
                    <span>National Youth Ambassador</span>
                  </div>
                </div>
              </div>
              <div className="volunteer-hub-testimonial-card">
                <div className="volunteer-hub-testimonial-image">
                  <img
                    alt="Success Story 4"
                    src="https://images.pexels.com/photos/6802855/pexels-photo-6802855.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="volunteer-hub-testimonial-content">
                  <p className="section-content">
                    &quot;Malaria prevention isn&apos;t just about nets;
                    it&apos;s about education. Being part of NMNYC allows me to
                    be the bridge my community needs.&quot;
                  </p>
                  <div className="testimonial-author">
                    <strong>Ibrahim Musa</strong>
                    <span>Health Advocate, Kaduna</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="final-cta-container">
            <div className="cta-grid">
              <div className="volunteer-hub-cta-content">
                <h2 className="section-title">Ready to Make History?</h2>
                <p className="section-content">
                  Join thousands of young Nigerians in the mission to eliminate
                  Malaria and NTDs. Your leadership can change the health
                  landscape of our nation.
                </p>
                <div className="volunteer-hub-cta-actions">
                  <a href="#application-form" className="volunteer-hub-link21">
                    <div className="btn btn-primary btn-lg">
                      <span>Apply as a Volunteer</span>
                    </div>
                  </a>
                  <a href="#" className="volunteer-hub-link22">
                    <div className="btn-outline btn btn-lg">
                      <span>Partner With Us</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="cta-impact">
                <div className="volunteer-hub-impact-card">
                  <div className="volunteer-hub-impact-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4zM14 7l3 3m-7.6.6l-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="impact-text">
                    <h3>Support Our Programs</h3>
                    <p>
                      Every donation fuels volunteer deployment and community
                      health education campaigns.
                    </p>
                    <a href="#">
                      <div className="btn btn-link">
                        <span>Donate to the Cause</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="volunteer-hub-container2">
          <div className="volunteer-hub-container3">
            <Script
              html={`<script defer data-name="volunteer-hub-logic">
(function(){
  // Animated Statistics Logic
  const stats = document.querySelectorAll(".stat-number")
  const observerOptions = {
    threshold: 0.5,
  }

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target
        const countTo = parseInt(target.getAttribute("data-target"))
        const duration = 2000
        const startTime = performance.now()

        const animate = (currentTime) => {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)

          let currentCount = Math.floor(progress * countTo)

          if (countTo >= 1000) {
            target.textContent = (currentCount / 1000).toFixed(0) + "k+"
            if (countTo === 2) target.textContent = currentCount + "M+" // Manual fix for the Million stat
          } else {
            target.textContent = currentCount + "+"
          }

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            // Ensure final value is correct
            if (countTo === 15000) target.textContent = "15k+"
            if (countTo === 36) target.textContent = "36+"
            if (countTo === 2) target.textContent = "2M+"
          }
        }

        requestAnimationFrame(animate)
        observer.unobserve(target)
      }
    })
  }, observerOptions)

  stats.forEach((stat) => statsObserver.observe(stat))

  // Form Step Logic (Visual Enhancement)
  const applicationForm = document.querySelector(".application-form")
  if (applicationForm) {
    applicationForm.addEventListener("submit", (e) => {
      // Native validation will handle the requirements
      // This is just for a success visual feedback if needed
      console.log("Application submitted")
    })
  }

  // Smooth Horizontal Scroll for Testimonials (Optional Enhancement)
  const rail = document.querySelector(".testimonials-rail")
  if (rail) {
    let isDown = false
    let startX
    let scrollLeft

    rail.addEventListener("mousedown", (e) => {
      isDown = true
      startX = e.pageX - rail.offsetLeft
      scrollLeft = rail.scrollLeft
    })

    rail.addEventListener("mouseleave", () => {
      isDown = false
    })

    rail.addEventListener("mouseup", () => {
      isDown = false
    })

    rail.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - rail.offsetLeft
      const walk = (x - startX) * 2
      rail.scrollLeft = scrollLeft - walk
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .volunteer-hub-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .volunteer-hub-link10 {
            display: contents;
          }
          .volunteer-hub-link11 {
            display: contents;
          }
          .volunteer-hub-link17 {
            display: contents;
          }
          .volunteer-hub-link18 {
            display: contents;
          }
          .volunteer-hub-link19 {
            display: contents;
          }
          .volunteer-hub-link20 {
            display: contents;
          }
          .volunteer-hub-link21 {
            display: contents;
          }
          .volunteer-hub-link22 {
            display: contents;
          }
          .volunteer-hub-container2 {
            display: none;
          }
          .volunteer-hub-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default VolunteerHub
