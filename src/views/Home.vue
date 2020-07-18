<template>
  <div class="home">
    <h1>Your EssentiaLists</h1>
    <div>
      <div>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <input type="text" v-model="newListName" />
        <button v-on:click="createList()">Create A New List</button>
      </div>
    </div>
    <div v-for="list in lists">
      <router-link v-bind:to="`/lists/${list.id}`">{{ list.name }}</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      lists: [],
      newListName: "",
      errors: []
    };
  },
  created: function() {
    axios.get("/api/lists").then(response => {
      console.log("lists:", response);
      this.lists = response.data;
    });
  },
  methods: {
    createList: function() {
      var params = { name: this.newListName };
      axios
        .post("/api/lists", params)
        .then(response => {
          this.lists.push(response.data);
          this.newListName = "";
          window.location.reload();
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>