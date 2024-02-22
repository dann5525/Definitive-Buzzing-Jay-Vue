<template>
  <div class="transfer-funds-container" v-bind:class="rootClassName">
    <h1 class="transfer-funds-text">{{ headingUP }}</h1>
    <div class="transfer-funds-container-userprofile">
      <div class="transfer-funds-container-transfer-token-a">
        <span class="transfer-funds-text1">{{ textName1 }}</span>
        <div class="transfer-funds-container1">
          <input
            type="text"
            :placeholder="textinputName11"
            class="transfer-funds-textinput input"
          />
          <span>{{ text1 }}</span>
        </div>
        <button type="button" class="transfer-funds-button button">
          {{ button11 }}
        </button>
      </div>
      <div class="transfer-funds-container-transfer-token-b">
        <span class="transfer-funds-text3">{{ textTelegram }}</span>
        <div class="transfer-funds-container2">
          <input
            type="text"
            :placeholder="textinputName1"
            class="transfer-funds-textinput1 input"
          />
          <span>{{ text }}</span>
        </div>
        <button type="button" class="transfer-funds-button1 button">
          {{ button1 }}
        </button>
      </div>
      <div class="transfer-funds-container-next">
        <button type="button" class="transfer-funds-button2 button">
          {{ btnNext }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransferFunds',
  props: {
    text1: {
      type: String,
      default: 'Balance A:',
    },
    text: {
      type: String,
      default: 'Balance B:',
    },
    rootClassName: String,
    btnNext: {
      type: String,
      default: 'Start Trading Bot',
    },
    textinputName11: String,
    button11: {
      type: String,
      default: 'Send',
    },
    button2: {
      type: String,
      default: 'Deploy',
    },
    textName1: {
      type: String,
      default: 'Token A:',
    },
    button1: {
      type: String,
      default: 'Send',
    },
    button: {
      type: String,
      default: 'Send',
    },
    textinputName: String,
    texttelegram: {
      type: String,
      default: 'Set Allowances',
    },
    textinputName1: String,
    headingUP: {
      type: String,
      default: 'Transfer Funds',
    },
    textTelegram: {
      type: String,
      default: 'Token B:',
    },
  },
}
</script>

<style scoped>
.transfer-funds-container {
  width: auto;
  height: 400px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.transfer-funds-text {
  align-self: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
}
.transfer-funds-container-userprofile {
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
.transfer-funds-container-transfer-token-a {
  flex: 0 0 auto;
  width: 620px;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.transfer-funds-text1 {
  font-size: 32px;
  padding-right: 0px;
}
.transfer-funds-container1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.transfer-funds-textinput {
  color: var(--dl-color-gray-900);
  width: var(--dl-size-size-xxlarge);
  border-color: #232222;
  border-width: 4px;
  background-color: transparent;
}
.transfer-funds-button {
  color: var(--dl-color-gray-white);
  width: var(--dl-size-size-large);
  height: 36px;
  font-size: 24px;
  border-color: #232222;
  border-width: 4px;
  background-color: #232222;
}
.transfer-funds-container-transfer-token-b {
  flex: 0 0 auto;
  width: 620px;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: 18px;
  justify-content: space-between;
}
.transfer-funds-text3 {
  width: auto;
  font-size: 32px;
  margin-bottom: var(--dl-space-space-halfunit);
  padding-right: 0px;
}
.transfer-funds-container2 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.transfer-funds-textinput1 {
  color: var(--dl-color-gray-900);
  width: var(--dl-size-size-xxlarge);
  border-color: #232222;
  border-width: 4px;
  background-color: transparent;
}
.transfer-funds-button1 {
  color: var(--dl-color-gray-white);
  width: var(--dl-size-size-large);
  height: 36px;
  font-size: 24px;
  border-color: #232222;
  border-width: 4px;
  background-color: #232222;
}
.transfer-funds-container-next {
  flex: 0 0 auto;
  width: 620px;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.transfer-funds-button2 {
  color: var(--dl-color-gray-white);
  width: 400px;
  font-size: 32px;
  padding-top: 4px;
  border-width: 0px;
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: 4px;
  background-color: #232222;
}


</style>
