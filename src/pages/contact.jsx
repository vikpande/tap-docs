import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    inquiryType: 'demo',
    links: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        inquiryType: 'demo',
        links: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with the Trust Assurance Protocol team"
    >
      <Head>
        <title>Contact Us | TAP Developer Platform</title>
        <meta
          name="description"
          content="Contact the Trust Assurance Protocol team for sales, technical integrations, partnerships, and more."
        />
      </Head>

      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1 className="margin-bottom--lg">Contact Trust Assurance Protocol</h1>
            <p className="margin-bottom--lg text--secondary">
              Have questions about TAP? Want to explore partnerships or technical integrations?
              Fill out the form below and our team will get back to you shortly.
            </p>

            {submitted && (
              <div
                className="alert alert--success margin-bottom--lg"
                role="alert"
              >
                <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="margin-bottom--xl">
              <div className="margin-bottom--md">
                <label htmlFor="inquiryType" className="margin-bottom--sm" style={{ display: 'block', fontWeight: 600 }}>
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '1rem',
                    border: '1px solid var(--ifm-color-emphasis-300)',
                    borderRadius: '0.375rem',
                    backgroundColor: 'var(--ifm-background-color)',
                    color: 'var(--ifm-font-color-base)',
                  }}
                >
                  <option value="demo">Demo</option>
                  <option value="sales">Sales</option>
                  <option value="technical">Technical Integrations</option>
                  <option value="partnerships">Partnerships</option>
                  <option value="events">Events</option>
                  <option value="support">Technical Support</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="margin-bottom--md">
                <label htmlFor="name" className="margin-bottom--sm" style={{ display: 'block', fontWeight: 600 }}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '1rem',
                    border: '1px solid var(--ifm-color-emphasis-300)',
                    borderRadius: '0.375rem',
                    backgroundColor: 'var(--ifm-background-color)',
                    color: 'var(--ifm-font-color-base)',
                  }}
                />
              </div>

              <div className="margin-bottom--md">
                <label htmlFor="email" className="margin-bottom--sm" style={{ display: 'block', fontWeight: 600 }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@company.com"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '1rem',
                    border: '1px solid var(--ifm-color-emphasis-300)',
                    borderRadius: '0.375rem',
                    backgroundColor: 'var(--ifm-background-color)',
                    color: 'var(--ifm-font-color-base)',
                  }}
                />
              </div>

              <div className="margin-bottom--md">
                <label htmlFor="company" className="margin-bottom--sm" style={{ display: 'block', fontWeight: 600 }}>
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Your company name"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '1rem',
                    border: '1px solid var(--ifm-color-emphasis-300)',
                    borderRadius: '0.375rem',
                    backgroundColor: 'var(--ifm-background-color)',
                    color: 'var(--ifm-font-color-base)',
                  }}
                />
              </div>

              <div className="margin-bottom--md">
                <label htmlFor="links" className="margin-bottom--sm" style={{ display: 'block', fontWeight: 600 }}>
                  Relevant Links
                </label>
                <input
                  type="text"
                  id="links"
                  name="links"
                  value={formData.links}
                  onChange={handleChange}
                  placeholder="GitHub, LinkedIn, Website, etc."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '1rem',
                    border: '1px solid var(--ifm-color-emphasis-300)',
                    borderRadius: '0.375rem',
                    backgroundColor: 'var(--ifm-background-color)',
                    color: 'var(--ifm-font-color-base)',
                  }}
                />
                <small className="text--secondary">Optional: Share links to your GitHub, LinkedIn, website, or other relevant resources</small>
              </div>

              <div className="margin-bottom--md">
                <label htmlFor="message" className="margin-bottom--sm" style={{ display: 'block', fontWeight: 600 }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '1rem',
                    border: '1px solid var(--ifm-color-emphasis-300)',
                    borderRadius: '0.375rem',
                    backgroundColor: 'var(--ifm-background-color)',
                    color: 'var(--ifm-font-color-base)',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <button
                type="submit"
                className="button button--primary button--lg"
                style={{ width: '100%' }}
              >
                Send Message
              </button>
            </form>

            <div className="margin-top--xl">
              <h2>Other Ways to Reach Us</h2>
              <div className="row margin-top--md">
                <div className="col col--6">
                  <div className="card margin-bottom--md">
                    <div className="card__body">
                      <h3>Developer Community</h3>
                      <p>Join our Discord community for technical discussions and support.</p>
                      <a href="https://discord.gg/tap-protocol" className="button button--secondary button--sm">
                        Join Discord
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col col--6">
                  <div className="card margin-bottom--md">
                    <div className="card__body">
                      <h3>GitHub</h3>
                      <p>Explore our open-source repositories and contribute to TAP.</p>
                      <a href="https://github.com/tap-protocol" className="button button--secondary button--sm">
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

