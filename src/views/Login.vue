<template>
  <div class="login">

    <h3 class="login-title">
      Lorem ipsum dolor
    </h3>

    <p class="login-subtitle">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error animi delectus ducimus unde exercitationem eum nemo.
    </p>

    <div class="holds-wrapper" v-if="phone">

      <div class="hold">
        + 373
      </div>

      <div class="hold">
        68 505 635
      </div>

    </div>

    <div class="holds-wrapper" v-if="!phone">

      <div class="hold">
        1&nbsp;2&nbsp;3&nbsp;4&nbsp;5&nbsp;6
      </div>

    </div>

    <div class="numbers-position">

      <div class="numbers-wrapper">

        <div class="number">1</div>
        <div class="number">2</div>
        <div class="number">3</div>
        <br>
        <div class="number">4</div>
        <div class="number">5</div>
        <div class="number">6</div>
        <br>
        <div class="number">7</div>
        <div class="number">8</div>
        <div class="number">9</div>
        <br>
        <!-- <div class="number" style="color: #969696">&larr;</div> -->
        <div class="number" style="color: #969696">
          <i class="material-icons">undo</i>
        </div>
        <div class="number">0</div>
        <div class="number" style="color: #00897B" v-if="phone">
          <i class="material-icons">forward</i>
        </div>
        <div class="number" style="color: #00897B" v-if="!phone">
          <i class="material-icons">done</i>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {

  data: () => ({
    phone: false,
    Width: window.innerWidth,
    Height: window.innerHeight,
  })

};
</script>

<style>

  .login {
    padding: 12px;
    background: #282828;
    color: #fff;
  }

  .login-title,
  .login-subtitle {
    text-align: center;
    margin: 60px 0 0
  }

  .holds-wrapper,
  .numbers-wrapper {
    display: table;
    margin: 65px auto 0;
  }

  .hold {
    background: rgba(255, 255, 255, 0.2);
    display: inline-block;
    margin: 5px;
    padding: 7px 15px;
    font-size: 26px
  }

  .numbers-position {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 10px
  }

  .number {
    display: inline-block;
    text-align: center;
    margin: 10px;
    padding: 15px 30px;
    font-size: 26px;
    min-width: 30px;
  }

</style>
