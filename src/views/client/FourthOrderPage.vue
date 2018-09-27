<template>
    <div class="fourth-order-page">

        <div class="top-panel">
            <div class="top-panel-info">
                <div class="order-icon"></div>
                <div class="order-details">
                    <p class="order-from">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <p class="order-to">Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div class="order-price">
                    <span class="old-price">25</span>
                    <br>35
                </div>
                <div class="order-actions">
                    <div class="edit">Edit</div>
                    <div class="cancel">Cancel</div>
                </div>
            </div>
            <div class="top-panel-driver">
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
                    </h3>
                </div>
            </div>
        </div>

        <div class="location-point">
            <i class="material-icons">place</i>
        </div>

        <div class="location-taxi">
            <i class="material-icons">fiber_smart_record</i>
        </div>

    </div>
</template>

<style>
    
    .fourth-order-page {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(../../assets/map-bg-searching.png)
    }

    .fourth-order-page .taxi-info-wrapper {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 10vh;
        padding: 0 10px;
    }

    .fourth-order-page .top-panel {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 4vh 3vw 1vh;
        background: #282828;
        box-shadow: 0px 0px 40px -5px #000;
    }

    .fourth-order-page .top-panel-info {
        display: flex;
    }

    .fourth-order-page .top-panel-driver {
        display: flex;
        margin-top: 20px;
    }

    .fourth-order-page .order-icon {
        position: relative;
        width: 10px;
        box-sizing: border-box;
        vertical-align: top;
        border-left: 1px dashed #969696;
        flex-grow: 1;
    }

    .fourth-order-page .order-icon:before,
    .fourth-order-page .order-icon:after {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        background: #969696;
        top: 0;
        left: -5px;
        border-radius: 100%;
    }

    .fourth-order-page .order-from, 
    .fourth-order-page .order-to {
        margin: 0 5px 0;
        color: #969696
    }

    .fourth-order-page .order-to {
        margin-top: 10px
    }

    .fourth-order-page .order-icon:after {
        top: initial;
        bottom: 0;
    }

    .fourth-order-page .order-details {
        box-sizing: border-box;
        vertical-align: top;
        word-wrap: break-word;
        flex-grow: 4;
    }

    .fourth-order-page .order-price {
        box-sizing: border-box;
        flex-grow: 2;
        color: #969696;
        padding: 0 15px;
        font-size: 32px;
        align-self: center;
    }

    .fourth-order-page .order-actions {
        box-sizing: border-box;
        flex-grow: 1;
        align-self: center;
    }

    .fourth-order-page .edit,
    .fourth-order-page .cancel {
        display: block;
        font-size: 14px;
        padding: 15px 7px;
    }

    .fourth-order-page .edit {
        color: #b36b00;
    }

    .fourth-order-page .cancel {
        color: #aa1409;
    }

    .fourth-order-page .edit i,
    .fourth-order-page .cancel i {
        font-size: 14px;
        float: right;
        margin-left: 5px;
    }

    .fourth-order-page .top-panel .taxi-img {
        display: inline-block;
        vertical-align: top;
        width: 30%;
        padding-right: 5px;
        box-sizing: border-box;
    }

    .fourth-order-page .top-panel .taxi-img img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 5px;
    }

    .fourth-order-page .top-panel .taxi-details {
        display: inline-block;
        width: 70%;
        padding-left: 5px;
        box-sizing: border-box;
    }

    .fourth-order-page .top-panel .taxi-details .taxi-details-title {
        margin: 0;
        color: #ffffff;
    }

    .fourth-order-page .top-panel .taxi-details .taxi-details-driver {
        margin: 0;
        font-size: 12px;
        color: #969696;
    }

    .fourth-order-page .top-panel .taxi-details .taxi-details-plat {
        margin: 5px 0;
        font-family: 'Ubuntu', sans-serif;
        color: #ffffff
    }

    .fourth-order-page .top-panel .taxi-details .taxi-details-price {
        color: #ffffff;
        font-size: 1em;
        float: right;
        font-family: 'Ubuntu', sans-serif;
    }

    .fourth-order-page .location-point {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -25px -25px;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }

    .fourth-order-page .location-point i {
        color: #00897B;
        font-size: 48px;
    }

    .fourth-order-page .location-taxi {
        position: absolute;
        top: 45%;
        left: 80%;
        margin: -15px -15px;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
    }

    .fourth-order-page .location-taxi i {
        color: #FEC007;
        font-size: 24px;
    }

    .fourth-order-page .old-price{
        text-decoration: line-through;
    }
</style>
