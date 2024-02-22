<template>
  <div class="on-boarding1-container">
    <app-menue2 rootClassName="menue2-root-class-name"></app-menue2>
    <app-welcome rootClassName="welcome-root-class-name4"></app-welcome>
    <mm-setting rootClassName="mm-setting-root-class-name"></mm-setting>
    <app-footer rootClassName="footer-root-class-name2"></app-footer>
  </div>
</template>

<script>
import AppMenue2 from '../components/menue2'
import AppWelcome from '../components/welcome'
import MmSetting from '../components/mm-setting'
import AppFooter from '../components/footer'

export default {
  name: 'OnBoarding1',
  props: {},
  components: {
    AppMenue2,
    AppWelcome,
    MmSetting,
    AppFooter,
  },
  metaInfo: {
    title: 'OnBoarding1 - Definitive Buzzing Jay',
    meta: [
      {
        property: 'og:title',
        content: 'OnBoarding1 - Definitive Buzzing Jay',
      },
    ],
  },
}
</script>

<style scoped>
.on-boarding1-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(90deg, rgb(218, 221, 222) 1.00%,rgb(162, 176, 190) 98.00%);
}
</style>
