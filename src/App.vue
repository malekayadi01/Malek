<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home <span class="sr-only"></span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ContactPage">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">Projects</router-link>
          </li>
        </ul>

        <!-- Dark Mode Toggle Button -->
        <button @click="toggleDarkMode" class="btn btn-outline-info my-2 my-sm-0">
          <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>

        <!-- Search Form -->
        <form class="form-inline my-2 my-lg-0">
          <div class="input-group">
            <input class="form-control mr-sm-2" type="search" placeholder="Search">
            <div class="input-group-append">
              <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </div>
          </div>
        </form>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      darkMode: false,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://worker-jolly-sun-19b7.malekayadi01.workers.dev/');
        const data = await response.text();
        this.message = data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark-mode', this.darkMode);
    },
  },
};
</script>

<style>
/* Global styles */
:root {
  --primary-bg-color: #fff;  /* Light mode background color */
  --secondary-bg-color: #252934;  /* Dark mode background color */
  --text-color: #252934;  /* Text color for both light and dark mode */
}

body {
  background-color: var(--primary-bg-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}

/* Dark mode styles */
body.dark-mode {
  background-color: var(--secondary-bg-color);
  color: #fff;  /* Text color for dark mode */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 50px; /* Add margin at the bottom for spacing */
}

.input-group {
  margin-right: 10px; /* Adjust as needed */
}

.navbar-nav {
  margin-right: 20px; /* Add margin between the links and the dark mode button */
}
.navbar-nav .nav-item {
  margin-right: 15px; /* Add margin between the nav items */
}
</style>
