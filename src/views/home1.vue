<template>
  <div class="home1-container">
    <app-menue rootClassName="menue-root-class-name1"></app-menue>
    <app-hero1 rootClassName="hero1-root-class-name"></app-hero1>
    <app-footer rootClassName="footer-root-class-name1"></app-footer>
  </div>
</template>

<script>
import AppMenue from '../components/menue'
import AppHero1 from '../components/hero1'
import AppFooter from '../components/footer'

export default {
  name: 'Home1',
  props: {},
  components: {
    AppMenue,
    AppHero1,
    AppFooter,
  },
  metaInfo: {
    title: 'Definitive Buzzing Jay',
    meta: [
      {
        property: 'og:title',
        content: 'Definitive Buzzing Jay',
      },
    ],
  },
}
</script>

<style scoped>
.home1-container {
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
