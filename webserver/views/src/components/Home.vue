<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12" style="text-align: center; padding-bottom: 80px;">
        <div class="row">
          <product v-for="product in products" :product="product" :key="product.id"></product>
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

  export default {
    name: 'Home',
    data() {
      return {
        products: [],
      };
    },
    mounted() {
      fetch('http://192.168.0.209:3000/api/products')
        .then(response => response.json())
        .then((data) => {
          this.products = data;
        });
    },
    components: {
      Product,
    },
  };
</script>
