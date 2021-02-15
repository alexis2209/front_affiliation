<template>
<nuxt-link class="departments__item-link" :to="`/${link.to}`">
  {{ link.title }}
</nuxt-link>
</template>

<script lang="ts">
export default {
  props: [
    'link'
  ],
}
</script>
