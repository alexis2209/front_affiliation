<template>
  <div>
    <BlockSlideshow :slides="data.slider" />
  </div>
</template>

<script>
import BlockSlideshow from "~/components/header/BlockSlideshow";
export default {
  props: [
    'data',
    'siteid'
  ],
}
</script>
