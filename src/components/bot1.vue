<template>
  <div class="bot1-container" v-bind:class="rootClassName">
    <img :alt="imageAlt3" :src="imageSrc3" class="bot1-image" />
  </div>
</template>

<script>
export default {
  name: 'Bot1',
  props: {
    imageAlt: {
      type: String,
      default: 'image',
    },
    imageSrc3: {
      type: String,
      default: '/screenshot%202024-01-19%20105009-400w.png',
    },
    rootClassName: String,
    imageAlt3: {
      type: String,
      default: 'image',
    },
    imageSrc2: {
      type: String,
      default:
        'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
    },
    imageSrc1: {
      type: String,
      default: '77821d61-7dfa-424f-9694-9c0fadaa7709',
    },
    imageSrc: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    imageAlt1: {
      type: String,
      default: 'image',
    },
    imageAlt2: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.bot1-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.bot1-image {
  width: 367px;
  height: 558px;
  object-fit: cover;
}
</style>
