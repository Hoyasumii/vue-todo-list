import { createApp } from 'vue'
import App from './App.vue';
import './styles.css';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);

app.use(autoAnimatePlugin);
app.use(pinia);

app.mount("#app");
