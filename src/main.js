import './assets/main.css'
// src/main.js
import './assets/tailwind.css'; // Adjust path if necessary


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js';
const app = createApp(App)

app.use(router)
app.use(store);
app.mount('#app')
