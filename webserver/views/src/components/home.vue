<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <nav class="navbar navbar-default" role="navigation">
            <div class="navbar-header">

              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
               <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
             </button> <a class="navbar-brand" href="#">Reboot-camp</a>
           </div>

           <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
            </ul>
            <form class="navbar-form navbar-right" role="search">
              <div class="form-group">
                <input type="text" class="form-control" />
              </div> 
              <button type="submit" class="btn btn-default">
                Submit
              </button>
            </form>
          </div>

        </nav>
        <div class="jumbotron">
          <h2>
            Hello, world!
          </h2>
          <p>
            This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12" style="text-align: center; padding-bottom: 80px;">
        <form action="POST" id="select-products">
          <div class=“form-group”>
          <div class="col-md-4">
        <h2>
          Bière GUINNESS
        </h2>
      
        <label for="biere">
          <input type="checkbox" name="biere" value="bière" v-model="products">
          <img alt="Bootstrap Image Preview" src="https://i.pinimg.com/736x/f9/80/ca/f980cae03fb863e26506db32bb53cf8b--people-photography-life-photography.jpg" />
        </label>
      </div>
          </div>
          <div class="col-md-4">
              <h2>
                Bouteille d'eau
              </h2>
              <img alt="Bootstrap Image Preview" src="http://www.welcomeoffice.com/WO_Products_Images/xlarge/569808.jpg" />
              <input type="checkbox" name="eau" value="eau" v-model="products">
              <label for="eau" class="hidden">Eau</label>
            </div>
          <div class="col-md-4">
        <h2>
          Barres de chocolat
        </h2>
        <img alt="Bootstrap Image Preview" src="https://fridg-front.s3.amazonaws.com/media/CACHE/images/products/mars_T8XRkgE/6b8a63296049aa86e5d4ae97235a20be.jpg" />
        <input type="checkbox" name="barre" value="barre" v-model="products">
            <label for="barre" class="hidden">Barre</label>
      </div>
          
          <div>
            <button type="submit" @click.prevent="sendProducts()">Commander</button>
          </div>
        </form>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12" style="text-align: center; padding-bottom: 80px;">
        <button id="on-off-button" @click="sendTest()">allumer/éteindre</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        products: [],
      };
    },
    methods: {
      sendTest() {
        this.$socket.emit('test', 'Hello pi !');
      },
      sendProducts() {
        this.$socket.emit('products', this.products);
      },
    },
  };
</script>