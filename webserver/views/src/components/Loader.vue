<template>
  <div class="loader">
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
    background-color: rgba(0,0,0,0.8);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
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
