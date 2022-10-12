<template>
  <div class="test-3">
    <p class="nav-icon">CuctiTask🌵</p>

    <button class="log-nav" @click="signOut">Log-out</button>
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

<style scoped>
@media only screen and (min-width: 320px) and (max-width: 736px) {
  .nav-icon {
    font-size: 13px;
    margin-top: 0px;
  }
  p::first-letter {
    font-size: 100%;
  }
  .log-nav {
    padding: 5px 5px 10px 4px;
    border-radius: 9999px;
    font-size: 8px;
    font-weight: bold;
  }
}

.test-3 {
  display: flex;
  flex-direction: row;
  align-content: flex-end;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.nav-icon {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
  font-size: 25px;
  font-weight: bolder;

  text-shadow: 3px 8px 5px #0000007a;
}

p::first-letter {
  font-size: 200%;
  color: #4caf50;
}

.log-nav {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
