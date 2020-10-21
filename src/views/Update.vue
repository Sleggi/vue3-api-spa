<template>
  <UserForm :user="user" :submitForm="updateUser">
    <template #button>
      Update
    </template>
  </UserForm>
</template>


<script>
import UserForm from "../components/UserForm";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    UserForm
  },
  setup() {
    const router = useRouter();
    const {
      params: { id }
    } = useRoute();
    const user = ref({
      name: "",
      username: "",
      email: ""
    });

    const API_URL = "http://localhost:3000/users";
    async function updateUser() {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          name: user.value.name,
          username: user.value.username,
          email: user.value.email
        })
      });

      if (response.ok) {
        router.push({
          name: "Home"
        });
      } else {
        //show an error
      }
    }

    async function getCurrentUser() {
      const response = await fetch(`${API_URL}/${id}`);
      const json = await response.json();
      user.value.name = json.name;
      user.value.email = json.email;
      user.value.username = json.username;
    }
    getCurrentUser();

    return {
      user,
      updateUser
    };
  }
};
</script>
