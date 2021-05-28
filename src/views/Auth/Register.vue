<template>
  <div class="border col-6 m-auto p-5 rounded">
    <h1 class="text-center">Register</h1>
    <!-- Email -->
    <b-form-group
      class="mb-3"
      label="Email address:"
    >
      <b-form-input
        v-model="email"
        type="email"
        placeholder="Enter email"
        required
      ></b-form-input>
    </b-form-group>
    <!-- Password -->
    <b-form-group
      class="mb-3"
      label="Email address:"
    >
      <b-form-input
        v-model="password"
        type="password"
        placeholder="Enter password"
        required
      ></b-form-input>
    </b-form-group>

    <b-alert v-if="error" show variant="danger">
      <span v-html="error">
        {{ error }}
      </span>
    </b-alert>

    <b-button @click="register" block variant="primary">Register</b-button>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async register() {
      let data = {
        email: this.email,
        password: this.password
      };

      try {
        const response = await AuthService.register(data);
        console.log(response.data);
      } catch (err) {
        this.error = err.response.data.error;
      }
    }
  }
}
</script>

<style>

</style>