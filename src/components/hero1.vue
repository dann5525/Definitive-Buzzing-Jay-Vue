<template>
  <div class="hero1-container" v-bind:class="rootClassName">
    <div class="hero1-container1">
      <left-hero2 rootClassName="left-hero2-root-class-name"></left-hero2>
      <left-hero21 rootClassName="left-hero21-root-class-name"></left-hero21>
      <left-hero211 rootClassName="left-hero211-root-class-name"></left-hero211>
    </div>
    <div class="hero1-container2">
      <right-hero2 rootClassName="right-hero2-root-class-name"></right-hero2>
    </div>
  </div>
</template>

<script>
import LeftHero2 from './left-hero-2'
import LeftHero21 from './left-hero-21'
import LeftHero211 from './left-hero-211'
import RightHero2 from './right-hero-2'

export default {
  name: 'Hero1',
  props: {
    rootClassName: String,
  },
  components: {
    LeftHero2,
    LeftHero21,
    LeftHero211,
    RightHero2,
  },
}
</script>

<style scoped>
.hero1-container {
  width: 95%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
}
.hero1-container1 {
  flex: 0 0 auto;
  width: 48%;
  height: 76vh;
  display: flex;
  align-self: flex-start;
  align-items: space-between;
  flex-direction: column;
}
.hero1-container2 {
  flex: 0 0 auto;
  width: 45%;
  height: auto;
  display: flex;
  align-items: center;
  margin-left: 5%;
  flex-direction: column;
  justify-content: center;
}
.hero1-root-class-name {
  width: 95%;
  height: 76vh;
}
</style>
