<template>
    <div class="thirdth-order-page">

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

        <div class="taxi-info-wrapper">
            <div class="taxi-info-scroller">
                <div class="taxi-info">
                    <div class="taxi-img">
                        <img src="../../assets/car-photo.jpeg">
                    </div>
                    <div class="taxi-details">
                        <h4 class="taxi-details-title">
                            Lorem ipsum dolor sit amet
                        </h4>
                        <p class="taxi-details-driver">
                            Arsenii Dumitru, 24 ani
                        </p>
                        <h3 class="taxi-details-plat">
                            ADV 024
                            <span class="taxi-details-price">
                                35 MDL
                            </span>
                        </h3>
                    </div>
                    <div class="btns">
                        <div class="approve-btn">
                            Approve Driver
                        </div>
                        <div class="driver-details-btn">
                            See More
                        </div>
                    </div>
                </div>
                <div class="taxi-info">
                    <div class="taxi-img">
                        <img src="../../assets/car-photo.jpeg">
                    </div>
                    <div class="taxi-details">
                        <h4 class="taxi-details-title">
                            Lorem ipsum dolor sit amet
                        </h4>
                        <p class="taxi-details-driver">
                            Arsenii Dumitru, 24 ani
                        </p>
                        <h3 class="taxi-details-plat">
                            ADV 024
                            <span class="taxi-details-price">
                                35 MDL
                            </span>
                        </h3>
                    </div>
                    <div class="btns">
                        <div class="approve-btn">
                            Approve Driver
                        </div>
                        <div class="driver-details-btn">
                            See More
                        </div>
                    </div>
                </div>
                <div class="taxi-info">
                    <div class="taxi-img">
                        <img src="../../assets/car-photo.jpeg">
                    </div>
                    <div class="taxi-details">
                        <h4 class="taxi-details-title">
                            Lorem ipsum dolor sit amet
                        </h4>
                        <p class="taxi-details-driver">
                            Arsenii Dumitru, 24 ani
                        </p>
                        <h3 class="taxi-details-plat">
                            ADV 024
                            <span class="taxi-details-price">
                                35 MDL
                            </span>
                        </h3>
                    </div>
                    <div class="btns">
                        <div class="approve-btn">
                            Approve Driver
                        </div>
                        <div class="driver-details-btn">
                            See More
                        </div>
                    </div>
                </div>
            </div>
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
    
    .thirdth-order-page {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(../../assets/map-bg-searching.png)
    }

    .thirdth-order-page .taxi-info-wrapper {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 10vh;
        margin-bottom: -30px;
        padding: 40px 10px;
        overflow: scroll;
    }

    .thirdth-order-page .taxi-info-wrapper .taxi-info-scroller {
        min-width: 216vw;
        min-height: 1px;
    }

    .thirdth-order-page .taxi-info-wrapper .taxi-info {
        float: left;
        max-width: 70vw;
        margin: 1vw;
        box-sizing: border-box;
        background: #282828;
        padding: 15px 15px 0;
        border-radius: 7px;
        box-shadow: 0px 0px 40px -5px #000;
    }

    .thirdth-order-page .top-panel {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        padding: 4vh 3vw 1vh;
        background: #282828;
        box-shadow: 0px 0px 40px -5px #000;
    }

    .thirdth-order-page .order-icon {
        position: relative;
        width: 10px;
        box-sizing: border-box;
        vertical-align: top;
        border-left: 1px dashed #969696;
        flex-grow: 1;
    }

    .thirdth-order-page .order-icon:before,
    .thirdth-order-page .order-icon:after {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        background: #969696;
        top: 0;
        left: -5px;
        border-radius: 100%;
    }

    .thirdth-order-page .order-from, 
    .thirdth-order-page .order-to {
        margin: 0 5px 0;
        color: #969696
    }

    .thirdth-order-page .order-to {
        margin-top: 10px
    }

    .thirdth-order-page .order-icon:after {
        top: initial;
        bottom: 0;
    }

    .thirdth-order-page .order-details {
        box-sizing: border-box;
        vertical-align: top;
        word-wrap: break-word;
        flex-grow: 4;
    }

    .thirdth-order-page .order-price {
        box-sizing: border-box;
        flex-grow: 2;
        color: #969696;
        padding: 0 15px;
        font-size: 32px;
        align-self: center;
    }

    .thirdth-order-page .order-actions {
        box-sizing: border-box;
        flex-grow: 1;
        align-self: center;
    }

    .thirdth-order-page .edit,
    .thirdth-order-page .cancel {
        display: block;
        padding: 10px 15px;
        font-size: 14px;
        padding: 5px 7px;
    }

    .thirdth-order-page .edit {
        color: #b36b00;
    }

    .thirdth-order-page .cancel {
        color: #aa1409;
    }

    .thirdth-order-page .edit i,
    .thirdth-order-page .cancel i {
        font-size: 14px;
        float: right;
        margin-left: 5px;
    }

    .thirdth-order-page .taxi-info-wrapper .taxi-info .taxi-img {
        display: inline-block;
        vertical-align: top;
        width: 30%;
        padding-right: 5px;
        box-sizing: border-box;
    }

    .thirdth-order-page .taxi-info-wrapper .taxi-info .taxi-img img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 5px;
    }

    .thirdth-order-page .taxi-info-wrapper .taxi-info .taxi-details {
        display: inline-block;
        width: 70%;
        padding-left: 5px;
        box-sizing: border-box;
    }

    .thirdth-order-page .taxi-info-wrapper .taxi-info .taxi-details .taxi-details-title {
        margin: 0;
        color: #ffffff;
    }

    .thirdth-order-page .taxi-info-wrapper .taxi-info .taxi-details .taxi-details-driver {
        margin: 0;
        font-size: 12px;
        color: #969696;
    }

    .thirdth-order-page .taxi-info-wrapper .taxi-info .taxi-details .taxi-details-plat {
        margin: 5px 0;
        font-family: 'Ubuntu', sans-serif;
        color: #ffffff
    }

    .thirdth-order-page .taxi-info-wrapper .taxi-info .taxi-details .taxi-details-price {
        color: #ffffff;
        font-size: 1em;
        float: right;
        font-family: 'Ubuntu', sans-serif;
    }

    .thirdth-order-page .taxi-info-wrapper .taxi-info .approve-btn,
    .thirdth-order-page .taxi-info-wrapper .taxi-info .driver-details-btn {
        color: #ffffff;
        background: #00897B;
        padding: 10px;
        border-radius: 5px;
        margin-top: 5px;
        text-align: center;
        box-shadow: 0px 0px 5px 0px #363636;
        flex-grow: 2;
    }

    .thirdth-order-page .taxi-info-wrapper .taxi-info .btns {
        /* display: flex; */
    }

    .thirdth-order-page .taxi-info-wrapper .taxi-info .driver-details-btn {
        flex-grow: 1;
        background: transparent;
        box-shadow: 0px 0px 0px #000;
        color: #00897B;
        /* padding: 10px 5px; */
    }

    .thirdth-order-page .location-point {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -25px -25px;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }

    .thirdth-order-page .location-point i {
        color: #00897B;
        font-size: 48px;
    }

    .thirdth-order-page .location-taxi {
        position: absolute;
        margin: -15px -15px;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
    }

    .thirdth-order-page .location-taxi i {
        color: #FEC007;
        font-size: 24px;
    }
</style>
