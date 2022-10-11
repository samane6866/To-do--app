<template>
  <div class="border-green">
    <h1>{{ item.title }}</h1>
    <p>{{ item.description }}</p>

    <div class="edit-form" v-if="showForm">
      <input v-model="newtitle" type="text" class="form1" />
      <input v-model="newdescription" type="text" class="form2" />
      <button @click="editItem"></button>
    </div>

    <div class="todo-btn">
      <button class="Btn c-btn" @click="completeItem()">
        {{ item.is_complete ? "⌛" : "✅" }}
      </button>

      <img
        class="Btn edit-btn"
        @click="showForm = !showForm"
        src="https://res.cloudinary.com/dlzo8wao1/image/upload/v1665419316/todo-img/edit_s4ac74.png "
        alt=""
      />

      <img
        class="Btn delete-icon"
        @click="deleteTaskItem()"
        src="https://res.cloudinary.com/dlzo8wao1/image/upload/v1665419314/todo-img/delete.png"
      />
      <p v-if="item.is_complete">
        <img
          src="https://res.cloudinary.com/dlzo8wao1/image/upload/v1665419345/todo-img/tasks_lzxmic.png"
          alt=""
        />You did it
      </p>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "../stores/task";
import { ref, watch } from "vue";
const props = defineProps(["item"]);

const newtitle = ref(props.item.title);
const newdescription = ref(props.item.description);
const showForm = ref(false);

// const emit = defineEmits([
//   ENTER-EMITS-HERE
// ])
const emit = defineEmits(["refreshList"]);

async function deleteTaskItem() {
  // Destrúyete a ti mismo
  await useTaskStore().deleteOneItem(props.item.id);
  emit("refreshList");
}

async function completeItem() {
  await useTaskStore().completeItem(props.item.id, !props.item.is_complete);
  emit("refreshList");
}

// async function editItem() {
//   taskList.value = await useTaskStore().fetchTasks();
// }
async function editItem() {
  await useTaskStore().editItem(
    props.item.id,
    newtitle.value,
    newdescription.value
  );
  emit("refreshList");
  showForm.value = false;
}

// const props = defineProps(["ENTER-PROP-HERE"]);

// const props = defineProps([]);
</script>

<style>
.border-green {
  border: 1px
    radial-gradient(circle at 56%, rgb(43, 47, 4) 0%, rgb(217, 244, 154) 99%);
  border: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: auto;
  margin: 20px;
  padding: 20px;
  border-radius: 50px;
  background: radial-gradient(circle at 56%, #dfffd6 0%, #2d6a4f 99%);
  gap: 0.5rem;
}

.Btn {
  cursor: pointer;
  width: 70px;
}
.c-btn {
  width: 35px;
  height: 25px;
  background-color: #dde5b6;
}
.todo-btn {
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  padding-left: 50px;
  align-items: center;
  margin-right: 50px;
}
.delete-icon {
  width: 25px;
  height: 25px;
}

.edit-btn {
  width: 38px;
}

.edit-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
}

.form1 {
  width: 200px;
  height: 50px;
  margin-bottom: 5px;
  border-radius: 10px;
}
.form2 {
  width: 200px;
  height: 50px;
  margin-bottom: 5px;
  background-color: #b2e8d4;
  border-radius: 10px;
}
</style>

<!-- 
**Hints**
1. ref() or reactive() can be used here to store the following, think if you want to store them either individually or like an object, up to you.
2. Data properties need here are the following: a boolean to store a false**Important variable, a string to store an error, a string to store the value of the task that the user can edit, an initial false boolean to hide the inputFIeld used to edit the new task detail or details[this is in reference of the task title and the task description].
3. Store the custom emit events that will be used to call the functions of the homeView for editing, deleting and toggling the status[completed, not complted] of the taskItem.
4. Function to handle the error with the data properties used to control the error and the the boolean controlling the boolean empty variable.
5. Function to handle the edit dialogue where the inputField is displayed and the string used to store the value of the inputField will be used here to save the value as a prop on this function.
6. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will Aquí irán las tareas

HEllo :0

samane

completeModifyDelete
HEllo :0

samane

completeModifyDelete
HEllo :0

samane

completeModifyDelete
HEllo :0

samane

completeModifyDelete
HEllo :0

samane

completeModifyDelete
be send via the prop to the parent component. This function can control the toggle completion of the task on the homeview.
7. Function to edit the task information that you decided that the user can edit. This function's body takes in a conditional that first checks if the value of the task [either title and description or just title] is empty which if true it runs the function used to handle the error on hint4. Else, the conditional sets the first mentioned boolean data property on hint2 back to its inital boolean value to hide the error message and repeat the same for the data property mentioned 4th on hint2; a constant that stores an object that holds the oldValue from the prop item and the value of the task coming from the data property mentioned 3rd on hint2; a custom event emit() that takes 2 parameters a name for the custom event and the value from the object used on this part of the conditional and lastly this part of the conditional sets the value of input field to an empty string to clear it from the ui. 
8. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the removal of  the task on the homeview.
-->
