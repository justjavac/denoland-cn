// Copyright 2022 the Deno authors. All rights reserved. MIT license.

import { CodeBlock } from "@/components/CodeBlock.tsx";
import { ContentMeta } from "@/components/ContentMeta.tsx";
import { Footer } from "@/components/Footer.tsx";
import { InlineCode } from "@/components/InlineCode.tsx";
import { Header } from "@/components/Header.tsx";
import HelloBar from "@/islands/HelloBar.tsx";
import { Background } from "@/components/HeroBackground.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

import versions from "@/versions.json" assert { type: "json" };
import { getCookies } from "https://deno.land/std@0.143.0/http/cookie.ts";

interface Data {
  isFirefox: boolean;
  hellobarClosedTo: string;
}

export default function Home({ data, url }: PageProps<Data>) {
  const complexExampleProgram = `import { serve } from "https://deno.land/std@${
    versions.std[0]
  }/http/server.ts";
serve(req => new Response("Hello World\\n"));`;

  const denoTestExample = `deno test https://deno.land/std@${
    versions.std[0]
  }/testing/chai_example.ts
running 3 tests from https://deno.land/std@${
    versions.std[0]
  }/testing/chai_example.ts
test we can make chai assertions ... ok (8ms)
test we can make chai expectations ... ok (2ms)
test we can use chai should style ... ok (4ms)

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (27ms)`;

  const hellobarTo =
    "https://deno.news/archive/52-deno-126-isolate-clouds-and-the-edge";
  return (
    <div>
      <ContentMeta
        title="Deno — 现代的 JavaScript 和 TypeScript 运行时"
        description="Deno 是一个简单的，现代化的 JavaScript 和 TypeScript 运行时，基于 V8 和 Rust 构建。"
        creator="@deno_land"
        noAppendTitle
      />
      {hellobarTo !== data.hellobarClosedTo &&
        (
          <HelloBar to={hellobarTo}>
            Check out Deno News issue #52!
          </HelloBar>
        )}
      <div class="bg-white">
        <div class="bg-gray-50 overflow-x-hidden border-b border-gray-200 relative">
          {!data.isFirefox && <Background />}
          <Header main />
          <div class="relative section-x-inset-sm pt-12 pb-20 flex flex-col items-center">
            <h1 class="font-extrabold text-5xl leading-10 tracking-tight text-gray-900">
              Deno
            </h1>
<<<<<<< HEAD
            <h2
              class={tw`mt-4 sm:mt-5 font-light text-2xl text-center leading-tight text-gray-900`}
            >
              <strong class={tw`font-semibold`}>现代</strong>的{" "}
              <strong class={tw`font-semibold`}>JavaScript</strong> 和{" "}
              <strong class={tw`font-semibold`}>TypeScript</strong> 运行时。
=======
            <h2 class="mt-4 sm:mt-5 font-light text-2xl text-center leading-tight text-gray-900">
              A <strong class="font-semibold">modern</strong> runtime for{" "}
              <strong class="font-semibold">JavaScript</strong> and{" "}
              <strong class="font-semibold">TypeScript</strong>
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
            </h2>
            <a
              href="/#installation"
              class="rounded-full mt-8 px-8 py-2 transition-colors duration-75 ease-in-out bg-blue-500 hover:bg-blue-400 text-white text-lg shadow-lg"
            >
              安装
            </a>
            <a
              href="https://github.com/denoland/deno/releases/latest"
              class="mt-4"
            >
              {versions.cli[0]}
            </a>
          </div>
        </div>
<<<<<<< HEAD
        <div class={tw`section-x-inset-sm mt-20`}>
          <p class={tw`my-4 text-gray-700`}>
            Deno 是一个简单的、现代的、安全的 JavaScript、TypeScript 和 WebAssembly 运行时，基于 V8
            引擎并采用 Rust 构建。
=======
        <div class="section-x-inset-sm mt-20">
          <p class="my-4 text-gray-700">
            Deno is a simple, modern and secure runtime for JavaScript,
            TypeScript, and WebAssembly that uses V8 and is built in Rust.
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
          </p>
          <ol class="ml-8 list-disc text-gray-700">
            <li>
<<<<<<< HEAD
              提供符合{" "}
              <a class={tw`link`} href="/manual/runtime/web_platform_apis">
                Web 平台标准的函数集
              </a>。
=======
              Provides{" "}
              <a class="link" href="/manual/runtime/web_platform_apis">
                web platform functionality
              </a>{" "}
              and adopts web platform standards.
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
            </li>
            <li>
              默认安全。除非显式开启，否则没有文件、网络、环境变量的访问权限。
            </li>
            <li>
<<<<<<< HEAD
              开箱即用的 <a class={tw`link`} href="/manual/typescript">TypeScript</a>
              {" "}
              支持。
=======
              Supports <a class="link" href="/manual/typescript">TypeScript</a>
              {" "}
              out of the box.
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
            </li>
            <li>单一的可执行文件</li>
            <li>
<<<<<<< HEAD
              拥有一些列{" "}
              <a class={tw`link`} href="/manual/tools">
                内置开发工具
              </a>{" "}
              例如依赖检查器 (
              <a class={tw`link`} href="/manual/tools/dependency_inspector">
                <InlineCode>deno info</InlineCode>
              </a>) 和代码格式化 (<a class={tw`link`} href="/manual/tools/formatter">
=======
              Has{" "}
              <a class="link" href="/manual/tools">
                built-in development tooling
              </a>{" "}
              like a dependency inspector (
              <a class="link" href="/manual/tools/dependency_inspector">
                <InlineCode>deno info</InlineCode>
              </a>
              ) and a code formatter (
              <a class="link" href="/manual/tools/formatter">
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
                <InlineCode>deno fmt</InlineCode>
              </a>)。
            </li>
            <li>
              自带一套经过审查 (安全审计) 的标准模块，并保证了代码与 Deno 完全兼容：{" "}
              <a
<<<<<<< HEAD
                href="https://doc.deno.js.cn/https://deno.land/std"
                class={tw`link`}
=======
                href="https://doc.deno.land/https://deno.land/std"
                class="link"
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
              >
                deno.land/std
              </a>.
            </li>
            <li>
              已有很多{" "}
              <a
                href="https://github.com/denoland/deno/wiki#companies-interested-in-deno"
                class="link"
              >
                公司对 Deno 感兴趣
              </a>
            </li>
          </ol>
        </div>
<<<<<<< HEAD
        <div class={tw`section-x-inset-sm mt-20`}>
          <a class={tw`hover:underline`} href="#installation">
            <h3 class={tw`font-bold text-xl`} id="installation">
              安装
=======
        <div class="section-x-inset-sm mt-20">
          <a class="hover:underline" href="#installation">
            <h3 class="font-bold text-xl" id="installation">
              Installation
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
            </h3>
          </a>
          <InstallSection url={url} />
        </div>
<<<<<<< HEAD
        <div class={tw`section-x-inset-sm mt-20`}>
          <a class={tw`hover:underline`} href="#getting-started">
            <h3 class={tw`font-bold text-xl`} id="getting-started">
              起步
            </h3>
          </a>
          <p class={tw`my-4 text-gray-700`}>尝试运行一个简单的 Deno 程序：</p>
=======
        <div class="section-x-inset-sm mt-20">
          <a class="hover:underline" href="#getting-started">
            <h3 class="font-bold text-xl" id="getting-started">
              Getting Started
            </h3>
          </a>
          <p class="my-4 text-gray-700">Try running a simple program:</p>
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
          <CodeBlock
            code={`deno run https://deno.land/std@${
              versions.std[0]
            }/examples/welcome.ts`}
            language="bash"
            url={url}
          />
<<<<<<< HEAD
          <p class={tw`my-4 text-gray-700`}>或者运行一个复杂点的 Deno 程序：</p>
=======
          <p class="my-4 text-gray-700">Or a more complex one:</p>
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
        </div>
        <div class="section-x-inset-sm">
          <CodeBlock
            code={complexExampleProgram}
            language="typescript"
            disablePrefixes
            url={url}
          />
        </div>
<<<<<<< HEAD
        <div class={tw`section-x-inset-sm`}>
          <p class={tw`my-4 text-gray-700`}>
            你可以在<a class={tw`link`} href="/manual">
              参考手册
            </a>中找到“深入介绍”、“环境搭建”、“代码示例”等内容。
          </p>
        </div>
        <div class={tw`section-x-inset-sm mt-20`}>
          <a class={tw`hover:underline`} href="#runtime-documentation">
            <h3 class={tw`font-bold text-xl`} id="runtime-documentation">
              运行时文档
            </h3>
          </a>
          <p class={tw`my-4 text-gray-700`}>
            Deno 的基本运行时文档可以在{" "}
            <a href="https://doc.deno.js.cn/deno/stable" class={tw`link`}>
              doc.deno.js.cn
=======
        <div class="section-x-inset-sm">
          <p class="my-4 text-gray-700">
            You can find a more in depth introduction, examples, and environment
            setup guides in{" "}
            <a class="link" href="/manual">
              the manual
            </a>
            .
          </p>
        </div>
        <div class="section-x-inset-sm mt-20">
          <a class="hover:underline" href="#runtime-documentation">
            <h3 class="font-bold text-xl" id="runtime-documentation">
              Runtime Documentation
            </h3>
          </a>
          <p class="my-4 text-gray-700">
            The basic runtime documentation for Deno can be found on{" "}
            <a href="https://doc.deno.land/deno/stable" class="link">
              doc.deno.land
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
            </a>
            网站找到。
          </p>
<<<<<<< HEAD
          <p class={tw`my-4 text-gray-700`}>
            Deno 自带的 <a class={tw`link`} href="/manual">参考手册</a>
            包含了关于 Deno Runtime 更复杂功能的深入解析,、Deno 内部功能的详细信息、如何在您自己的应用程序中嵌入 Deno
            以及如何使用 Rust 编写 Deno 插件。
          </p>
          <p class={tw`my-4 text-gray-700`}>
            该手册还包含有关 Deno 提供的内置工具的信息。
          </p>
        </div>
        <div class={tw`section-x-inset-sm mt-20`}>
          <a class={tw`hover:underline`} href="#standard-modules">
            <h3 class={tw`font-bold text-xl`} id="standard-modules">
              标准模块
            </h3>
          </a>
          <p class={tw`my-4 text-gray-700`}>
            除了提供 Deno 运行时之外，Deno 还提供了标准模块，这些模块由 Deno 核心团队维护和审核以保证可使用特定的 Deno
            版本。这些模块在{" "}
            <a href="https://github.com/denoland/deno_std" class={tw`link`}>
=======
          <p class="my-4 text-gray-700">
            Deno comes with{" "}
            <a class="link" href="/manual">
              a manual
            </a>{" "}
            which contains more in depth explanations about the more complex
            functions of the runtime, an introduction to the concepts that Deno
            is built on, details about the internals of Deno, how to embed Deno
            in your own application and how to extend Deno using Rust plugins.
          </p>
          <p class="my-4 text-gray-700">
            The manual also contains information about the built in tools that
            Deno provides.
          </p>
        </div>
        <div class="section-x-inset-sm mt-20">
          <a class="hover:underline" href="#standard-modules">
            <h3 class="font-bold text-xl" id="standard-modules">
              Standard Modules
            </h3>
          </a>
          <p class="my-4 text-gray-700">
            Next to the Deno runtime, Deno also provides a list of audited
            standard modules that are reviewed by the Deno maintainers and are
            guaranteed to work with a specific Deno version. These live in the
            {" "}
            <a href="https://github.com/denoland/deno_std" class="link">
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
              denoland/deno_std
            </a>{" "}
            仓库。
          </p>
<<<<<<< HEAD
          <p class={tw`my-4 text-gray-700`}>
            这些标准模块托管在 <a class={tw`link`} href="/std">deno.js.cn/std</a>{" "}
            上，并且同所有其他的兼容 Deno 的 ES 模块一样通过 URL 进行分发。
          </p>
        </div>
        <div class={tw`section-x-inset-sm mt-20`}>
          <a class={tw`hover:underline`} href="#toolchain">
            <h3 class={tw`font-bold text-xl`} id="toolchain">
              内置工具链
            </h3>
          </a>
          <p class={tw`my-4 text-gray-700`}>
            Deno 附带了{" "}
            <a class={tw`link`} href="/manual/tools">
              一套强大的工具
=======
          <p class="my-4 text-gray-700">
            These standard modules are hosted at{" "}
            <a class="link" href="/std">
              deno.land/std
            </a>{" "}
            and are distributed via URLs like all other ES modules that are
            compatible with Deno.
          </p>
        </div>
        <div class="section-x-inset-sm mt-20">
          <a class="hover:underline" href="#toolchain">
            <h3 class="font-bold text-xl" id="toolchain">
              Built-in Toolchain
            </h3>
          </a>
          <p class="my-4 text-gray-700">
            Deno comes with a robust{" "}
            <a class="link" href="/manual/tools">
              set of tools
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
            </a>
            ，因此您可以花更少的时间搜索和评估第三方模块，而将更多的时间用于编写代码和提高工作效率。下面是一些示例。
          </p>
          <p class="my-4 text-gray-700">
            <a class="link" href="/manual/tools/linter">
              Lint
            </a>{" "}
            当前目录和子目录中的所有 JS/TS 文件：
          </p>
          <p>
            <CodeBlock
              code={"deno lint\nChecked 54 files"}
              language="bash"
              url={url}
            />
          </p>
<<<<<<< HEAD
          <p class={tw`my-4 text-gray-700`}>
            <a class={tw`link`} href="/manual/tools/formatter">
              格式化
=======
          <p class="my-4 text-gray-700">
            <a class="link" href="/manual/tools/formatter">
              Format
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
            </a>{" "}
            当前目录和子目录中所有支持的文件：
          </p>
          <p>
            <CodeBlock
              code={"deno fmt\nChecked 46 files"}
              language="bash"
              url={url}
            />
          </p>
<<<<<<< HEAD
          <p class={tw`my-4 text-gray-700`}>
            运行{" "}
            <a class={tw`link`} href="/manual/testing">
              测试
=======
          <p class="my-4 text-gray-700">
            Run a{" "}
            <a class="link" href="/manual/testing">
              test
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
            </a>
            ：
          </p>
          <p>
            <CodeBlock code={denoTestExample} language="bash" url={url} />
          </p>
<<<<<<< HEAD
          <p class={tw`my-4 text-gray-700`}>
            有关工具及其选项的完整列表，请参阅{" "}
            <a href="/manual/tools" class={tw`link`}>
              这里
=======
          <p class="my-4 text-gray-700">
            For the full list of tools and their options, see{" "}
            <a href="/manual/tools" class="link">
              here
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
            </a>
            。
          </p>
        </div>
<<<<<<< HEAD
        <div class={tw`section-x-inset-sm mt-20`}>
          <a class={tw`hover:underline`} href="#examples">
            <h3 class={tw`font-bold text-xl`} id="examples">
              示例
            </h3>
          </a>
          <p class={tw`my-4 text-gray-700`}>
            下面是一些可用的示例。
=======
        <div class="section-x-inset-sm mt-20">
          <a class="hover:underline" href="#examples">
            <h3 class="font-bold text-xl" id="examples">
              Examples
            </h3>
          </a>
          <p class="my-4 text-gray-700">
            Here are some examples that you can use to get started immediately.
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
          </p>
          <ol class="ml-8 list-disc text-gray-700">
            <li>
              <a href="https://examples.deno.land/hello-world" class="link">
                Hello World
              </a>
            </li>
            <li>
              <a
                href="https://examples.deno.land/import-export"
                class="link"
              >
                Importing & Exporting
              </a>
            </li>
            <li>
              <a
                href="https://examples.deno.land/dependency-management"
                class="link"
              >
                Dependency Management
              </a>
            </li>
            <li>
              <a
                href="https://examples.deno.land/http-requests"
                class="link"
              >
                HTTP Requests
              </a>
            </li>
            <li>
              <a href="https://examples.deno.land/http-server" class="link">
                HTTP Server: Hello World
              </a>
            </li>
          </ol>
<<<<<<< HEAD
          <p class={tw`my-4 text-gray-700`}>
            有关更多示例，请查看{" "}
            <a class={tw`link`} href="https://examples.deno.land">
=======
          <p class="my-4 text-gray-700">
            For more examples, check out{" "}
            <a class="link" href="https://examples.deno.land">
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
              examples.deno.land
            </a>
            .
          </p>
        </div>
        <DenoInProductionSection />
        <div class="mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}

function DenoInProductionSection() {
  const companies = [{
    name: "Slack",
    logo: "slack.svg",
    url: "https://slack.com",
  }, {
    name: "Netlify",
    logo: "netlify.svg",
    url: "https://netlify.com",
  }, {
    name: "GitHub",
    logo: "github.svg",
    url: "https://github.com",
  }, {
    name: "Supabase",
    logo: "supabase.svg",
    url: "https://supabase.com",
  }];

  return (
    <div class="section-x-inset-sm mt-20">
      <a class="hover:underline" href="#deno-in-production">
        <h3 class="font-bold text-xl" id="deno-in-production">
          Deno in Production
        </h3>
      </a>
      <ol class="pl-1 md:pl-0 md:flex flex-wrap gap-8 mt-5 list-none">
        {companies.map(({ name, logo, url }) => (
          <li class="mb-2 md:mb-0" key={url}>
            <a
              class="flex items-center gap-2 flex-nowrap opacity-70 hover:opacity-100"
              href={url}
              target="_blank"
            >
              <img
                class="w-5"
                src={`https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/${logo}`}
                alt={name}
                title={name}
              />{" "}
              <span class="font-medium text-lg">{name}</span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

function InstallSection({ url }: { url: URL }) {
  const shell = (
    <div key="shell" class="my-4 text-gray-700">
      <p class="py-2">Shell (Mac, Linux):</p>
      <CodeBlock
        language="bash"
        code="curl -fsSL https://x.deno.js.cn/install.sh | sh"
        url={url}
        enableCopyButton
      />
    </div>
  );
  const homebrew = (
    <div key="homebrew" class="my-4 text-gray-700">
      <p class="mb-2">
        <a href="https://formulae.brew.sh/formula/deno" class="link">
          Homebrew
        </a>{" "}
        (Mac)：
      </p>
      <CodeBlock
        language="bash"
        code="brew install deno"
        url={url}
        enableCopyButton
      />
    </div>
  );
  const powershell = (
    <div key="powershell" class="my-4 text-gray-700">
      <p class="mb-2">PowerShell (Windows):</p>
      <CodeBlock
        language="bash"
        code="irm https://x.deno.js.cn/install.ps1 | iex"
        url={url}
        enableCopyButton
      />
    </div>
  );

  return (
    <>
<<<<<<< HEAD
      <p class={tw`my-4 text-gray-700`}>
        Deno 没有外部依赖，只有一个单独的可执行文件。你可以使用下面的安装器来安装，也可以从{" "}
        <a href="https://github.com/denoland/deno/releases" class={tw`link`}>
          GitHub Releases 页面
=======
      <p class="my-4 text-gray-700">
        Deno ships as a single executable with no dependencies. You can install
        it using the installers below, or download a release binary from the
        {" "}
        <a href="https://github.com/denoland/deno/releases" class="link">
          releases page
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
        </a>
        下载已经编译好的二进制可执行程序。
      </p>
      {shell}
      {powershell}
      {homebrew}
<<<<<<< HEAD
      <p class={tw`my-4 text-gray-700`}>
        查看{" "}
        <a class={tw`link`} href="https://github.com/denocn/deno_install">
          denocn/deno_install
=======
      <p class="my-4 text-gray-700">
        See{" "}
        <a class="link" href="https://github.com/denoland/deno_install">
          deno_install
>>>>>>> ad8e54dbd6b01c078e15c16a709950dafb22d057
        </a>{" "}
        以了解更多的安装选项。
      </p>
    </>
  );
}

export const handler: Handlers<Data> = {
  GET(req, { render }) {
    const cookies = getCookies(req.headers);
    return render!({
      isFirefox:
        req.headers.get("user-agent")?.toLowerCase().includes("firefox") ??
          false,
      hellobarClosedTo: cookies.hellobar ?? "",
    });
  },
};
