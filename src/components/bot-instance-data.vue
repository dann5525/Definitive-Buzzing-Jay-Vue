<template>
  <div class="bot-instance-data-container" v-bind:class="rootClassName">
    <div class="bot-instance-data-container1">
      <div class="bot-instance-data-container2">
        <div class="bot-instance-data-container3">
          <span class="bot-instance-data-text">{{ tokenABalanceText }}</span>
          <span class="bot-instance-data-text1">{{ tokenABalanceValue }}</span>
          <span class="bot-instance-data-text2">{{ tokenABalanceValue1 }}</span>
        </div>
        <div class="bot-instance-data-container4">
          <button type="button" class="bot-instance-data-button button">
            {{ buttonDeposit }}
          </button>
          <button type="button" class="bot-instance-data-button1 button">
            {{ buttonWhithdraw }}
          </button>
        </div>
      </div>
      <div class="bot-instance-data-container5">
        <div class="bot-instance-data-container6">
          <span class="bot-instance-data-text3">{{ tokenBBalanceText }}</span>
          <span class="bot-instance-data-text4">{{ tokenBBalanceValue }}</span>
          <span class="bot-instance-data-text5">{{ tokenABalanceValue11 }}</span>
        </div>
        <div class="bot-instance-data-container7">
          <button type="button" class="bot-instance-data-button2 button">
            {{ buttonDeposit1 }}
          </button>
          <button type="button" class="bot-instance-data-button3 button">
            {{ buttonWhithdraw1 }}
          </button>
        </div>
      </div>
    </div>
    <img :alt="imageAlt" :src="imageSrc" class="bot-instance-data-image" />
  </div>
</template>

<script>
export default {
  name: 'BotInstanceData',
  props: {
    tokenBBalanceText: {
      type: String,
      default: 'B Balance:',
    },
    tokenABalanceValue: {
      type: String,
      default: '12.5',
    },
    tokenBBalanceValue: {
      type: String,
      default: '300',
    },
    buttonDeposit1: {
      type: String,
      default: 'Deposit',
    },
    buttonWhithdraw1: {
      type: String,
      default: 'Whithdraw',
    },
    tokenABalanceText: {
      type: String,
      default: 'A Balance:',
    },
    imageSrc: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    rootClassName: String,
    tokenABalanceValue11: {
      type: String,
      default: '(300$)',
    },
    tokenABalanceValue1: {
      type: String,
      default: '(120$)',
    },
    buttonWhithdraw: {
      type: String,
      default: 'Whithdraw',
    },
    buttonDeposit: {
      type: String,
      default: 'Deposit',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.bot-instance-data-container {
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
}
.bot-instance-data-container1 {
  flex: 0 0 auto;
  width: 400px;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  flex-direction: column;
}
.bot-instance-data-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
}
.bot-instance-data-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
}
.bot-instance-data-text {
  font-size: 32px;
  margin-right: var(--dl-space-space-halfunit);
}
.bot-instance-data-text1 {
  font-size: 32px;
  margin-right: var(--dl-space-space-unit);
}
.bot-instance-data-text2 {
  font-size: 32px;
}
.bot-instance-data-container4 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.bot-instance-data-button {
  color: var(--dl-color-gray-white);
  width: var(--dl-size-size-large);
  border-width: 0px;
  margin-right: var(--dl-space-space-twounits);
  background-color: #232222;
}
.bot-instance-data-button1 {
  color: var(--dl-color-gray-white);
  width: var(--dl-size-size-large);
  border-width: 0px;
  background-color: #232222;
}
.bot-instance-data-container5 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
}
.bot-instance-data-container6 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
}
.bot-instance-data-text3 {
  font-size: 32px;
  margin-right: var(--dl-space-space-halfunit);
}
.bot-instance-data-text4 {
  font-size: 32px;
  margin-right: var(--dl-space-space-unit);
}
.bot-instance-data-text5 {
  font-size: 32px;
}
.bot-instance-data-container7 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.bot-instance-data-button2 {
  color: var(--dl-color-gray-white);
  width: var(--dl-size-size-large);
  border-width: 0px;
  margin-right: var(--dl-space-space-twounits);
  background-color: #232222;
}
.bot-instance-data-button3 {
  color: var(--dl-color-gray-white);
  width: var(--dl-size-size-large);
  border-width: 0px;
  background-color: #232222;
}
.bot-instance-data-image {
  width: 342px;
  height: 151px;
  align-self: center;
  object-fit: cover;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: var(--dl-space-space-halfunit);
}

.bot-instance-data-root-class-name1 {
  width: auto;
  height: 450px;
  margin-right: var(--dl-space-space-halfunit);
}
</style>
