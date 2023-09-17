<script setup>

defineProps({
  text: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: ''
  }
})

</script>
<template>
  <button :class="` btn btn--${variant}`">{{ text }}</button>
</template>
<style lang="scss" scoped>
.btn {
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  cursor: none;

  @screen xl {
    font-size: 24px;
    font-size: 24px;
    padding: 16px;
  }

  &--white {
    border: 1px solid white;
    color: white;

    &:hover {
      background-color: white;
      color: #01091e;
    }
  }
}
</style>