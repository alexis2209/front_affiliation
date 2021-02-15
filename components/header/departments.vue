<template>
    <!-- .departments -->
    <div
        :class="[
            'departments',
            {'departments--open': true},
            {'departments--transition': false}
        ]"
    >
        <div ref="body" class="departments__body">
            <div
                ref="content"
                class="departments__links-wrapper"
            >
                <ul class="departments__links">
                    <li
                        v-for="(department, index) in items"
                        ref="items"
                        :key="index"
                        :class="[
                            'departments__item'
                        ]"
                    >
                      <nuxt-link class="departments__item-link" :to="`/${department.to}`">
                        {{ department.title }}
                      </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>

        <button class="departments__button">
          Boutique
        </button>
    </div>
    <!-- .departments / end -->
</template>

<script lang="ts">
export default {
  props: [
    'items'
  ],
}
</script>




