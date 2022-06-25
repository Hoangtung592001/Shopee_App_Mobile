export const SERVICE_URL = {
  API_SERVER: "http://localhost:8000/",
  CLIENT_AUTH_PREFIX: "client-auth/",
  JUDGE_PREFIX: "judge/",
  LIKE_PREFIX: "like/",
  MEMBER_PREFIX: "member/",
  NOTIFICATION_PREFIX: "notification/",
  ORDER_PREFIX: "order/",
  ORDER_CART_PREFIX: "order-cart/",
  PRODUCT_PREFIX: "product/",
  PRODUCTLINE_PREFIX: "product-line/",
  VOUCHER_PREFIX: "voucher/",
  CLIENT_AUTH_SERVICES: {
    SIGN_IN: {
      URL: "client-auth/signup",
      METHOD: "POST",
    },
    SIGN_UP: {
      URL: "signup",
      METHOD: "POST",
    },
    CHANGE_PASSWORD: {
      URL: "change-password",
      METHOD: "POST",
    },
    REFRESH_TOKEN: {
      URL: "refresh-access-token",
      METHOD: "POST",
    },
  },
  JUDGE_SERVICES: {
    POST_JUDGE: {
      URL: "post-judge",
      METHOD: "POST",
    },
    DELETE_JUDGE_BY_ID: {
      URL: "delete-judge/",
      METHOD: "DELETE",
    },
    GET_JUDGE: {
      URL: "get-judge",
      METHOD: "GET",
    },
    GET_BY_ID: {
      URL: "/",
      METHOD: "GET",
    },
  },

  LIKE_SERVICES: {
    LIKE_PRODUCT_BY_ID: {
      URL: "like-product/",
      METHOD: "POST",
    },
  },

  MEMBER_SERVICES: {
    GET_PERSONAL_INFO: {
      URL: "get-personal-info",
      METHOD: "GET",
    },
    REGISTER_SHOP: {
      URL: "register-shop",
      METHOD: "POST",
    },
  },

  ORDER_SERVICES: {
    GET_ORDER: {
      URL: "",
      METHOD: "GET",
    },
    ORDER_PRODUCT: {
      URL: "",
      METHOD: "POST",
    },
  },

  ORDER_CART_SERVICES: {
    ADD_PRODUCT_TO_CART: {
      URL: "add-products-to-cart",
      METHOD: "POST",
    },
    DELETE_FROM_CART: {
      URL: "delete-from-cart/",
      METHOD: "DELETE",
    },
    GET_ALL_PRODUCTS_IN_CART: {
      URL: "get-all-products-in-cart",
      METHOD: "GET",
    },
    CHANGE_QUANTITY_PRODUCTS: {
      URL: "change-quantity-products",
      METHOD: "PUT",
    },
  },

  PRODUCT_SERVICES: {
    GET_ALL_PRODUCTS: {
      URL: "get-all-products",
      METHOD: "GET",
    },
    ADD_PRODUCTS: {
      URL: "add-products",
      METHOD: "POST",
    },
    GET_PRODUCT_BY_ID: {
      URL: "get-product/",
      METHOD: "GET",
    },
    USER_DELETE_PRODUCT: {
      URL: "user-delete-product",
      METHOD: "DELETE",
    },
    CHANGE_PRODUCT_INFO_BY_ID: {
      URL: "change-product-info/",
      METHOD: "PATCH",
    },
    RECENT_VISITED_BY_ID: {
      URL: "recent-visited/",
      METHOD: "POST",
    },
    GET_RECENT_VISITED: {
      URL: "get-recent-visited",
      METHOD: "GET",
    },
  },

  PRODUCT_LINE_SERVICES: {
    GET_ALL_PRODUCT_LINES: {
      URL: "get-all-product-lines",
      METHOD: "GET",
    },
  },

  VOUCHER_SERVICES: {
    GET_ALL_PRODUCT_LINES: {
      URL: "get-all-vouchers",
      METHOD: "GET",
    },
  },
};