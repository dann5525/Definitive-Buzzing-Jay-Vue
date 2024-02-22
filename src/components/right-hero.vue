<template>
  <div class="right-hero-container" v-bind:class="rootClassName">
    <div class="right-hero-container01">
      <div class="right-hero-container02">
        <div class="right-hero-container03">
          <div class="right-hero-container04"></div>
          <div class="right-hero-container05"></div>
          <div class="right-hero-container06">
            <div class="right-hero-container07"></div>
          </div>
        </div>
      </div>
      <div class="right-hero-container08">
        <div class="right-hero-container09">
          <div class="right-hero-container10">
            <div class="right-hero-container11"></div>
          </div>
          <div class="right-hero-container12">
            <div class="right-hero-container13">
              <div class="right-hero-container14">
                <span class="right-hero-text">{{ text2 }}</span>
                <span class="right-hero-text01">{{ text21 }}</span>
              </div>
              <div class="right-hero-container15"></div>
            </div>
            <div class="right-hero-container16">
              <div class="right-hero-container17"></div>
            </div>
            <div class="right-hero-container18">
              <div class="right-hero-container19">
                <span class="right-hero-text02">{{ text22 }}</span>
                <span class="right-hero-text03">{{ text211 }}</span>
              </div>
              <div class="right-hero-container20"></div>
            </div>
          </div>
          <div class="right-hero-container21">
            <div class="right-hero-container22"></div>
          </div>
        </div>
      </div>
      <div class="right-hero-container23">
        <div class="right-hero-container24">
          <div class="right-hero-container25"></div>
          <div class="right-hero-container26"></div>
          <div class="right-hero-container27">
            <div class="right-hero-container28"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-hero-container29">
      <div class="right-hero-container30">
        <div class="right-hero-container31">
          <div class="right-hero-container32"></div>
          <div class="right-hero-container33"></div>
          <div class="right-hero-container34">
            <div class="right-hero-container35"></div>
          </div>
        </div>
      </div>
      <div class="right-hero-container36">
        <div class="right-hero-container37">
          <div class="right-hero-container38">
            <div class="right-hero-container39"></div>
          </div>
          <div class="right-hero-container40">
            <div class="right-hero-container41">
              <div class="right-hero-container42">
                <span class="right-hero-text04">{{ text23 }}</span>
                <span class="right-hero-text05">{{ text212 }}</span>
              </div>
              <div class="right-hero-container43"></div>
            </div>
            <div class="right-hero-container44">
              <div class="right-hero-container45"></div>
            </div>
            <div class="right-hero-container46">
              <div class="right-hero-container47">
                <span class="right-hero-text06">{{ text221 }}</span>
                <span class="right-hero-text07">{{ text2111 }}</span>
              </div>
              <div class="right-hero-container48"></div>
            </div>
          </div>
          <div class="right-hero-container49">
            <div class="right-hero-container50"></div>
          </div>
        </div>
      </div>
      <div class="right-hero-container51">
        <div class="right-hero-container52">
          <div class="right-hero-container53"></div>
          <div class="right-hero-container54"></div>
          <div class="right-hero-container55">
            <div class="right-hero-container56"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-hero-container57">
      <div class="right-hero-container58">
        <div class="right-hero-container59">
          <div class="right-hero-container60"></div>
          <div class="right-hero-container61"></div>
          <div class="right-hero-container62"></div>
        </div>
      </div>
      <div class="right-hero-container63">
        <div class="right-hero-container64">
          <div class="right-hero-container65">
            <div class="right-hero-container66"></div>
          </div>
          <div class="right-hero-container67">
            <span class="right-hero-text08">{{ text231 }}</span>
            <span class="right-hero-text09">{{ text2121 }}</span>
          </div>
          <div class="right-hero-container68">
            <div class="right-hero-container69"></div>
          </div>
        </div>
      </div>
      <div class="right-hero-container70">
        <div class="right-hero-container71">
          <div class="right-hero-container72"></div>
          <div class="right-hero-container73"></div>
          <div class="right-hero-container74"></div>
        </div>
        <div class="right-hero-container75">
          <div class="right-hero-container76"></div>
          <div class="right-hero-container77">
            <div class="right-hero-container78"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightHero',
  props: {
    imagealt5: {
      type: String,
      default: 'image',
    },
    imagesrc4: {
      type: String,
      default: '372f1cb7-2f5b-4924-81fe-15bdef371dea',
    },
    imagealt3: {
      type: String,
      default: 'image',
    },
    imagealt6: {
      type: String,
      default: 'image',
    },
    imagesrc: {
      type: String,
      default: '604545e3-7590-46e2-a714-22a821c0c655',
    },
    heading: {
      type: String,
      default: '1.',
    },
    text212: {
      type: String,
      default: 'Deploy Smart Contracts',
    },
    text1111: {
      type: String,
      default: 'SECURE',
    },
    rootClassName: String,
    text2121: {
      type: String,
      default: 'Start Trading Bot',
    },
    text1: {
      type: String,
      default: 'CRYPTO',
    },
    imagesrc1: {
      type: String,
      default: '0eeeb74c-bc4d-43ab-83a3-bb741aee1494',
    },
    text221: {
      type: String,
      default: '4.',
    },
    text231: {
      type: String,
      default: '5.',
    },
    text211: {
      type: String,
      default: 'Define your Strategy',
    },
    imagesrc2: {
      type: String,
      default: 'df342e4d-b23c-4f2d-9c80-f515bce25257',
    },
    imagesrc3: {
      type: String,
      default: 'c32b2582-ed47-4332-b4e9-17d0440cf13c',
    },
    text2: {
      type: String,
      default: '1.',
    },
    imagealt4: {
      type: String,
      default: 'image',
    },
    imagesrc7: {
      type: String,
      default: 'ddd0d4a0-f49e-4816-a803-b2e378e8d331',
    },
    imagealt1: {
      type: String,
      default: 'image',
    },
    imagealt11: {
      type: String,
      default: 'image',
    },
    imagesrc5: {
      type: String,
      default: '8ad376d0-4648-4170-a1a9-56590626ff68',
    },
    text22: {
      type: String,
      default: '2.',
    },
    imagealt9: {
      type: String,
      default: 'image',
    },
    imagealt8: {
      type: String,
      default: 'image',
    },
    text111: {
      type: String,
      default: 'ON-CHAIN',
    },
    text11: {
      type: String,
      default: 'AUTOMATIC',
    },
    imagesrc8: {
      type: String,
      default: '32d00db7-cb8f-4d5c-847d-bf85d68792ae',
    },
    imagealt2: {
      type: String,
      default: 'image',
    },
    imagealt7: {
      type: String,
      default: 'image',
    },
    text: {
      type: String,
      default: 'TRADE',
    },
    imagesrc11: {
      type: String,
      default: 'f5f3efa9-cb68-439a-bedc-f458d7f033cf',
    },
    imagesrc6: {
      type: String,
      default: 'ead7c4ca-4bc2-4d7a-8919-0a59fbd2d25c',
    },
    imagealt10: {
      type: String,
      default: 'image',
    },
    imagealt: {
      type: String,
      default: 'image',
    },
    text21: {
      type: String,
      default: 'Connect Wallet',
    },
    text23: {
      type: String,
      default: '3.',
    },
    text2111: {
      type: String,
      default: 'Allocate Funds',
    },
    imagesrc10: {
      type: String,
      default: 'd8c68620-0dd3-47b7-bf76-cb690abff59d',
    },
    imagesrc9: {
      type: String,
      default: 'cbcc861d-8022-4f91-a303-66308852a4d4',
    },
  },
}
</script>

