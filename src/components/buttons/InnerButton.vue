<template>
  <router-link :to="innerLink"><slot></slot></router-link>
</template>

<script>
export default {
  props: {
    innerLink: {
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
  background: transparent;
  border: 0.1rem solid #2cd6e1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 30rem;
  color: #fff;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
  &:hover {
    background: #2cd6e1;
    color: black;
  }
}
</style>
