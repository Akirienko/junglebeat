import { createPrismic } from "@prismicio/vue";

import linkResolver from "./linkResolver";

const prismic = createPrismic({
  endpoint: "https://junglebeat.cdn.prismic.io/api/v2",
  linkResolver,
});

export default prismic;
