// Copyright 2022 the Deno authors. All rights reserved. MIT license.

/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { RawCodeBlock } from "./CodeBlock.tsx";
import { Markdown } from "./Markdown.tsx";
import { fileTypeFromURL } from "@/util/registry_utils.ts";
import * as Icons from "./Icons.tsx";

export function FileDisplay(props: {
  isStd: boolean;
  version: string;
  raw?: string;
  sourceURL: string;
  filetypeOverride?: string;
  repositoryURL: string;
  url: URL;
  docable?: boolean;
}) {
  const filetype = props.filetypeOverride ?? fileTypeFromURL(props.sourceURL);

  const doc = new URL(props.url);
  doc.searchParams.delete("source");

  return (
    <div class={tw`border border-gray-200 rounded-lg`}>
      <div
        class={tw`py-3 px-5 flex justify-between items-center border-b border-gray-200`}
      >
        <div class={tw`flex items-center gap-2`}>
          <Icons.Source class="text-gray-500" />
          <span class={tw`text-lg leading-5 font-semibold`}>File</span>
        </div>
<<<<<<< HEAD
        <div class={tw`inline-flex items-center`}>
          <div>
            {props.sourceURL && (
              <a href={props.sourceURL} class={tw`link ml-4`}>
                Raw
              </a>
            )}
            {props.repositoryURL &&
              (
                <a href={props.repositoryURL} class={tw`link ml-2 sm:ml-4`}>
                  仓库
                </a>
              )}
          </div>
          {filetypeIsJS(filetype) &&
            (
              <div class={tw`ml-4`}>
                <a href={doc.href} class={tw`link`}>文档</a>
              </div>
            )}
          {filetype === "markdown" && (
            <div
              class={tw`inline-flex ml-4 flex-nowrap shadow-sm rounded-md`}
            >
              <a
                href={preview.href}
                class={tw`relative inline-flex items-center px-1.5 py-1.5 rounded-l-md border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                  !isRaw ? "bg-white" : "bg-gray-100"
                }`}
              >
                <span class={tw`sr-only`}>预览</span>
                <Icons.Page />
              </a>
              <a
                href={raw.href}
                class={tw`-ml-px relative inline-flex items-center px-1.5 py-1.5 rounded-r-md border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                  isRaw ? "bg-white" : "bg-gray-100"
                }`}
              >
                <span class={tw`sr-only`}>代码</span>
                <Icons.Code />
              </a>
            </div>
=======
        <div
          class={tw`flex items-center gap-3 children:(border border-dark-border rounded p-2 hover:bg-ultralight)`}
        >
          <a href={props.repositoryURL} title="Repository URL">
            <Icons.GitHub class="h-4 w-4" />
          </a>
          {props.docable && (
            <a href={doc.href} title="Documentation">
              <Icons.Manual class="h-4" />
            </a>
>>>>>>> fb427a1b016504155344ca0fdf62092fbde62b7d
          )}
        </div>
      </div>

      <div>
        {(() => {
          switch (filetype) {
            case "javascript":
            case "typescript":
            case "tsx":
            case "jsx":
            case "json":
            case "yaml":
            case "rust":
            case "toml":
            case "python":
            case "wasm":
            case "makefile":
            case "dockerfile":
              return (
                <RawCodeBlock
                  code={props.raw!}
                  language={filetype}
                  enableLineRef={true}
                  class={tw`p-2 sm:px-3 md:px-4`}
                  url={props.url}
                />
              );
            case "html":
              return (
                <RawCodeBlock
                  code={props.raw!}
                  language="markdown"
                  class={tw`p-2 sm:px-3 md:px-4`}
                  url={props.url}
                  enableLineRef
                />
              );
            case "markdown": {
              return (
                <div class={tw`p-6`}>
                  <Markdown
                    source={props.isStd
                      ? props.raw!
                      : props.raw!.replace(/\$STD_VERSION/g, props.version)}
                  />
                </div>
              );
            }
            case "image":
              return <img class={tw`w-full`} src={props.sourceURL} />;
            default:
              return (
                <RawCodeBlock
                  code={props.raw!}
                  language="text"
                  class={tw`p-2 sm:px-3 md:px-4`}
                  url={props.url}
                  enableLineRef
                />
              );
          }
        })()}
      </div>
    </div>
  );
}
