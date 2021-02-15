<template>
    <div class="page-header">
        <div class="page-header__container container">
            <div class="page-header__breadcrumb">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <template v-for="(item, index) in breadcrumb">
                            <li v-if="index !== breadcrumb.length - 1" :key="index" class="breadcrumb-item">
                                <nuxt-link :to="item.url">
                                    {{ item.title }}
                                </nuxt-link>
                            </li>
                            <li v-if="index === breadcrumb.length - 1" :key="index" class="breadcrumb-item active">
                                {{ item.title }}
                            </li>
                        </template>
                    </ol>
                </nav>
            </div>
            <div v-if="title" class="page-header__title">
                <h1>{{ title }}</h1>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
  props: [
    'title', 'breadcrumb'
  ],
}

</script>