<style scoped>
.right-hero-container {
  width: 100%;
  height: 60vh;
  display: flex;
  z-index: 100;
  position: relative;
  align-items: flex-start;
  animation-name: none;
  flex-direction: column;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.right-hero-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 28vh;
  display: flex;
  min-height: 0px;
  align-items: flex-start;
  flex-direction: column;
}
.right-hero-container02 {
  flex: 0 0 auto;
  width: 100%;
  height: 2vh;
  display: flex;
  align-items: flex-start;
}
.right-hero-container03 {
  flex: 1;
  width: 70%;
  height: 2vh;
  display: flex;
  align-items: center;
}
.right-hero-container04 {
  flex: 0 0 auto;
  width: 2vh;
  height: 2vh;
  display: flex;
  min-width: 10px;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-black);
}
.right-hero-container05 {
  flex: 1;
  width: auto;
  height: 0.25vh;
  display: flex;
  align-items: flex-start;
  margin-left: -0.5vh;
  margin-right: -0.5vh;
  background-color: var(--dl-color-gray-black);
}
.right-hero-container06 {
  flex: 0 0 auto;
  width: 2vh;
  height: 2vh;
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  justify-content: center;
}
.right-hero-container07 {
  flex: 0 0 auto;
  width: 2vh;
  height: 2vh;
  display: flex;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-black);
}
.right-hero-container08 {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.right-hero-container09 {
  flex: 1;
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
}
.right-hero-container10 {
  flex: 0 0 auto;
  width: 2vh;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.right-hero-container11 {
  flex: 1;
  width: 0.25vh;
  height: 100%;
  display: flex;
  align-self: center;
  margin-top: -0.5vh;
  align-items: flex-start;
  margin-bottom: -0.5vh;
  flex-direction: column;
  background-color: var(--dl-color-gray-black);
}
.right-hero-container12 {
  flex: 1;
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.right-hero-container13 {
  flex: 0.5;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.right-hero-container14 {
  flex: 0 0 auto;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: flex-end;
}
.right-hero-text {
  color: #ffffff;
  width: var(--dl-size-size-small);
  height: 100%;
  font-size: 3em;
  margin-top: -5px;
  text-align: center;
  margin-left: -5px;
  background-color: var(--dl-color-gray-black);
}
.right-hero-text01 {
  font-size: 2em;
}
.right-hero-container15 {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 70%;
  display: flex;
  align-items: flex-start;
}
.right-hero-container16 {
  flex: 0 0 auto;
  width: 2vh;
  height: 100%;
  display: flex;
  margin-top: -2vh;
  align-items: center;
  margin-bottom: -2vh;
  flex-direction: column;
  justify-content: center;
}
.right-hero-container17 {
  flex: 0 0 auto;
  width: 0.25vh;
  height: 26vh;
  display: flex;
  margin-top: -2vh;
  align-items: flex-start;
  margin-bottom: -2vh;
  flex-direction: column;
  background-color: var(--dl-color-gray-black);
}
.right-hero-container18 {
  flex: 0.5;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.right-hero-container19 {
  flex: 0 0 auto;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: flex-end;
}
.right-hero-text02 {
  color: #ffffff;
  width: var(--dl-size-size-small);
  height: 100%;
  font-size: 3em;
  align-self: center;
  margin-top: -5px;
  text-align: center;
  margin-left: -5px;
  background-color: var(--dl-color-gray-black);
}
.right-hero-text03 {
  font-size: 2em;
}
.right-hero-container20 {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 70%;
  display: flex;
  align-items: flex-start;
}
.right-hero-container21 {
  flex: 0 0 auto;
  width: 2vh;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.right-hero-container22 {
  flex: 1;
  width: 0.25vh;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 100%;
  display: flex;
  align-self: center;
  margin-top: -0.5vh;
  align-items: flex-start;
  margin-bottom: -0.5vh;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.right-hero-container23 {
  flex: 0 0 auto;
  width: 100%;
  height: 2vh;
  display: flex;
  align-items: flex-start;
}
.right-hero-container24 {
  flex: 1;
  width: 70%;
  height: 2vh;
  display: flex;
  align-items: center;
}
.right-hero-container25 {
  flex: 0 0 auto;
  width: 2vh;
  height: 2vh;
  display: flex;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-black);
}
.right-hero-container26 {
  flex: 1;
  width: auto;
  height: 0.25vh;
  display: flex;
  align-items: flex-start;
  margin-left: -0.5vh;
  margin-right: -0.5vh;
  background-color: var(--dl-color-gray-black);
}
.right-hero-container27 {
  flex: 0 0 auto;
  width: 2vh;
  height: 2vh;
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  justify-content: center;
}
.right-hero-container28 {
  flex: 0 0 auto;
  width: 2vh;
  height: 2vh;
  display: flex;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-black);
}
.right-hero-container29 {
  flex: 0 0 auto;
  width: 100%;
  height: 28vh;
  display: flex;
  margin-top: -2vh;
  min-height: 0px;
  align-items: flex-start;
  flex-direction: column;
}
.right-hero-container30 {
  flex: 0 0 auto;
  width: 100%;
  height: 2vh;
  display: flex;
  align-items: flex-start;
}
.right-hero-container31 {
  flex: 1;
  width: 70%;
  height: 2vh;
  display: flex;
  align-items: center;
}
.right-hero-container32 {
  flex: 0 0 auto;
  width: 2vh;
  height: 2vh;
  display: flex;
  min-width: 10px;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-black);
}
.right-hero-container33 {
  flex: 1;
  width: auto;
  height: 0.25vh;
  display: flex;
  align-items: flex-start;
  margin-left: -0.5vh;
  margin-right: -0.5vh;
  background-color: var(--dl-color-gray-black);
}
.right-hero-container34 {
  flex: 0 0 auto;
  width: 2vh;
  height: 2vh;
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  justify-content: center;
}
.right-hero-container35 {
  flex: 0 0 auto;
  width: 2vh;
  height: 2vh;
  display: flex;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-black);
}
.right-hero-container36 {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.right-hero-container37 {
  flex: 1;
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
}
.right-hero-container38 {
  flex: 0 0 auto;
  width: 2vh;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.right-hero-container39 {
  flex: 1;
  width: 0.25vh;
  height: 100%;
  display: flex;
  align-self: center;
  margin-top: -0.5vh;
  align-items: flex-start;
  margin-bottom: -0.5vh;
  flex-direction: column;
  background-color: var(--dl-color-gray-black);
}
.right-hero-container40 {
  flex: 1;
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.right-hero-container41 {
  flex: 0.5;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.right-hero-container42 {
  flex: 0 0 auto;
  width: 100%;
  height: 50%;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
}
.right-hero-text04 {
  color: #ffffff;
  width: var(--dl-size-size-small);
  height: 100%;
  font-size: 3em;
  align-self: center;
  margin-top: -5px;
  text-align: center;
  margin-left: -5px;
  background-color: var(--dl-color-gray-black);
}
.right-hero-text05 {
  font-size: 2em;
}
.right-hero-container43 {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: flex-start;
}
.right-hero-container44 {
  flex: 0 0 auto;
  width: 2vh;
  height: 100%;
  display: flex;
  margin-top: -1vh;
  align-items: center;
  margin-bottom: -1vh;
  flex-direction: column;
  justify-content: center;
}
.right-hero-container45 {
  flex: 0 0 auto;
  width: 0.25vh;
  height: 26vh;
  display: flex;
  margin-top: -2vh;
  align-items: flex-start;
  margin-bottom: -2vh;
  flex-direction: column;
  background-color: var(--dl-color-gray-black);
}
.right-hero-container46 {
  flex: 0.5;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.right-hero-container47 {
  flex: 0 0 auto;
  width: 100%;
  height: 40%;
  display: flex;
  align-items: flex-end;
}
.right-hero-text06 {
  color: #ffffff;
  width: var(--dl-size-size-small);
  height: 100%;
  font-size: 3em;
  align-self: center;
  margin-top: -5px;
  text-align: left;
  margin-left: -5px;
  background-color: var(--dl-color-gray-black);
}
.right-hero-text07 {
  font-size: 2em;
}
.right-hero-container48 {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: flex-start;
}
.right-hero-container49 {
  flex: 0 0 auto;
  width: 2vh;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.right-hero-container50 {
  flex: 1;
  width: 0.25vh;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 100%;
  display: flex;
  align-self: center;
  margin-top: -0.5vh;
  align-items: flex-start;
  margin-bottom: -0.5vh;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.right-hero-container51 {
  flex: 0 0 auto;
  width: 100%;
  height: 2vh;
  display: flex;
  align-items: flex-start;
}
.right-hero-container52 {
  flex: 1;
  width: 70%;
  height: 2vh;
  display: flex;
  align-items: center;
}
.right-hero-container53 {
  flex: 0 0 auto;
  width: 2vh;
  height: 2vh;
  display: flex;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-black);
}
.right-hero-container54 {
  flex: 1;
  width: auto;
  height: 0.25vh;
  display: flex;
  align-items: flex-start;
  margin-left: -0.5vh;
  margin-right: -0.5vh;
  background-color: var(--dl-color-gray-black);
}
.right-hero-container55 {
  flex: 0 0 auto;
  width: 2vh;
  height: 2vh;
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  justify-content: center;
}
.right-hero-container56 {
  flex: 0 0 auto;
  width: 2vh;
  height: 2vh;
  display: flex;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-black);
}
.right-hero-container57 {
  flex: 0 0 auto;
  width: 100%;
  height: 15vh;
  display: flex;
  margin-top: -2vh;
  min-height: 0px;
  align-items: flex-start;
  flex-direction: column;
}
.right-hero-container58 {
  flex: 0 0 auto;
  width: 100%;
  height: 2vh;
  display: flex;
  align-items: flex-start;
}
.right-hero-container59 {
  width: 15vh;
  height: 2vh;
  display: flex;
  align-items: center;
}
.right-hero-container60 {
  flex: 0 0 auto;
  width: 2vh;
  height: 2vh;
  display: flex;
  min-width: 10px;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-black);
}
.right-hero-container61 {
  flex: 1;
  width: auto;
  height: 0.25vh;
  display: flex;
  align-items: flex-start;
  margin-left: -0.5vh;
  margin-right: -0.5vh;
  background-color: var(--dl-color-gray-black);
}
.right-hero-container62 {
  flex: 0 0 auto;
  width: 2vh;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 2vh;
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  justify-content: center;
}
.right-hero-container63 {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.right-hero-container64 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.right-hero-container65 {
  flex: 0 0 auto;
  width: 2vh;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.right-hero-container66 {
  flex: 1;
  width: 0.25vh;
  height: 100%;
  display: flex;
  align-self: center;
  margin-top: -0.5vh;
  align-items: flex-start;
  margin-bottom: -0.5vh;
  flex-direction: column;
  background-color: var(--dl-color-gray-black);
}
.right-hero-container67 {
  flex: 1;
  width: auto;
  height: 3em;
  display: flex;
  align-items: flex-end;
}
.right-hero-text08 {
  color: #ffffff;
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  font-size: 3em;
  align-self: center;
  margin-top: -5px;
  text-align: center;
  margin-left: -5px;
  background-color: var(--dl-color-gray-black);
}
.right-hero-text09 {
  font-size: 2em;
}
.right-hero-container68 {
  flex: 0 0 auto;
  width: 2vh;
  height: 100%;
  display: flex;
  align-self: flex-end;
  align-items: flex-start;
  flex-direction: column;
}
.right-hero-container69 {
  flex: 1;
  width: 0.25vh;
  height: 100%;
  display: flex;
  align-self: center;
  margin-top: -.5vh;
  align-items: flex-start;
  margin-bottom: -.5vh;
  flex-direction: column;
  background-color: var(--dl-color-gray-black);
}
.right-hero-container70 {
  flex: 0 0 auto;
  width: 100%;
  height: 2vh;
  display: flex;
  align-items: flex-start;
}
.right-hero-container71 {
  width: 15vh;
  height: 2vh;
  display: flex;
  align-items: center;
}
.right-hero-container72 {
  flex: 0 0 auto;
  width: 2vh;
  height: 2vh;
  display: flex;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-black);
}
.right-hero-container73 {
  flex: 1;
  width: auto;
  height: 0.25vh;
  display: flex;
  align-items: flex-start;
  margin-left: -0.5vh;
  margin-right: -0.5vh;
  background-color: var(--dl-color-gray-black);
}
.right-hero-container74 {
  flex: 0 0 auto;
  width: 2vh;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 2vh;
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  justify-content: center;
}
.right-hero-container75 {
  flex: 1;
  width: auto;
  height: 2vh;
  display: flex;
  align-items: center;
}
.right-hero-container76 {
  flex: 1;
  width: auto;
  height: 0.25vh;
  display: flex;
  align-items: flex-start;
  margin-left: -1vh;
  margin-right: -1vh;
  background-color: var(--dl-color-gray-black);
}
.right-hero-container77 {
  flex: 0 0 auto;
  width: 2vh;
  height: 2vh;
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  justify-content: center;
}
.right-hero-container78 {
  flex: 0 0 auto;
  width: 2vh;
  height: 2vh;
  display: flex;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-black);
}

</style>
