<template>
  <a :href="externalLink"><slot></slot></a>
</template>

<script>
export default {
  props: {
    externalLink: {
      type: String,
      required: true,
      default: "/",
    },
  },
};
</script>

<style scoped lang="scss">
a {
  height: 6rem;
  background: #2cd6e1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 30rem;
  color: #000;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
  &:hover {
    background: black;
    color: #2cd6e1;
  }
}
</style>
