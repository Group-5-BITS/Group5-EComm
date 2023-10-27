import { defineStore } from "pinia";

export const useCatalogStore = defineStore("catalog", {
  state: () => ({
    item: null,
    catalog: [
      {
        title: "Afro-Brazilian Coffee",
        images: ["https://componentland.com/images/JHxMnVrtPMdcNU1s_7g7f.png"],
        ratings: {
          starCount: 4,
          starPath:
            "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
          reviews: 1209,
        },
        typeRadioName: "coffeeType",
        selectedProductType: "Coffee",
        subscriptions: [
          {
            name: "4 KG",
            pricePerKilo: "$80",
          },
          {
            name: "8 KG",
            pricePerKilo: "$60",
          },
          {
            name: "12 KG",
            pricePerKilo: "$40",
          },
        ],
        subscriptionRadioName: "subscription",
        selectedSubscription: "8 KG",
        defaultSubscription: "8 KG",
        price: "$60.50",
        features: ["Free shipping worldwide", "Cancel Anytime"],
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.",
        delivery: {
          title: "Delivered To Your Door",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.",
        },
        farms: {
          title: "From the Fine Farms of Brazil",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.",
          additionalText:
            "Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.",
        },
      },
      {
        title: "Fresh Mangoes",
        selectedProductType: "Mangoes",
        subscriptions: [
          {
            name: "4 KG",
            pricePerKilo: "$80",
          },
          {
            name: "8 KG",
            pricePerKilo: "$60",
          },
          {
            name: "12 KG",
            pricePerKilo: "$40",
          },
        ],
        delivery: {
          title: "Delivered To Your Door",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.",
        },
        farms: {
          title: "From the Fine Farms of Brazil",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.",
          additionalText:
            "Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.",
        },
        subscriptionRadioName: "subscription",
        selectedSubscription: "8 KG",
        defaultSubscription: "8 KG",
        images: [
          "https://m.media-amazon.com/images/I/51ByzL4LRML._AC_UF1000,1000_QL80_.jpg",
          "https://tiimg.tistatic.com/fp/1/006/616/a-grade-fresh-mango-fruit-892.jpg",
        ],
        ratings: {
          starCount: 4,
          reviews: 750,
        },
        description:
          "Savor the tropical delight of fresh mangoes. Sweet, juicy, and bursting with flavor.",
        price: "$1.49 each",
        features: [
          "Tropical goodness",
          "Rich in vitamin C",
          "Naturally ripened",
        ],
      },
      {
        title: "Organic Apples",
        selectedProductType: "Apples",
        subscriptions: [
          {
            name: "4 KG",
            pricePerKilo: "$80",
          },
          {
            name: "8 KG",
            pricePerKilo: "$60",
          },
          {
            name: "12 KG",
            pricePerKilo: "$40",
          },
        ],
        delivery: {
          title: "Delivered To Your Door",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.",
        },
        farms: {
          title: "From the Fine Farms of Brazil",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.",
          additionalText:
            "Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.",
        },
        subscriptionRadioName: "subscription",
        selectedSubscription: "8 KG",
        defaultSubscription: "8 KG",
        images: [
          "https://5.imimg.com/data5/UM/DM/MY-43685925/organic-apple.jpg",
          "https://m.media-amazon.com/images/I/719ytzS5RgL._AC_UF1000,1000_QL80_.jpg",
        ],
        ratings: {
          starCount: 5,
          reviews: 1200,
        },
        description:
          "Fresh, organic apples straight from the orchard. Perfect for snacking or making delicious pies.",
        price: "$2.99 per pound",
        features: [
          "Organically grown",
          "Crisp and juicy",
          "No added preservatives",
        ],
      },
      {
        title: "Sweet Strawberries",
        selectedProductType: "Strawberries",
        subscriptions: [
          {
            name: "4 KG",
            pricePerKilo: "$80",
          },
          {
            name: "8 KG",
            pricePerKilo: "$60",
          },
          {
            name: "12 KG",
            pricePerKilo: "$40",
          },
        ],
        delivery: {
          title: "Delivered To Your Door",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.",
        },
        farms: {
          title: "From the Fine Farms of Brazil",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.",
          additionalText:
            "Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.",
        },
        subscriptionRadioName: "subscription",
        selectedSubscription: "8 KG",
        defaultSubscription: "8 KG",
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKV_gXPvOih732Goq68TMiGSA6Ormr5sPqJj6g7cOfX4Dv-_H5Bo9BaYC7aqXvnWDkwVE&usqp=CAU",
          "https://assets-global.website-files.com/5f854ebf1a80ea53fd7df5da/60c80d1f0a111db39e3415dc_strawberries-growing-on-vine_thumb.jpg",
        ],
        ratings: {
          starCount: 4,
          reviews: 950,
        },
        description:
          "Delight in the sweetness of these succulent strawberries. Perfect for desserts or snacking.",
        price: "$4.99 per pint",
        features: ["Ripe and sweet", "High in vitamin C", "Locally sourced"],
      },
      {
        title: "Juicy Oranges",
        selectedProductType: "Oranges",
        subscriptions: [
          {
            name: "4 KG",
            pricePerKilo: "$80",
          },
          {
            name: "8 KG",
            pricePerKilo: "$60",
          },
          {
            name: "12 KG",
            pricePerKilo: "$40",
          },
        ],
        delivery: {
          title: "Delivered To Your Door",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.",
        },
        farms: {
          title: "From the Fine Farms of Brazil",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.",
          additionalText:
            "Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.",
        },
        subscriptionRadioName: "subscription",
        selectedSubscription: "8 KG",
        defaultSubscription: "8 KG",
        images: [
          "https://media.istockphoto.com/id/174816200/photo/orange-juice.jpg?s=612x612&w=0&k=20&c=sqSSborE4XV3N5z7uyvowVKRbvhcH5nc518TZk97vXA=",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4pUHjhQ1x31LeaX3RqSAyIt1j37Qsfzvc0ASQQtGKhKzwuWgekkf5Yx_9T296dYFQhc&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlUAQk-sFL8OJOhwdlLHuKhZDoEhTuqSsmq-GhVvG6tjxzTtSr0bE5YyRspUQe9EwzaVY&usqp=CAU",
        ],
        ratings: {
          starCount: 4,
          reviews: 850,
        },
        description:
          "Experience the refreshing taste of these juicy oranges. Great for making fresh orange juice.",
        price: "$0.99 each",
        features: ["Vitamin C-rich", "Naturally sweet", "Packed with flavor"],
      },
      {
        title: "Ripe Bananas",
        selectedProductType: "Bananas",
        subscriptions: [
          {
            name: "4 KG",
            pricePerKilo: "$80",
          },
          {
            name: "8 KG",
            pricePerKilo: "$60",
          },
          {
            name: "12 KG",
            pricePerKilo: "$40",
          },
        ],
        delivery: {
          title: "Delivered To Your Door",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.",
        },
        farms: {
          title: "From the Fine Farms of Brazil",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.",
          additionalText:
            "Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.",
        },
        subscriptionRadioName: "subscription",
        selectedSubscription: "8 KG",
        defaultSubscription: "8 KG",
        images: [
          "https://i2.wp.com/www.foodlovinfamily.com/wp-content/uploads/2021/12/how-to-ripen-bananas.jpg",
          "https://freshfruitsandveges.co.nz/wp-content/uploads/2020/04/Ripe-Banana.jpeg",
        ],
        ratings: {
          starCount: 5,
          reviews: 1100,
        },
        description:
          "Enjoy these ripe bananas as a healthy and convenient snack. Packed with essential nutrients.",
        price: "$0.49 each",
        features: [
          "High in potassium",
          "Naturally sweet",
          "Great for smoothies",
        ],
      },
      {
        title: "Fresh Blueberries",
        selectedProductType: "Blueberries",
        subscriptions: [
          {
            name: "4 KG",
            pricePerKilo: "$80",
          },
          {
            name: "8 KG",
            pricePerKilo: "$60",
          },
          {
            name: "12 KG",
            pricePerKilo: "$40",
          },
        ],
        delivery: {
          title: "Delivered To Your Door",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.",
        },
        farms: {
          title: "From the Fine Farms of Brazil",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.",
          additionalText:
            "Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.",
        },
        subscriptionRadioName: "subscription",
        selectedSubscription: "8 KG",
        defaultSubscription: "8 KG",
        images: [
          "https://www.bigbasket.com/media/uploads/p/l/30009286_7-fresho-blueberry.jpg",
          "https://frugivore-storage.s3.amazonaws.com/media/package/img_one/2020-12-03/Fresh_Blueberry.jpg",
          "https://m.media-amazon.com/images/I/61M5nzd4QoL.jpg",
        ],
        ratings: {
          starCount: 5,
          reviews: 1300,
        },
        description:
          "Indulge in the goodness of fresh blueberries. Perfect for topping cereals or making pies.",
        price: "$3.99 per pint",
        features: [
          "Antioxidant-rich",
          "Plump and juicy",
          "No artificial colors",
        ],
      },
      {
        title: "Zesty Lemons",
        selectedProductType: "Lemons",
        subscriptions: [
          {
            name: "4 KG",
            pricePerKilo: "$80",
          },
          {
            name: "8 KG",
            pricePerKilo: "$60",
          },
          {
            name: "12 KG",
            pricePerKilo: "$40",
          },
        ],
        delivery: {
          title: "Delivered To Your Door",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.",
        },
        farms: {
          title: "From the Fine Farms of Brazil",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.",
          additionalText:
            "Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.",
        },
        subscriptionRadioName: "subscription",
        selectedSubscription: "8 KG",
        defaultSubscription: "8 KG",
        images: [
          "https://static.wixstatic.com/media/nsplsh_795f7370514d5154466a73~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_480,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_795f7370514d5154466a73~mv2_d_6000_4000_s_4_2.jpg",
          "https://www.bettycrocker.com/-/media/GMI/Core-Sites/BC/Images/BC/content/menus-holidays-parties/recipes/recipes-that-will-help-you-use-a-costco-sized-bag-of-lemons/lemon-recipes_hero.jpg?sc_lang=en",
        ],
        ratings: {
          starCount: 4,
          reviews: 800,
        },
        description:
          "Add a zing to your dishes with these zesty lemons. Great for cooking and making lemonade.",
        price: "$0.79 each",
        features: [
          "High in vitamin C",
          "Tangy and fresh",
          "Versatile ingredient",
        ],
      },
    ],
  }),
  getters: {
    getItem() {
      return this.catalog[this.item];
    },
  },
  actions: {
    async selectItem(item) {
      this.item = item;
    },
  },
});
