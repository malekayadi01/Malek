<template>
  <div class="wraper">
    <div class="container">
    </div>
    <div class="main-content">
      <div class="section1 p-30" id="Home">
        <div class="sec-title">
          <div class="pg-title">Mon Portfolio</div>
        </div>
        <div class="d-flex-align-center">
          <div class="user-img flex-1"><img src="../assets/profile.jpg" alt="User" class="small-image"></div>
          <div class="user-profile flex-1">
            <div class="pro-details">
              <div class="name">Malek Ben Ayedi</div>
            </div>
            <div class="text">étudiant en 3éme année licence en technologie d'informatique (développement des systèmes d'informatique) <br>à l'institut supérieure des études technologies de Sfax (ISET SFAX), <br> Je suis dynamique, favorisant le travail en groupe pour développer constamment mes compétences et grandir professionnellement</div>
            
            <a href="https://worker-dark-paper-8916.malekaydi.workers.dev/download-pfe" download class="download-button">Télécharger mon CV</a>
            <div class="pr-list">
              <ul>
                <li><i class="fa fa-calendar" aria-hidden="true"></i> 13 October, 2002</li>
                <li><i class="fa fa-phone" aria-hidden="true"></i>+216 22158003</li>
                <li><i class="fa fa-envelope" aria-hidden="true"></i> malekayadi01@gmail.com</li>
                <li><i class="fa fa-map-marker" aria-hidden="true"></i>Sfax,Tunisie</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
};
</script>
<style scoped>
.wraper {
  width: 100%;
  height: 100%;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: row;
}

.left-content {
  width: 300px;
  overflow-y: auto;
  height: 100%;
  border-right: 1px solid rgba(221, 221, 221, 0.38);
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  margin-left: 10px;
  border-left: 1px solid rgba(221, 221, 221, 0.38);
}

.user-profile {
  padding-left: 50px;
}

.user-img img.small-image {
  width: 300px; 
  height: auto;
}

.sm-text {
  letter-spacing: 2.1px;
  font-weight: normal;
  color: var(--text-color); 
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
}

.name {
  font-size: 40px;
  text-transform: uppercase;
  margin: 15px 0px;
  color: var(--text-color); 
  font-family: "Roboto", sans-serif;
  font-weight: 600;
}

.role {
  font-size: 18px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: var(--text-color); 
}

.text {
  font-size: 15px;
  color: var(--text-color); 
}

.pr-list {
  margin: 30px 0px;
}

.pr-list ul li {
  margin-bottom: 8px;
}

.sec-title {
  margin-bottom: 50px;
}

.pg-title {
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 1.8;
  color: var(--text-color); 
}

.pg-sub-title {
  margin-bottom: 10px;
  display: block;
  font-size: 10px;
  text-transform: uppercase;
  color: #999999;
  font-weight: 500;
  letter-spacing: 5px;
}

.download-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 10px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.download-button:hover {
  background-color: #2980b9;
}

:root {
  --text-color-light: #222222;
  --text-color-dark: #ffffff;
}

body.dark-mode {
  --text-color: var(--text-color-dark);
}

body:not(.dark-mode) {
  --text-color: var(--text-color-light);
}
</style>
