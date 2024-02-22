<template>
  <div class="left-hero-2-container" v-bind:class="rootClassName">
    <div class="left-hero-2-container1">
      <span class="left-hero-2-text">{{ text1 }}</span>
      <span class="left-hero-2-text1">{{ text11 }}</span>
      <span class="left-hero-2-text2">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftHero2',
  props: {
    rootClassName: String,
    text11: {
      type: String,
      default: 'Automated',
    },
    text1: {
      type: String,
      default: 'Trade Crypto',
    },
    text: {
      type: String,
      default: 'Secure Onchain',
    },
  },
}
</script>

<style scoped>
.left-hero-2-container {
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  align-items: center;
  border-color: #232222;
  border-style: solid;
  border-width: 16px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
}
.left-hero-2-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.left-hero-2-text {
  font-size: 3em;
  font-style: normal;
  font-weight: 700;
}
.left-hero-2-text1 {
  font-size: 4em;
  font-style: normal;
  font-weight: 700;
}
.left-hero-2-text2 {
  font-size: 3em;
  font-style: normal;
  font-weight: 700;
}
.left-hero-2-root-class-name {
  height: 100%;
  margin-bottom: var(--dl-space-space-twounits);
}
</style>
