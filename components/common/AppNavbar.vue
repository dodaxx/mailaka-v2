<script setup>
import gsap from 'gsap'
import { useCursor } from '~/store/useCursor'

const store = useCursor();


onMounted(() => {
  const tl = gsap.timeline();

  tl.to('.navbar', {
    y: 0,
    x: 0,
    duration: 0.4,
    delay: 2,
    ease: "Back.easeOut",
    opacity: 1
  }).to(['.navbar-logo', '.navbar-navlinks ul li'], {
    scale: 1,
    ease: "Elastic.easeInOut.config(1, 0.4)",
    duration: 0.2
  })
})
</script>
<template>
  <nav class="navbar" @mouseenter="store.handleChangeFormTextCursor('mini', '')"
    @mouseleave="store.handleChangeFormTextCursor('', 'Visitez')">
    <div class="navbar-logo">
      <NuxtLink href="/">
        <IconsLogoIcon />
      </NuxtLink>
    </div>
    <div class="navbar-navlinks">
      <ul>
        <li>
          <NuxtLink href="/skills">Skills</NuxtLink>
        </li>
        <li>Projets</li>
      </ul>
    </div>
  </nav>
</template>
<style scoped lang="scss">
.navbar {
  @apply fixed flex items-center bottom-3 gap-4;
  background: rgba(255, 255, 255, 0.24);
  left: 50%;
  transform: translate(-50%, -100px);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.1px);
  -webkit-backdrop-filter: blur(3.1px);
  padding: 5px 15px 5px 15px;
  border: 1px solid rgba(255, 255, 255, 0.144);
  opacity: 0;

  @screen lg {
    @apply top-3;
    bottom: inherit;
    padding: 12px 18px;

  }

  &-logo {
    transform: scale(0);

    &:hover {
      transition: 0.2s;
      background: rgba(255, 255, 255, 0.432);
      border-radius: 4px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(3.1px);
      border: 1px solid rgba(255, 255, 255, 0.144);
    }

    &::v-deep(svg) {
      width: 36px;
      height: 36px;
    }
  }

  &-navlinks {

    ul {
      @apply flex items-center gap-5;
      font-weight: 500;
      font-size: 16px;
      transform: translateY(2px);

      @screen xl {
        font-size: 20px;

      }

      li {
        transform: scale(0);
        color: white;

        &:hover {
          transition: 0.2s;
          color: #01091e;
        }
      }
    }
  }
}
</style>