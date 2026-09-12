self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/hostShop/hostShop/product/:path*/js/:path*",
        "destination": "/hostShop/hostShop/js/:path*"
      },
      {
        "source": "/hostShop/hostShop/product/:path*/images/:path*",
        "destination": "/hostShop/hostShop/images/:path*"
      },
      {
        "source": "/hostShop/hostShop/product/_next/data/:path*"
      },
      {
        "source": "/hostShop/hostShop/product/_next/:path*"
      },
      {
        "source": "/hostShop/hostShop/product/:path*"
      },
      {
        "source": "/hostShop/hostShop/checkout/_next/data/:path*"
      },
      {
        "source": "/hostShop/hostShop/checkout/_next/:path*"
      },
      {
        "source": "/hostShop/hostShop/checkout/:path*"
      }
    ],
    "beforeFiles": [
      {
        "source": "/hostShop//_next/:path+",
        "destination": "/hostShop/_next/:path+"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()