import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import prismic from "./plugins/prismic";
// import { createPrismic } from "@prismicio/vue";

// const prismic = createPrismic({
//   endpoint: "https://junglebeat.cdn.prismic.io/api/v2",
// });

const app = createApp(App);

app.use(router);
app.use(prismic);
// app.use(router);

app.mount("#app");
// createApp(App).use(router).mount("#app")
