<template>
  <div id="app">
    <!-- <p>{{ width +' x '+ height }}</p> -->
    <ul class="sidebar-list">

        <ul class="sidebar-sublist">
          <h4 style="margin-left: -20px;">Service Pages</h4>
          <li><router-link to="/web/login">Login</router-link></li>
          <li><router-link to="/web/not-allowed">Not Allowed</router-link></li>
          <li><router-link to="/web/client-dashboard">Client Dashboard</router-link></li>
        </ul>

    </ul>
    <div class="page xiaomi-redmi5 portrait">
      <router-view class="full-width"/>
    </div>
  </div>
</template>

<script>
  export default {

    data(){
      return  {
        width: 0,
        height: 0
      }
    },

    mounted() {

      this.width  = window.innerWidth;
      this.height = window.innerHeight;
    }

  }
</script>

<style>

  .sidebar-list,
  .sidebar-sublist {
    list-style: none;
    padding: 20px;
    box-sizing: border-box;
  }

  .sidebar-list li a {
    text-decoration: none;
    color: #000;
  }

  .sidebar-list li a.router-link-exact-active {
    color: #42b983;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 350px;
  }

  .page {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    border: 7px solid #000;
    border-radius: 10px;
    margin: 20px;
  }

  .page::-webkit-scrollbar {
    width: 0px;
  }

  .page .full-width {
    min-height: 100%;
  }

  .xiaomi-redmi5.portrait {
    width: 360px;
    height: 720px;
    overflow: auto;
  }

  .xiaomi-redmi5.landscape {
    width: 720px;
    height: 360px;
    overflow: auto;
  }

</style>
