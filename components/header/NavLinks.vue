<template>
    <div class="nav-links">
        <ul class="nav-links__list">
            <li
                v-for="(item, index) in menu"
                :class="[
                    'nav-links__item',
                    {
                        'nav-links__item--has-submenu': item.submenu,
                        'nav-links__item--hover': false,
                    }
                ]"
            >
                <nuxt-link v-if="index != 'items'" class="nav-links__item-link" :to="item.url">
                    <div class="nav-links__item-body">
                        {{ item.title }}
                    </div>
                </nuxt-link>
                <div
                    v-if="item.submenu && item.submenu.type === 'menu'"
                    ref="submenus"
                    :class="[
                        'nav-links__submenu',
                        'nav-links__submenu--type--menu',
                        {
                            'nav-links__submenu--display': false,
                            'nav-links__submenu--open': false
                        }
                    ]"
                >
                </div>

            </li>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
  props: [
    'menu'
  ],
}
</script>
