<template>
  <div class="welcome-container" v-bind:class="rootClassName">
    <h1 class="welcome-text">{{ heading }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    heading: {
      type: String,
      default: 'Welcome to Levitas, your Automated Trading Tool',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.welcome-container {
  width: 100%;
  height: var(--dl-size-size-xxlarge);
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.welcome-text {
  width: 815px;
  font-size: 48px;
  text-align: center;
  margin-bottom: 0px;
}







</style>
