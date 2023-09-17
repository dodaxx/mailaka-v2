<template>
  <div class="app-grid">
    <slot />
  </div>
</template>
<style scoped lang="scss">
.app-grid {
  @apply grid grid-cols-2 gap-4;

  @screen xl {
    @apply grid-cols-12 gap-6;
    padding: 0 50px;
  }
}
</style>