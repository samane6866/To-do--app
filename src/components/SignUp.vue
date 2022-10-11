<template>
  <div id="body">
    <div class="container">
      <div>
        <div class="main-log">
          <PersonalRouter :route="route" :buttonText="buttonText" />

          <form @submit.prevent="signUp" class="form-1">
            <h1>Sign Up</h1>
            <p>Please fill in this form to creat an account.</p>
            <hr />

            <label class="" for="email">Email</label>
            <input
              class="input-email"
              type="email"
              placeholder="Enter Email"
              v-model="email"
              id="email"
            />

            <label class="" for="psw">Password</label>
            <input
              class=""
              type="password"
              placeholder="************"
              v-model="password"
              id="password"
            />

            <label class="" for="psw-confirm">confirmPassword</label>
            <input
              class=""
              type="password"
              placeholder="confirm Password"
              v-model="confirmPassword"
              id="confirmPassword"
            />
            <label>
              <input
                type="checkbox"
                checked="checked"
                name="remmber"
              />Rembember me
            </label>
            <p>
              By creating an account you agree to our
              <a href="#" style="color: #2d6a4f">Terms & Privacy</a>.
            </p>

            <div class="clear">
              <button class="signupbtn" type="submit">Sign Up</button>
            </div>
            <p class="">
              <span class="">Have an account? </span>
            </p>
          </form>
        </div>
      </div>
      <div class="test2">
        <img
          class="main-img"
          src="https://res.cloudinary.com/dlzo8wao1/image/upload/v1665419342/todo-img/log1_voiuyu.webp"
          alt="todolist"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import PersonalRouter from "./PersonalRouter.vue";
import { useUserStore } from "../stores/user";
// Route Variables
const route = "/auth/login";
const buttonText = "Test the Sign In Route";
// Input Fields
const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const errorMsg = ref(null);
// Error Message
// Show hide password variable
// Show hide confrimPassword variable
// Router to push user once SignedUp to Log In
const redirect = useRouter();
// function to SignUp user to supaBase with a timeOut() method for showing the error
async function signUp() {
  if (password.value === confirmPassword.value) {
    try {
      await useUserStore().signUp(email.value, password.value);
      // if (error) throw error;
      redirect.push({ path: "/auth" });
    } catch (error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;
  }
  errorMsg.value = "Passwords do not match";
  setTimeout(() => {
    errorMsg.value = null;
  }, 5000);
}
</script>

// Input Fields // Error Message // Show hide password variable // Show hide
confrimPassword variable // Router to push user once SignedUp to Log In // Arrow
function to SignUp user to supaBase with a timeOut() method for showing the
error

<style scoped>
.main-log {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.form-1 {
  margin-left: 150px;
  width: 350px;
}
.form-1 h1 {
  color: #2d6a4f;
}
.container {
  display: flex;
  background-color: rgb(247, 247, 246);
}
.input-email {
  width: 100%;
  padding: 25px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;

  background: #f1f1f1;
}

.input-email :focus {
  background-color: #ddd;
  outline: none;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 25px;
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
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
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
#body {
  margin-top: 100px;
  margin-bottom: 100px;

  width: 700px;
}
.main-img {
  margin-left: 300px;
}
</style>
