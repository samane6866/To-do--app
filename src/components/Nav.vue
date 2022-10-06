<template>
  <div>
    <div>Nav Component</div>
    <button @click="signOut">iam here</button>
    <div v-if="errorMessageContiner">
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";
import { ref } from "vue";

//PLANTILLA DE FUNCION async
//async function signOut() { }

//variable que contiene el mensaje de error
const errorMessageContainer = ref(false);
// variable para mostrar error
const errorMessage = ref("");

// plantilla de function async tipo expresion
// async function nombreDeMiFuncion() { }

// plantilla de funcion async tipo declaracion
// const nombreDeMiFuncion = async () => { }

// Router to push user once signOut is activated and will push the user back to the signIn page to the HomeView
const redirect = useRouter();

//variable que usaremos apra guardar ese useUserStore que nos habilita el uso de la tienda de una manera mas limpia dentro de este componente :)
const userStore = useUserStore();

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
async function signOut() {
  // caso de uso qsi no hay error y empujamos al signOut bien
  try {
    await userStore.signOut();
    // redirects user to the homeView
    redirect.push({ path: "/auth/login" });
  } catch (error) {
    // caso de uso si existe un error por supabase, supabase se encarga de darnos un tipo de error por la funcion de la tienda de user.js
    errorMessageContainer.value = true;
    errorMessage.value = error.message;
    setTimeout(() => {
      errorMessage.value = null;
      errorMessageContainer.value = false;
    }, 2000);
  }
}

// constant to save a variable that will get the user from store with a computed function imported from vue

// constant that calls user email from the useUSerStore

// constant that saves the user email and cleans out the @client from the user
</script>

<style></style>
