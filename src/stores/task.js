import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./user";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
      return this.tasks;
    },

    async deleteOneItem(itemId) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: itemId });
    },

    async completeItem(itemId, isComplete) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ is_complete: isComplete })
        .match({ id: itemId });
    },

    async editItem(itemId, newTitel, newDescription) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ title: newTitel, description: newDescription })
        .match({ id: itemId });
    },
    // New code
    async addTask(title, description) {
      console.log(useUserStore().user.id);
      const { data, error } = await supabase.from("tasks").insert([
        {
          user_id: useUserStore().user.id,
          title: title,
          is_complete: false,
          description: description,
        },
      ]);
    },
  },
});
