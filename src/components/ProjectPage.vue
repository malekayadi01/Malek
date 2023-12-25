<!-- src/components/Projects.vue -->

<template>
  <div class="container">
    <h1>Mes Projets</h1>
    <div class="row">
      <div v-for="project in projects" :key="project.id" class="col-md-4 mb-4">
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
          title: "Projet 1",
          description: "Description du projet 1.",
          link: "lien_vers_github_projet_1",
          image: "https://mdbootstrap.com/img/Photos/Others/images/43.webp",
        },
        {
          id: 2,
          title: "Projet 2",
          description: "Description du projet 2.",
          link: "lien_vers_github_projet_2",
          image: "URL_de_l_image_2",
        },
        {
          id: 3,
          title: "Projet 3",
          description: "Description du projet 3.",
          link: "lien_vers_github_projet_3",
          image: "URL_de_l_image_3",
        },
        {
          id: 4,
          title: "Projet 4",
          description: "Description du projet 4.",
          link: "lien_vers_github_projet_4",
          image: "URL_de_l_image_4",
        },
        {
          id: 5,
          title: "Projet 5",
          description: "Description du projet 5.",
          link: "lien_vers_github_projet_5",
          image: "URL_de_l_image_5",
        },
        {
          id: 6,
          title: "Projet 6",
          description: "Description du projet 6.",
          link: "lien_vers_github_projet_6",
          image: "URL_de_l_image_6",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Styles spécifiques à la section Projets */
/* Vous pouvez ajouter des styles personnalisés pour vos cartes ici */
.card {
  margin-bottom: 20px; /* Ajustez l'espacement entre les cartes */
}

.container {
  margin-bottom: 20px; /* Ajustez l'espacement en bas du conteneur */
}
</style>
