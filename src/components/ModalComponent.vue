<template>
  <div class="modal">
    <slot name="header"></slot>
    <h2>Modal Component</h2>
    <slot></slot>
    <slot name="footer">
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
};
</script>