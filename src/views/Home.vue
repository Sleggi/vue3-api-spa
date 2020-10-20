<template>
  <div class="home">
    <router-link :to="{ name: 'Create' }" class="button is-success mx-5 my-5">
      Add User
    </router-link>

    <Users />
  </div>
</template>


<script>
import Users from "../components/Users";

export default {
  components: {
    Users
  }
};
</script>