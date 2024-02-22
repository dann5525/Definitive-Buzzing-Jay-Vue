<template>
  <div class="menue2-container" v-bind:class="rootClassName">
    <div class="menue2-right-menue">
      <div class="menue2-container01">
        <div class="menue2-container02">
          <span class="menue2-text">{{ textL1 }}</span>
        </div>
        <span class="menue2-text1">{{ textevitas }}</span>
      </div>
      <div class="menue2-container03"></div>
    </div>
    <div class="menue2-right-menue1">
      <div class="menue2-container04"></div>
      <button name="0x00" type="button" class="menue2-login button">
        {{ btnLogin }}
      </button>
      <div class="menue2-container05">
        <div class="menue2-container06">
          <div class="menue2-container07">
            <div class="menue2-container08">
              <div class="menue2-container09"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menue2',
  props: {
    btnPlans1: {
      type: String,
      default: 'Plans',
    },
    btnReviews: {
      type: String,
      default: 'Reviews',
    },
    textevitas: {
      type: String,
      default: 'evitas',
    },
    btnPlans: {
      type: String,
      default: 'Plans',
    },
    textL1: {
      type: String,
      default: 'L',
    },
    btnHome1: {
      type: String,
      default: 'Home',
    },
    rootClassName: String,
    btnLogin: {
      type: String,
      default: 'Login',
    },
    btnReviews1: {
      type: String,
      default: 'Reviews',
    },
    btnHome: {
      type: String,
      default: 'Home',
    },
    btnStrategies1: {
      type: String,
      default: 'Strategies',
    },
    btnStrategies: {
      type: String,
      default: 'Strategies',
    },
  },
}
</script>

<style scoped>
.menue2-container {
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
.menue2-right-menue {
  flex: 0 0 auto;
  width: 15%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.menue2-container01 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
  margin-left: var(--dl-space-space-twounits);
  justify-content: flex-start;
}
.menue2-container02 {
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
.menue2-text {
  font-size: 20px;
  align-self: center;
  font-style: normal;
  font-family: "Courier New";
  font-weight: 900;
  padding-top: 2px;
}
.menue2-text1 {
  color: var(--dl-color-gray-white);
  align-self: center;
}
.menue2-container03 {
  flex: 0 0 auto;
  width: 2px;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
}
.menue2-right-menue1 {
  flex: 0 0 auto;
  width: 15%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.menue2-container04 {
  flex: 0 0 auto;
  width: 2px;
  height: 100%;
  display: flex;
  background-color: #D9D9D9;
}
.menue2-login {
  color: var(--dl-color-gray-white);
  align-self: center;
  border-width: 0px;
  border-radius: 0px;
  background-color: transparent;
}
.menue2-container05 {
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
.menue2-container06 {
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
.menue2-container07 {
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
.menue2-container08 {
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
.menue2-container09 {
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
.menue2-root-class-name {
  width: 95%;
  margin-top: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-twounits);
}
.menue2-root-class-name1 {
  width: 95%;
  margin-top: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-twounits);
}
.menue2-root-class-name2 {
  width: 95%;
  margin-top: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-twounits);
}
.menue2-root-class-name3 {
  width: 95%;
  margin-top: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-twounits);
}
</style>
