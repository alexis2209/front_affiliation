<template>
    <div class="nav-panel">
        <div class="nav-panel__container container">
            <div class="nav-panel__row">
                <div class="nav-panel__logo">
                    <nuxt-link to="/">
                        <!-- logo -->

                        <!-- logo / end -->
                    </nuxt-link>
                </div>

              <div class="nav-panel__departments">
                <Departments :items=menu.items />
              </div>

                <!-- .nav-links -->
                <NavLinks ref="nav" :menu=menu class="nav-panel__nav-links" />
                <!-- .nav-links / end -->

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Departments from "~/components/header/Departments.vue";
import NavLinks from "~/components/header/NavLinks.vue";
export default {
  props: [
    'menu'
  ],
  components: {
    Departments, NavLinks
  }
}
</script>
