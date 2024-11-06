import { createApp } from 'vue';
import App from './App.vue';
import { defineAsyncComponent } from 'vue';

const app = createApp(App);

const array = ['AboutComponent', 'ServicesComponent', 'ContactComponent'];
array.forEach((component) => {
  app.component(
    component,
    defineAsyncComponent(() => import(`./components/${component}.vue`)),
  );
});

app.mount('#app');
