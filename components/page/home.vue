<template>
  <div>
    <BlockSlideshow :slides="data.slider" />
  </div>
</template>

<script>

export default {
  props: [
    'data',
    'siteid'
  ],
}
</script>
