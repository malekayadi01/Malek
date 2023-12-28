<template>
  <div class="container">
    <h1 class="title">Mes Projets</h1>
    <div class="search-bar">
      <input v-model="searchTerm" @input="performSearch" placeholder="Rechercher par titre..." />
    </div>
    <div class="row">
      <div v-for="project in filteredProjects" :key="project.id" class="col-md-4 mb-4">
        <div class="card">
          <img class="card-img-top" :src="project.image" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.link" target="_blank" class="btn btn-primary">Voir le Projet</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "PixiAuth",
          description: "Stage de Perfectionnement",
          link: "https://www.piximind.com/fr",
          image: require('@/assets/logo1.png'), 
        },
        {
          id: 2,
          title: "Cv",
          description: "Application mobile Porfloi",
          link: "https://github.com/malekayadi01/projectcv---Copie",
          image: require('@/assets/cv.png'), 
        },
        {
          id: 3,
          title: "Gestion facture et reglement",
          description: "Application web angluar et spring boot ",
          link: "https://github.com/AlphaDrk/SOA",
          image: require('@/assets/fac.png'), 
        },
        {
          id: 4,
          title: "ArtyProd",
          description: "Application pour une agence de design",
          link: "https://github.com/malekayadi01/artyprod",
          image: require('@/assets/design.jpg'), 
        },
        {
          id: 5,
          title: "E-Commerce",
          description: "Application web E-commerce ",
          image: require('@/assets/e-commerce.png'), 
        },
      ],
      searchTerm: "",
    };
  },
  computed: {
    filteredProjects() {
      const searchTerm = this.searchTerm.toLowerCase();
      return this.projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm)
      );
    },
  },
  methods: {
    async performSearch() {
      try {
        const response = await fetch(`https://worker-withered-violet-c102.malekaydi.workers.dev/search?term=${this.searchTerm}`);
        const data = await response.json();
        this.projects = data.projects;
      } catch (error) {
        console.error('Error performing search:', error.message);
      }
    },
  },
};
</script>


<style scoped>

.card {
  margin-top: 20px;
}

.container {
  margin-top: 20px;
}
.title{
  color: #0DCAF0;
}
</style>
