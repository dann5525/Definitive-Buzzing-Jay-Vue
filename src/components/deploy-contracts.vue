<template>
  <div class="deploy-contracts-container" v-bind:class="rootClassName">
    <h1 class="deploy-contracts-text">{{ headingUP }}</h1>
    <div class="deploy-contracts-container-userprofile">
      <div class="deploy-contracts-container-name">
        <span class="deploy-contracts-text1">{{ textName1 }}</span>
        <button type="button" class="deploy-contracts-button button">
          {{ button1 }}
        </button>
      </div>
      <div class="deploy-contracts-container-e-mail">
        <span class="deploy-contracts-text2">{{ textTelegram }}</span>
        <button type="button" class="deploy-contracts-button1 button">
          {{ button }}
        </button>
      </div>
      <div class="deploy-contracts-container-telegram">
        <span class="deploy-contracts-text3">{{ texttelegram }}</span>
        <button type="button" class="deploy-contracts-button2 button">
          {{ button2 }}
        </button>
      </div>
      <div class="deploy-contracts-container-next">
        <button type="button" class="deploy-contracts-button3 button">
          {{ btnNext }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeployContracts',
  props: {
    textinputEmail: String,
    button1: {
      type: String,
      default: 'Deploy',
    },
    texttelegram: {
      type: String,
      default: 'Set Allowances',
    },
    textinputTelegram: String,
    button2: {
      type: String,
      default: 'Deploy',
    },
    button: {
      type: String,
      default: 'Deploy',
    },
    textTelegram: {
      type: String,
      default: 'Trading Module:',
    },
    btnNext: {
      type: String,
      default: 'Next',
    },
    text: {
      type: String,
      default: 'Text',
    },
    rootClassName: String,
    textName1: {
      type: String,
      default: 'Gnosis Safe:',
    },
    headingUP: {
      type: String,
      default: 'Deploy Contracts',
    },
    textinputName: String,
  },
}
</script>

<style scoped>
.deploy-contracts-container {
  width: auto;
  height: 400px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.deploy-contracts-text {
  align-self: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
}
.deploy-contracts-container-userprofile {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  border-color: #232222;
  border-width: 12px;
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius8);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: flex-start;
}
.deploy-contracts-container-name {
  flex: 0 0 auto;
  width: 620px;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.deploy-contracts-text1 {
  font-size: 32px;
  padding-right: 0px;
}
.deploy-contracts-button {
  color: var(--dl-color-gray-white);
  width: var(--dl-size-size-xxlarge);
  height: 36px;
  font-size: 24px;
  background-color: #232222;
}
.deploy-contracts-container-e-mail {
  flex: 0 0 auto;
  width: 620px;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.deploy-contracts-text2 {
  width: auto;
  font-size: 32px;
  margin-bottom: var(--dl-space-space-halfunit);
  padding-right: 0px;
}
.deploy-contracts-button1 {
  color: var(--dl-color-gray-white);
  width: var(--dl-size-size-xxlarge);
  height: 36px;
  font-size: 24px;
  border-width: 0px;
  background-color: #232222;
}
.deploy-contracts-container-telegram {
  flex: 0 0 auto;
  width: 620px;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.deploy-contracts-text3 {
  width: auto;
  font-size: 32px;
  margin-top: 0px;
  padding-right: 0px;
}
.deploy-contracts-button2 {
  color: var(--dl-color-gray-white);
  width: var(--dl-size-size-xxlarge);
  height: 36px;
  font-size: 24px;
  border-width: 0px;
  background-color: #232222;
}
.deploy-contracts-container-next {
  flex: 0 0 auto;
  width: 620px;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.deploy-contracts-button3 {
  color: var(--dl-color-gray-white);
  font-size: 32px;
  padding-top: 4px;
  border-width: 0px;
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: 4px;
  text-decoration: none;
  background-color: #232222;
}


</style>
