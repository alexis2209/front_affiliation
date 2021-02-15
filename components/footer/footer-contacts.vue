<template>
    <div class="site-footer__widget footer-contacts">
        <h5 class="footer-contacts__title">
            Contact Us
        </h5>

        <div class="footer-contacts__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem. Pellentque ac placerat
            tellus.
        </div>

        <ul class="footer-contacts__contacts">
            <li>
                <i class="footer-contacts__icon fas fa-globe-americas" />
                adress
            </li>
            <li>
                <i class="footer-contacts__icon far fa-envelope" />
                mail
            </li>
            <li>
                <i class="footer-contacts__icon fas fa-mobile-alt" />
                phone
            </li>
            <li>
                <i class="footer-contacts__icon far fa-clock" />
                Mon-Sat 10:00pm - 7:00pm
            </li>
        </ul>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'

@Component
export default class FooterContacts extends Vue {
}

</script>
