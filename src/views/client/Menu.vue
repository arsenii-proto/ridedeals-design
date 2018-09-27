<template>
    <div class="client-menu">
        <ul :style="{ width: `${ulWidth}px`, 'margin-left': `${ulLeft}px` }">
            <li :style="{ width: `${liWidth}px` }">
                <router-link to="/web/login">
                    <i class="material-icons">chat</i>
                </router-link>
            </li>
            <li :style="{ width: `${liWidth}px` }">
                <router-link to="/web/login" class="router-link-exact-active">
                    <i class="material-icons">contacts</i>
                </router-link>
            </li>
            <li :style="{ width: `${liWidth}px` }">
                <router-link to="/web/login">
                    <i class="material-icons">portrait</i>
                </router-link>
            </li>
            <li :style="{ width: `${liWidth}px` }">
                <router-link to="/web/login">
                    <i class="material-icons">email</i>
                </router-link>
            </li>
            <li :style="{ width: `${liWidth}px` }">
                <router-link to="/web/login">
                    <i class="material-icons">directions_car</i>
                </router-link>
            </li>
            <div style="clear: both"></div>
        </ul>
    </div>
</template>

<script>
    export default {

        data: () => ({

            ulWidth: 1000,
            ulLeft: 0,
            liWidth: 73,

        })

    }
</script>

<style>
    .client-menu {
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: 0px;
        max-height: 8vh;
        overflow: hidden;
        box-shadow: 0px 0px 40px -5px #000;
    }

    .client-menu ul {
        list-style: none;
        background: #282828;
        padding: 0;
        margin: 0;
    }

    .client-menu ul li {
        float: left;
        text-align: center;
    }

    .client-menu ul li a {
        color: #969696;
        padding: 10px 15px 15px;
        display: inline-block;
    }

    .client-menu ul li a.router-link-exact-active {
        color: #00897B;
    }
</style>
