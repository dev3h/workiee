export const blogs = [
  {
    image: require("../assets/images/blog/img1.webp"),
    tag: "LADIES",
    title: "Catalogue Mode",
    description:
      "It is a long established fact that by the readable content of a page when looking at its layout.",
    author: "Diego Lopez",
    date: "June 21, 2018",
    comment: 25,
  },
  {
    image: require("../assets/images/blog/img2.webp"),
    tag: "WOKIEE",
    title: "COUNTDOWN TIMEZONE",
    description:
      "It is a long established fact that by the readable content of a page when looking at its layout.",
    author: "Diego Lopez",
    date: "June 21, 2018",
    comment: 17,
  },
  {
    image: require("../assets/images/blog/img3.webp"),
    tag: "PROMO",
    title: "PURCHASED PROMO SECTION",
    description:
      "It is a long established fact that by the readable content of a page when looking at its layout.",
    author: "Diego Lopez",
    date: "June 21, 2018",
    comment: 10,
  },
];
export const categories = [
  {
    name: "SALE",
    id: "sale",
    image: require("../assets/images/category/img1.webp"),
  },
  {
    name: "WOMEN",
    id: "women",
    image: require("../assets/images/category/img2.webp"),
  },
  {
    name: "MEN",
    id: "men",
    image: require("../assets/images/category/img3.webp"),
  },
  {
    name: "ACCESSORIES",
    id: "accessories",
    image: require("../assets/images/category/img4.webp"),
  },
  {
    name: "NEW",
    id: "new",
    image: require("../assets/images/category/img5.webp"),
  },
  {
    name: "SHOES",
    id: "shoes",
    image: require("../assets/images/category/img6.webp"),
  },
];
export const collectionFields = [
  {
    name: "Womens",
    link: "/Womens",
  },
  {
    name: "Mens",
    link: "/Mens",
  },
  {
    name: "Trending",
    link: "/Trending",
  },
  {
    name: "New",
    link: "/New",
  },
];
export const productTypeFields = [
  {
    name: "Bag",
    id: "bag",
  },
  {
    name: "Belt",
    id: "belt",
  },
  {
    name: "Jeans",
    id: "jeans",
  },
  {
    name: "Polo",
    id: "polo",
  },
  {
    name: "Shirt",
    id: "shirt",
  },
  {
    name: "Shoes",
    id: "shoes",
  },
  {
    name: "Sunglasses",
    id: "sunglasses",
  },
  {
    name: "Sweater",
    id: "sweater",
  },
];
export const womenColors = [
  {
    hexId: "#fbdbb5",
    name: "Beige",
    id: "beige",
  },
  {
    hexId: "#4d4d4d",
    name: "Black",
    id: "black",
  },
  {
    hexId: "#2196f3",
    name: "Blue",
    id: "blue",
  },
  {
    hexId: "#a3794d",
    name: "Brown",
    id: "brown",
  },
  {
    hexId: "#c0c0c0",
    name: "Grey",
    id: "grey",
  },
  {
    hexId: "#add8e6",
    name: "Light Blue",
    id: "lightBlue",
  },
  {
    hexId: "#fea634",
    name: "Orange",
    id: "orange",
  },
  {
    hexId: "#ffc0cb",
    name: "Pink",
    id: "pink",
  },
  {
    hexId: "#fff",
    name: "White",
    id: "white",
  },
];
export const womenProducts = [
  {
    id: 1,
    sku: 462,
    availability: " 12 in stock",
    band: "ZARA",
    price: 400,
    image: require("../assets/images/womenProducts/img1.webp"),
    name: "Tailored Fit Mesh-Panel Polo",
    type: "Polo",
    star: "⭐⭐⭐⭐⭐",
    code: "123456789",
    tags: [
      {
        name: "Sunglasses",
        link: "/sunglasses",
      },
      {
        name: "Winter",
        link: "/winter",
      },
      {
        name: "Short",
        link: "/short",
      },
      {
        name: "Cool",
        link: "/cool",
      },
      {
        name: "Nice",
        link: "/nice",
      },
    ],
    description: [
      "We are proud to present our best premium Shopify theme - Wokiee.",
      "This is multi-purpose software that can be used for any type of the store. Great variety of available options will make customization process very easy.",
      "Please, take a look at feature list and compare with our competitors.",
      "You can buy our theme and start your business online with minimal time investments.",
      "Wokiee support DropShipping app Oberlo. Wokiee Shopify theme is powerfool tool to create personal webshop.",
    ],
    general: {
      colors: ["Blue", "Green"],
      sizes: [20, 24],
      material: "100% Polyester",
    },
  },
  {
    id: 2,
    sku: 445,
    availability: "Many in stock",
    band: "GAP",
    price: 380.0,
    image: require("../assets/images/womenProducts/img2.webp"),
    name: "Premier Cropped Skinny Jean",
    type: "Jeans",
    star: "⭐⭐⭐⭐⭐",
    code: "123456789",
    tags: [
      {
        name: "Sunglasses",
        link: "/sunglasses",
      },
      {
        name: "Winter",
        link: "/winter",
      },
      {
        name: "Short",
        link: "/short",
      },
      {
        name: "Cool",
        link: "/cool",
      },
      {
        name: "Nice",
        link: "/nice",
      },
    ],
    description: [
      "We are proud to present our best premium Shopify theme - Wokiee.",
      "This is multi-purpose software that can be used for any type of the store. Great variety of available options will make customization process very easy.",
      "Please, take a look at feature list and compare with our competitors.",
      "You can buy our theme and start your business online with minimal time investments.",
      "Wokiee support DropShipping app Oberlo. Wokiee Shopify theme is powerfool tool to create personal webshop.",
    ],
    general: {
      colors: ["Blue", "Light BLue", "Green", "Pink", "Orange"],
      sizes: [20, 24],
      material: "100% Polyester",
    },
  },
  {
    id: 3,
    sku: 493,
    availability: "Many in stock",
    band: "GUESS",
    price: 480.0,
    image: require("../assets/images/womenProducts/img3.webp"),
    name: "Relaxed-Fit Cotton Shirt",
    type: "Shirt",
    star: "⭐⭐⭐⭐⭐",
    code: "123456789",
    tags: [
      {
        name: "Vintage",
        link: "/vintage",
      },
      {
        name: "Awesome",
        link: "/awesome",
      },
      {
        name: "Summer",
        link: "/summer",
      },
      {
        name: "Beachwear",
        link: "/beachwear",
      },
    ],
    description: [
      "We are proud to present our best premium Shopify theme - Wokiee.",
      "This is multi-purpose software that can be used for any type of the store. Great variety of available options will make customization process very easy.",
      "Please, take a look at feature list and compare with our competitors.",
      "You can buy our theme and start your business online with minimal time investments.",
      "Wokiee support DropShipping app Oberlo. Wokiee Shopify theme is powerfool tool to create personal webshop.",
    ],
    general: {
      colors: ["Grey", "Green"],
      sizes: [20, 24],
      material: "100% Polyester",
    },
  },
  {
    id: 4,
    sku: 481,
    availability: "You can purchase this product but it's out of stock",
    band: "LACOSTE",
    price: 440.0,
    image: require("../assets/images/womenProducts/img4.webp"),
    name: "Viscose-Cashmere Scarf",
    type: "Scarf",
    star: "⭐⭐⭐⭐⭐",
    code: "123456789",
    tags: [
      {
        name: "Vintage",
        link: "/vintage",
      },
      {
        name: "Awesome",
        link: "/awesome",
      },
      {
        name: "Summer",
        link: "/summer",
      },
      {
        name: "Beachwear",
        link: "/beachwear",
      },
    ],
    description: [
      "We are proud to present our best premium Shopify theme - Wokiee.",
      "This is multi-purpose software that can be used for any type of the store. Great variety of available options will make customization process very easy.",
      "Please, take a look at feature list and compare with our competitors.",
      "You can buy our theme and start your business online with minimal time investments.",
      "Wokiee support DropShipping app Oberlo. Wokiee Shopify theme is powerfool tool to create personal webshop.",
    ],
    general: {
      colors: ["Light Blue", "Blue", "Black"],
      sizes: [20, 24],
      material: "100% Polyester",
    },
  },
  {
    id: 5,
    sku: 501,
    availability: "Many in stock",
    band: "Levi's",
    price: 500.0,
    image: require("../assets/images/womenProducts/img5.webp"),
    name: "Slim Fit Cotton Oxford Shirt",
    type: " Shirt",
    star: "⭐⭐⭐⭐⭐",
    code: "123456789",
    tags: [
      {
        name: "Vintage",
        link: "/vintage",
      },
      {
        name: "Awesome",
        link: "/awesome",
      },
      {
        name: "Summer",
        link: "/summer",
      },
      {
        name: "Beachwear",
        link: "/beachwear",
      },
    ],
    description: [
      "We are proud to present our best premium Shopify theme - Wokiee.",
      "This is multi-purpose software that can be used for any type of the store. Great variety of available options will make customization process very easy.",
      "Please, take a look at feature list and compare with our competitors.",
      "You can buy our theme and start your business online with minimal time investments.",
      "Wokiee support DropShipping app Oberlo. Wokiee Shopify theme is powerfool tool to create personal webshop.",
    ],
    general: {
      colors: ["Light Blue", "Pink"],
      sizes: [20, 24],
      material: "100% Polyester",
    },
  },
  {
    id: 6,
    sku: 34,
    availability: "Many in stock",
    band: "Polo",
    price: 180.0,
    image: require("../assets/images/womenProducts/img6.webp"),
    name: "Rounded Cat Eye Sunglasses",
    type: "Sunglasses",
    star: "⭐⭐⭐⭐⭐",
    code: "123456789",
    tags: [
      {
        name: "Vintage",
        link: "/vintage",
      },
      {
        name: "Awesome",
        link: "/awesome",
      },
      {
        name: "Summer",
        link: "/summer",
      },
      {
        name: "Beachwear",
        link: "/beachwear",
      },
    ],
    description: [
      "We are proud to present our best premium Shopify theme - Wokiee.",
      "This is multi-purpose software that can be used for any type of the store. Great variety of available options will make customization process very easy.",
      "Please, take a look at feature list and compare with our competitors.",
      "You can buy our theme and start your business online with minimal time investments.",
      "Wokiee support DropShipping app Oberlo. Wokiee Shopify theme is powerfool tool to create personal webshop.",
    ],
    general: {
      colors: ["Blue", "Purple", "Pink"],
      sizes: [20, 24],
      material: "100% Polyester",
    },
  },
  {
    id: 7,
    sku: 27,
    availability: "Many in stock",
    band: "Zara",
    price: 40.0,
    image: require("../assets/images/womenProducts/img7.webp"),
    name: "Paint-Splatter Fleece Pullover",
    type: "Pullover",
    star: "⭐⭐⭐⭐⭐",
    code: "123456789",
    tags: [
      {
        name: "Vintage",
        link: "/vintage",
      },
      {
        name: "Awesome",
        link: "/awesome",
      },
      {
        name: "Summer",
        link: "/summer",
      },
      {
        name: "Beachwear",
        link: "/beachwear",
      },
    ],
    description: [
      "We are proud to present our best premium Shopify theme - Wokiee.",
      "This is multi-purpose software that can be used for any type of the store. Great variety of available options will make customization process very easy.",
      "Please, take a look at feature list and compare with our competitors.",
      "You can buy our theme and start your business online with minimal time investments.",
      "Wokiee support DropShipping app Oberlo. Wokiee Shopify theme is powerfool tool to create personal webshop.",
    ],
    general: {
      colors: ["Blue", "Purple", "Pink"],
      sizes: [20, 24],
      material: "100% Polyester",
    },
  },
  {
    id: 8,
    sku: 43,
    availability: "Many in stock",
    band: "Levi's",
    price: 360.0,
    image: require("../assets/images/womenProducts/img8.webp"),
    name: "Woven Shield Sunglasses",
    type: "Sunglasses",
    star: "⭐⭐⭐⭐⭐",
    code: "123456789",
    tags: [
      {
        name: "Sunglasses",
        link: "/sunglasses",
      },
      {
        name: "Winter",
        link: "/winter",
      },
      {
        name: "Shorts",
        link: "/shorts",
      },
      {
        name: "Cool",
        link: "/cool",
      },
      {
        name: "Nice",
        link: "/nice",
      },
    ],
    description: [
      "We are proud to present our best premium Shopify theme - Wokiee.",
      "This is multi-purpose software that can be used for any type of the store. Great variety of available options will make customization process very easy.",
      "Please, take a look at feature list and compare with our competitors.",
      "You can buy our theme and start your business online with minimal time investments.",
      "Wokiee support DropShipping app Oberlo. Wokiee Shopify theme is powerfool tool to create personal webshop.",
    ],
    general: {
      colors: ["Blue", "Purple", "Pink"],
      sizes: [20, 24],
      material: "100% Polyester",
    },
  },
];
