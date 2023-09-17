<script setup>

defineProps({
  gridClass: {
    type: String,
    required: true
  },
  tag: {
    stype: String,
    default: 'div'
  }
})

</script>
<template>
  <component :is="tag" :class="`app-grid ${gridClass}`">
    <slot />
  </component>
</template>
<style scoped lang="scss">
.app-grid {
  @apply grid grid-cols-4 gap-4;
  padding: 0 12px;
  grid-template-rows: max-content;

  @screen lg {
    @apply grid grid-cols-12 gap-4;
    padding: 0 20px;
    grid-template-rows: auto;

  }
}
</style>