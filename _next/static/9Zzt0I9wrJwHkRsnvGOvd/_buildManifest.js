self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/shopHost/product/:path*/js/:path*",
        "destination": "/shopHost/shopHost/js/:path*"
      },
      {
        "source": "/shopHost/product/:path*/images/:path*",
        "destination": "/shopHost/shopHost/images/:path*"
      },
      {
        "source": "/shopHost/product/_next/data/:path*"
      },
      {
        "source": "/shopHost/product/_next/:path*"
      },
      {
        "source": "/shopHost/product/:path*"
      },
      {
        "source": "/shopHost/checkout/_next/data/:path*"
      },
      {
        "source": "/shopHost/checkout/_next/:path*"
      },
      {
        "source": "/shopHost/checkout/:path*"
      }
    ],
    "beforeFiles": [
      {
        "source": "/shopHost//_next/:path+",
        "destination": "/shopHost/_next/:path+"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()