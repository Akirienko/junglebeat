<template>
  <section class="home-welcome">
    <video-background
      :src="require(`@/video/video.mp4`)"
      style="position: absolute; width: 100%; height: 100%; z-index: -1"
      class="video"
    >
    </video-background>
    <div class="container">
      <div class="welcome-content">
        <div class="welcome-content__title">
          <h1 class="none">
            {{ $prismic.asText(welcomeSectionData.primary.title_welcome) }}
          </h1>
          <img src="@/assets/img/jungleBeat.png" alt="title name" />
          <svg
            viewBox="0 0 200 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1H88.0779L101.46 8.36H200"
              stroke="white"
              stroke-opacity="0.8"
              stroke-width="0.5"
            />
            <rect x="111" y="7" width="16" height="3" fill="#C4C4C4" />
          </svg>
        </div>

        <h3 class="welcome-content__subtitle">
          {{ welcomeSectionData.primary.subtitle_welcome }}
        </h3>
        <div class="welcome-content__btn">
          <InnerButton innerLink="/form">
            {{ welcomeSectionData.primary.button_text }}
          </InnerButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InnerButton from "@/components/buttons/InnerButton.vue";
// import VideoBackground from "vue-responsive-video-background-player";
// import video from "@/assets/video.mp4"; // Or '@/assets/demo.mp4' depending on what loader you use.

export default {
  name: "WelcomeSectionData",
  data() {
    return {
      // btnText: this.welcomeSectionData.button_text,
      // subtitle: this.welcomeSectionData.subtitle_welcome,
      // title: this.welcomeSectionData.title_welcome[0].text,
      //
      // btnText: this.homePageData.button_text,
      // subtitle: this.homePageData.subtitle_welcome,
    };
  },
  components: {
    InnerButton,
    // VideoBackground,
  },
  props: {
    welcomeSectionData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.none {
  opacity: 0;
}
.home-welcome {
  height: 100vh;
  background-image: url("@/assets/img/bhHomeFirst.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  .video {
    display: none;
  }
  .welcome-content {
    &__title {
      margin-bottom: 3rem;
      img {
        width: 28rem;
      }
      svg {
        position: absolute;
        right: 0;
        width: 20rem;
        bottom: -1.5rem;
      }
    }
    &__subtitle {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.9rem;
      letter-spacing: 0.02em;
      opacity: 0.8;
      margin-bottom: 3rem;
      width: 70%;
    }
    &__btn {
      display: flex;
      justify-content: center;
      a {
        width: 30rem;
        background: #2cd6e1;
        color: #000;
        &:hover {
          background: white;
          color: #2cd6e1;
        }
      }
    }
  }
}

@media (min-width: 760px) {
  .home-welcome {
    align-items: flex-end;
    padding-bottom: 16rem;
    .welcome-content {
      &__title {
        margin-bottom: 5rem;
        img {
          width: 65rem;
        }
        svg {
          width: 45rem;
          bottom: -2.5rem;
        }
      }
      &__subtitle {
        font-size: 3.5rem;
        line-height: 4.7rem;
        margin-bottom: 4rem;
        width: 80%;
      }
      &__btn {
        justify-content: flex-start;
        a {
          height: 6.5rem;
          font-size: 1.8rem;
          line-height: 2.2rem;
        }
      }
    }
  }
}

@media (min-width: 1020px) {
  .home-welcome {
    background-image: none;
    align-items: center;
    padding-bottom: 0;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: black;
      opacity: 0.4;
      z-index: -1;
    }
    .video {
      display: block;
    }
    .welcome-content {
      &__title {
        img {
          width: 80%;
        }
        svg {
          width: 65%;
        }
      }
      &__subtitle {
        width: 59rem;
      }
    }
  }
}

@media (min-width: 1620px) {
  .home-welcome {
    .welcome-content {
      &__subtitle {
        margin-bottom: 7rem;
      }
    }
  }
}
</style>
