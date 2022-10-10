<template>
  <div class="container">
    <div class="footer">
      <div class="icon">
        <img
          class="cucti-icon"
          src="https://res.cloudinary.com/dlzo8wao1/image/upload/v1665419337/todo-img/images_v5zha9.png"
          alt="cactus"
        />
        <h2>Cucti Task</h2>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  margin-top: 600px;
}
.footer {
  width: 1360px;
  height: 200px;
  margin: auto;
  background-color: #f4f3ee;
}
.icon {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
}
.icon h2 {
  font-family: sans-serif;
  font-size: 45px;
  color: #2d6a4f;
  font-weight: bold;
}
</style>
