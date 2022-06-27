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
  </template>
</template>

<script>
import WelcomeSectionData from "@/components/home/WelcomeSectionData.vue";
import SliderSection from "@/components/home/SliderSection.vue";
import WhyWe from "@/components/home/WhyWe.vue";

export default {
  components: {
    WelcomeSectionData,
    SliderSection,
    WhyWe,
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
      // console.log(this.homeData);
      // const { data } = await this.$prismic.client.getByID("Ym5d-hMAACUAifQS");
      // const homePageData = data;
      // this.welcomeSectionData = homePageData.body;
      // console.log(this.welcomeSectionData);
      // console.log(homePageDataBody);
    },
  },
  created() {
    this.getContent();
  },
};
</script>
