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
  @apply fixed flex items-center bottom-3 gap-4;
  background: rgba(255, 255, 255, 0.24);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.1px);
  -webkit-backdrop-filter: blur(3.1px);
  padding: 5px 15px 5px 15px;
  border: 1px solid rgba(255, 255, 255, 0.144);

  @screen lg {
    @apply top-3;
    bottom: inherit;
    padding: 12px 18px;

  }

  &-logo {
    &::v-deep(svg) {
      width: 36px;
      height: 36px;
    }
  }

  &-navlinks {

    ul {
      @apply flex items-center gap-5;
      font-weight: 500;
      color: white;
      font-size: 16px;
      transform: translateY(2px);

      @screen xl {
        font-size: 20px;

      }
    }
  }
}
</style>