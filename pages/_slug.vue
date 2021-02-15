<template>
  <component :is="componentInstance" :data=this.page.datas></component>
</template>

<script>
export default {
  layout(context){
    return context.layout; // <- undefined on ssr | defined and client sided navigation
  },
  props: {
    data: {
      type: JSON,
      page: []
    }
  },
  computed: {
    componentInstance () {
      const name = this.page.config.components
      return () => import(`../components/page/${name}`)
    }
  },
  async asyncData({ params, $http }) {
    var slug = params.pathMatch || params.slug || "home";
    var first = slug[0]
    if (first == '/'){
      slug = slug.substr(1)
    }
    const page = await $http.$get(`http://localhost:3000/fr/api/${slug}`)
    console.log(page);
    return { page }
  }

}
</script>
