// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  sidebar: [
    {
      type: "category",
      label: "Overview",
      collapsed: false,
      items: [{ type: "autogenerated", dirName: "overview" }],
    },
    {
      type: "category",
      label: "Quickstart",
      collapsed: false,
      items: [{ type: "autogenerated", dirName: "quickstart" }],
    },
    {
      type: "category",
      label: "Learn",
      items: [{ type: "autogenerated", dirName: "learn" }],
    },
    {
      type: "category",
      label: "Argos CLI",
      items: [{ type: "autogenerated", dirName: "api" }],
    },
    {
      type: "category",
      label: "Subscription",
      items: [{ type: "autogenerated", dirName: "subscription" }],
    },
    {
      type: "category",
      label: "Git Providers",
      items: [{ type: "autogenerated", dirName: "git-providers" }],
    },
    {
      type: "category",
      label: "Community",
      items: [
        "community/about-us",
        "community/contact-us",
        {
          type: "link",
          label: "GitHub",
          href: "https://github.com/argos-ci/argos",
        },
        {
          type: "link",
          label: "Discord",
          href: "https://argos-ci.com/discord",
        },
        {
          type: "link",
          label: "Twitter",
          href: "https://twitter.com/argos_ci",
        },
      ],
    },
    {
      type: "category",
      label: "Legal",
      items: [
        {
          type: "link",
          label: "Security",
          href: "https://www.argos-ci.com/security",
        },
        {
          type: "link",
          label: "Privacy",
          href: "https://www.argos-ci.com/privacy",
        },
        {
          type: "link",
          label: "Terms",
          href: "https://www.argos-ci.com/terms",
        },
      ],
    },
  ],
};

module.exports = sidebars;
