<template>
  <Panel title="Register" col="6" class="mx-auto">
    <div class="m-3">
      <!-- Email -->
      <b-form-group
        class="mb-3"
        label="Email address:"
        autocomplete="off"
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
        label="Password:"
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

      <div class="col-md-6 mx-auto">
        <b-button @click="register" block variant="primary">Register</b-button>
      </div>
    </div>

  </Panel>
</template>

<script>
import AuthService from '@/services/AuthService';
import Panel from '@/components/Panel';

export default {
  components: {
    Panel,
  },
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
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
      } catch (err) {
        this.error = err.response.data.error;
      }
    }
  }
}
</script>

<style>

</style>