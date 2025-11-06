/**
 * Sidebar configuration for Guides section
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guidesSidebar: [
    {
      type: 'html',
      value: '<div style="font-weight: 600; font-size: 1.1em; margin-bottom: 1em; color: var(--ifm-color-primary);">Trust Assurance Protocol (TAP)</div>',
      defaultStyle: true,
    },
    {
      type: 'doc',
      id: 'overview',
      label: 'Overview',
    },
    {
      type: 'doc',
      id: 'tap-workflow',
      label: 'TAP workflow',
    },
    {
      type: 'doc',
      id: 'under-the-hood',
      label: 'Under the hood',
    },
    {
      type: 'doc',
      id: 'proof-of-concept',
      label: 'Proof of Concept',
    },
    {
      type: 'doc',
      id: 'integrations',
      label: 'Integrations',
    },
    {
      type: 'doc',
      id: 'more',
      label: 'More',
    },
  ],
};

module.exports = sidebars;

