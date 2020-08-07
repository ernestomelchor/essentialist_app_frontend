<template>
  <div class="logout">
    <h1>Thanks for checking out EssentiaLists!</h1>
    <h2>
      <a href="/Login">Log Back In</a>
    </h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function () {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.$router.push("/Logout");
  },
};
</script>