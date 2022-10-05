<template>
  <div>
    <div class="main-titel">
      <h1>Manage all your daily Task</h1>
      <h3>Dont forget to add...</h3>
    </div>

    <div class="cards">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="tripp.jpg"
              alt="trip"
              style="width: 300px; height: 300px"
            />
          </div>
          <div class="flip-card-back">
            <h1>My Trip to Thailand</h1>
            <ul class="li-item">
              <li>sunglass</li>
              <li>camara</li>
              <li>bikini</li>
              <li>and...</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="../../public/shopping.jpg"
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
              src="fitness4.jpg"
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
    </div>

    <div class="main-input">
      <p>
        <span class="input">
          <input
            id="name"
            class="task-T"
            placeholder="Add a Task titel"
            type="text"
          />
          <span></span>
        </span>
      </p>

      <p>
        <span class="input">
          <input
            id="name"
            class="task-T"
            placeholder="Add a Task titel"
            type="text"
          />
          <span></span>
        </span>
      </p>

      <button class="Btn-block" type="submit">Add</button>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
</script>

<style scoped>
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
.main-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
}

.cards {
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
  backface-visibility: hidden;
}

.flip-card-front {
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

.input {
  padding: 0.5rem;
  border: double 3px transparent;
  border-radius: 6px;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, green, rgb(249, 249, 206));
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
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
