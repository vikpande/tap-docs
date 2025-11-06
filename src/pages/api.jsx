import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

export default function APIPage() {
  return (
    <Layout
      title="API Documentation"
      description="Trust Assurance Protocol API Documentation - Coming Soon"
    >
      <Head>
        <title>API Documentation | TAP Developer Platform</title>
        <meta
          name="description"
          content="Trust Assurance Protocol API documentation is coming soon. Contact us to co-create a safe, secure, and trust-based agentic economy."
        />
      </Head>

      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2 text--center">
            <div className="margin-bottom--lg">
              <svg
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ margin: '0 auto', opacity: 0.7 }}
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="var(--ifm-color-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="var(--ifm-color-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="var(--ifm-color-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h1 className="margin-bottom--md" style={{ color: 'var(--ifm-heading-color)' }}>API Documentation Coming Soon</h1>
            
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', marginBottom: '2rem', color: 'var(--ifm-font-color-base)' }}>
              We are currently busy building with our partners and will soon publish our comprehensive API documentation. 
              The Trust Assurance Protocol APIs will provide you with powerful tools to create verifiable credentials, 
              manage AI agent identities, and enforce trust policies programmatically.
            </p>

            <div className="margin-bottom--xl" style={{ 
              padding: '2rem', 
              backgroundColor: 'var(--ifm-background-surface-color)',
              borderRadius: '0.75rem',
              border: '1px solid var(--ifm-color-emphasis-200)'
            }}>
              <h2 className="margin-bottom--md" style={{ color: 'var(--ifm-heading-color)' }}>Build the Future of Trusted AI</h2>
              <p className="margin-bottom--lg" style={{ color: 'var(--ifm-font-color-base)' }}>
                If you would like to build or co-create a safe, secure, and trust-based agentic economy with us, 
                we'd love to hear from you. Join us in shaping the future of verifiable AI systems.
              </p>
              
              <div className="margin-bottom--md">
                <Link
                  to="/contact"
                  className="button button--primary button--lg"
                >
                  Contact Us
                </Link>
              </div>
              
              <p style={{ fontSize: '0.875rem', color: 'var(--ifm-font-color-base)' }}>
                Interested in early access? Technical partnerships? Integration support? 
                <br />
                Let's talk about how we can work together.
              </p>
            </div>

            <div className="margin-top--xl">
              <h3 className="margin-bottom--md" style={{ color: 'var(--ifm-heading-color)' }}>What to Expect</h3>
              <div className="row">
                <div className="col col--4">
                  <div className="padding--md">
                    <h4 style={{ color: 'var(--ifm-heading-color)' }}>🔐 Identity APIs</h4>
                    <p style={{ color: 'var(--ifm-font-color-base)' }}>
                      Register agents, issue DIDs, and manage verifiable credentials
                    </p>
                  </div>
                </div>
                <div className="col col--4">
                  <div className="padding--md">
                    <h4 style={{ color: 'var(--ifm-heading-color)' }}>✅ Verification APIs</h4>
                    <p style={{ color: 'var(--ifm-font-color-base)' }}>
                      Validate credentials, check attestations, and verify trust scores
                    </p>
                  </div>
                </div>
                <div className="col col--4">
                  <div className="padding--md">
                    <h4 style={{ color: 'var(--ifm-heading-color)' }}>📊 Compliance APIs</h4>
                    <p style={{ color: 'var(--ifm-font-color-base)' }}>
                      Monitor compliance, access audit logs, and generate reports
                    </p>
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
