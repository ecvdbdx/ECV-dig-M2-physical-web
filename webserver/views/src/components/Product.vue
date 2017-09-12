<template>
  <div class="product col-md-4">
    <div class="product-container" :class="{disabled: isOutOfStock || isBusy}" @click.prevent="sendProduct()">
      <div class="product-details">
        <h2>{{product.name}}</h2>
        <span>Restants: <span>{{product.current_stock}}</span></span>
      </div>
      <div class="product-image">
        <img alt="Bootstrap Image Preview"
             :src="`${settings.URL_API}/${product.image_url}`"/>
      </div>
    </div>
    <loader v-if="loading"></loader>
  </div>
</template>

<script>
  import * as settings from '../../../../settings';
  import * as events from '../../../../socket-events';
  import Loader from './Loader';

  export default {
    name: 'Product',
    props: ['product', 'isBusy'],
    data() {
      return {
        loading: false,
        settings,
      };
    },
    methods: {
      sendProduct() {
        this.loading = true;
        this.$socket.emit(events.PRODUCT, this.product.machine_id);
      },
    },
    socket: {
      events: {
        done() {
          this.loading = false;
        },
        update_stock(machineId) {
          if (machineId === this.product.machine_id) {
            this.product.current_stock -= 1;
          }
        },
      },
    },
    computed: {
      isOutOfStock() {
        return this.product.current_stock < 1;
      },
      showPoppin() {
        return this.isBusy && !this.loading;
      },
    },
    components: {
      Loader,
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
    align-items: center;
  }

  .product-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 150px;
    cursor: pointer;
    width: 50%;
  }

  .product.col-md-4 {
    display: flex;
    transition: all 0.4s ease;
    padding: 15px;
    margin: 0 15px 18px 15px;
    border: 1px solid rgba(0, 0, 0, 0.09);
    border-radius: 3px;
    -webkit-box-shadow: 9px 9px 28px -10px rgba(0, 0, 0, 0.17);
    -moz-box-shadow: 9px 9px 28px -10px rgba(0, 0, 0, 0.17);
    box-shadow: 9px 9px 28px -10px rgba(0, 0, 0, 0.17);
  }

  .product-container {
    display: flex;
    width: 100%;
  }

  .product-container.disabled {
    pointer-events: none;
    opacity: 0.2;
  }

  .product.col-md-4 h2 {
    font-size: 1.6em;
    margin: 0 0 8px 0;
  }

  .product-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
  }

  .product-details span {
    font-size: 1.3em;
  }

  .product-details span > span {
    font-weight: 600;
    color: #00BFA5;
  }
</style>
