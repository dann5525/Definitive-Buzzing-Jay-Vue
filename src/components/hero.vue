<template>
  <div class="hero-container" v-bind:class="rootClassName">
    <div class="hero-container1">
      <left-hero rootClassName="left-hero-root-class-name"></left-hero>
    </div>
    <div class="hero-container2">
      <right-hero rootClassName="right-hero-root-class-name"></right-hero>
    </div>
  </div>
</template>

<script>
import LeftHero from './left-hero'
import RightHero from './right-hero'

export default {
  name: 'Hero',
  props: {
    heading11: {
      type: String,
      default: 'Automatic',
    },
    heading1111: {
      type: String,
      default: 'On-Chain',
    },
    rootClassName: String,
    heading1: {
      type: String,
      default: 'Crypto',
    },
    heading111: {
      type: String,
      default: 'Decentralized',
    },
    heading: {
      type: String,
      default: 'Trade',
    },
  },
  components: {
    LeftHero,
    RightHero,
  },
}
</script>

<style scoped>
.hero-container {
  width: 95%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: space-between;
}
.hero-container1 {
  flex: 0 0 auto;
  width: 45%;
  height: 100%;
  display: flex;
  align-self: flex-start;
  align-items: space-between;
  flex-direction: column;
}
.hero-container2 {
  flex: 0 0 auto;
  width: 45%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.hero-root-class-name {
  margin-top: var(--dl-space-space-threeunits);
}
</style>
