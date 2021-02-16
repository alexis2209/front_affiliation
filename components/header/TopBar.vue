<template>
    <!-- .topbar -->
    <div class="site-header__topbar topbar">
        <div class="topbar__container container">
            <div class="topbar__row">
                <div class="topbar__item topbar__item--link">
                    <nuxt-link to="/" class="topbar-link nuxt-link">
                        About
                    </nuxt-link>
                </div>
                <div class="topbar__item topbar__item--link">
                    <nuxt-link to="/" class="topbar-link">
                        Contacts
                    </nuxt-link>
                </div>
                <div class="topbar__item topbar__item--link">
                    <nuxt-link to="/" class="topbar-link">
                        Store Location
                    </nuxt-link>
                </div>
                <div class="topbar__item topbar__item--link">
                    <nuxt-link to="/" class="topbar-link">
                        Track Order
                    </nuxt-link>
                </div>
                <div class="topbar__item topbar__item--link">
                    <nuxt-link to="/" class="topbar-link">
                        Blog
                    </nuxt-link>
                </div>
                <div class="topbar__spring" />
            </div>
        </div>
    </div>
    <!-- .topbar / end -->
</template>

<script>
export default {
  props: [
    'menu'
  ],
}
</script>
