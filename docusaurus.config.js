const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Every Man's Land",
  tagline: "A companion app for adventurers, athletes, and explorers.",
  url: "https://docs.everymansland.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "everymansland",
  projectName: "docs",
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/everymansland/docs/edit/master",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/everymansland/docs/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Every Man's Land",
        logo: {
          alt: "A companion app for adventurers, athletes, and explorers.",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {to: "/blog", label: "Blog", position: "left"},
          // {
          //   href: "https://github.com/everymansland/api",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting started",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/everymansland",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Every Man's Land. Built with Docusaurus. TSS® is a registered trademark of TrainingPeaks, LLC`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["http"]
      },
    }),
}

module.exports = config
