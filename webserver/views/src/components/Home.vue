<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12" style="text-align: center; padding-bottom: 80px;">
        <div class="row">
          <product v-for="product in products" :product="product" :isBusy="isBusy" :key="product.id"></product>
        </div>
      </div>
    </div>
  </div>
</template>

<style type="text/css">
/*input[type=checkbox] {
  display: none;
}*/
</style>


<script>
  import Product from '../components/Product';
  import * as settings from '../../../../settings';

  export default {
    name: 'Home',
    data() {
      return {
        products: [],
        isBusy: false,
      };
    },
    mounted() {
      fetch(`${settings.WEBSERVER_ADDRESS}:${settings.WEBSERVER_API_PORT}/api/products`)
        .then(response => response.json())
        .then((data) => {
          this.products = data;
        });
    },
    socket: {
      events: {
        busy() {
          this.isBusy = true;
        },
        done() {
          this.isBusy = false;
        },
      },
    },
    components: {
      Product,
    },
  };
</script>
