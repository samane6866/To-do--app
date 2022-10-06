import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "../supabase";

export const useUserStore = defineStore("user", {
  state: () => ({
    // donde pones nuestros datos que conocemos comos refs
    //let user =ref(null) es lo mismo que aca abajo
    user: null,
  }),
  // aca es donde vamos a plasmar nuestras funciones/metodos
  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    async signIn(email, password) {
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    },
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    },
    // Sign Out Function
    // reference from supabase
    // const { error } = await supabase.auth.signOut()
    // funcion de plantilla para yo usar =
    //async nombreDeMiFUncion() { }
    async signOut() {
      const { error } = await supabase.auth.signOut();
      console.log(error);
      if (error) throw error;
    },

    persist: {
      enabled: true,
      strategies: [
        {
          key: "user",
          storage: localStorage,
        },
      ],
    },
  },
});
