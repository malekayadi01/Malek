<!-- src/components/Contact.vue -->

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
    submitForm() {
      // Utiliser un Worker de Cloudflare ou un service tel que Formspree pour envoyer le formulaire.
      console.log("Formulaire soumis :", this.form);
    },
  },
};
</script>

<style scoped>
/* Styles spécifiques à la section Contact */

h1 {
  font-size: 2.5rem;
  color: #252934;
}

.contact-form {
  max-width: 400px;
  margin: 0 auto;
}

label {
  display: block;
  margin-top: 10px;
  font-size: 1rem;
  color: #252934;
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
</style>
