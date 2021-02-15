<template>
  <div>
    <PageHeader title="Latest News"
      :breadcrumb="[
                { title: 'Home', url: '/' },
                { title: 'Blog', url: '/' },
                { title: 'Latest News', url: '/' },
            ]"
    />
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-8">
          <div class="block">
            <div class="posts-view">
              <div :class="['posts-view__list', 'posts-list', `posts-list--layout--classic`]">
                <div class="posts-list__body">
                  <div v-for="posts in data" :key="posts.id" class="posts-list__item">
                    <PostCard :post="posts" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <BlogSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'data'
  ],
}
</script>
