<template>
    <div class="first-order-page">
        
        <div class="search">
            <i class="material-icons">search</i>
            Search for
        </div>
        
        <div class="location">
            <i class="material-icons">near_me</i>
            &nbsp;
        </div>

        <div class="location-name">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>

        <div class="location-point">
            <i class="material-icons">location_on</i>
        </div>

        <div class="make-order">
            <div class="btn">
                <i class="material-icons">directions</i>
                Make Order
            </div>
        </div>

    </div>
</template>

<style>

    .first-order-page {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(../../assets/map-bg.png)
    }

    .first-order-page .search {
        position: absolute;
        top: 5vh;
        left: 3vw;
        font-family: 'Exo 2', sans-serif;
        color: #282828;
    }

    .first-order-page .search,
    .first-order-page .location,
    .first-order-page .make-order .btn {
        background: #969696;
        padding: 7px 15px;
        border-radius: 7px;
        box-shadow: 0px 0px 40px -5px #282828;
    }

    .first-order-page .location {
        position: absolute;
        top: 5vh;
        right: 3vw;
    }

    .first-order-page .search i {
        float: left;
        margin-right: 5px;
        color: #00665c;
    }

    .first-order-page .location i {
        float: left;
    }

    .first-order-page .location-name {
        position: absolute;
        top: 50%;
        left: 15%;
        right: 15%;
        margin-top: -80px;
        color: #fff;
        text-align: center;
        text-shadow: 0px 0px 5px #969696;
    }

    .first-order-page .location-point {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -20px -20px;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
    }

    .first-order-page .location-point i {
        color: #00897B;
        font-size: 32px;
    }

    .first-order-page .make-order {
        position: absolute;
        left: 15%;
        right: 15%;
        bottom: 10vh;
    }

    .first-order-page .make-order .btn {
        display: table;
        margin: 0 auto;
        line-height: 28px;
    }

    .first-order-page .make-order .btn i {
        float: left;
        line-height: 28px;
        margin-right: 5px;
    }
</style>
