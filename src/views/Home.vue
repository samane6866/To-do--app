<template>
  <div class="try">
    <Nav />
    <div class="main-titel">
      <h1 class="animate__animated animate__backInDown">
        Manage all your daily Task
      </h1>
      <div class="first-pic">
        <img
          class="pic-task"
          src="https://res.cloudinary.com/dlzo8wao1/image/upload/v1665589480/todo-img/list_cvw1ua.png"
          alt=""
        />
      </div>
      <!-- <h3>Dont forget to add...</h3> -->
    </div>

    <!-- <div class="cards">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="https://res.cloudinary.com/dlzo8wao1/image/upload/v1665419359/todo-img/tripp_btcw0t.jpg "
              alt="trip"
              style="width: 300px; height: 300px"
            />
          </div>
          <div class="flip-card-back">
            <h1>My Trip to Thailand</h1>
            <ul class="li-item">
              <li>
                <p>sunglass</p>
                <button @click="add('Sunglasses')">✅</button>
              </li>
              <li>
                <p>camara</p>
                <button @click="add('camara')">✅</button>
              </li>
              <li>
                <p>bikini</p>
                <button @click="add('bikini')">✅</button>
              </li>
              <li>
                <p>book</p>
                <button @click="add('book')">✅</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="https://res.cloudinary.com/dlzo8wao1/image/upload/v1665419344/todo-img/shopping_yfqxzv.jpg"
              alt="shoping"
              style="width: 300px; height: 300px"
            />
          </div>
          <div class="flip-card-back">
            <h1>My shopping basket</h1>
            <ul class="li-item">
              <li>Vegtables</li>
              <li>Bread</li>
              <li>Shampoo</li>
              <li>Orange juice</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="https://res.cloudinary.com/dlzo8wao1/image/upload/v1665419326/todo-img/fitness4_kgmhnd.jpg"
              alt="gym"
              style="width: 300px; height: 300px"
            />
          </div>
          <div class="flip-card-back">
            <h1>Gym</h1>
            <ul class="li-item">
              <li>Yoga class</li>
              <li>Buy dambels</li>
              <li>Fitness class</li>
              <li>Spa</li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->

    <div class="container3">
      <div class="text-container">
        <h2>A new great day.</h2>
        <h6>Become focused and organized with CuctiTask</h6>
        <h4 class="animate__animated animate__backInLeft">Add a new task</h4>
      </div>
      <div class="input-field">
        <span>
          <input
            id="name"
            class="task-1"
            placeholder="Add a Task titel"
            type="text"
            v-model="title"
          />
          <span></span>
        </span>

        <span>
          <input
            id="name"
            class="task-2"
            placeholder="Add a Task description"
            type="text"
            v-model="description"
          />
          <span></span>
        </span>

        <button @click="addNewTask" class="Btn-block" type="submit">Add</button>
      </div>
      <!-- <ul class="todolist">
        <li class="list">
          <input type="checkbox" />
          <span class="taskitem">buy bread</span>
          <i class="trash"></i>
        </li>
        <li class="list">
          <input type="checkbox" />
          <span class="task">going to gym</span>
          <i class="trash"></i>
        </li>
      </ul> -->
      <div class="task-container">
        <section class="taskList">
          <TaskItem
            v-for="task in taskList"
            :key="task.id"
            :item="task"
            @refreshList="getTask"
          />
        </section>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
import Nav from "../components/Nav.vue";
import { useTaskStore } from "../stores/task";
import { ref } from "vue";
import TaskItem from "../components/TaskItem.vue";

const title = ref("");
const description = ref("");
const taskList = ref([]);
const prueba = ref("");

async function getTask() {
  taskList.value = await useTaskStore().fetchTasks();
  prueba.value = taskList.value[4];
}
getTask();

async function addNewTask() {
  await useTaskStore().addTask(title.value, description.value);
  getTask();
}
//  la funcion de cards
async function add(string) {
  await useTaskStore().addTask(string, "");
  getTask();
}
async function deleteOneItem(itemId) {
  const { data, error } = await supabase
    .from("items")
    .delete()
    .match({ id: itemId });
}

//  deleteTaskList(index);
// {
//   this.taskList.splice(index, 1);
// }
</script>

<style scoped>
/* .container3 {
  position: relative;
  width: 580px;
  /* width: 100%; */
/* background-color: #bfebcb;
  box-shadow: 0 5px 15px rgb(119, 165, 152);
  border-radius: 8px;
  margin-top: 200px;
  margin-right: auto;
  margin-left: auto;
  /* padding: 25px; */
/* border: 10px solid transparent;
  padding: 15px;
  border-image: url(/cucti1.jpg) 15% round; */
/* background-image: url(/cucti1.jpg);
  background-position: right bottom, left top;
  background-repeat: no-repeat, repeat;
  background-size: cover; */

/* display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px; */

/* .container3 .input-field {
  /* position: relative; */
/* height: 64px;
  width: 100%; */

.try {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  /* margin-left: -290px; */
}

