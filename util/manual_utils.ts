// Copyright 2022 the Deno authors. All rights reserved. MIT license.

import { join } from "$std/path/mod.ts";
import { getSourceURL } from "./registry_utils.ts";
import VERSIONS from "@/versions.json" assert { type: "json" };

const githubBasepath = "https://cdn.jsdelivr.net/gh/denocn/deno_docs@";
const sourcepath = "https://github.com/denocn/deno_docs/blob/";

export const versions = VERSIONS.cli;

export interface TableOfContents {
  [slug: string]: {
    name: string;
    children?: TableOfContents;
  } | string;
}

export function basepath(version: string) {
  const manualPath = Deno.env.get("MANUAL_PATH");
  if (manualPath) {
    return "file://" + join(Deno.cwd(), manualPath);
  }
  if (isPreviewVersion(version)) {
    return githubBasepath + version;
  }
  return getSourceURL("manual", version, "");
}

export async function getTableOfContents(
  version: string,
): Promise<TableOfContents> {
  version = "master";
  const res = await fetch(`${githubBasepath}${version}/toc.json`);
  if (res.status !== 200) {
    throw Error(
      `Got an error (${res.status}) while getting the manual table of contents:\n${await res
        .text()}`,
    );
  }
  return await res.json();
}

export function getFileURL(version: string, path: string): string {
  version = "master";
  return `${githubBasepath}${version}${path}.md`;
}

export function getDocURL(_version: string, path: string): string {
  return `${sourcepath}master${path}.md`;
}

export function isPreviewVersion(version: string): boolean {
  return VERSIONS.cli.find((v) => v === version) === undefined;
}
