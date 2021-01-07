# Deno 中文网站

[![Build Status](https://github.com/justjavac/deno_website2/workflows/ci/badge.svg?branch=master&event=push)](https://github.com/justjavac/deno_website2/actions)

本仓库是针对 https://deno.land/ 网站原代码仓库

本站点包含以下两个部分

1. A Cloudflare Worker
2. A Next.js app hosted on Vercel

我们希望为那些使用到Deno中模块提供专业和语义化的URLs， 例如：https://deno.land/std/http/server.ts

当我们请求Deno中的文件，我们需要接收该文件的原始内容，但是，当我们通过浏览器来访问URL的时候我们希望能够展示语法高亮的友好的HTML文件

为了完成这个功能，Cloudflare Worker 会检查 "Accept:" HTTP头部来判断客户端是否想要HTML,如果是，我们会将请求代理到Vercel。（我们使用Vercel是因为他和GitHub的完美集成）

## 历史

本站点是重写原有的Deno站点，所以将结合 https://github.com/denoland/deno/tree/f96aaa802b245c8b3aeb5d57b031f8a55bb07de2/website 和 https://github.com/denoland/registry 并可以进行更快速部署

本站点采用 React / TailwindCSS / Vercel / CloudFlare Workers 进行开发。我们可以将某些方面指向Deno，但是我们需要一个新的网站由于dogfooding耗时太长。我们希望以最少的开发人员终端就可以看到此代码（特别是我们需要监听FS 事件并热重载功能）

## 图片证书

Deno图片采用MIT License认证 (可以进行公共免费使用).

- [一张由 @hashrock 分享的图片](https://deno.land/v1.jpg)
