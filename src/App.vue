<template>
  <div id="app">
    <div id="side-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#side-nav {
  position: fixed;
  top: 20vh;
  left: 0px;
  display: flex;
  flex-direction: column;
  padding: 30px;
}
#side-nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  border: 1px solid black;
  width: 80px;
  background-color: lightblue;
  box-shadow: 2px 2px #888888;
}
#side-nav a:nth-child(even) {
  border-top: none;
}
#side-nav a:first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
#side-nav a:last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
