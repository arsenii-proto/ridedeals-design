<template>
    <div class="first-order-page">
        
        <div class="top-panel">
            <div class="search">
                <i class="material-icons">search</i>
                Search for
            </div>
            
            <div class="location">
                <i class="material-icons">near_me</i>
            </div>
        </div>

        <div class="location-name">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>

        <div class="location-point">
            <i class="material-icons">person_pin_circle</i>
        </div>

        <div class="make-order-btn">
            <i class="material-icons">directions</i>
            Make Order
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

    .first-order-page .top-panel {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 4vh 3vw 1vh;
        background: #282828;
        box-shadow: 0px 0px 40px -5px #000;
    }

    .first-order-page .search {
        display: inline-block;
        width: 80%;
        padding: 5px 0 10px;
        font-family: 'Exo 2', sans-serif;
        color: #969696;
        border-bottom: 1px solid #00665c;
        vertical-align: bottom;
    }

    .first-order-page .search i {
        float: left;
        margin-right: 5px;
        color: #00665c;
    }

    .first-order-page .location {
        display: inline-block;
        width: 20%;
        padding: 10px 0 5px;
        text-align: right;
        vertical-align: bottom;
    }

    .first-order-page .location i {
        float: right;
        color: #00665c;
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
        color:#911108;
        font-size: 42px;
    }

    .first-order-page .make-order-btn {
        position: absolute;
        left: 3vw;
        right: 3vw;
        bottom: 10vh;
        color: #fff;
        line-height: 28px;
        background: #282828;
        padding: 7px 15px;
        border-radius: 3px;
        box-shadow: 0px 0px 40px -5px #000;
    }

    .first-order-page .make-order-btn i {
        float: left;
        line-height: 28px;
        margin-right: 5px;
    }
</style>
