<template>
  <div id="body2">
    <div class="container">
      <div class="main-log">
        <PersonalRouter :route="route" :buttonText="buttonText" />

        <p v-if="errorMsg" class="">
          {{ errorMsg }}
        </p>
        <form @submit.prevent="signIn" class="form-1">
          <h1>Sign In</h1>
          <label class="" for="">Email</label>
          <input
            class="input-email"
            type="email"
            placeholder="dave@wuTangfinancial.com"
            v-model="email"
            id="email"
          />

          <label class="" for="">Password</label>
          <input
            class=""
            :type="passwordFieldType"
            onpaste="return false"
            placeholder="************"
            v-model="password"
            id="password"
          />
          <span class="">
            <EyeIcon
              :class="[passwordFieldIcon]"
              @click.prevent="hidePassword = !hidePassword"
            />
          </span>

          <div class="clear">
            <button class="" type="submit">Sign In</button>
          </div>
          <p class="">
            <span class="">Don’t have an account? </span>

            <PersonalRouter :route="route" :buttonText="buttonText" />
          </p>
        </form>
      </div>
      <img src="../../public/todo.jpg" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

// Route Variables
const route = "/auth/sign-up";
const buttonText = "Test the Sign Up Route";

// Input Fields
const email = ref("");
const password = ref("");

// Error Message
const errorMsg = ref("");

//Show hide password variables
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
const hidePassword = ref(true);

// Router to push user once SignedIn to the HomeView
const redirect = useRouter();

// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signIn(email.value, password.value);
    // redirects user to the homeView
    redirect.push({ path: "/" });
  } catch (error) {
    // displays error message
    errorMsg.value = `Error: ${error.message}`;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style scoped>
.main-log {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.form-1 {
  margin-left: 120px;
  margin-right: 120px;
  width: 250px;
  height: 800px;
  margin-top: 150px;
}

.container {
  display: flex;
  background-color: rgb(247, 247, 246);
}

.input-email {
  width: 100%;
  padding: 10px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;

  background: #f1f1f1;

  border: double 3px transparent;

  background-image: linear-gradient(white, white),
    linear-gradient(to right, rgb(100, 165, 118), rgb(202, 230, 143));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 999px;

  box-shadow: inset 0 0 0 3px #fff, 0 0 0 4px #fff, 1px -3px 20px #75e292,
    -3px 3px 30px #1f5741;
}

.input-email :focus {
  background-color: #ddd;
  outline: none;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}
button {
  background-color: #2d6a4f;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  margin-left: 5px;
}

#body2 {
  padding-top: 100px;
  margin-bottom: 100px;
}
</style>