.text-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  text-align: center;
  /* margin-bottom: 50px; */
}
.text-container h2 {
  font-weight: 600;
}
.text-container h4 {
  font-weight: 400;
  margin-top: -20px;
}
.text-container h6 {
  font-weight: 400;
  margin-top: -25px;
}
.pic-task {
  width: 500px;
}
font .input-field {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-around;
}
.input-field {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  /* margin-top: 100px; */
}
.task-2 {
  width: 600px;
  height: 30px;
  margin-top: 20px;
  background-color: rgb(229 241 205);
  border-radius: 5px;
  padding: 5px;
  box-shadow: inset 0 0 0 0 #fff, 0 0 0 2px #fff, 1px -3px 5px #9ca861,
    -3px 3px 10px #5ea260;
  border: none;
}
.task-1 {
  width: 600px;
  height: 30px;
  margin-top: 20px;
  background-color: rgb(204 221 171);
  border-radius: 5px;
  padding: 5px;
  box-shadow: inset 0 0 0 0 #fff, 0 0 0 2px #fff, 1px -3px 5px #9ca861,
    -3px 3px 10px #5ea260;
  border: none;
}
.Btn-block {
  background-color: #2d6a4f;
  color: white;
  padding: 12px;
  margin: 25px 0 35px 0;
  border: none;
  cursor: pointer;
  width: 300px;
  opacity: 0.9;
  margin-left: 12px;
  border-radius: 5px;
}
.container3 .todolist {
  margin-top: 20px;
}
.todolist {
  list-style: none;
}
.todolist .list :hover {
  background-color: #588157;
}
.todolist .list {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: rgb(226, 236, 225);
  font-size: 18px;
  transition: 0.2s;
}

.in .background-blue {
  background-color: blue;
}
.main-titel {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.main-titel h1 {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
  font-size: 65px;
  font: weight 800px;
  color: #2d6a4f;
}

.main-titel h3 {
  font-size: 35px;
  font-weight: lighter;
  color: #588157;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
}
/* .main-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
} */

/* .cards {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
/* backface-visibility: hidden; */
/* } / */

/* .flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #e8e8e4;
  color: #588157;
  transform: rotateY(180deg);
}
.li-item {
  text-align: center;
  font-size: 20px;
}

.taskList {
  display: flex;
  flex-wrap: wrap;
} */

.task-list {
  background-color: rgb(248, 248, 240);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  max-width: 100%;

  align-content: center;
  margin-right: auto;
  margin-left: auto;
  padding: 25px;
  position: relative;
  width: 100%;
  border: 10px solid transparent;
  padding: 15px;
  background-color: #bfebcb;
  box-shadow: 0 5px 15px rgb(119, 165, 152);
  border-radius: 8px;
}
.task-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media only screen and (min-width: 320px) and (max-width: 736px) {
  .try {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    /* padding-left: 272px; */
  }
  .main-titel h1 {
    font-size: 40px;
    text-align: center;
  }
  .pic-task {
    width: 250px;
  }

  .text-container h2 {
    font-size: 30px;
  }
  .text-container h4 {
    font-size: 15px;
  }
  .text-container h6 {
    font-size: 15px;
    margin-top: 0.5px;
  }

  .task-2 {
    width: 250px;
  }
  .task-1 {
    width: 250px;
  }

  .Btn-block {
    width: 100px;
  }
  .container3 {
    padding-left: 30px;
  }
}

/* .input {
  padding: 10px 20px 10px 10px;
  width: 100%;
  height: 100%;
  border: double 3px transparent;
  border-radius: 6px;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, green, rgb(249, 249, 206));
  background-origin: border-box;
  background-clip: padding-box, border-box;
} */
</style>

<!--
**Hints**
1. ref() is used here!
2. (NewTask, TaskItem, Footer, Nav) components are used here!
3. Tasks are going to be contained in an array here!
4. An async function is needed to get all of the tasks stored within the supabase database, this async function's body will contain the tasks value which be use to store the fetchTasks method which lives inside the userTaskStore. This function needs to be called within the setUp script in order to run within the first instance of this component lifecycle.
5. NewTask component will receive a customEvent on this instance of the homeView that will fire the add-to-do function
6. add-to-do function will receive 2 params/arguments that will tak a taskTitle and a taskDescription and the body of this async function will call the taskStore that calls the addTask function from the store that pushes the info of the task to the backEnd. This is possible by passing the 2 param/arguments that will be passed by the user from the inputs within the NewTask Component.
7. TaskItem component will loop through the tasks-array that will print an individual instance of an individual TaskItem component. TaskItem will receive 3 customEvents on this instance of the homeView. 1 customEvent for toggling the task to show either a text or an icon to display if the task is completed or not completed. 1 customEevent for removing/deleting the task out of the array. 1 customEvent for editing the task title and description. This function needs to call the function mentioned on hint4.
7.1-customEvent will fire an async function that will take in 1 param/argument. On the body of this function the param/argument will be used to define 2 constants. 1 of this constants will take care of setting the boolean value to the opposite of the value that checks wether this task is_complete. 1 of this constants will take of calling the id of this specific task in order to call the right id.
7.2-customEvent will fire an asynf function that will take in 1 param/argument. This async function's body will be used to call the deleteTaskmethod which will take the param/argument's id in order to delete the task. This function needs to call the function mentioned on hint4.
7.3-customEvent will fire an async function that will take in 1 param/argument. this async function's body will be used to take in 2 constants. 1 constant will take in the param/argument newValue. 1 constant will be used to get the param/argument oldValue id. These 2 constants will be sent to the backend via the useTaskStore which holds an editTask method. This function needs to call the function mentioned on hint4.
-->
