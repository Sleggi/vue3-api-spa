<template>
  <div>
    <div class="card my-3" v-for="user in users" :key="user.id">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ user.name }}</p>
            <p class="subtitle is-6">{{ user.username }}</p>
          </div>
        </div>

        <div class="content">
          {{ user.email }}
        </div>
        <button @click="removeUser(user.id)" class="button is-danger ml-2">
          Delete User
        </button>
        <button @click="editUser(user.id)" class="button is-primary ml-2">
          Edit User
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const users = ref([]);
    const API_URL = "http://localhost:3000/users";
    async function getUsers() {
      const data = await fetch(API_URL);
      const json = await data.json();
      users.value = json;
    }

    async function removeUser(id) {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });
      getUsers();
    }

    function editUser(id) {
      router.push({
        name: "Update",
        params: {
          id: id
        }
      });
    }

    getUsers();
    return {
      users,
      removeUser,
      editUser
    };
  }
};
</script>