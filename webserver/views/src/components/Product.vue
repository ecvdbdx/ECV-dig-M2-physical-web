<template>
  <div class="product col-md-4">
    <h2>{{product.name}}</h2>
    <div class="product-image">
      <img alt="Bootstrap Image Preview" :src="`${settings.WEBSERVER_ADDRESS}:${settings.WEBSERVER_API_PORT}/${product.image_url}`" @click.prevent="sendProduct()" />
    </div>
  </div>
</template>

<script>
  import * as settings from '../../../../settings';

  export default {
    name: 'Product',
    props: ['product'],
    data() {
      return {
        loading: false,
        settings,
      };
    },
    methods: {
      sendProduct() {
        this.loading = true;
        this.$socket.emit('product', this.product.machine_id);
      },
    },
    socket: {
      events: {
        done() {
          this.loading = false;
        },
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
