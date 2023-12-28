<template>
  <div class="home-container">
    <h1>Bienvenue sur Mon Portfolio</h1><br>
    <div class="intro-section">
      <img src="../assets/malek.jpg" alt="Votre Nom" class="profile-image" />
      <p>Malek Ben Ayedi <br> <br>étudiant en 3éme année licence en technologie d'informatique (développement des systèmes d'informatique) à l'institut supérieure des études technologies de Sfax (ISET SFAX), Je suis dynamique, favorisant le travail en groupe pour développer constamment mes compétences et grandir professionnellement.
</p>
    </div>
    <div class="explore-section">
      <h2>Explorez mon Portfolio</h2>
      <router-link to="/projects" class="nav-link">Voir mes Projets</router-link>
      <router-link to="/skills" class="nav-link">Découvrir mes Compétences</router-link>
      <font-awesome-icon icon="fa-solid fa-user-secret" />
      <router-link to="/ContactPage" class="nav-link">Me Contacter</router-link>
      <a href="https://worker-dark-paper-8916.malekaydi.workers.dev/download-pfe" download class="nav-link">Télécharger mon CV</a>
    </div>

    
  </div>

</template>

<style scoped>


.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #252934;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.intro-section {
  margin-bottom: 20px;
}

.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #6366F1;
}

p {
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.2rem;
  color: #6366F1;
  margin-top: 10px;
}

.explore-section {
  margin-top: 20px;
}

h2 {
  font-size: 1.8rem;
  color: #252934;
  margin-bottom: 10px;
}

.nav-link {
  display: inline-block;
  margin: 5px;
  padding: 10px 20px;
  text-decoration: none;
  color: #fafafa;
  background-color: #6366F1;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #252934;
}
</style>

