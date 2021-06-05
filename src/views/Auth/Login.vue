<template>
  <Panel title="Login" col="6" class="mx-auto">
    <div class="m-3">
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
        <b-button @click="login" block variant="primary">Login</b-button>
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
    async login() {
      let data = {
        email: this.email,
        password: this.password
      };

      try {
        const response = await AuthService.login(data);
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.$router.push({ name: 'Songs'});
      } catch (err) {
        this.error = err.response.data.error;
      }
    }
  }
}
</script>

<style>

</style>
