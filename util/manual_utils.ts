// Copyright 2022 the Deno authors. All rights reserved. MIT license.

<<<<<<< HEAD
import { getSourceURL } from "./registry_utils.ts";
import VERSIONS from "@/versions.json" assert { type: "json" };

const githubBasepath = "https://cdn.jsdelivr.net/gh/denocn/deno_docs@";
const docpath = "https://github.com/denocn/deno_docs/blob/";
=======
import compareVersions from "$tiny-version-compare";
import { join } from "$std/path/mod.ts";
import { getSourceURL } from "./registry_utils.ts";
import VERSIONS from "@/versions.json" assert { type: "json" };

const githubBasepath = "https://raw.githubusercontent.com/denoland/manual/";
const oldSourcepath = "https://github.com/denoland/deno/blob/";
const sourcepath = "https://github.com/denoland/manual/blob/";
>>>>>>> f58aab878909a1896f6081dc896127d36491ccd5

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

export function getDocURL(version: string, path: string): string {
<<<<<<< HEAD
  version = "master";
  return `${docpath}${version}${path}.md`;
=======
  if (isOldVersion(version)) {
    return `${oldSourcepath}${version}/docs${path}.md`;
  }

  return `${sourcepath}${version}${path}.md`;
>>>>>>> f58aab878909a1896f6081dc896127d36491ccd5
}

export function isPreviewVersion(version: string): boolean {
  return VERSIONS.cli.find((v) => v === version) === undefined;
}
