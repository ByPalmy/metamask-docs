// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebar = {
  walletSidebar: [
    "index",
    {
      type: "category",
      label: "How to",
      link: { type: "generated-index", slug: "/how-to" },
      items: [{ type: "autogenerated", dirName: "how-to" }],
      collapsed: false,
    },
    {
      type: "category",
      label: "Concepts",
      link: { type: "generated-index", slug: "/concepts" },
      items: [{ type: "autogenerated", dirName: "concepts" }],
    },
    {
      type: "category",
      label: "Tutorials",
      link: { type: "generated-index", slug: "/tutorials" },
      items: [{ type: "autogenerated", dirName: "tutorials" }],
    },
    {
      type: "category",
      label: "Reference",
      link: { type: "generated-index", slug: "/reference" },
      items: [
        {
          type: "doc",
          id: "reference/provider-api",
        },
      ],
    },
  ],
};

module.exports = sidebar;
