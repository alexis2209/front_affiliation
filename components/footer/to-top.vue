<template>
    <div
        :class="[
            'totop',
            {'totop--show': show}
        ]"
    >
        <div class="totop__body">
            <div class="totop__start" />
            <div class="totop__container container" />
            <div class="totop__end">
                <button type="button" class="totop__button" @click="onClick">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8">
                    <path d="M11.4,7.7l-4.9-5l-4.9,5c-0.4,0.4-0.9,0.4-1.3,0l0,0c-0.4-0.4-0.4-0.9,0-1.3L6.5,0l6.2,6.4c0.4,0.4,0.3,0.9,0,1.3l0,0
	C12.4,8.1,11.8,8.1,11.4,7.7z"/>
                  </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'

export default class ToTop extends Vue {
    show: boolean = false
    showFrom: number = 300

    mounted () {
        document.addEventListener('scroll', this.onScroll, { passive: true })
    }

    beforeDestroy () {
        document.removeEventListener('scroll', this.onScroll)
    }

    onScroll (): void {
        this.show = window.pageYOffset >= this.showFrom
    }

    onClick (): void {
        try {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        } catch {
            window.scrollTo(0, 0)
        }
    }
}

</script>
