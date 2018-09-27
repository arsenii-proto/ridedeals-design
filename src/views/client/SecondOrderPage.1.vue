<template>
    <div class="second-order-page">

        <div class="edit">
            <i class="material-icons">edit</i>
            Edit
        </div>
        
        <div class="cancel">
            Cancel
            <i class="material-icons">delete</i>
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

    .second-order-page .edit,
    .second-order-page .cancel {
        background: #969696;
        padding: 10px 15px;
        border-radius: 7px;
        box-shadow: 0px 0px 40px -5px #282828;
        position: absolute;
        top: 5vh;
        display: table;
        font-size: 14px;
        padding: 5px 7px;
    }

    .second-order-page .edit {
        left: 3vw;
    }

    .second-order-page .edit i {
        font-size: 14px;
        float: left;
        margin-right: 5px;
    }

    .second-order-page .cancel {
        right: 3vw;
    }

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
