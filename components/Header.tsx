// Copyright 2022-2023 the Deno authors. All rights reserved. MIT license.

import { Header as DocComponentsHeader } from "$doc_components/header.tsx";
import GlobalSearch from "@/islands/GlobalSearch.tsx";

<<<<<<< HEAD
interface HrefEntry {
  content: string;
  href: string;
  icon?: (props: { class?: string }) => JSX.Element;
}
interface ChildrenEntry {
  content: string;
  children: HrefEntry[];
}

const entries: Array<HrefEntry | ChildrenEntry> = [
  {
    content: "Modules",
    children: [
      { href: "/std", content: "标准库" },
      { href: "/x", content: "第三方模块" },
      { href: "/manual/node", content: "NPM" },
    ],
  },
  {
    content: "Docs",
    children: [
      { href: "/manual", content: "手册" },
      { href: "/api", content: "API" },
    ],
  },
  { href: "https://deno.com/deploy", content: "Deploy" },
  {
    content: "Community",
    children: [
      {
        href: "https://discord.gg/deno",
        content: "Discord",
        icon: Icons.Discord,
      },
      {
        href: "https://github.com/denoland",
        content: "GitHub",
        icon: Icons.GitHub,
      },
      {
        href: "https://twitter.com/deno_land",
        content: "Twitter",
        icon: Icons.Twitter,
      },
      {
        href: "https://www.youtube.com/c/deno_land",
        content: "YouTube",
        icon: Icons.YouTube,
      },
      {
        href: "https://fosstodon.org/@deno_land",
        content: "Mastodon",
        icon: Icons.Mastodon,
      },
    ],
  },
];

type ContentTypes = (typeof entries)[number]["content"];

export function Header({ selected, manual }: {
  selected?: ContentTypes;
=======
export function Header({ manual }: {
>>>>>>> 2a56af2d40f4288b26ca6f7f21702a2925a317cc
  manual?: boolean;
}) {
  return <DocComponentsHeader manual={manual} search={<GlobalSearch />} />;
}
