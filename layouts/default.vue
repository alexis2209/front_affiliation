<template>
  <div class="site">
    <div class="site__container">
      <!-- desktop site__header -->
      <header class="site__header d-lg-block d-none">
        <HeaderTemplate1 :menu=this.menu />
      </header>
      <!-- desktop site__header / end -->
      <div class="site__body">
        <nuxt keep-alive />
      </div>

      <!-- site__footer -->
      <footer class="site__footer">
        <Footer />
      </footer>
      <!-- site__footer / end -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: []
    }
  },
  async fetch() {
    this.menu = await this.$http.$get(
      process.env.BASE_URL + '/fr/api/menu'
    )
  },
}
</script>
