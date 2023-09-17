<script setup>


</script>
<template>
  <div class="item-projects">
    <div class="images">
      <img src="/assets/images/Projects/img-1.png" alt="title">
    </div>
    <div class="title">
      <h3>Title show</h3>
    </div>
  </div>
</template>
<style scoped lang="scss">
.item-projects {
  @apply col-span-4;
}

.images {
  img {
    border-radius: 12px;
  }
}

.title {
  h3 {
    font-family: 'code-medium';
    font-size: 34px;
    margin-top: 17px;
    color: #fff;
  }
}
</style>