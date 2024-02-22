<template>
  <div class="footer-container" v-bind:class="rootClassName">
    <div class="footer-right-menue">
      <div class="footer-container1">
        <span class="footer-text">{{ textevitas }}</span>
      </div>
      <div class="footer-container2"></div>
    </div>
    <div class="footer-footer-menue">
      <button type="button" class="footer-home button">{{ btnHome }}</button>
      <button type="button" class="footer-strategies button">
        {{ btnStrategies }}
      </button>
      <button type="button" class="footer-plans button">{{ btnPlans }}</button>
      <button type="button" class="footer-reviews button">
        {{ btnReviews }}
      </button>
    </div>
    <div class="footer-right-menue1">
      <div class="footer-container3"></div>
      <button type="button" class="footer-login button">{{ btnLogin }}</button>
      <button type="button" class="footer-login1 button">{{ btnLogin1 }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    btnHome: {
      type: String,
      default: 'Link 2',
    },
    btnStrategies: {
      type: String,
      default: 'Link 2',
    },
    rootClassName: String,
    btnPlans: {
      type: String,
      default: 'Link 3',
    },
    textL1: {
      type: String,
      default: 'L',
    },
    btnReviews: {
      type: String,
      default: 'Link 4',
    },
    textevitas: {
      type: String,
      default: 'Datum',
    },
    btnLogin: {
      type: String,
      default: 'Github',
    },
    btnLogin1: {
      type: String,
      default: 'Twitter',
    },
  },
}
</script>

<style scoped>
.footer-container {
  width: 90%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
  background-color: #232222;
}
.footer-right-menue {
  flex: 0 0 auto;
  width: 15%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.footer-container1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
  margin-left: var(--dl-space-space-twounits);
  justify-content: flex-start;
}
.footer-text {
  color: var(--dl-color-gray-white);
  align-self: center;
}
.footer-container2 {
  flex: 0 0 auto;
  width: 2px;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
}
.footer-footer-menue {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.footer-home {
  color: var(--dl-color-gray-white);
  align-self: center;
  border-width: 0px;
  margin-right: var(--dl-space-space-halfunit);
  border-radius: 0px;
  background-color: transparent;
}
.footer-strategies {
  color: var(--dl-color-gray-white);
  align-self: center;
  border-width: 0px;
  margin-right: var(--dl-space-space-halfunit);
  border-radius: 0px;
  background-color: transparent;
}
.footer-plans {
  color: var(--dl-color-gray-white);
  align-self: center;
  border-width: 0px;
  margin-right: var(--dl-space-space-halfunit);
  border-radius: 0px;
  background-color: transparent;
}
.footer-reviews {
  color: var(--dl-color-gray-white);
  align-self: center;
  border-width: 0px;
  border-radius: 0px;
  background-color: transparent;
}
.footer-right-menue1 {
  flex: 0 0 auto;
  width: 15%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.footer-container3 {
  flex: 0 0 auto;
  width: 2px;
  height: 100%;
  display: flex;
  background-color: #D9D9D9;
}
.footer-login {
  color: var(--dl-color-gray-white);
  align-self: center;
  border-width: 0px;
  border-radius: 0px;
  background-color: transparent;
}
.footer-login1 {
  color: var(--dl-color-gray-white);
  align-self: center;
  border-width: 0px;
  border-radius: 0px;
  background-color: transparent;
}

.footer-root-class-name1 {
  width: 95%;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-halfunit);
}
.footer-root-class-name2 {
  width: 95%;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-halfunit);
}
.footer-root-class-name3 {
  width: 95%;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-halfunit);
}
.footer-root-class-name4 {
  width: 95%;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-halfunit);
}
.footer-root-class-name5 {
  width: 95%;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-halfunit);
}
</style>
