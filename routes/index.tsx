// Copyright 2022-2023 the Deno authors. All rights reserved. MIT license.

import type { ComponentChildren } from "preact";
import { tw } from "twind";
import { css } from "twind/css";
import { ContentMeta } from "@/components/ContentMeta.tsx";
import { Header } from "@/components/Header.tsx";
import HelloBar from "@/islands/HelloBar.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import * as Icons from "@/components/Icons.tsx";
import { Footer } from "$doc_components/footer.tsx";
import ScrollInGif from "@/islands/ScrollInGif.tsx";

import { getCookies } from "https://deno.land/std@0.143.0/http/cookie.ts";

interface Data {
  hellobarClosedTo: string;
}

const announcement = {
  major: true,
<<<<<<< HEAD
  href: "/manual/node",
  text: "NPM 兼容性现在已经上线！点击这里开始",
=======
  href: "https://deno.com/saaskit",
  text:
    "Announcing Deno SaaSKit: a modern, open-source template to start your SaaS today.",
>>>>>>> 05cc85aad2f576eb78760b53f89ae5ad81f3da07
} as const;

export default function Home({ data }: PageProps<Data>) {
  return (
    <div>
      <ContentMeta
        title="Deno — 现代的 JavaScript 和 TypeScript 运行时"
        description="Deno 是一个简单的，现代化的 JavaScript 和 TypeScript 运行时，基于 V8 和 Rust 构建。"
        creator="@deno_land"
        noAppendTitle
      />
      {announcement.href !== data.hellobarClosedTo && !announcement.major &&
        (
          <HelloBar to={announcement.href}>
            {announcement.text}
          </HelloBar>
        )}
      <div>
        <Header />

        <div class="relative colorWash pt-12 pb-28 lg:(pt-24 pb-40)">
          <div class="section-x-inset-xl">
            <picture>
              <source
                srcSet="/images/lp/cover@xl.avif"
                type="image/avif"
                media="(min-width: 1024px)"
              />
              <source
                srcSet="/images/lp/cover@xl.webp"
                type="image/webp"
                media="(min-width: 1024px)"
              />
              <source
                srcSet="/images/lp/cover@xl.jpg"
                type="image/jpg"
                media="(min-width: 1024px)"
              />

              <source
                srcSet="/images/lp/cover@lg.avif"
                type="image/avif"
                media="(min-width: 768px)"
              />
              <source
                srcSet="/images/lp/cover@lg.webp"
                type="image/webp"
                media="(min-width: 768px)"
              />
              <source
                srcSet="/images/lp/cover@lg.jpg"
                type="image/jpg"
                media="(min-width: 768px)"
              />

              <source srcSet="/images/lp/cover.avif" type="image/avif" />
              <source srcSet="/images/lp/cover.webp" type="image/webp" />
              <img
                class="object-cover w-full h-full absolute inset-0"
                src="/images/lp/cover.jpg"
                alt="Background Image"
              />
            </picture>
            <div class="relative text-white space-y-6 lg:(space-y-16 w-[40rem])">
              <div class="space-y-2.5 lg:space-y-8">
                <p class="font-semibold text-xl lg:text-3xl leading-none">
                  遇见 Deno
                </p>
                <h1 class="font-bold text-5xl lg:text-7xl leading-none">
                  最简单的、<br />
                  最安全的<br class="hidden sm:block lg:hidden" />JavaScript
                  运行时。
                </h1>
              </div>
              <div class="inline-flex gap-4 flex-col lg:(gap-7 flex-row)">
                <a
                  class="button-primary justify-center"
                  href="/manual/getting_started/installation"
                >
                  安装
                </a>
                <a class="button-primary" href="/manual">文档</a>
              </div>
            </div>
          </div>
        </div>

        {announcement.major &&
          (
            <a
              class="block items-center justify-center py-3 px-4 text-2xl text-white text-center font-semibold bg-[#FF5C38]"
              href={announcement.href}
            >
              {announcement.text}
            </a>
          )}

        <Section
          type="简单"
          header="最佳的开发人员体验"
          subheader="没有陡峭的学习曲线…"
        >
          <ImageSubSection
            image={<ScrollInGif src="/images/lp/dependencies" alt="" />}
            header="避免安装依赖项"
            additionalContent={
              <img
                src="/images/lp/typing_deno.png"
                class="absolute hidden lg:(block h-40 -bottom-7 right-2)"
                aria-hidden
              />
            }
            reverse
          >
            无需复杂的配置，直接进入编码阶段。
          </ImageSubSection>

          <ImageSubSection
            image={
              <picture>
                <source
                  srcset="/images/lp/web_compatibility@lg.avif"
                  type="image/avif"
                  media="(min-width: 1024px)"
                />
                <source
                  srcset="/images/lp/web_compatibility@lg.webp"
                  type="image/webp"
                  media="(min-width: 1024px)"
                />
                <source
                  srcset="/images/lp/web_compatibility@lg.png"
                  type="image/png"
                  media="(min-width: 1024px)"
                />

                <source
                  srcset="/images/lp/web_compatibility.avif"
                  type="image/avif"
                />
                <source
                  srcset="/images/lp/web_compatibility.webp"
                  type="image/webp"
                />
                <img
                  class="py-7 pl-5 pr-7 lg:(py-12 pl-16 pr-22)"
                  src="/images/lp/web_compatibility.png"
                  alt="Web APIs"
                />
              </picture>
            }
            header="符合 Web 标准的 APIs"
          >
            类似于 Web 的运行时，在服务器上使用浏览器的 API。
          </ImageSubSection>

          <div class="flex justify-between flex-col gap-11 lg:(flex-row gap-[8%])">
            {[{
              Icon: Icons.OutOfTheBox,
              title: "TypeScript 开箱即用",
              body: (
                <>
                  对 TypeScript
                  提供一流支持——不需要花费数小时配置那些一旦更新依赖就会被破坏的东西。
                </>
              ),
            }, {
              Icon: Icons.Tooling,
              title: "优秀的多合一工具",
              body: (
                <>
                  内置
                  linter，代码格式化器，能够构建独立的可执行文件，测试运行器，集成开发环境，以及更多。
                </>
              ),
            }, {
              Icon: Icons.HassleFree,
              title: "无忧无虑地部署",
              body: (
                <>
                  用一行代码和零服务器配置部署到 Deno
                  Deploy，或托管到你选择的其他平台。
                </>
              ),
            }].map(({ Icon, title, body }) => (
              <div class="flex items-start flex-row-reverse gap-8 lg:(flex-col gap-9)">
                <Icon class="flex-none w-[3.25rem] md:w-16 lg:w-18" />
                <div class="inline space-y-3 lg:space-y-4">
                  <h3 class="font-bold text-default text-[1.375rem] md:text-3xl lg:text-4xl">
                    {title}
                  </h3>
                  <p class="text-normalBlue font-medium md:text-xl lg:text-2xl">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Quote
          author="Stack Overflow"
          href="https://survey.stackoverflow.co/2022/#most-loved-dreaded-and-wanted-webframe-love-dread"
          size="2xl"
          lgSize="5xl"
        >
          在对超过 70,000 名开发者的调查中被评为
          <br class="hidden lg:block" />最受欢迎的网络技术之一
        </Quote>

        <Section
          type="迅速"
          header="以你的速度构建与执行。"
          subheader="由头至尾均为高性能而设计。"
        >
          <ImageSubSection
            image={
              <picture>
                <source
                  srcset="/images/lp/benchmark@lg.avif"
                  type="image/avif"
                  media="(min-width: 1024px)"
                />
                <source
                  srcset="/images/lp/benchmark@lg.webp"
                  type="image/webp"
                  media="(min-width: 1024px)"
                />
                <source
                  srcset="/images/lp/benchmark@lg.png"
                  type="image/png"
                  media="(min-width: 1024px)"
                />

                <source
                  srcset="/images/lp/benchmark.avif"
                  type="image/avif"
                />
                <source
                  srcset="/images/lp/benchmark.webp"
                  type="image/webp"
                />
                <img
                  class="py-9 px-5.5 lg:(pt-18 pb-22 px-12)"
                  src="/images/lp/benchmark.png"
                  alt="HTTP Benchmark"
                />
              </picture>
            }
            header="一流的 HTTP 服务器速度"
            reverse
          >
            史上最快的 JavaScript 网络服务器。
            <br />
            （在 Mac 上使用 wrk 测试的{" "}
            <a
              class="text-mainBlue hover:underline"
              href="https://github.com/denoland/deno/blob/v1.28.0/cli/bench/http/deno_http_flash.js"
            >
              HTTP hello&#8288;-&#8288;world
            </a>
            ）
          </ImageSubSection>

          <ImageSubSection
            image={
              <picture>
                <source srcset="/images/lp/v8.avif" type="image/avif" />
                <source srcset="/images/lp/v8.webp" type="image/webp" />
                <img src="/images/lp/v8.png" alt="" />
              </picture>
            }
            header="由 Chrome 的 V8 引擎赋能"
            noBackground
          >
            构建于最快、最完整的 JavaScript 引擎之上。
          </ImageSubSection>
        </Section>

        <Quote
          author="Slack"
          href="https://deno.com/blog/slack-open-beta"
          size="xl"
          lgSize="[2.75rem]"
        >
          对我们的团队而言，最突出的是他们对安全的高度关注......
          例如在对文件系统或外部域的有限访问下执行代码的能力。
        </Quote>

        <Section
          type="安全"
          header="默认就安全。"
          subheader="对你的工作流程进行全面的控制。"
        >
          <ImageSubSection
            image={<ScrollInGif src="/images/lp/secure" alt="" />}
            header="运行不受信任的代码"
            additionalContent={
              <img
                src="/images/lp/armor_deno.png"
                class="absolute hidden lg:(block w-44 -bottom-10 -right-8)"
                aria-hidden
              />
            }
            reverse
          >
            默认情况下，Deno 不提供 I/O
            访问，适合于运行不受信任的代码和审计新的第三方代码。
          </ImageSubSection>

          <div class="grid items-center justify-between gap-18 lg:(gap-22 grid-cols-2)">
            {[{
              title: (
                <>
                  精细粒度的权限检查
                </>
              ),
              body: (
                <>
                  提供一个只访问特定文件系统目录、网络主机和环境变量的允许列表。
                </>
              ),
              Icon: Icons.Permissions,
            }, {
              title: (
                <>
                  更安全的 NPM 包
                </>
              ),
              body: (
                <>
                  安装和运行 npm 包，更少的顾虑。
                </>
              ),
              Icon: Icons.Secure,
            }].map(({ title, body, Icon }) => (
              <div class="flex justify-between items-start gap-8 flex-row-reverse lg:flex-row">
                <Icon class="mt-1.5 flex-none w-[3.25rem] md:w-16 lg:w-18" />
                <div class="space-y-3 lg:space-y-5">
                  <h3 class="font-bold text-[1.375rem] md:text-3xl lg:text-4xl text-default">
                    {title}
                  </h3>
                  <p class="text-normalBlue font-medium md:text-xl lg:text-2xl">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <div class="colorWash pt-11 pb-12 lg:(pt-28 pb-24)">
          <div class="section-x-inset-2xl md:text-center">
            <p class="text-white font-semibold text-xl pr-18 lg:(text-3xl pr-0)">
              被庞大的开发者社区和领先的技术公司使用：
            </p>
            <p class="text-white font-bold mt-4 mb-10 text-4xl lg:(mt-7 mb-13 text-7xl)">
              超过 20 万月度活跃量
            </p>
            <div class="grid grid-cols-2 justify-center items-center text-white gap-6 md:(gap-18 grid-cols-none grid-flow-col)">
              {companies.map((company) => (
                <div key={company.url}>
                  <a
                    class="lg:(opacity-70 hover:opacity-100)"
                    href={company.url}
                    target="_blank"
                  >
                    <img
                      class={company.name === "Netlify"
                        ? "h-11 lg:h-20"
                        : "h-7 lg:h-12"}
                      src={`/images/lp/companies/${company.name.toLowerCase()}.svg`}
                      alt={company.name}
                      title={company.name}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

const gradientLabelBeforeAfter =
  "absolute z-10 inset-0 rounded-full border-transparent box-border border-[3px] lg:border-4";

function Section(
  { type, header, subheader, children }: {
    type: string;
    header: string;
    subheader: string;
    children: ComponentChildren;
  },
) {
  return (
    <div class="section-x-inset-xl pt-12 pb-18 lg:(pt-18 pb-24)">
      <div
        class={tw`colorWash rounded-full relative border-0 py-2 w-22 md:(py-2.5 w-36 mx-auto) before:(${gradientLabelBeforeAfter} ${
          css({
            content: '""',
            "background-clip": "border-box",
          })
        }) after:(${gradientLabelBeforeAfter} bg-white ${
          css({
            content: '""',
            "background-clip": "content-box",
          })
        })`}
      >
        <span
          class={tw`relative block z-20 text-transparent font-semibold leading-tight text-center text-lg md:text-[1.75rem] ${
            css({
              background: "inherit",
              "background-clip": "text",
              "-webkit-background-clip": "text",
            })
          }`}
        >
          {type}
        </span>
      </div>
      <h2 class="font-bold text-default leading-none mt-5 mb-4 text-3xl md:(my-5 text-5xl text-center) lg:text-6xl">
        {header}
      </h2>
      <p class="font-semibold text-normalBlue text-xl md:(text-2xl text-center)">
        {subheader}
      </p>

      <div class="mt-14 space-y-14 md:space-y-20 lg:(mt-20 space-y-28)">
        {children}
      </div>
    </div>
  );
}

function ImageSubSection(
  {
    image,
    header,
    additionalContent,
    children,
    noBackground,
    reverse,
  }: {
    image: ComponentChildren;
    header: string;
    children: ComponentChildren;
    additionalContent?: ComponentChildren;
    noBackground?: boolean;
    reverse?: boolean;
  },
) {
  return (
    <div
      class={`flex items-center justify-between gap-5 flex-col md:gap-10 lg:(gap-12 flex-row${
        reverse ? "-reverse" : ""
      })`}
    >
      <div
        class={`relative w-full rounded-lg md:rounded-2xl lg:w-[70%] box-border flex-none ${
          !noBackground
            ? tw`bg-azure ${
              css({
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              })
            }`
            : ""
        }`}
      >
        {additionalContent}
        <div class="w-full children:w-full children:children:w-full overflow-hidden rounded-lg md:rounded-2xl">
          {image}
        </div>
      </div>
      <div class="space-y-3 p-1.5 lg:p-0">
        <h3 class="font-bold text-default text-3xl md:text-4xl">
          {header}
        </h3>
        <p class="text-normalBlue font-medium text-lg md:text-2xl">
          {children}
        </p>
      </div>
    </div>
  );
}

function Quote(
  { children, size, lgSize, author, href }: {
    children: ComponentChildren;
    size: string;
    lgSize: string;
    author: string;
    href: string;
  },
) {
  return (
    <div class="colorWash pt-18 pb-14 lg:(pt-24 pb-20)">
      <div class="section-x-inset-xl space-y-8 lg:space-y-11 lg:text-center">
        <blockquote
          class={`text-white font-semibold text-${size} lg:text-${lgSize} leading-tight`}
        >
          "{children}"
        </blockquote>
        <a class="inline-block mx-auto lg:mx-none" href={href}>
          <img
            class="h-7 lg:h-10"
            src={`/images/lp/companies/${author.toLowerCase()}.svg`}
            alt={author}
            title={author}
          />
        </a>
      </div>
    </div>
  );
}

const companies = [{
  name: "Slack",
  url: "https://slack.com",
}, {
  name: "Netlify",
  url: "https://netlify.com",
}, {
  name: "GitHub",
  url: "https://github.com",
}, {
  name: "Supabase",
  url: "https://supabase.com",
}];

export const handler: Handlers<Data> = {
  GET(req, { render }) {
    const cookies = getCookies(req.headers);
    return render!({
      hellobarClosedTo: cookies.hellobar ?? "",
    });
  },
};
