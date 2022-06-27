<template>
  <section class="container">
    <carousel :settings="settings" :breakpoints="breakpoints">
      <slide v-for="(slide, idx) in sliderSectionData.items" :key="idx">
        <div class="slider-container">
          <div class="img-slide">
            <img :src="slide.image_slide.url" alt="" />
          </div>
          <h2>{{ slide.title_slide }}</h2>
          <p>{{ slide.description_slide }}</p>
          <div class="slider-btns">
            <InnerButton innerLink="/price">Узнать цену</InnerButton>
            <InnerButton innerLink="/form">Стать поставщиком</InnerButton>
          </div>
        </div>
      </slide>

      <template #addons>
        <div class="addons-slider">
          <pagination />
          <div class="navigation-slider">
            <navigation></navigation>
          </div>
        </div>
      </template>
    </carousel>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
// import ExternalButton from "@/components/buttons/ExternalButton.vue";
import InnerButton from "@/components/buttons/InnerButton.vue";

export default {
  name: "SliderSection",
  data: function () {
    return {
      settings: {
        itemsToShow: 1,
      },
      breakpoints: {
        700: {
          itemsToShow: 2,
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    InnerButton,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    sliderSectionData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel__slide {
  padding: 0 2rem;
  // margin-right: 4rem;
  .slider-container {
    display: flex;
    flex-direction: column;
    background: linear-gradient(214.95deg, #434b69 2.14%, #293046 54.47%);
    padding: 2.5rem 2rem;
    text-align: start;
    h2 {
      margin: 1.5rem 0;
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.4rem;
      opacity: 0.8;
    }
    p {
      opacity: 0.8;
      margin-bottom: 1.5rem;
    }
    .slider-btns {
      a {
        margin-bottom: 1.5rem;
        &:last-child {
          margin-bottom: 0;
        }
        &:last-child {
          background: #2cd6e1;
          color: #000;
        }
      }
    }
  }
}

.addons-slider {
  .navigation-slider {
    display: none;
  }
}

@media (min-width: 1020px) {
  .carousel__slide {
    transition: 0.5s;
    transform: scale(0.9);
    .slider-container {
      transition: 0.5s;
      // padding: 4rem;
      p {
        margin-bottom: 5rem;
      }
    }
    &.carousel__slide--active {
      transform: scale(1);
    }
    .slider-btns {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      a {
        width: 100%;
      }
    }
  }
  .addons-slider {
    margin-top: 5rem;
    .carousel__pagination {
      &-item {
        .carousel__pagination-button {
          border-radius: 50%;
          height: 1.5rem;
          width: 1.5rem;
        }
      }
    }

    .navigation-slider {
      display: none;
    }
  }
}

@media (min-width: 1260px) {
  .carousel__slide {
    .slider-btns {
      display: flex;
      flex-direction: row;
      // justify-content: center;
      // align-items: center;
      a {
        &:first-child {
          margin: 0 2rem 0 0;
        }
      }
    }
  }
}
</style>
