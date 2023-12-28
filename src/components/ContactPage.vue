<template>
  <div>
    <h1>Me Contacter</h1>
    <form @submit.prevent="submitForm" class="contact-form">
      <label for="name">Nom:</label>
      <input type="text" id="name" v-model="form.name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" required />

      <label for="subject">Sujet:</label>
      <input type="text" id="subject" v-model="form.subject" required />

      <label for="message">Message:</label>
      <textarea id="message" v-model="form.message" required></textarea>

      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        await Swal.fire({
          icon: 'success',
          title: 'Formulaire soumis avec succès',
          showConfirmButton: false,
          timer: 1500,
        });
        this.form.name = "";
        this.form.email = "";
        this.form.subject = "";
        this.form.message = "";
      } catch (error) {
        console.error('Error submitting form:', error.message);

        await Swal.fire({
          icon: 'error',
          title: 'Erreur lors de la soumission du formulaire',
          text: error.message,
        });
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  color: var(--text-color); 
}

.contact-form {
  max-width: 400px;
  margin: 0 auto;
}

label {
  display: block;
  margin-top: 10px;
  font-size: 1rem;
  color: var(--text-color); 
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: var(--text-color); 
}

button {
  background-color: #f300b4;
  color: #fafafa;
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #252934;
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