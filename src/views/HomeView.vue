<template>
  <template v-if="homeData">
    <template v-for="content in homeData" :key="content.type">
      <WelcomeSectionData
        :key="content.slice_type"
        v-if="content.slice_type === 'welcomehome'"
        :welcomeSectionData="content"
      />
      <SliderSection
        :key="content.slice_type"
        v-if="content.slice_type === 'slidesection'"
        :sliderSectionData="content"
      />
      <WhyWe
        :key="content.slice_type"
        v-if="content.slice_type === 'whywe'"
        :whyWe="content"
      />
    </template>
    <InnerButton class="modal-button" innerLink="/earn">
      Зарабативай вместе с нами!
    </InnerButton>
  </template>
</template>

<style scoped lang="scss">
.modal-button {
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  z-index: 100;
  font-size: 1.3rem;
  height: 3rem;
  padding: 0 1rem;
  background: #2cd6e1;
  color: black;
  transition: 0.3s;

  -webkit-animation: bounce 0.7s infinite alternate;
  -moz-animation: bounce 0.7s infinite alternate;
  animation: bounce 0.7s infinite alternate;
  &:hover {
    background: white;
    color: #2cd6e1;
  }
  @media (min-width: 720px) {
    font-size: 1.5rem;
    height: 5rem;
    right: 5rem;
    bottom: 5rem;
  }
}
@-webkit-keyframes bounce {
  to {
    -webkit-transform: scale(1.1);
  }
}
@-moz-keyframes bounce {
  to {
    -moz-transform: scale(1.1);
  }
}
@keyframes bounce {
  to {
    transform: scale(1.1);
  }
}
</style>

<script>
import WelcomeSectionData from "@/components/home/WelcomeSectionData.vue";
import SliderSection from "@/components/home/SliderSection.vue";
import WhyWe from "@/components/home/WhyWe.vue";
import InnerButton from "@/components/buttons/InnerButton.vue";

export default {
  components: {
    WelcomeSectionData,
    SliderSection,
    WhyWe,
    InnerButton,
  },
  data: () => {
    return {
      homeData: null,
      welcomeSectionData: null,
      sliderSectionData: [],
      whyWe: null,
    };
  },
  methods: {
    async getContent() {
      await this.$prismic.client
        .getByID("Ym5d-hMAACUAifQS")
        .then((data) => (this.homeData = data.data.body))
        .catch((err) => console.error(err));
    },
  },
  created() {
    this.getContent();
  },
};
</script>
