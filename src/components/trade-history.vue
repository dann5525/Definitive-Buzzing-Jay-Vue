<template>
  <div class="trade-history-container" v-bind:class="rootClassName">
    <div class="trade-history-container1">
      <span class="trade-history-text">{{ text }}</span>
      <span class="trade-history-text01">{{ text11 }}</span>
      <span class="trade-history-text02">{{ text12 }}</span>
      <span class="trade-history-text03">{{ text1 }}</span>
      <button type="button" class="trade-history-button button">
        {{ button }}
      </button>
    </div>
    <div class="trade-history-container2">
      <span class="trade-history-text04">{{ text5 }}</span>
      <span class="trade-history-text05">{{ text114 }}</span>
      <span class="trade-history-text06">{{ text124 }}</span>
      <span class="trade-history-text07">{{ text16 }}</span>
      <button type="button" class="trade-history-button1 button">
        {{ button5 }}
      </button>
    </div>
    <div class="trade-history-container3">
      <span class="trade-history-text08">{{ text4 }}</span>
      <span class="trade-history-text09">{{ text113 }}</span>
      <span class="trade-history-text10">{{ text123 }}</span>
      <span class="trade-history-text11">{{ text15 }}</span>
      <button type="button" class="trade-history-button2 button">
        {{ button4 }}
      </button>
    </div>
    <div class="trade-history-container4">
      <span class="trade-history-text12">{{ text31 }}</span>
      <span class="trade-history-text13">{{ text1121 }}</span>
      <span class="trade-history-text14">{{ text1221 }}</span>
      <span class="trade-history-text15">{{ text141 }}</span>
      <button type="button" class="trade-history-button3 button">
        {{ button31 }}
      </button>
    </div>
    <div class="trade-history-container5">
      <button type="button" class="trade-history-button4 button">
        {{ button3 }}
      </button>
      <button type="button" class="trade-history-button5 button">
        {{ button33 }}
      </button>
      <button type="button" class="trade-history-button6 button">
        {{ button32 }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TradeHistory',
  props: {
    button3: {
      type: String,
      default: '1',
    },
    text: {
      type: String,
      default: 'Date - Time',
    },
    rootClassName: String,
    text21: {
      type: String,
      default: '20.02.2024 - 17:16',
    },
    button2: {
      type: String,
      default: 'Explorer',
    },
    button1: {
      type: String,
      default: 'Explorer',
    },
    text11: {
      type: String,
      default: 'Direction',
    },
    text112: {
      type: String,
      default: 'Buy BTC',
    },
    text111: {
      type: String,
      default: 'Buy BTC',
    },
    button: {
      type: String,
      default: 'Explorer',
    },
    text131: {
      type: String,
      default: "0.04528 (2'500$)",
    },
    text15: {
      type: String,
      default: "0.04528 (2'500$)",
    },
    text5: {
      type: String,
      default: '20.02.2024 - 17:16',
    },
    text114: {
      type: String,
      default: 'Buy BTC',
    },
    text1111: {
      type: String,
      default: 'Buy BTC',
    },
    text1221: {
      type: String,
      default: "51'052",
    },
    text124: {
      type: String,
      default: "51'052",
    },
    text141: {
      type: String,
      default: "0.04528 (2'500$)",
    },
    text12: {
      type: String,
      default: 'Price',
    },
    text1: {
      type: String,
      default: 'Amount',
    },
    text14: {
      type: String,
      default: "0.04528 (2'500$)",
    },
    text31: {
      type: String,
      default: '20.02.2024 - 17:16',
    },
    text16: {
      type: String,
      default: "0.04528 (2'500$)",
    },
    button31: {
      type: String,
      default: 'Explorer',
    },
    text122: {
      type: String,
      default: "51'052",
    },
    button33: {
      type: String,
      default: '2',
    },
    button5: {
      type: String,
      default: 'Explorer',
    },
    text3: {
      type: String,
      default: '20.02.2024 - 17:16',
    },
    text2: {
      type: String,
      default: '20.02.2024 - 17:16',
    },
    text123: {
      type: String,
      default: "51'052",
    },
    text13: {
      type: String,
      default: "0.04528 (2'500$)",
    },
    button32: {
      type: String,
      default: '3',
    },
    button4: {
      type: String,
      default: 'Explorer',
    },
    text121: {
      type: String,
      default: "51'052",
    },
    text4: {
      type: String,
      default: '20.02.2024 - 17:16',
    },
    text1121: {
      type: String,
      default: 'Buy BTC',
    },
    text113: {
      type: String,
      default: 'Buy BTC',
    },
    button11: {
      type: String,
      default: 'Explorer',
    },
    text1211: {
      type: String,
      default: "51'052",
    },
  },
}
</script>

