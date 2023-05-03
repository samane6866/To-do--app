<template>
  <div class="test4">
    <div>
      <!-- <div class="left-side">
        <div class="input-layout">
          <label class="" for="email">Email</label>
          <input
            class=""
            type="email"
            placeholder="Enter Email"
            v-model="email"
            id="email"
          />
        </div>
      </div> -->
      <div class="test2">
        <img
          class="main-img"
          src="https://res.cloudinary.com/dlzo8wao1/image/upload/v1665519269/todo-img/try3_f6nxo7.png"
        />
      </div>
    </div>
    <div id="">
      <div class="">
        <div>
          <div class="main-log">
            <!-- <PersonalRouter :route="route" :buttonText="buttonText" /> -->
            <div class="txt-container">
              <h1>Register to CuctiTask</h1>
              <h3>Orgnize your life,finally.</h3>
              <!-- <h5>Become focused and organized with CuctiTask!</h5> -->
            </div>

            <form @submit.prevent="signUp" class="form-1">
              <h1>Sign Up</h1>
              <p>Please fill in this form to creat an account.</p>
              <hr />

              <label class="label-email1" for="email">Email</label>
              <input
                class="input-email"
                type="email"
                placeholder="Enter Email"
                v-model="email"
                id="email"
              />

              <label class="label-email1" for="psw">Password</label>
              <input
                class=""
                type="password"
                placeholder="************"
                v-model="password"
                id="password"
              />

              <label class="label-email1" for="psw-confirm"
                >Confirm Password</label
              >
              <input
                class=""
                type="password"
                placeholder="confirm Password"
                v-model="confirmPassword"
                id="confirmPassword"
              />

              <div class="clear">
                <button class="signupbtn" type="submit">Sign Up</button>
              </div>
              <p class="route-login">
                <span class="">Have an account? </span>
                <PersonalRouter :route="route" :buttonText="buttonText" />
              </p>
            </form>
          </div>
        </div>
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
const buttonText = "Sign In";
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
  console.log(password.value, confirmPassword);
  if (password.value === confirmPassword.value) {
    console.log("hola");
    try {
      await useUserStore().signUp(email.value, password.value);
      // if (error) throw error;
      redirect.push({ path: "/auth/login" });
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
/* new component */

.input-layout {
  display: flex;
  flex-direction: column;
}

.test4 {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  /* padding-left: 50px; */
}
.main-img {
  width: 500px;
}

.main-log {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.txt-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  /* align-items: center; */
  margin-bottom: 30px;
  margin-top: -60px;
  margin-left: 50px;
}
.txt-container h1 {
  font-size: 35px;
  color: #29553e;
  margin-top: 100px;
  /* margin-left: 50px; */
}
.txt-container h3 {
  font-size: 23px;
  margin-top: -10px;
  color: #647a6f;
  margin-left: 45px;
  font-weight: 600;
}

.txt-container h5 {
  margin-bottom: 50px;
  margin-top: -8px;
  color: #588157;
  font-weight: 400;
  font-size: 12px;
  margin-left: 50px;
}

.form-1 {
  width: 350px;
  margin-left: 50px;
  margin-right: 120px;
  /* margin-top: 10px; */
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
  padding: 10px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  border-radius: 3px;
  box-shadow: inset 0 0 0 2px #fff, 0 0 0 4px #fff, 1px -3px 5px #9ca861,
    -3px 3px 10px #5ea260;
}

.input-email :focus {
  background-color: #ddd;
  outline: none;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  border-radius: 3px;

  box-shadow: inset 0 0 0 2px #fff, 0 0 0 4px #fff, 1px -3px 5px #9ca861,
    -3px 3px 10px #5ea260;
}
input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}
hr {
  border: 1px solid #92b98c;
  margin-bottom: 25px;
}
button {
  background-color: #2d6a4f;
  width: 100%;
  color: white;
  padding: 10px 20px;
  margin: 8px 0 22px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  margin-left: 12px;
  border-radius: 6px;
}
.label-email1 {
  font-size: 15px;
  font-weight: 300;
}
.route-login {
  text-align: center;
}
#body {
  margin-top: 100px;
  margin-bottom: 20px;
}
.main-img {
  margin-left: 50px;
  height: 100%;
}

@media only screen and (min-width: 320px) and (max-width: 736px) {
  #body {
    margin-top: 50px;
  }

  .main-log {
    width: 95px;
    height: 750px;
  }

  .form-1 {
    width: 250px;
    margin-left: -190px;
  }
  .txt-container {
    margin-left: 50px;
    text-align: center;
  }
  /* .txt-container h1 {
    margin-left: -10px;
    margin-top: -39px;
  } */

  .txt-container h1 {
    margin-left: -70px;
    font-size: 25px;
  }
  .txt-container h3 {
    margin-left: -65px;
    font-weight: 400;
  }

  .main-img {
    width: 250px;
    height: 50%;
    margin-left: -80px;
    padding-bottom: 540px;
  }
  .test2 {
    /* margin-bottom: 600px; */
    margin-left: 50px;
  }

  /* .input-email {
    /* width: 50%; */
}
.container {
  margin-left: -75px;
}
#body {
  width: 150px;
}
</style>
