<template>
  <div class="not-allowed">

    <img src="../assets/not-allowed.png">

    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

    <router-link to="/web/login">Go to Login</router-link>

  </div>
</template>

<style>

    .not-allowed {
        background: #353535
    }

    .not-allowed img {

        max-width: 100%;
        max-height: 100%;
    }

    .not-allowed h1 {
        color: #ffffff;
        text-align: center;
    }

    .not-allowed a {
        display: table;
        padding: 15px 25px;
        background: #00897B;
        color: #ffffff;
        text-decoration: none;
        margin: 20px auto;
    }
</style>
