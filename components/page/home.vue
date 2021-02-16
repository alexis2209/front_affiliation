<template>
  <div>
    <BlockSlideShow :slides="data.slider" />
  </div>
</template>

<script>
import BlockSlideShow from "~/components/block/BlockSlideShow";
export default {
  props: [
    'data',
    'siteid'
  ],
}
</script>
