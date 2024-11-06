<template>
  <div id="app">
    <!-- <modal-component>
      <template #header>
        <h1>Header</h1>
      </template>
      <template #default>
        <p>test</p>
        <button>Buy now</button>
      </template>
      <template #footer>
        <h1>Footer</h1>
      </template>
    </modal-component> -->
    <!-- END -->
    <button @click="activeComponent = 'AboutComponent'">About</button>
    <button @click="activeComponent = 'ServicesComponent'">Services</button>
    <button @click="activeComponent = 'ContactComponent'">Contact</button>
    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
// Local IMPORT
// import ModalComponent from './components/ModalComponent.vue';
// import AboutComponent from './components/AboutComponent.vue';
// import ServicesComponent from './components/ServicesComponent.vue';
// import { defineAsyncComponent } from 'vue'

// const ContactComponent = defineAsyncComponent(() =>
//   import('./components/ContactComponent.vue'))

export default {
  components: {
    // ModalComponent
    // AboutComponent,
    // ServicesComponent,
    // ContactComponent
  },
  data() {
    return {
      activeComponent: 'AboutComponent'
    }
  },
}
</script>

<style>

</style>
