<template>
  <div class="lists-show">
    <h2>{{ list.name }}</h2>
    <div>
      <div>
        <ul>
          <li class="text-danger" v-for="error in errors" :key="error.id">{{ error }}</li>
        </ul>
        <input type="text" v-model="newItemName" />
        <button v-on:click="createItem()">Add a New Item</button>
      </div>
    </div>
    <div v-for="item in list.items" :key="item.id">
      <ul>
        <li class="item">
          {{ item.description }}
          <button class="delete-button" v-on:click="destroyItem()">Delete</button>
        </li>
      </ul>
    </div>
    <router-link to="/lists">Back to all lists</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      list: {},
      items: [],
      newItemName: "",
      errors: [],
    };
  },
  created: function () {
    axios.get("/api/lists/" + this.$route.params.id).then((response) => {
      console.log("lists show", response);
      this.list = response.data;
    });
  },
  methods: {
    createItem: function () {
      var params = {
        description: this.newItemName,
        list_id: this.$route.params.id,
      };
      axios
        .post("/api/items", params)
        .then((response) => {
          this.items.push(response.data);
          this.newItemName = "";
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<style>
</style>