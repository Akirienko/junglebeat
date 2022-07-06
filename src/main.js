import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import prismic from "./plugins/prismic";
// import { Plugin } from "vue-responsive-video-background-player";

import VideoBackground from "vue-responsive-video-background-player";

const app = createApp(App);
app.component("video-background", VideoBackground);
// app.use(Plugin);
app.use(router);
app.use(prismic);

app.mount("#app");
