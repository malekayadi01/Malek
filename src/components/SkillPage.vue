<template>
    <div class="container">
      <h1>Mes Compétences</h1>
  
      <div class="card-deck">
        <div v-for="skill in skills" :key="skill.id" class="card">
          <img :src="skill.image" class="card-img-top skill-image" alt="Skill Image">
          <div class="card-body">
            <h5 class="card-title">{{ skill.name }}</h5>
            <div class="progress">
              <div class="progress-bar" :style="{ width: skill.level + '%' }"></div>
            </div>
            <p class="card-text">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          id: 1,
          name: 'Vue Js',
          level: 90,
        
          image: require('@/assets/logo.png'), 
        },
        {
          id: 2,
          name: 'React Js',
          level: 85,
         
          image: require('@/assets/l3.png'), 
        },
        {
          id: 3,
          name: 'Angular',
          level: 80,
    
          image: require('@/assets/l4.png'), 
        },
        {
          id: 4,
          name: 'Java ',
          level: 75,

          image: require('@/assets/l5.png'), 
        },
        {
          id: 5,
          name: 'Spring Boot',
          level: 70,
    
          image: require('@/assets/l6.png'), 
        }, {
          id: 6,
          name: 'Flutter',
          level: 70,
          image: require('@/assets/f1.jpg'),
        },
        {
          id: 7,
          name: 'Node js',
          level: 70,

          image: require('@/assets/l7.png'), 
        },
        {
          id: 8,
          name: 'Nest js',
          level: 70,
          image: require('@/assets/l8.png'), 
        },
    
      ],
    };
  },
};
</script>

<style scoped>

.card-deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  width: 18rem;
  margin-bottom: 20px;
}

.skill-image {
  width: 100%; 
  height: 100%;
}

.progress {
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: #007bff;
}
</style>