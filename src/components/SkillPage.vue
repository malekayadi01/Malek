<template>

    <div class="cards-wrapper">
      <div v-for="skill in skills" :key="skill.id" class="card-grid-space">
        <div class="card" :style="{ '--bg-img': 'url(' + skill.image + ')' }">
        </div>
          <div>
            <h1>{{ skill.name }}</h1>
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
        
          image: require('@/assets/VueJs.png'), 
        },
        {
          id: 2,
          name: 'React Js',
          level: 85,
         
          image: require('@/assets/react.png'), 
        },
        {
          id: 3,
          name: 'Angular',
          level: 80,
    
          image: require('@/assets/angular.png'), 
        },
        {
          id: 4,
          name: 'Java ',
          level: 75,

          image: require('@/assets/java.png'), 
        },
        {
          id: 5,
          name: 'Spring Boot',
          level: 70,
    
          image: require('@/assets/spring.png'), 
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

          image: require('@/assets/node.png'), 
        },
        {
          id: 8,
          name: 'Nest js',
          level: 70,
          image: require('@/assets/nest.png'), 
        },
    
      ],
    };
  },
};
</script>
<style scoped>


:root {
  --transition-time: 0.5s;
  --bg-img: none;
  --text-color-light: #222222;
  --text-color-dark: #ffffff;
}
h1 {
  color: var(--text-color); 
}

body.dark-mode {
  --text-color: var(--text-color-dark);
}

body:not(.dark-mode) {
  --text-color: var(--text-color-light);
}
.cards-wrapper {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4rem;
  padding: 4rem;
  margin: 0 auto;
  width: max-content;
}

.card {
  
  color: var(--text-color); 
  background-image: var(--bg-img);
  height: 20em;
  width: 15em;
  font-size: 1.5em;
  border-radius: 1em;
  padding: 1em;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

}




</style>

