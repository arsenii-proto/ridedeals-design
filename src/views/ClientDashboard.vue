<template>
  <div class="client-dashboard">

    <first-order-page v-if="status === STATUS.THINKING" />
    <second-order-page v-if="status === STATUS.SEARCHING" />
    <third-order-page v-if="status === STATUS.ACCEPTING" />
    <fourth-order-page v-if="status === STATUS.WAITING" />

    <client-menu />
  </div>
</template>

<script>
import ClientMenu from "./client/Menu.vue";
import FirstOrderPage from "./client/FirstOrderPage.vue";
import SecondOrderPage from "./client/SecondOrderPage.vue";
import ThirdOrderPage from "./client/ThirdOrderPage.vue";
import FourthOrderPage from "./client/FourthOrderPage.vue";


export default {

    components: {
        FirstOrderPage,
        SecondOrderPage,
        ThirdOrderPage,
        FourthOrderPage,
        ClientMenu
    },

    data: () => ({

        status: 1,

        STATUS: {

            THINKING:   1,
            SEARCHING:  2,
            ACCEPTING:  3,
            WAITING:    4,
            RIDING:     5,
            RATING:     6,

        }

    })

}
</script>

<style>

    .client-dashboard {
        background: #282828;
    }

</style>
