export const route = [
  {
    path: "/",
    name: "Home",
    icone: "fa fa-home",
  },
  {
    path: "/order",
    name: "Order",
    icone: "fa-solid fa-bag-shopping",
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/Product",
    name: "Product",
    icone: "fa-sharp fa-solid fa-box-archive",
    subRoutes: [
      {
        path: "/product/productlist",
        name: "Product List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/brand",
    name: "Brand",
    icone: "fa-solid fa-bag-shopping",
    subRoutes: [
      {
        path: "/brand/brandlist",
        name: "Brand List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/customer",
    name: "Customer",
    icone: "fa-solid fa-user",
    subRoutes: [
      {
        path: "/Customer/customerlist",
        name: "Customer List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/mastermanagment",
    name: "MasterManagement",
    icone: "fa-solid fa-user-gear",
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/coupencode",
    name: "Coupen Code",
    icone: "fa-solid fa-tag",
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/appearance",
    name: "Appearance",
    icone: "fa-solid fa-bag-shopping",
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/media",
    name: "Media",
    icone: "fa-solid fa-circle-play",
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/gallery",
    name: "Gallery",
    icone: "fa-solid fa-image",
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/category",
    name: "Category",
    icone: "fa-solid fa-image",
    subRoutes: [
      {
        path: "/Category/categorylist",
        name: "Category List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/transaction",
    name: "Transaction",
    icone: "fa-solid fa-money-check",
  },
];
