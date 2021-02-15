<template>
    <div class="site-footer__widget footer-links">
        <h5 class="footer-links__title">
            {{ title }}
        </h5>
        <ul class="footer-links__list">
            <li v-for="link in links" :key="link.title" class="footer-links__item">
                <nuxt-link :to="link.url" class="footer-links__link">
                    {{ link.title }}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">

export default {
  props: [
    'title',
    'links'
  ],
}



</script>
