<template>
  <nav>
    <ul>
      <li v-for="category in categories"
          @click="setCurrentCategory(category)"
          :class="{active: category === currentCategory}"
      >{{category}}</li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation',
    data() {
      return {
      };
    },
    props: ['categories'],
    methods: {
      setCurrentCategory(category) {
        this.$parent.currentCategory = category;
      },
    },
    computed: {
      currentCategory() {
        return this.$parent.currentCategory;
      },
    },
  };
</script>

<style>
  nav ul {
    display: flex;
    padding: 18px 0;
  }
  nav ul li {
    padding-bottom: 8px;
    display: flex;
    list-style: none;
    flex: 1;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  nav ul li::before {
    content: '';
    width: 0%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transition: all 0.4s ease;
    background: linear-gradient(190deg, #54D4B7, #00848E);
  }
  nav ul li.active::before {
    width: 50%;
  }
</style>
