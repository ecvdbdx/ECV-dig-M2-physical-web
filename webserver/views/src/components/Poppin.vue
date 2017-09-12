<template>
  <div class="poppin-user">
    {{msg}}
    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'poppin',
    data() {
      return {
        msg: 'Un utilisateur est déjà en train de commander. Veuillez patienter ! ',
      };
    },
  };
</script>

<style>
  .poppin-user {
    position: fixed;
    padding: 22px;
    background: linear-gradient(190deg, #54D4B7, #00848E);
    bottom: -100%;
    width: 100%;
    left: 0;
    color: #fff;
    transition: all 0.4s ease;
    z-index: 10;
    font-size: 1.2em;
    font-weight: 500;
  }
  .poppin-user.active {
    bottom: 0;
  }
  /*LOADER*/
  .spinner {
    margin: 0 auto;
    padding-top: 18px;
    width: 70px;
    text-align: center;
  }

  .spinner > div {
    width: 10px;
    height: 10px;
    background-color: #fff;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }
</style>
