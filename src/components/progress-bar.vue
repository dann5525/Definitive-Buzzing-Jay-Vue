<template>
  <div class="progress-bar-container">
    <div class="progress-bar-container01">
      <div class="progress-bar-container02">
        <div class="progress-bar-progress1">
          <div class="progress-bar-container03">
            <div v-if="checked1" class="progress-bar-container04"></div>
          </div>
        </div>
        <div class="progress-bar-container05"></div>
        <div class="progress-bar-progress2">
          <div class="progress-bar-container06">
            <div v-if="checked2" class="progress-bar-container07"></div>
          </div>
        </div>
        <div class="progress-bar-container08"></div>
        <div class="progress-bar-progress3">
          <div class="progress-bar-container09">
            <div v-if="checked3" class="progress-bar-container10"></div>
          </div>
        </div>
        <div class="progress-bar-container11"></div>
        <div class="progress-bar-progress4">
          <div class="progress-bar-container12">
            <div v-if="checked4" class="progress-bar-container13"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {},
}
</script>

<style scoped>
.progress-bar-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.progress-bar-container01 {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.progress-bar-container02 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: center;
}
.progress-bar-progress1 {
  flex: 0 0 auto;
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #000000;
}
.progress-bar-container03 {
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  display: flex;
  align-self: center;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-900);
}
.progress-bar-container04 {
  new: 0;
  flex: 0 0 auto;
  width: 30px;
  height: 30px;
  display: flex;
  align-self: center;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #000000;
}
.progress-bar-container05 {
  flex: 0 0 auto;
  width: var(--dl-size-size-xlarge);
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 2px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: solid;
  border-width: 2px;
}
.progress-bar-progress2 {
  flex: 0 0 auto;
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #000000;
}
.progress-bar-container06 {
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  display: flex;
  align-self: center;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-900);
}
.progress-bar-container07 {
  new: 0;
  flex: 0 0 auto;
  width: 30px;
  height: 30px;
  display: flex;
  align-self: center;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #000000;
}
.progress-bar-container08 {
  flex: 0 0 auto;
  width: var(--dl-size-size-xlarge);
  height: 2px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: solid;
  border-width: 2px;
}
.progress-bar-progress3 {
  flex: 0 0 auto;
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #000000;
}
.progress-bar-container09 {
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  display: flex;
  align-self: center;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-900);
}
.progress-bar-container10 {
  new: 0;
  flex: 0 0 auto;
  width: 30px;
  height: 30px;
  display: flex;
  align-self: center;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #000000;
}
.progress-bar-container11 {
  flex: 0 0 auto;
  width: var(--dl-size-size-xlarge);
  height: 2px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: solid;
  border-width: 2px;
}
.progress-bar-progress4 {
  flex: 0 0 auto;
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #000000;
}
.progress-bar-container12 {
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  display: flex;
  align-self: center;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-900);
}
.progress-bar-container13 {
  new: 0;
  flex: 0 0 auto;
  width: 30px;
  height: 30px;
  display: flex;
  align-self: center;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #000000;
}
</style>
