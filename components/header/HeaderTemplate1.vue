<template>
  <div class="site-header">
    <Topbar />

    <div class="site-header__middle container">

      <div class="site-header__logo">
        <nuxt-link to="/">
          <!-- logo -->
          <img src="~/static/images/logo-mdb.png" height="100px" />

          <!-- logo / end -->
        </nuxt-link>
      </div>
      <div class="site-header__search">

      </div>
      <div class="site-header__phone">
        <div class="site-header__phone-title">
          Customer Service
        </div>
        <div class="site-header__phone-number">
          00.00.00.00.00
        </div>
      </div>
    </div>

    <div class="site-header__nav-panel">
      <NavPanel :menu=menu class="" sticky-mode="alwaysOnTop" />
    </div>

  </div>
</template>

<script>

export default {
  props: [
    'menu'
  ],
}
</script>
