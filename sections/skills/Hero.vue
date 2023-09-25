
<script setup>
import skillsData from '~/data/skillsData';
import gsap from 'gsap';

onMounted(() => {
  gsap.to('.skills-row .icon', {
    duration: 1,
    delay: 2,
    opacity: 1,
    stagger: {
      amount: 2,
      from: "random"
    }
  })

})

</script>
<template>
  <CommonAppGrid tag="section" grid-class="skills">
    <div class="skills-wrapper">
      <div class="skills-row">
        <CommonAppIcon v-for="(d, idx) in skillsData[0].basic" :data="d" :key="`$-${idx}`" />
      </div>
      <div class="skills-row">
        <CommonAppIcon v-for="(d, idx) in skillsData[0].framework" :data="d" :key="`$-${idx}`" />
      </div>
      <div class="skills-row">
        <CommonAppIcon v-for="(d, idx) in skillsData[0].back" :data="d" :key="`$-${idx}`" />
      </div>
      <div class="skills-row">
        <CommonAppIcon v-for="(d, idx) in skillsData[0].bd" :data="d" :key="`$-${idx}`" />
      </div>
      <div class="skills-row">
        <CommonAppIcon v-for="(d, idx) in skillsData[0].lib" :data="d" :key="`$-${idx}`" />
      </div>
      <div class="skills-row">
        <CommonAppIcon v-for="(d, idx) in skillsData[0].versionning" :data="d" :key="`$-${idx}`" />
      </div>
      <div class="skills-row">
        <CommonAppIcon v-for="(d, idx) in skillsData[0].design" :data="d" :key="`$-${idx}`" />
      </div>
    </div>
  </CommonAppGrid>
</template>

<style lang="scss" scoped>
.skills {
  @apply pt-36;
  height: 100vh;
  width: 100%;
  background: radial-gradient(#021B5B, #01091e);

  &-wrapper {
    @screen xl {
      @apply col-span-12 flex flex-col;
      gap: 15px;
    }
  }

  &-row {
    @apply flex;
    gap: 15px;

    &::v-deep(.icon) {
      opacity: 0;
    }
  }

}
</style>