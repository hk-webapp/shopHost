import type { NextConfig } from "next";
//import { webpack } from "webpack";
//const { NextfederationPlugin } = require("@module-federation/nextjs-mf");
const PRODUCT_HOST = "https://hk-webapp.github.io/product"; //process.env.productUrl || "http://localhost:30080/product";
const CHECKOUT_HOST = "https://hk-webapp.github.io/checkout";
////process.env.checkoutUrl || "http://localhost:30070/checkout";
const Host_prefix = "/shopHost"; //process.env.Host_prefix || "";
const Host_prefix_assets = "/shopHost/"; //process.env.Host_prefix_assets || "";
const nextConfig: NextConfig = {
  output: "export",
  basePath: Host_prefix,
  assetPrefix: Host_prefix_assets,
  trailingSlash: true,
  transpilePackages: [
    "@repo/design-system-ui",
    "@repo/shared",
    "@repo/ui",
    "@repo/api",
  ],
  // reactStrictMode: true,
  // webpack(config: any, options: any) {
  //   //if (!options.isServer) {
  //   config.plugins.push(
  //     new NextfederationPlugin({
  //       name: "host",
  //       remotes: {
  //         product:
  //           "product@http://localhost:30080/_next/static/chunks/remoteEntry.js",
  //         //web:"web@http://localhost:30000/_next/static/chunks/remoteEntry.js",
  //       },
  //       shared: {
  //         react: {
  //           singleton: true,
  //           requiredVersion: false,
  //         },
  //         "react-dom": {
  //           singleton: true,
  //           requiredVersion: false,
  //         },
  //       },

  //       extraOptions: {
  //         exposePages: true,
  //         enableDynamicImports: true,
  //       },
  //     }),
  //   );
  //   //}
  //   return config;
  // },
  async rewrites() {
    return [
      {
        source: "/shopHost/product/:path*/js/:path*",
        destination: Host_prefix + "/js/:path*",
      },
      {
        source: "/shopHost/product/:path*/images/:path*",
        destination: Host_prefix + "/images/:path*",
      },
      {
        source: "/shopHost/product/_next/data/:path*",
        destination: PRODUCT_HOST + "/_next/data/:path*",
      },
      {
        source: "/shopHost/product/_next/:path*",
        destination: PRODUCT_HOST + "/_next/:path*",
      },
      {
        source: "/shopHost/product/:path*",
        destination: PRODUCT_HOST + "/:path*",
      },

      {
        source: "/shopHost/checkout/_next/data/:path*",
        destination: CHECKOUT_HOST + "/_next/data/:path*",
      },
      {
        source: "/shopHost/checkout/_next/:path*",
        destination: CHECKOUT_HOST + "/_next/:path*",
      },
      {
        source: "/shopHost/checkout/:path*",
        destination: CHECKOUT_HOST + "/:path*",
      },
    ];
  },
  turbopack: {
    // ...
  },
};

export default nextConfig;

module.exports = nextConfig;
