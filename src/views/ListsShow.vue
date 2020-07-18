<template>
  <div class="lists-show">
    <h2>{{ list.name }}</h2>
    <div v-for="item in items"></div>
    <p>Items: {{ list.items }}</p>

    <router-link to="/home">Back to all lists</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      list: {},
      items: []
    };
  },
  created: function() {
    axios.get("/api/lists/" + this.$route.params.id).then(response => {
      console.log("lists show", response);
      this.list = response.data;
    });
  },
  methods: {}
};
</script>

<style>
</style>