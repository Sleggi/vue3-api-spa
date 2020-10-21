import { ref } from "vue";

import API_URL from "../API_URL";

export default function useUsers() {
    const users = ref([]); // internal state
      async function getUsers() { // function to update the state
      const data = await fetch(API_URL);
      const json = await data.json();
      users.value = json;
    }
    return {
        users,
        getUsers,
    }
}