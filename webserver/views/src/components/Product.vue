<template>
  <div class="product col-md-4">
    <h2>{{product.name}}</h2>
    <div class="product-image">
      <img alt="Bootstrap Image Preview" :src="`http://192.168.0.209:3000/${product.image_url}`" @click.prevent="sendProduct()" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Product',
    props: ['product'],
    methods: {
      sendProduct() {
        this.$socket.emit('product', this.product.machine_id);
      },
    },
  };
</script>

<style>
  img {
    max-width: 100%;
    max-height: 100%;
  }

  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 250px;
    cursor: pointer;
  }
</style>
