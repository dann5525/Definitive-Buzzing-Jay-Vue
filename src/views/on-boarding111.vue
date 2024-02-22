<template>
  <div class="on-boarding111-container">
    <app-menue2 rootClassName="menue2-root-class-name2"></app-menue2>
    <app-welcome rootClassName="welcome-root-class-name6"></app-welcome>
    <transfer-funds
      rootClassName="transfer-funds-root-class-name1"
    ></transfer-funds>
    <app-footer rootClassName="footer-root-class-name4"></app-footer>
  </div>
</template>

<script>
import AppMenue2 from '../components/menue2'
import AppWelcome from '../components/welcome'
import TransferFunds from '../components/transfer-funds'
import AppFooter from '../components/footer'

export default {
  name: 'OnBoarding111',
  props: {},
  components: {
    AppMenue2,
    AppWelcome,
    TransferFunds,
    AppFooter,
  },
  metaInfo: {
    title: 'OnBoarding111 - Definitive Buzzing Jay',
    meta: [
      {
        property: 'og:title',
        content: 'OnBoarding111 - Definitive Buzzing Jay',
      },
    ],
  },
}
</script>

<style scoped>
.on-boarding111-container {
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
