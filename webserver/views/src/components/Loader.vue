<template>
  <div class="loader">
    <div id="loading"></div>
    {{msg}}
  </div>
</template>

<style type="text/css">
  .loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.9);
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.1em
  }
  /* Animation */
  @-webkit-keyframes loading {
    to { -webkit-transform: rotate(360deg); }
  }
  @-moz-keyframes loading {
    to { -moz-transform: rotate(360deg); }
  }
  @-ms-keyframes loading {
    to { -ms-transform: rotate(360deg); }
  }
  @keyframes loading {
    to { transform: rotate(360deg); }
  }

  /* Loader (*/
  #loading {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: transparent;

    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #777;
    border-left: 2px solid #777;

    -webkit-animation: loading 1.2s infinite linear;
    -moz-animation: loading 1.2s infinite linear;
    -ms-animation: loading 1.2s infinite linear;
    animation: loading 1.2s infinite linear;

    margin-bottom: 18px;
  }
</style>


<script>
  export default {
    name: 'Loader',
    data() {
      return {
        msg: 'Produit en cours d\'achat',
      };
    },
    mounted() {
    },
  };
</script>
