<template>
  <div class="container">
    <div class="footer">
      <div class="icon">
        <!-- <img
          class="cucti-icon"
          src="https://res.cloudinary.com/dlzo8wao1/image/upload/v1665419337/todo-img/images_v5zha9.png"
          alt="cactus"
        /> -->
        <h2>CuctiTask🌵</h2>

        <hr />
      </div>
      <p>© 2022 TaskApp. All rights reserved.Built with ❤️ by Samaneh.</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@media only screen and (min-width: 320px) and (max-width: 736px) {
  .footer {
    width: 360px;
    height: 150px;
    background-color: rgb(247, 247, 246);
  }
  .icon {
    display: block;
    text-align: center;
  }
  .icon h2 {
    font-size: 16px;
  }

  .icon p {
    font-size: 16px;
    font-weight: 300;
  }
  hr {
    color: #efffef;
  }
}

.container {
  margin-top: 600px;
}
.footer {
  width: 1360px;
  height: 200px;
  margin: auto;
  background-color: #f4f3ee;
}
.footer p {
  text-align: center;
}
.icon {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
}
.icon h2 {
  font-size: 25px;
  /* color: #2d6a4f; */
  font-weight: bold;
  text-shadow: 3px 8px 5px #0000007a;
}
h2::first-letter {
  font-size: 200%;
  color: #4caf50;
}
</style>
