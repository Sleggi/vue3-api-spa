<template>
  <form @submit.prevent="submitForm">
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
import { toRefs } from "vue";
export default {
  props: {
    user: Object,
    submitForm: Function
  },
  setup(props) {
    const { name, email, username } = toRefs(props.user);

    return {
      name,
      email,
      username
    };
  }
};
</script>
