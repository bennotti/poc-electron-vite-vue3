import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import About from './About.vue'

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/about', component: About, name: 'about' },
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  });
  router.beforeEach((to, from, next) => {
      console.log(to);
    console.log(`Navigating to: ${to.name}`);
    next();
});
// console.log(router);
const app = createApp(App);
app.use(router);
// app.config.productionTip = false;
// app.use(Layout);
app.mount('#app');
