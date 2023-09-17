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
  @apply fixed w-full flex justify-between items-center p-4 pl-4 pr-4;

  &-logo {
    &::v-deep(svg) {
      width: 36px;
      height: 36px;
    }
  }

  &-navlinks {
    ul {
      @apply flex gap-6;
      font-weight: 500;
      color: white;
      font-size: 16px;

      @screen xl {
        font-size: 20px;

      }
    }
  }
}
</style>