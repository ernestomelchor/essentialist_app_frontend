<template>
  <div class="home">
    <h1>Your Lists</h1>
    <div>
      <div>
        Enter Name of New List:
        <input type="text" v-model="newListName" />
        <button v-on:click="createList()">Create A New List</button>
      </div>
    </div>
    <div v-for="list in lists">
      <ul>{{ list.name }}</ul>
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
      newListName: ""
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