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
  @apply grid grid-cols-2 gap-4;

  @screen xl {
    @apply grid-cols-12 gap-4;
    padding: 0 20px;
  }
}
</style>