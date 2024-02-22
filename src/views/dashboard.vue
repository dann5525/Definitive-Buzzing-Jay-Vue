<template>
  <div class="dashboard-container">
    <app-menue2 rootClassName="menue2-root-class-name3"></app-menue2>
    <div class="dashboard-container1">
      <span class="dashboard-text">BTC - USDT | Bot #0193</span>
      <div class="dashboard-container2">
        <bot-instance-data
          rootClassName="bot-instance-data-root-class-name1"
        ></bot-instance-data>
        <bot-instance-set-up
          rootClassName="bot-instance-set-up-root-class-name1"
        ></bot-instance-set-up>
      </div>
      <trade-history
        rootClassName="trade-history-root-class-name"
      ></trade-history>
    </div>
    <app-footer rootClassName="footer-root-class-name5"></app-footer>
  </div>
</template>

<script>
import AppMenue2 from '../components/menue2'
import BotInstanceData from '../components/bot-instance-data'
import BotInstanceSetUp from '../components/bot-instance-set-up'
import TradeHistory from '../components/trade-history'
import AppFooter from '../components/footer'

export default {
  name: 'Dashboard',
  props: {},
  components: {
    AppMenue2,
    BotInstanceData,
    BotInstanceSetUp,
    TradeHistory,
    AppFooter,
  },
  metaInfo: {
    title: 'Dashboard - Definitive Buzzing Jay',
    meta: [
      {
        property: 'og:title',
        content: 'Dashboard - Definitive Buzzing Jay',
      },
    ],
  },
}
</script>

<style scoped>
.dashboard-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(90deg, rgb(218, 221, 222) 1.00%,rgb(162, 176, 190) 98.00%);
}
.dashboard-container1 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dashboard-text {
  color: var(--dl-color-gray-white);
  width: 100%;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  background-color: rgb(35, 34, 34);
}
.dashboard-container2 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
</style>
