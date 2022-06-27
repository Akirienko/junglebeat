<template>
  <section class="about">
    <div class="container">
      <!-- <img
        src="@/assets/img/homeThirdS/bg3shome.png"
        alt="bg-about"
        class="bg-about"
      /> -->
      <div class="about-title">
        <h2>{{ $prismic.asText(whyWe.primary.title) }}</h2>
      </div>
      <div class="about-content">
        <div
          class="about-content__block"
          v-for="item in whyWe.items"
          :key="item"
        >
          <div class="about-content__block-img">
            <svg
              viewBox="0 0 36 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36 1H12.875L1 8.43952V46"
                stroke="white"
                stroke-opacity="0.8"
              />
            </svg>
            <img :src="item.img_list.url" alt="5" />
          </div>
          <div class="about-content__block-text">
            <p>{{ $prismic.asText(item.text_list) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    whyWe: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  margin-top: 10rem;
  .bg-about {
    position: absolute;
    z-index: -1;
  }
  &-title {
    margin-bottom: 2.5rem;
    h2 {
      background: linear-gradient(
        180deg,
        #a98fe1 0%,
        rgba(253, 253, 253, 0.85) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      font-weight: 600;
      font-size: 2.6rem;
      line-height: 3.2rem;
    }
  }
  &-content {
    &__block {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      &:nth-child(even) {
        justify-content: flex-end;
      }
      &-img {
        margin-right: 2rem;
        padding: 1rem;
        svg {
          position: absolute;
          width: 4rem;
          top: 0;
          left: 0;
        }
        img {
          width: 4rem;
        }
      }
      &-text {
        opacity: 0.8;
      }
    }
  }
}

@media (min-width: 720px) {
  .about {
    margin-top: 10rem;
    .bg-about {
      right: 0;
      width: 34rem;
    }
    &-title {
      padding-top: 3rem;
      margin-bottom: 5rem;
      h2 {
        font-size: 6rem;
        line-height: 7.3rem;
      }
    }
    &-content {
      display: grid;
      grid-template-columns: 35rem 35rem;
      &__block {
        margin-bottom: 5rem;
        &:nth-child(even) {
          justify-content: flex-start;
        }
        &-img {
          margin-right: 3rem;
          padding: 1rem;
          svg {
            position: absolute;
            width: 7rem;
            top: 0;
            left: 0;
          }
          img {
            width: 8rem;
          }
        }
      }
    }
  }
}

@media (min-width: 1250px) {
  .about {
    &-content {
      grid-template-columns: 40rem 40rem;
      &__block {
        margin-bottom: 10rem;
        &-img {
          margin-right: 3rem;
          padding: 1rem;
          img {
            width: 9rem;
          }
        }
      }
    }
  }
}

@media (min-width: 1620px) {
  .about {
    &-content {
      grid-template-columns: 55rem 40rem;
    }
  }
}
</style>
