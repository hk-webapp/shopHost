self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/product/:path*/js/:path*",
        "destination": "/js/:path*"
      },
      {
        "source": "/product/:path*/images/:path*",
        "destination": "/images/:path*"
      },
      {
        "source": "/product/_next/data/:path*"
      },
      {
        "source": "/product/_next/:path*"
      },
      {
        "source": "/product/:path*"
      },
      {
        "source": "/checkout/_next/data/:path*"
      },
      {
        "source": "/checkout/_next/:path*"
      },
      {
        "source": "/checkout/:path*"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()