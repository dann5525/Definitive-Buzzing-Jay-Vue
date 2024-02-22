<template>
  <div class="on-boarding11-container">
    <app-menue2 rootClassName="menue2-root-class-name1"></app-menue2>
    <app-welcome rootClassName="welcome-root-class-name5"></app-welcome>
    <deploy-contracts
      rootClassName="deploy-contracts-root-class-name"
    ></deploy-contracts>
    <app-footer rootClassName="footer-root-class-name3"></app-footer>
  </div>
</template>

<script>
import AppMenue2 from '../components/menue2'
import AppWelcome from '../components/welcome'
import DeployContracts from '../components/deploy-contracts'
import AppFooter from '../components/footer'

export default {
  name: 'OnBoarding11',
  props: {},
  components: {
    AppMenue2,
    AppWelcome,
    DeployContracts,
    AppFooter,
  },
  metaInfo: {
    title: 'OnBoarding11 - Definitive Buzzing Jay',
    meta: [
      {
        property: 'og:title',
        content: 'OnBoarding11 - Definitive Buzzing Jay',
      },
    ],
  },
}
</script>

<style scoped>
.on-boarding11-container {
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
