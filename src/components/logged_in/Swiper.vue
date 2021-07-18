<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="(el, i) in data"
      :key="i"
      class="feedImg vh-50"
      :style="`background-image: url('${getImageUrl(el)}')`"
    ></swiper-slide>
    <div
      v-if="data.length > 1"
      class="swiper-pagination"
      slot="pagination"
    ></div>
    <div
      v-if="data.length > 1"
      class="swiper-button-prev"
      slot="button-prev"
    ></div>
    <div
      v-if="data.length > 1"
      class="swiper-button-next"
      slot="button-next"
    ></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-pagination-dynamic",
  title: "Pagination / Dynamic bullets",
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    getImageUrl(file) {
      return `${process.env.VUE_APP_BACKEND}/post/image/${file}`;
    },
  },
  props: ["data"],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>
