<template>
    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light" :class="{ 'navbar-dark': darkMode, 'navbar-light': !darkMode }">
        <a class="navbar-brand" href="#">TEKAB</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home <span class="sr-only"></span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/skills">Skills</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/ContactPage">Contact</router-link>
            </li>
          </ul>
  
          <button @click="toggleDarkMode" class="btn btn-outline-info my-2 my-sm-0">
            <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>
          <form class="form-inline my-2 my-lg-0">
            <div class="input-group"></div>
          </form>
        </div>
      </nav>
  
      <router-view />
    </div>
  </template>
  
  <script>
  import '@/assets/css/global-styles.css';
  
  export default {
    data() {
      return {
        darkMode: false,
      };
    },
    methods: {
      toggleDarkMode() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark-mode', this.darkMode);
      },
    },
  };
  </script>
  