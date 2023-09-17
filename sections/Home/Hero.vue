<script setup>
import { gsap } from 'gsap';

onMounted(() => {
  const descriptionWord = document.querySelectorAll('.hero-info__description > p > span');
  const tl = gsap.timeline();

  tl.to(".hero-info__title h1", {
    opacity: 1,
    duration: 2,
    ease: "Power4.easeInOut"
  })

  tl.to(".hero-avatar__wrapper", {
    rotation: 360 * 0,
    y: 0,
    duration: 2,
    ease: "Elastic.easeOut"
  })

  tl.to(descriptionWord, {
    y: 0,
    stagger: {
      amount: 0.5,
    },
    opacity: 1,
    ease: "power4.out",
  })

  tl.to(".hero-info__button button", {
    opacity: 1,
    scale: 1,
    ease: "Back.easeInOut",
    duration: 0.5
  })

  gsap.to(['.hero-avatar__wrapper .images-top img', '.hero-avatar__wrapper .images-bottom img'], {
    rotation: 0 * 0,
    ease: "Elastic.easeOut",
    delay: 2,
    duration: 2
  })
})


</script>
<template>
  <CommonAppGrid grid-class="hero" tag="section">
    <div class="hero-info">
      <div class="hero-info__wrapper">
        <div class="hero-info__title">
          <h1>Développeurs full-stack sénior pour un projet</h1>
        </div>
        <div class="hero-info__description">
          <p>
            <span v-for="i in `Design UX/UI\n|\nFront-end\n|\nBack-end\n|\nMobile\n|\nDevOps`">{{ i.replace(/\n/gm,
              '&nbsp') }}</span>
          </p>
        </div>
        <div class="hero-info__button">
          <CommonAppButton text="Parlez de vos projets" variant="white" />
        </div>
      </div>
    </div>
    <div class="hero-avatar">
      <div class="hero-avatar__wrapper">
        <div class="images-top">
          <img src="~/assets/images/Hero/avatar_1.jpg" alt="">
          <img src="~/assets/images/Hero/avatar_2.jpg" alt="">
        </div>
        <div class="images-bottom">
          <img src="~/assets/images/Hero/avatar_3.jpg" alt="">
        </div>
      </div>
    </div>
  </CommonAppGrid>
</template>
<style scoped lang="scss">
.hero {
  @apply flex flex-col justify-start gap-10;
  height: 100vh;
  width: 100%;
  background: radial-gradient(#021B5B, #01091e);
  color: white;

  @screen lg {
    @apply grid grid-cols-12 gap-4;
  }

  &-info {
    @apply order-2 flex col-span-4 mt-6;

    @screen lg {
      @apply order-1 col-start-2 col-span-5 flex items-center;
    }

    &__title {
      font-weight: bold;

      h1 {
        font-size: 45px;
        line-height: 45px;
        opacity: 0;

        @screen lg {
          font-size: 70px;
          line-height: 70px;
        }

        @screen xl {
          font-size: 100px;
          line-height: 100px;
        }
      }
    }

    &__description {
      @apply mt-3;

      @screen lg {
        margin-top: 35px;
      }

      p {
        @apply flex;
        overflow: hidden;
        font-size: 14px;

        @screen lg {
          font-size: 24px;
          font-weight: 400;
        }

        span {
          @apply block;
          transform: translateY(50px);
          opacity: 0;
        }
      }
    }

    &__button {
      @apply mt-4;

      button {
        transform: scale(0);
        opacity: 0;
      }

      @screen lg {
        margin-top: 20px;
      }
    }
  }

  &-avatar {
    @apply col-span-4 order-1 flex mt-32;
    overflow-y: hidden;
    overflow: visible;

    @screen lg {
      @apply col-start-8 col-span-5 flex items-center mt-0;
    }

    &__wrapper {
      @apply flex gap-2;
      transform: translateY(-1000px) rotate(900deg);
      padding: 8px;
      width: max-content;
      height: max-content;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(3.1px);
      -webkit-backdrop-filter: blur(3.1px);
      border: 1px solid rgba(255, 255, 255, 0.144);

      @screen lg {
        @apply flex-col gap-3;
        padding: 16px;
      }

      .images-top {
        @apply flex gap-2;

        @screen lg {
          @apply flex gap-3;
        }

        img {
          width: 85px;
          height: 85px;
          border-radius: 6px;
          transform: rotate(180deg);

          @screen lg {
            width: 155px;
            height: 155px;
            border-radius: 8px;
          }
        }
      }

      .images-bottom {

        img {
          width: 85px;
          height: 85px;
          border-radius: 6px;
          transform: rotate(180deg);

          @screen lg {
            width: 155px;
            height: 155px;
            border-radius: 8px;
          }

        }
      }
    }


  }
}
</style>