<template>
  <main class="item">
    <section class="img">
      <div>
        <img
          :src="itemDetail.images[imageIndex]"
          alt=""
          class="img-main object-scale-down h-98 w-98 ring-offset-2 ring-4 ring-amber-400"
        />
      </div>
      <div class="img-btns" v-if="itemDetail.images.length > 1">
        <button
          class="img-btn"
          v-for="(image, index) in itemDetail.images"
          :key="index"
          v-show="index !== imageIndex"
          @click="imageIndex = index"
        >
          <img :src="image" alt="product image" class="img-btn__img" />
        </button>
      </div>
    </section>

    <section class="price">
      <h2 id="provider-name" class="price-sub__heading cursor-pointer" @click="openProviderCatalog(itemDetail.provider_name)">
        {{ itemDetail.provider_name }}</h2>
      <h1 id="product-name" class="text-5xl font-bold">{{ itemDetail.name }}</h1>
      <p class="text-2xl text-gray-500 font-semibold">
        {{ itemDetail.long_desc }}<br />{{ itemDetail.short_desc }}
      </p>
      <div class="price-box">
        <div class="price-box__main">
          <span class="text-4xl font-bold">
            {{ store.currencySymbol[itemDetail.price.currency] }}
            {{
              itemDetail.price.value ||
              itemDetail.price.computed_value ||
              itemDetail.price.offered_value
            }}</span
          >
          <!--          <span class="price-box__main-discount"> 50%</span>-->
        </div>
        <!--        <span class="price-box__old">$250.00</span>-->
      </div>

      <div class="price-btnbox">
        <div class="price-btns">

          <button id="remove-item-count" class="price-btn__remove price-btn h-5" @click="itemRemove">
            <img
              alt="minus sign"
              class="price-btn__remove-img price-btn__img"
              src="../assets/icon-minus.svg"
            />
          </button>
          <span id="item-count" class="price-btn__txt">{{ itemCount }}</span>
          <button id="add-item-count"  class="price-btn__add price-btn" @click="itemAdd">
            <img
              alt="plus sign"
              class="price-btn__add-img price-btn__img"
              src="../assets/icon-plus.svg"
            />
          </button>

        </div>
        <button id="add-to-cart" class="price-cart__btn btn--orange" @click="addToCart">
          <img
            src="../assets/icon-cart.svg"
            alt="cart image"
            class="price-cart__btn-img"
          />
          Add to cart
        </button>
      </div>
    </section>
  </main>
</template>

<script>

import { useCatalogStore } from "../utils/store.js";
import NavBar from "../components/NavBar.vue";
import axios from "redaxios";

export default {
  name: "itemView",
  components: { NavBar },
  data: () => ({
    itemDetail: [],
    itemCount: 0,
    imageIndex: 0,

    // CSS
    orange: 'hsl(26, 100%, 55%)',
    pale_orange: 'hsl(25, 100%, 94%)',

    /* Neutral */

    very_dark_blue: 'hsl(220, 13%, 13%)',
    dark_grayish_blue: 'hsl(219, 9%, 45%)',
    grayish_blue: 'hsl(220, 14%, 75%)',
    light_grayish_blue: 'hsl(223, 64%, 98%)',
    white: 'hsl(0, 0%, 100%)',
    /* with 75% opacity for lightbox background */
    black: 'hsl(0, 0%, 0%)',

    /* Pseudo element txt */
    pseudo_text: '0',
  }),
  setup() {
    const store = useCatalogStore();
    return {
      store,
    };
  },
  created() {
    this.itemDetail = this.store.item;
    console.log(this.itemDetail);
  },
  methods: {
    itemAdd() {
      this.itemCount++;
    },
    itemRemove() {
      this.itemCount <= 1 ? (this.itemCount = 0) : this.itemCount--;
    },
    addToCart() {
      if (!this.itemCount) {
        return;
      }
      this.store.cart.push({ ...this.itemDetail, count: this.itemCount });
      this.store.cart = this.store.cart.filter(
        (value, index, array) =>
          array.findLastIndex((value2) => value2.id === value.id) === index
      );
    },
    async openProviderCatalog(providerName) {
      let data = {
        provider_name: providerName
      };

      let res = await axios.post(
        `${this.store.BAP_URI}/api/get-catalog`,
        data, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        });
      this.store.$patch({ messageId: res.data.message_id, catalog: [], searchText: this.searchText });
      await this.store.updateCatalog();
      this.$router.push({ name: "product" });
    }
  },
};
</script>

<style scoped>
:root {
  /*  Primary */
  --orange: hsl(26, 100%, 55%);
  --pale-orange: hsl(25, 100%, 94%);

  /* Neutral */

  --very-dark-blue: hsl(220, 13%, 13%);
  --dark-grayish-blue: hsl(219, 9%, 45%);
  --grayish-blue: hsl(220, 14%, 75%);
  --light-grayish-blue: hsl(223, 64%, 98%);
  --white: hsl(0, 0%, 100%);
  /* with 75% opacity for lightbox background */
  --black: hsl(0, 0%, 0%);

  /* Pseudo element txt */
  --pseudo-text: '0';
}