<style scoped>
.trade-history-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  border-color: #232222;
  border-style: solid;
  border-width: 12px;
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius8);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.trade-history-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius4);
  margin-bottom: 4px;
  justify-content: space-between;
}
.trade-history-text {
  color: var(--dl-color-gray-black);
  width: 20%;
  font-size: 16px;
  align-self: center;
  font-style: normal;
  font-weight: 700;
  margin-left: var(--dl-space-space-halfunit);
}
.trade-history-text01 {
  color: var(--dl-color-gray-black);
  width: 20%;
  align-self: center;
  font-style: normal;
  font-weight: 700;
  margin-left: var(--dl-space-space-halfunit);
}
.trade-history-text02 {
  color: var(--dl-color-gray-black);
  width: 20%;
  align-self: center;
  font-style: normal;
  font-weight: 700;
  margin-left: var(--dl-space-space-halfunit);
}
.trade-history-text03 {
  color: var(--dl-color-gray-black);
  width: 20%;
  align-self: center;
  font-style: normal;
  font-weight: 700;
  margin-left: var(--dl-space-space-halfunit);
}
.trade-history-button {
  color: transparent;
  padding: 4px;
  align-self: center;
  border-width: 0px;
  margin-right: var(--dl-space-space-halfunit);
  background-color: transparent;
}
.trade-history-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius4);
  margin-bottom: 4px;
  justify-content: space-between;
  background-color: #232222;
}
.trade-history-text04 {
  color: var(--dl-color-gray-white);
  width: 20%;
  align-self: center;
  margin-left: var(--dl-space-space-halfunit);
}
.trade-history-text05 {
  color: var(--dl-color-gray-white);
  width: 20%;
  align-self: center;
  margin-left: var(--dl-space-space-halfunit);
}
.trade-history-text06 {
  color: var(--dl-color-gray-white);
  width: 20%;
  align-self: center;
  margin-left: var(--dl-space-space-halfunit);
}
.trade-history-text07 {
  color: var(--dl-color-gray-white);
  width: 20%;
  align-self: center;
  margin-left: var(--dl-space-space-halfunit);
}
.trade-history-button1 {
  padding: 4px;
  align-self: center;
  margin-right: var(--dl-space-space-halfunit);
}
.trade-history-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius4);
  margin-bottom: 4px;
  justify-content: space-between;
  background-color: #232222;
}
.trade-history-text08 {
  color: var(--dl-color-gray-white);
  width: 20%;
  align-self: center;
  margin-left: var(--dl-space-space-halfunit);
}
.trade-history-text09 {
  color: var(--dl-color-gray-white);
  width: 20%;
  align-self: center;
  margin-left: var(--dl-space-space-halfunit);
}
.trade-history-text10 {
  color: var(--dl-color-gray-white);
  width: 20%;
  align-self: center;
  margin-left: var(--dl-space-space-halfunit);
}
.trade-history-text11 {
  color: var(--dl-color-gray-white);
  width: 20%;
  align-self: center;
  margin-left: var(--dl-space-space-halfunit);
}
.trade-history-button2 {
  padding: 4px;
  align-self: center;
  margin-right: var(--dl-space-space-halfunit);
}
.trade-history-container4 {
  flex: 0 0 auto;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius4);
  margin-bottom: 4px;
  justify-content: space-between;
  background-color: #232222;
}
.trade-history-text12 {
  color: var(--dl-color-gray-white);
  width: 20%;
  align-self: center;
  margin-left: var(--dl-space-space-halfunit);
}
.trade-history-text13 {
  color: var(--dl-color-gray-white);
  width: 20%;
  align-self: center;
  margin-left: var(--dl-space-space-halfunit);
}
.trade-history-text14 {
  color: var(--dl-color-gray-white);
  width: 20%;
  align-self: center;
  margin-left: var(--dl-space-space-halfunit);
}
.trade-history-text15 {
  color: var(--dl-color-gray-white);
  width: 20%;
  align-self: center;
  margin-left: var(--dl-space-space-halfunit);
}
.trade-history-button3 {
  padding: 4px;
  align-self: center;
  margin-right: var(--dl-space-space-halfunit);
}
.trade-history-container5 {
  flex: 0 0 auto;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius4);
  margin-bottom: 4px;
  justify-content: center;
}
.trade-history-button4 {
  color: var(--dl-color-gray-white);
  padding: 4px;
  align-self: center;
  margin-right: var(--dl-space-space-halfunit);
  background-color: var(--dl-color-gray-black);
}
.trade-history-button5 {
  color: var(--dl-color-gray-white);
  padding: 4px;
  align-self: center;
  margin-right: var(--dl-space-space-halfunit);
  background-color: var(--dl-color-gray-black);
}
.trade-history-button6 {
  color: var(--dl-color-gray-white);
  padding: 4px;
  align-self: center;
  margin-right: var(--dl-space-space-halfunit);
  background-color: var(--dl-color-gray-black);
}
.trade-history-root-class-name {
  margin-top: var(--dl-space-space-halfunit);
}
</style>
