<template>
  <div id="body2">
    <div class="container">
      <div class="main-log">
        <PersonalRouter :route="route" :buttonText="buttonText" />

        <p v-if="errorMsg" class="">
          {{ errorMsg }}
        </p>
        <form @submit.prevent="signIn" class="form-1">
          <div class="login-txt">
            <h3>Sign In to CuctiTask</h3>
            <P>Start organizing your tasks today!</P>
          </div>
          <div class="label-email">
            <label class="label-email1" for="">Email</label>
          </div>
          <input
            class="input-email"
            type="email"
            placeholder="dave@wuTangfinancial.com"
            v-model="email"
            id="email"
          />

          <div class="label-email">
            <label class="label-email1" for="">Password</label>
          </div>
          <input
            class="input-email"
            :type="passwordFieldType"
            onpaste="return false"
            placeholder="************"
            v-model="password"
            id="password"
          />
          <span class="eye-icon">
            <EyeIcon
              :class="[passwordFieldIcon]"
              @click.prevent="hidePassword = !hidePassword"
            />
          </span>

          <div class="clear">
            <button class="" type="submit">Sign In</button>
          </div>
          <p class="log-link">
            <span class="">Don’t have an account? </span>

            <PersonalRouter :route="route" :buttonText="buttonText" />
          </p>
        </form>
      </div>
      <img
        class="task-img"
        src="https://res.cloudinary.com/dlzo8wao1/image/upload/v1665419356/todo-img/todo_feol6b.jpg"
        alt="task.img"
      />
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
const buttonText = "Sign Up";

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
@media only screen and (min-width: 320px) and (max-width: 736px) {
  .task-img {
    width: 180px;
    height: 150px;
  }
  .main-log {
    width: 50px;
    height: 868px;
  }
  .form-1 {
    width: 150px;
    height: 400px;
    margin-top: 150px;
  }
  /* .input-email {
    width: 100%;
  } */
}

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

.login-txt {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
}
.login-txt h3 {
  font-size: 26px;
  margin-bottom: 0;
  color: #2d6a4f;
}
.login-txt p {
  font-size: 14px;
  color: #588157;
}

.label-email {
  padding-bottom: 15px;
}
.label-email1 {
  font-size: 18px;
  font-weight: 300;
}

.input-email {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;

  background: #f1f1f1;

  border: double 2px transparent;

  background-image: linear-gradient(white, white),
    linear-gradient(to right, rgb(100, 165, 118), rgb(202, 230, 143));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 6px;

  box-shadow: inset 0 0 0 2px #fff, 0 0 0 4px #fff, 1px -3px 10px #75e292,
    -3px 3px 20px #216b4d;
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
  /* background: #f1f1f1; */
  border: double 2px transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, rgb(100, 165, 118), rgb(202, 230, 143));
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
  margin: 8px 0 22px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  margin-left: 15px;
  border-radius: 6px;
}
.log-link {
  text-align: center;
  margin-left: 24px;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-weight: 400;
}
#body2 {
  padding-top: 100px;
  margin-bottom: 100px;
}
</style>
