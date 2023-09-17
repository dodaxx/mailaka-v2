<script setup></script>
<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <IconsLogoIcon />
    </div>
    <div class="navbar-navlinks">
      <ul>
        <li>Skills</li>
        <li>Projects</li>
      </ul>
    </div>
  </nav>
</template>
<style scoped lang="scss">
.navbar {
  @apply fixed w-full flex justify-between items-center pl-4 pr-4;

  &-navlinks {
    ul {
      @apply flex gap-6;
      font-size: 24px;

      li {
        font-weight: 500;
      }
    }
  }
}
</style>