<template>
  <form @submit.prevent="createUser">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="e.g Alex Smith"
          v-model="name"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Username</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="e.g. Antonette"
          v-model="username"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          class="input"
          type="email"
          placeholder="e.g. alexsmith@gmail.com "
          v-model="email"
        />
      </div>
    </div>
    <button class="button is-success" type="submit">Create User</button>
  </form>
</template>


<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
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
      createUser,
      name,
      email,
      username
    };
  }
};
</script>
