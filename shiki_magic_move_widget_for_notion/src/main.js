import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
// import 'shiki-magic-move/dist/style.css'; // Removed invalid import
import { ShikiMagicMove } from 'shiki-magic-move/vue'; // Use named import

const app = createApp(App);

app.use(ShikiMagicMove); // Register ShikiMagicMove plugin

app.mount('#app');
