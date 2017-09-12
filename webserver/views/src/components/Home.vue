<template>
  <div class="container-fluid">
    <navigation :categories="categories"></navigation>
    <div class="row">
      <div class="col-md-12" style="text-align: center; padding-bottom: 80px;">
        <div class="row">
          <product
            v-for="product in products"
            :product="product"
            :isBusy="isBusy"
            :key="product.id"
            v-show="product.category === currentCategory"
            :class="{show: product.category === currentCategory}">
          </product>
        </div>
      </div>
    </div>
    <poppin :class="{active: showPoppin}"></poppin>
  </div>
</template>

<script>
  import axios from 'axios';
  import Product from './Product';
  import Poppin from './Poppin';
  import * as settings from '../../../../settings';
  import * as events from '../../../../socket-events';
  import Navigation from './Navigation';

  export default {
    name: 'Home',
    data() {
      return {
        products: [],
        isBusy: false,
        processing: false,
        categories: [],
        currentCategory: null,
      };
    },
    methods: {
      filterCategories() {
        this.products.forEach((product) => {
          const test = this.categories.find(category => category === product.category);
          if (typeof test === 'undefined') {
            this.categories.push(product.category);
          }
          this.currentCategory = this.categories[0];
        });
      },
    },
    mounted() {
      axios.get(`${settings.URL_API}/api/products`)
        .then((response) => {
          this.products = response.data;
          this.filterCategories();
        });
    },
    socket: {
      events: {
        busy() {
          console.log(`Receive new event: ${events.BUSY}`);
          this.isBusy = true;
        },
        done() {
          console.log(`Receive new event: ${events.DONE}`);
          this.isBusy = false;
        },
        processing(processing) {
          console.log(`Receive new event: ${events.PROCESSING}`);
          this.processing = processing;
        },
      },
    },
    computed: {
      showPoppin() {
        return !this.processing && this.isBusy;
      },
    },
    components: {
      Product,
      Poppin,
      Navigation,
    },
  };
</script>
