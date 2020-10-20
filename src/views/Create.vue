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
      <label class="label">Email</label>
      <div class="control">
        <input
          class="input"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
          v-model="email"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Address</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="e.g. Gwenborough, Kulas Light, Apt. 556"
          v-model="address"
        />
      </div>
    </div>
    <button class="button is-success" type="submit">Create User</button>
  </form>
</template>


<script>
import { ref } from "vue";

export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const address = ref("");

    const API_URL = "https://jsonplaceholder.typicode.com/users";
    async function createUser() {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          address: address.value
        })
      });

      if (response.ok) {
        console.log(response);
      } else {
        //show an error
      }
    }
    return {
      createUser,
      name,
      email,
      address
    };
  }
};
</script>
