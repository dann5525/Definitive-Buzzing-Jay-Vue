<template>
  <div class="right-hero-2-container" v-bind:class="rootClassName">
    <div class="right-hero-2-container1">
      <span class="right-hero-2-text">{{ text1 }}</span>
      <span class="right-hero-2-text1">{{ text12 }}</span>
      <span class="right-hero-2-text2">{{ text1211 }}</span>
      <span class="right-hero-2-text3">{{ text121 }}</span>
      <span class="right-hero-2-text4">{{ text1212 }}</span>
      <right-hero21 rootClassName="right-hero21-root-class-name1"></right-hero21>
    </div>
  </div>
</template>

<script>
import RightHero21 from './right-hero-21'

export default {
  name: 'RightHero2',
  props: {
    text: {
      type: String,
      default: '4. Start your Trading Bot',
    },
    text11: {
      type: String,
      default: 'Automated',
    },
    text1212: {
      type: String,
      default: '5. Start Trading Bot',
    },
    text121: {
      type: String,
      default: '4. Allocate Funds',
    },
    text12: {
      type: String,
      default: '2. Create your Strategy',
    },
    rootClassName: String,
    text1: {
      type: String,
      default: '1. Connect Wallet',
    },
    text1211: {
      type: String,
      default: '3. Deploy Trading Vault',
    },
  },
  components: {
    RightHero21,
  },
}
</script>

<style scoped>
.right-hero-2-container {
  width: auto;
  height: 250px;
  display: flex;
  position: relative;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
}
.right-hero-2-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
  margin-left: var(--dl-space-space-fourunits);
  flex-direction: column;
  justify-content: center;
}
.right-hero-2-text {
  font-size: 2em;
  font-style: normal;
  font-weight: 700;
}
.right-hero-2-text1 {
  font-size: 2em;
  font-style: normal;
  font-weight: 700;
}
.right-hero-2-text2 {
  font-size: 2em;
  font-style: normal;
  font-weight: 700;
}
.right-hero-2-text3 {
  font-size: 2em;
  font-style: normal;
  font-weight: 700;
}
.right-hero-2-text4 {
  font-size: 2em;
  font-style: normal;
  font-weight: 700;
}

</style>
