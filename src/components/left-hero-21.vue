<template>
  <div class="left-hero-21-container" v-bind:class="rootClassName">
    <div class="left-hero-21-container1">
      <img :alt="imageAlt" :src="imageSrc" class="left-hero-21-image" />
      <img :alt="imageAlt1" :src="imageSrc1" class="left-hero-21-image1" />
      <img :alt="imageAlt2" :src="imageSrc2" class="left-hero-21-image2" />
      <img :alt="imageAlt3" :src="imageSrc3" class="left-hero-21-image3" />
      <img :alt="imageAlt4" :src="imageSrc4" class="left-hero-21-image4" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftHero21',
  props: {
    imageAlt2: {
      type: String,
      default: 'image',
    },
    imageSrc4: {
      type: String,
      default: '/usd-coin-usdc-logo.svg',
    },
    rootClassName: String,
    text: {
      type: String,
      default: 'Secure Onchain',
    },
    imageAlt1: {
      type: String,
      default: 'image',
    },
    imageSrc1: {
      type: String,
      default: '/bnb-bnb-logo.svg',
    },
    text1: {
      type: String,
      default: 'Trade Crypto',
    },
    imageAlt3: {
      type: String,
      default: 'image',
    },
    text11: {
      type: String,
      default: 'Automated',
    },
    imageSrc: {
      type: String,
      default: '/bitcoin-btc-logo.svg',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
    imageSrc3: {
      type: String,
      default: '/uniswap-uni-logo.svg',
    },
    imageSrc2: {
      type: String,
      default: '/ethereum-eth-logo.svg',
    },
    imageAlt4: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.left-hero-21-container {
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
.left-hero-21-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: 3vw;
  padding-right: 3vw;
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.left-hero-21-image {
  width: auto;
  height: 100%;
  object-fit: cover;
}
.left-hero-21-image1 {
  width: auto;
  height: 100%;
  object-fit: cover;
}
.left-hero-21-image2 {
  width: auto;
  height: 100%;
  object-fit: cover;
}
.left-hero-21-image3 {
  width: auto;
  height: 100%;
  object-fit: cover;
}
.left-hero-21-image4 {
  width: auto;
  height: 100%;
  object-fit: cover;
}
.left-hero-21-root-class-name {
  margin-bottom: var(--dl-space-space-twounits);
}
@media(max-width: 767px) {
  .left-hero-21-container1 {
    padding-left: 3wv;
    padding-right: 3wv;
    justify-content: space-between;
  }
}
@media(max-width: 479px) {
  .left-hero-21-container {
    justify-content: center;
  }
  .left-hero-21-container1 {
    height: 10vh;
    padding-left: 3vw;
    padding-right: 3vw;
    justify-content: space-between;
  }
}
</style>
