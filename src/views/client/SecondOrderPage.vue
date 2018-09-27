<template>
    <div class="second-order-page">

        <div class="top-panel">
            <div class="order-icon"></div>
            <div class="order-details">
                <p class="order-from">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <p class="order-to">Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div class="order-price">
                25
            </div>
            <div class="order-actions">
                <div class="edit">Edit</div>
                <div class="cancel">Cancel</div>
            </div>
        </div>

        <div class="location-point">
            <i class="material-icons">place</i>
        </div>

        <div class="location-taxi" v-for="(it, i) in taxiList" :key="i" :style="{ top: `${it.lat}px`, left: `${it.lng}px`, transform: `rotate(${it.degree}deg)` }">
            <i class="material-icons">{{ it.aplied ? 'fiber_smart_record' : 'toll' }}</i>
        </div>

    </div>
</template>

<script>
    export default {

        data: () => ({

            taxiList: [
                { lat: 180, lng: 320, degree: 12, aplied: true },
                { lat: 320, lng: 212, degree: 26, aplied: false },
                { lat: 240, lng: 256, degree: 120, aplied: true },
                { lat: 230, lng: 20, degree: 278, aplied: false },  
            ]

        })

    }
</script>

<style>
    
    .second-order-page {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(../../assets/map-bg-searching.png)
    }

    .second-order-page .top-panel {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        padding: 4vh 3vw 1vh;
        background: #282828;
        box-shadow: 0px 0px 40px -5px #000;
    }

    .second-order-page .order-icon {
        position: relative;
        width: 10px;
        box-sizing: border-box;
        vertical-align: top;
        border-left: 1px dashed #969696;
        flex-grow: 1;
    }

    .second-order-page .order-icon:before,
    .second-order-page .order-icon:after {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        background: #969696;
        top: 0;
        left: -5px;
        border-radius: 100%;
    }

    .second-order-page .order-from, 
    .second-order-page .order-to {
        margin: 0 5px 0;
        color: #969696
    }

    .second-order-page .order-to {
        margin-top: 10px
    }

    .second-order-page .order-icon:after {
        top: initial;
        bottom: 0;
    }

    .second-order-page .order-details {
        box-sizing: border-box;
        vertical-align: top;
        word-wrap: break-word;
        flex-grow: 4;
    }

    .second-order-page .order-price {
        box-sizing: border-box;
        flex-grow: 2;
        color: #969696;
        padding: 0 15px;
        font-size: 32px;
        align-self: center;
    }

    .second-order-page .order-actions {
        box-sizing: border-box;
        flex-grow: 1;
        align-self: center;
    }

    .second-order-page .edit,
    .second-order-page .cancel {
        display: block;
        padding: 10px 15px;
        font-size: 14px;
        padding: 5px 7px;
    }

    .second-order-page .edit {
        color: #b36b00;
    }

    .second-order-page .cancel {
        color: #aa1409;
    }

    .second-order-page .edit i,
    .second-order-page .cancel i {
        font-size: 14px;
        float: right;
        margin-left: 5px;
    }

    .second-order-page .location-point {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -25px -25px;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }

    .second-order-page .location-point i {
        color: #00897B;
        font-size: 48px;
    }

    .second-order-page .location-taxi {
        position: absolute;
        margin: -15px -15px;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
    }

    .second-order-page .location-taxi i {
        color: #FEC007;
        font-size: 24px;
    }
</style>
