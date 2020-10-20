<template>
  <div>
    <div class="card" v-for="user in users" :key="user.id">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ user.name }}</p>
            <p class="subtitle is-6">{{ user.email }}</p>
          </div>
        </div>

        <div class="content">
          {{ user.address.city }}, {{ user.address.street }},
          {{ user.address.suite }},
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";

export default {
  setup() {
    const users = ref([]);
    const API_URL = "https://jsonplaceholder.typicode.com/users";
    async function getUsers() {
      const data = await fetch(API_URL);
      const json = await data.json();
      users.value = json;
    }

    getUsers();
    return {
      users
    };
  }
};
</script>