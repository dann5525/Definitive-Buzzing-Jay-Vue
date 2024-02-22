<template>
  <div class="right-hero-21-container" v-bind:class="rootClassName">
    <button type="button" class="right-hero-21-button button">
      {{ button }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'RightHero21',
  props: {
    text11: {
      type: String,
      default: 'Automated',
    },
    text: {
      type: String,
      default: 'Secure Onchain',
    },
    button: {
      type: String,
      default: 'Join Now',
    },
    text1: {
      type: String,
      default: 'Trade Crypto',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.right-hero-21-container {
  width: var(--dl-size-size-xlarge);
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  border-color: #232222;
  border-style: solid;
  border-width: 16px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
  background-color: #232222;
}
.right-hero-21-button {
  color: #ffffff;
  width: 100%;
  height: 100%;
  padding: 0px;
  font-size: 2em;
  align-self: center;
  background-color: transparent;
}

</style>
