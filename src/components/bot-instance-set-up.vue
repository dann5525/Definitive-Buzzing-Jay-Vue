<template>
  <div class="bot-instance-set-up-container" v-bind:class="rootClassName">
    <div class="bot-instance-set-up-container1">
      <div class="bot-instance-set-up-container-name">
        <span class="bot-instance-set-up-text">{{ textName1 }}</span>
        <select class="bot-instance-set-up-select-exchange">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 1" selected>Option 1</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
      <div class="bot-instance-set-up-container-name1">
        <span class="bot-instance-set-up-text1">{{ textName12 }}</span>
        <select class="bot-instance-set-up-select-exchange1">
          <option value="Option 1">Option 1</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 1" selected>Option 1</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
      <div class="bot-instance-set-up-container-name2">
        <span class="bot-instance-set-up-text2">{{ textName11 }}</span>
        <select class="bot-instance-set-up-select-exchange2">
          <option value="Option 1">Option 1</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 1" selected>Option 1</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
      <div class="bot-instance-set-up-container-name3">
        <span class="bot-instance-set-up-text3">{{ textName113 }}</span>
        <select class="bot-instance-set-up-select-exchange3">
          <option value="Option 1">Option 1</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 1" selected>Option 1</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
      <div class="bot-instance-set-up-container-name4">
        <span class="bot-instance-set-up-text4">{{ textName112 }}</span>
        <select class="bot-instance-set-up-select-exchange4">
          <option value="Option 1">Option 1</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 1" selected>Option 1</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
      <div class="bot-instance-set-up-container-name5">
        <span class="bot-instance-set-up-text5">{{ textName111 }}</span>
        <select class="bot-instance-set-up-select-exchange5">
          <option value="Option 1">Option 1</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 1" selected>Option 1</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
    </div>
    <div class="bot-instance-set-up-container-next">
      <button type="button" class="bot-instance-set-up-button button">
        {{ btnNext }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BotInstanceSetUp',
  props: {
    btnNext: {
      type: String,
      default: 'Save',
    },
    buttonDeposit1: {
      type: String,
      default: 'Deposit',
    },
    tokenABalanceText: {
      type: String,
      default: 'A Balance:',
    },
    textName111: {
      type: String,
      default: 'Setting: 5',
    },
    imageSrc: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    tokenABalanceValue: {
      type: String,
      default: '12.5',
    },
    textName11: {
      type: String,
      default: 'Setting: 2',
    },
    rootClassName: String,
    imageAlt: {
      type: String,
      default: 'image',
    },
    textName12: {
      type: String,
      default: 'Setting 1:',
    },
    tokenBBalanceValue: {
      type: String,
      default: '300',
    },
    buttonWhithdraw: {
      type: String,
      default: 'Whithdraw',
    },
    buttonDeposit: {
      type: String,
      default: 'Deposit',
    },
    textName1: {
      type: String,
      default: 'Strategie:',
    },
    tokenABalanceValue11: {
      type: String,
      default: '(300$)',
    },
    tokenBBalanceText: {
      type: String,
      default: 'B Balance:',
    },
    tokenABalanceValue1: {
      type: String,
      default: '(120$)',
    },
    buttonWhithdraw1: {
      type: String,
      default: 'Whithdraw',
    },
    textName113: {
      type: String,
      default: 'Setting: 3',
    },
    textName112: {
      type: String,
      default: 'Setting: 4',
    },
  },
}
</script>

<style scoped>
.bot-instance-set-up-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  border-color: #232222;
  border-style: solid;
  border-width: 12px;
  padding-left: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius8);
  padding-right: var(--dl-space-space-halfunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.bot-instance-set-up-container1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  flex-direction: column;
}
.bot-instance-set-up-container-name {
  flex: 0 0 auto;
  width: 400px;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-halfunit);
  margin-bottom: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.bot-instance-set-up-text {
  font-size: 32px;
}
.bot-instance-set-up-select-exchange {
  color: var(--dl-color-gray-white);
  width: var(--dl-size-size-xlarge);
  height: 36px;
  font-size: 24px;
  border-radius: var(--dl-radius-radius-radius4);
  background-color: #232222;
}
.bot-instance-set-up-container-name1 {
  flex: 0 0 auto;
  width: 400px;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-halfunit);
  margin-bottom: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.bot-instance-set-up-text1 {
  font-size: 32px;
  padding-right: 0px;
}
.bot-instance-set-up-select-exchange1 {
  color: var(--dl-color-gray-white);
  width: var(--dl-size-size-xlarge);
  height: 36px;
  font-size: 24px;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  background-color: #232222;
}
.bot-instance-set-up-container-name2 {
  flex: 0 0 auto;
  width: 400px;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-halfunit);
  margin-bottom: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.bot-instance-set-up-text2 {
  font-size: 32px;
  padding-right: 0px;
}
.bot-instance-set-up-select-exchange2 {
  color: var(--dl-color-gray-white);
  width: var(--dl-size-size-xlarge);
  height: 36px;
  font-size: 24px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  background-color: #232222;
}
.bot-instance-set-up-container-name3 {
  flex: 0 0 auto;
  width: 400px;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-halfunit);
  margin-bottom: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.bot-instance-set-up-text3 {
  font-size: 32px;
  padding-right: 0px;
}
.bot-instance-set-up-select-exchange3 {
  color: var(--dl-color-gray-white);
  width: var(--dl-size-size-xlarge);
  height: 36px;
  font-size: 24px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  background-color: #232222;
}
.bot-instance-set-up-container-name4 {
  flex: 0 0 auto;
  width: 400px;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-halfunit);
  margin-bottom: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.bot-instance-set-up-text4 {
  font-size: 32px;
  padding-right: 0px;
}
.bot-instance-set-up-select-exchange4 {
  color: var(--dl-color-gray-white);
  width: var(--dl-size-size-xlarge);
  height: 36px;
  font-size: 24px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  background-color: #232222;
}
.bot-instance-set-up-container-name5 {
  flex: 0 0 auto;
  width: 400px;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-halfunit);
  margin-bottom: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.bot-instance-set-up-text5 {
  font-size: 32px;
  padding-right: 0px;
}
.bot-instance-set-up-select-exchange5 {
  color: var(--dl-color-gray-white);
  width: var(--dl-size-size-xlarge);
  height: 36px;
  font-size: 24px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  background-color: #232222;
}
.bot-instance-set-up-container-next {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  padding-right: var(--dl-space-space-halfunit);
  justify-content: flex-end;
}
.bot-instance-set-up-button {
  color: var(--dl-color-gray-white);
  font-size: 32px;
  padding-top: 4px;
  border-width: 0px;
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius8);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: 4px;
  text-decoration: none;
  background-color: #232222;
}

.bot-instance-set-up-root-class-name1 {
  height: 450px;
}
</style>
