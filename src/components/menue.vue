<template>
  <div class="menue-container" v-bind:class="rootClassName">
    <div class="menue-right-menue">
      <div class="menue-container01">
        <div class="menue-container02">
          <span class="menue-text">{{ textL1 }}</span>
        </div>
        <span class="menue-text1">{{ textevitas }}</span>
      </div>
      <div class="menue-container03"></div>
    </div>
    <div class="menue-main-menue">
      <button type="button" class="menue-home button">{{ btnHome }}</button>
      <button type="button" class="menue-strategies button">
        {{ btnStrategies }}
      </button>
      <button type="button" class="menue-plans button">{{ btnPlans }}</button>
      <button type="button" class="menue-reviews button">{{ btnReviews }}</button>
    </div>
    <div class="menue-right-menue1">
      <div class="menue-container04"></div>
      <button name="0x00" type="button" class="menue-login button">
        {{ btnLogin }}
      </button>
      <div class="menue-container05">
        <div class="menue-container06">
          <div class="menue-container07">
            <div class="menue-container08">
              <div class="menue-container09"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menue',
  props: {
    rootClassName: String,
    btnHome: {
      type: String,
      default: 'Home',
    },
    textL: {
      type: String,
      default: 'L',
    },
    textevitas: {
      type: String,
      default: 'evitas',
    },
    textL1: {
      type: String,
      default: 'L',
    },
    btnStrategies: {
      type: String,
      default: 'Strategies',
    },
    btnLogin: {
      type: String,
      default: 'Login',
    },
    btnPlans: {
      type: String,
      default: 'Plans',
    },
    btnReviews: {
      type: String,
      default: 'Reviews',
    },
  },
}
</script>

<style scoped>
.menue-container {
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
.menue-right-menue {
  flex: 0 0 auto;
  width: 15%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.menue-container01 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
  margin-left: var(--dl-space-space-twounits);
  justify-content: flex-start;
}
.menue-container02 {
  width: 24px;
  height: 24px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  margin-right: 1px;
  border-radius: var(--dl-radius-radius-round);
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.menue-text {
  font-size: 20px;
  align-self: center;
  font-style: normal;
  font-family: "Courier New";
  font-weight: 900;
  padding-top: 2px;
}
.menue-text1 {
  color: var(--dl-color-gray-white);
  align-self: center;
}
.menue-container03 {
  flex: 0 0 auto;
  width: 2px;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
}
.menue-main-menue {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.menue-home {
  color: var(--dl-color-gray-white);
  align-self: center;
  border-width: 0px;
  margin-right: var(--dl-space-space-halfunit);
  border-radius: 0px;
  background-color: transparent;
}
.menue-strategies {
  color: var(--dl-color-gray-white);
  align-self: center;
  border-width: 0px;
  margin-right: var(--dl-space-space-halfunit);
  border-radius: 0px;
  background-color: transparent;
}
.menue-plans {
  color: var(--dl-color-gray-white);
  align-self: center;
  border-width: 0px;
  margin-right: var(--dl-space-space-halfunit);
  border-radius: 0px;
  background-color: transparent;
}
.menue-reviews {
  color: var(--dl-color-gray-white);
  align-self: center;
  border-width: 0px;
  border-radius: 0px;
  background-color: transparent;
}
.menue-right-menue1 {
  flex: 0 0 auto;
  width: 15%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.menue-container04 {
  flex: 0 0 auto;
  width: 2px;
  height: 100%;
  display: flex;
  background-color: #D9D9D9;
}
.menue-login {
  color: var(--dl-color-gray-white);
  align-self: center;
  border-width: 0px;
  border-radius: 0px;
  background-color: transparent;
}
.menue-container05 {
  width: 24px;
  height: 24px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  margin-right: var(--dl-space-space-oneandhalfunits);
  border-radius: var(--dl-radius-radius-round);
  justify-content: center;
  background-color: var(--dl-color-gray-700);
}
.menue-container06 {
  width: 22px;
  height: 22px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  margin-right: 0px;
  border-radius: var(--dl-radius-radius-round);
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.menue-container07 {
  width: 14px;
  height: 14px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  margin-right: 0px;
  border-radius: var(--dl-radius-radius-round);
  justify-content: center;
  background-color: var(--dl-color-gray-700);
}
.menue-container08 {
  width: 10px;
  height: 10px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  margin-right: 0px;
  border-radius: var(--dl-radius-radius-round);
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.menue-container09 {
  width: 8px;
  height: 8px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  margin-right: 0px;
  border-radius: var(--dl-radius-radius-round);
  justify-content: center;
  background-color: var(--dl-color-gray-700);
}
.menue-root-class-name {
  width: 95%;
  margin-top: var(--dl-space-space-unit);
}
.menue-root-class-name1 {
  width: 95%;
  margin-top: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-twounits);
}
</style>
