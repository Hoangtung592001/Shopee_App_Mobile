import GLOBAL_TYPES from "../../constants/actions";

const initialState = {
    allProducts: [],
    productById: {
        data: {
            id: 1,
            productLine: 1,
            quantityInStock: 1,
            priceEach: 1,
            image: "",
            description: "",
            origin: "",
            discount: 1,
            soldQuantity: 1,
            shop: {
                id: 1,
                shopName: 1,
                products: [],
            },
            judges: [],
            images: [],
            like: {},
        },
    },
    ordersInfo: {
        data: {
            orders: [],
            id: 2,
            email: "nhtung5901@gmail.com",
            username: "Nguyen Hoang Tung",
            image: "https://demoda.vn/wp-content/uploads/2022/04/hinh-cute-anh-cute.jpg",
            shop: {
                id: 1,
                shopName: "ShopPhuKien",
            },
        },
    },
    recentVisitedProducts: {
        data: [],
    },
    likedProducts: {
        data: [],
    },
    infoOrders: {
        id: 0,
        name: "",
        username: "",
        shop: {},
        orders: {
            deletedOrders: [],
            deliveringOrders: [],
            waitingForDeliveringProducts: [],
            deliveredProducts: [],
        },
    },
    progressOrders: {
        data: {
            deletedOrders: [],
            deliveringOrders: [],
            waitingForDeliveringProducts: [],
            deliveredProducts: [],
        },
    },
    listSearchProducts: {
        data: [],
    },
    searchProducts: {
        data: [],
    },
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case GLOBAL_TYPES.GET_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
            };
        case GLOBAL_TYPES.GET_PRODUCT_BY_ID:
            return {
                ...state,
                productById: {
                    data: action.payload,
                },
            };
        case GLOBAL_TYPES.GET_RECENT_VISITED_PRODUCTS:
            return {
                ...state,
                recentVisitedProducts: {
                    data: action.payload,
                },
            };
        case GLOBAL_TYPES.SET_CURRENT_ACTIVE:
            return {
                ...state,
                currentActive: action.payload,
            };
        case GLOBAL_TYPES.GET_LIKED_PRODUCTS:
            return {
                ...state,
                likedProducts: {
                    data: action.payload,
                },
            };
        case GLOBAL_TYPES.GET_INFO_ORDER:
            return {
                ...state,
                infoOrders: {
                    ...action.payload,
                },
            };
        case GLOBAL_TYPES.GET_PROGRESS_ORDERS:
            return {
                ...state,
                progressOrders: {
                    data: action.payload,
                },
            };
        case GLOBAL_TYPES.GET_LIST_SEARCH_PRODUCTS:
            return {
                ...state,
                listSearchProducts: {
                    data: action.payload,
                },
            };
        case GLOBAL_TYPES.GET_SEARCH_PRODUCTS:
            return {
                ...state,
                searchProducts: {
                    data: action.payload,
                },
            };
        case GLOBAL_TYPES.LIKE_PRODUCT:
            return {
                ...state,
                productById: {
                    data: {
                        ...state.productById.data,
                        like: action.payload ? { id: 1 } : null,
                    },
                },
            };
        case GLOBAL_TYPES.DELETE_PRODUCT:
            return {
                ...state,
                allProducts: state.allProducts.filter((product) => {
                    return product.id != action.payload;
                }),
            };
        case GLOBAL_TYPES.DELETE_INFO_ORDERS:
            return {
                ...state,
                infoOrders: initialState.infoOrders,
            };

        default:
            return state;
    }
}
