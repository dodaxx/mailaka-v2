<script setup>

defineProps({
  data: {
    type: Object,
    required: true
  }
})

</script>
<template>
  <div class="icon">
    <component :is="data.icon" />
  </div>
</template>
<style lang="scss" scoped>
.icon {
  @apply flex justify-center items-center;
  width: 89px;
  height: 82px;
  background-color: white;
  border-radius: 6px;

  svg {
    width: 70px;
    height: 70px;
  }
}
</style>