self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/shopHost/product"
      }
    ],
    "beforeFiles": [
      {
        "source": "/shopHost/product//_next/:path+",
        "destination": "/shopHost/product/_next/:path+"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()