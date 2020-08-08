<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/signup">Signup</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/logout">Logout</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #006a71;
  background-color: #ebecf1;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0 auto;
}

button.delete-button {
  margin-left: 5px;
}
.item {
  list-style: none;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #006a71;
}

.text-danger {
  color: red;
  list-style: none;
}
</style>
