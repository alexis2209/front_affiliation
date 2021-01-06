<template>
  <component :is="componentInstance" :data=this.page></component>
</template>

<script>
export default {
  layout(context){
    return context.layout; // <- undefined on ssr | defined and client sided navigation
  },
  props: {
    data: {
      type: JSON,
    }
  },
  computed: {
    componentInstance () {
      const name = this.page.configuration.component
      return () => import(`../components/page/${name}`)
    }
  },
  async asyncData({ params, $content, error }) {
    const slug = params.pathMatch || params.slug || "home";
    const page = await $content(slug)
      .fetch()
      .catch(err => {
        console.log('ici erreur')
        //error({ statusCode: 404, message: "Page not found" });
      });
    return {page}
  },

}
</script>
