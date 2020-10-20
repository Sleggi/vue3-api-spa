<template>
  <UserForm :user="user" :submitForm="createUser" />
</template>


<script>
import UserForm from "../components/UserForm";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    UserForm
  },
  setup() {
    const router = useRouter();
    const name = ref("");
    const username = ref("");
    const email = ref("");

    const API_URL = "http://localhost:3000/users";
    async function createUser() {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          name: name.value,
          username: username.value,
          email: email.value
        })
      });

      const json = await response.json();
      console.log(json);

      if (response.ok) {
        router.push({
          name: "Home"
        });
      } else {
        //show an error
      }
    }
    return {
      user: {
        name,
        email,
        username
      },
      createUser
    };
  }
};
</script>
