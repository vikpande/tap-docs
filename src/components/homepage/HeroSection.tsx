import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

const FEATURES = [
  'Open by Design: Built on open standards (DID, VC, TEE attestation)',
  'Programmable Trust: Define and enforce your own policy rules',
  'Compliance Ready: Designed for AI regulations like the EU AI Act',
  'Interoperable: Works across centralized or decentralized environments',
  'Developer Friendly: Clean APIs, example code, and transparent documentation',
];

export default function HeroSection() {
  return (
    <div className="noise-bg pb-14">
      {/* Hero Section */}
      <section className="no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between py-14">
          <h1 className="mb-4 font-jakarta text-5xl font-bold text-center">
            Developer Platform | Trust Assurance Protocol (TAP)
          </h1>
          <p className="max-w-3xl text-center text-text-400 text-lg mb-8">
            Welcome to the TAP Developer Platform, the foundation for building and verifying trusted AI systems. 
            TAP makes it easy for developers to issue, verify, and manage verifiable credentials for AI agents, 
            all through simple APIs and clear documentation. Whether you're registering a new agent, validating 
            an attested task, or building compliance dashboards, TAP provides the tools to make trust programmable.
          </p>
          <div className="flex gap-4 mb-12">
            <Link
              to="https://dev.dyte.io/register"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark hover:no-underline"
            >
              Sign up
            </Link>
            <Link
              to="https://dev.dyte.io"
              className="rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-white hover:no-underline"
            >
              Log in
            </Link>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="mx-auto max-w-6xl px-4 mb-16">
        <div className="rounded-3xl border border-secondary-700 bg-secondary-900 p-8 dark:border-secondary-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="mb-4 font-jakarta text-3xl font-bold">
                Get started in 5 minutes
              </h2>
              <p className="text-text-400 mb-6">
                You can register your first agent and issue a verifiable Agent Passport in just a few steps.
                No guesswork, no complexity. Just your first successful call, fast.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/guides"
                  className="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark hover:no-underline"
                >
                  Get started
                </Link>
                <Link
                  to="/api"
                  className="rounded-lg border-2 border-secondary-700 px-6 py-3 font-semibold hover:border-primary hover:no-underline"
                >
                  API reference
                </Link>
              </div>
            </div>
            <div className="rounded-lg bg-black p-4 font-mono text-sm">
              <div className="mb-2 text-gray-500">index.js</div>
              <div className="text-gray-400">
                <span className="text-purple-400">// Import the SDK</span><br />
                <span className="text-purple-400">import</span> <span className="text-blue-400">ComingSoon</span> <span className="text-purple-400">from</span> <span className="text-green-400">"coming-soon"</span>;<br />
                <br />
                {'{'}<br />
                &nbsp;&nbsp;<span className="text-blue-400">message</span>: <span className="text-green-400">"Hello, world!"</span><br />
                {'}'});
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Build with TAP */}
      <section className="mx-auto max-w-6xl px-4 mb-16">
        <h2 className="mb-8 text-center font-jakarta text-4xl font-bold">
          Why Build with TAP
        </h2>
        <div className="grid gap-4 md:grid-cols-1 max-w-3xl mx-auto">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-secondary-700 bg-secondary-900 p-6 dark:border-secondary-800"
            >
              <p className="mb-0 text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="mx-auto max-w-6xl px-4 mb-16">
        <div className="rounded-3xl border border-secondary-700 bg-secondary-900 p-12 text-center dark:border-secondary-800">
          <h2 className="mb-4 font-jakarta text-3xl font-bold">
            Join the TAP Developer Community
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-text-400 text-lg">
            Be part of a growing network of developers building the future of verifiable AI. 
            Ask questions, share integrations, or contribute to the open-source SDK.
          </p>
          <p className="mx-auto max-w-3xl text-xl font-semibold text-primary">
            Make AI trustworthy by design, with verifiable identity, secure computation, 
            and auditable compliance built into every agent interaction.
          </p>
        </div>
      </section>
    </div>
  );
}
