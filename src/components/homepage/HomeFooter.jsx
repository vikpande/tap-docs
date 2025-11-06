import React from 'react';
import Link from '@docusaurus/Link';
import { Linkedin, Github } from '@styled-icons/boxicons-logos';

export default function Footer() {
  return (
    <footer className="bg-[#F4F7FF] dark:bg-[#191919]">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col px-6 py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-base text-gray-700 hover:text-primary hover:no-underline dark:text-[#f9f9f9]"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/tap-protocol"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/trust-assurance-protocol/about/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
          </div>
        </div>

        <hr className="my-6 !bg-gray-300 dark:!bg-[#999]" />

        <div className="flex flex-col gap-4 text-center lg:text-left">
          <span className="text-sm text-gray-500 dark:text-[#999]">
            Copyright © Trust Assurance Protocol {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
