<template>
  <div class="left-hero-211-container" v-bind:class="rootClassName">
    <div class="left-hero-211-container1">
      <img :alt="imageAlt5" :src="imageSrc5" class="left-hero-211-image" />
      <img :alt="imageAlt6" :src="imageSrc6" class="left-hero-211-image1" />
      <img :alt="imageAlt7" :src="imageSrc7" class="left-hero-211-image2" />
      <img :alt="imageAlt8" :src="imageSrc8" class="left-hero-211-image3" />
      <img :alt="imageAlt9" :src="imageSrc9" class="left-hero-211-image4" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftHero211',
  props: {
    imageAlt: {
      type: String,
      default: 'image',
    },
    imageAlt5: {
      type: String,
      default: 'image',
    },
    imageSrc8: {
      type: String,
      default: '/handshake-icon.svg',
    },
    imageAlt8: {
      type: String,
      default: 'image',
    },
    imageSrc9: {
      type: String,
      default: '/shield-icon.svg',
    },
    imageSrc3: {
      type: String,
      default: 'df342e4d-b23c-4f2d-9c80-f515bce25257',
    },
    imageSrc7: {
      type: String,
      default: '/business-analytics-icon.svg',
    },
    imageAlt1: {
      type: String,
      default: 'image',
    },
    imageSrc2: {
      type: String,
      default: '0eeeb74c-bc4d-43ab-83a3-bb741aee1494',
    },
    imageAlt4: {
      type: String,
      default: 'image',
    },
    imageSrc5: {
      type: String,
      default: '/24-hour-icon.svg',
    },
    imageAlt3: {
      type: String,
      default: 'image',
    },
    imageAlt2: {
      type: String,
      default: 'image',
    },
    imageAlt9: {
      type: String,
      default: 'image',
    },
    imageSrc1: {
      type: String,
      default: '372f1cb7-2f5b-4924-81fe-15bdef371dea',
    },
    rootClassName: String,
    imageSrc: {
      type: String,
      default: '604545e3-7590-46e2-a714-22a821c0c655',
    },
    imageSrc6: {
      type: String,
      default: '/blockchain-icon.svg',
    },
    imageAlt7: {
      type: String,
      default: 'image',
    },
    imageAlt6: {
      type: String,
      default: 'image',
    },
    imageSrc4: {
      type: String,
      default: 'c32b2582-ed47-4332-b4e9-17d0440cf13c',
    },
  },
}
</script>

<style scoped>
.left-hero-211-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  border-color: #232222;
  border-style: solid;
  border-width: 16px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
}
.left-hero-211-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: var(--dl-size-size-medium);
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-unit);
  padding-left: 3vw;
  padding-right: 3vw;
  flex-direction: row;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: space-between;
}
.left-hero-211-image {
  width: auto;
  height: 100%;
  object-fit: cover;
}
.left-hero-211-image1 {
  width: auto;
  height: 100%;
  object-fit: cover;
}
.left-hero-211-image2 {
  width: auto;
  height: 100%;
  object-fit: cover;
}
.left-hero-211-image3 {
  width: auto;
  height: 100%;
  object-fit: cover;
}
.left-hero-211-image4 {
  width: auto;
  height: 100%;
  object-fit: cover;
}

@media(max-width: 479px) {
  .left-hero-211-container1 {
    height: 10vh;
  }
}
</style>
