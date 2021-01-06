<template>
    <div :class="cardClasses">
        <div class="post-card__image">
            <nuxt-link :to="post.slug">
                <!--suppress HtmlUnknownTarget -->
                <img :src="post.image" alt="">
            </nuxt-link>
        </div>
        <div class="post-card__info">
            <div class="post-card__category">
                <nuxt-link v-for="(category, index) in post.categories" :key="index" to="/">
                    {{ category }}
                </nuxt-link>
            </div>
            <div class="post-card__name">
                <nuxt-link :to="post.slug">
                    {{ post.title }}
                </nuxt-link>
            </div>
            <div class="post-card__date">
                {{ post.date }}
            </div>
            <div v-html="post.content" class="post-card__content">
            </div>
            <div class="post-card__read-more">
                <nuxt-link :to="post.slug" class="btn btn-secondary btn-sm">
                    Read More
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
  props: [
    'post'
  ],
}
</script>