html {
  font-size: 50.5%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

/*/////////////
Main CSS
 //////////////*/

body {
  font-family: 'Kumbh Sans', sans-serif;
  position: relative;
}
.body-wrapper {
  position: absolute;
  z-index: 50;
}

/*/////////////
Overlay image modal
 //////////////*/


.img {
  margin-top: 3.5rem;
}


.overlay-btn:hover .overlay-btn__img {
  filter: invert(52%) sepia(14%) saturate(3126%) hue-rotate(344deg) brightness(107%) contrast(102%);
}

.btn--orange {
  padding: 2rem 5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: v-bind(white);
  background-color: v-bind(orange);
  border: none;
  border-radius: 1rem;
  cursor: pointer;
}

/* //////////////////
Product section stylling
/////////////////////// */

.item {
  padding: 0 3rem;
  max-width: 134rem;
  margin: auto;
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 10rem;
}

/* Left img container stylling */
.img-main {
  width: 75%;
  height: 75%;
  object-fit: cover;
  border-radius: 5%;
  cursor: pointer;
  margin-bottom: 3.5rem;
}


.img-btns {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.img-btn {
  display: block;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 10%;
  transition: all 0.3s;
  position: relative;
}

.img-btn::after {
  content: '';
  max-width: 100%;
  height: 100%;
  background-color: v-bind(white);
  border-radius: 10%;
  border: 3px solid transparent;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
}
.img-btn:hover {
  background-color: v-bind(orange);
}

.img-btn:hover::after {
  border: 3px solid v-bind(orange);
  opacity: 0.5;
}

.img-btn__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10%;
  border: 3px solid transparent;
  transition: all 0.3s;
  transform-origin: bottom;
}

/*Right item details stylling */
.price {
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.price-sub__heading {
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 1.5rem;
  font-weight: 700;
  color: v-bind(orange);
}

.price-main__heading {
  font-size: 5rem;
  font-weight: 700;
}

.price-txt {
  margin-top: 2rem;
  font-size: 1.8rem;
  color: v-bind(dark_grayish_blue);
  line-height: 1.5;
}

.price-box {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.price-box__main {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.price-box__main-new {
  font-size: 3.5rem;
  font-weight: 700;
}

.price-box__main-discount {
  border: none;
  padding: 0.5rem 1.25rem;
  background-color: v-bind(pale_orange);
  border-radius: 0.5rem;
  font-size: 1.7rem;
  font-weight: 700;
  color: v-bind(orange);
}

.price-box__old {
  font-size: 1.5rem;
  color: v-bind(grayish_blue);
  position: relative;
}

.price-box__old::after {
  content: '';
  height: 1px;
  width: 9%;
  background-color: v-bind(grayish_blue);
  position: absolute;
  left: 0;
  top: 50%;
}

.price-btnbox {
  margin-top: 2rem;
}

.price-btnbox {
  display: flex;
  gap: 2.5rem;
}

.price-btns {
  width: 30%;
  padding: 1.5rem 1.25rem;
  border: none;
  background-color: v-bind(ligth_grayish_blue);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.price-btn {
  border: none;
  background: none;
  cursor: pointer;
  height: 100%;
}

.price-btn__txt {
  font-size: 1.7rem;
  font-weight: 700;
}

.price-cart__btn {
  width: 50%;
  box-shadow: 0px 10px 25px 3px rgba(255, 125, 26, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

/* Attribution */

.attribution a {
  color: hsl(228, 45%, 44%);
}

/*/////////////
Media Queries
 //////////////*/
@media only screen and (max-width: 1600px) {


}

@media only screen and (max-width: 1100px) {
  html {
    font-size: 33%;
  }


  .price {
    margin-top: 0.5rem;
  }


  @media only screen and (max-width: 850px) {


    .item {
      padding: 0;
      grid-template-columns: 1fr;
      gap: 5rem;
    }

    .img {
      position: relative;
    }

    .img-main {
      border-radius: 0;
    }


    .img-btns {
      display: none;
    }

  .price {
    padding: 0 3rem;
  }

    .price-btnbox {
      flex-direction: column;
    }

    .price-btns {
      padding: 3rem 5rem;
      width: 100%;
    }

    .price-cart__btn {
      padding: 3rem 5rem;
      width: 100%;
    }

    .price-box {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .price-box__old::after {
      width: 100%;
    }


    @media only screen and (max-width: 420px) {
      .price {
        gap: 3rem;
      }

      .price-txt {
        margin-top: 0;
      }

      .price-btnbox {
        margin-top: 0;
      }

      .price-main__heading {
        font-size: 3.5rem;
      }

      .price-box__main-new {
        font-size: 3rem;
      }

    }

}
}
</style>
