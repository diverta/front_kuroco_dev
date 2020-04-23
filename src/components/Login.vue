<template>
  <div>
    <p class="js-loggin-form-status">STATUS: {{ loginStatus }}</p>
    <p>
      id:
      <input class="js-loggin-form-email" type="email" v-model="email" />
    </p>
    <p>
      pw:
      <input class="js-loggin-form-password" type="password" v-model="password" />
    </p>
    <p>
      <button class="js-loggin-form-submit-button" @click="handleClickLogin">LOGIN</button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Auth } from 'kuroco';

export default Vue.extend({
  name: 'Login',
  components: {},
  data() {
    return {
      loginStatus: 'ANONYMOUS',
      email: '',
      password: '',
    };
  },
  methods: {
    handleClickLogin(): void {
      Auth.login({ email: this.email, password: this.password }).then(
        () => (this.loginStatus = 'LOGGEDIN')
      );
    },
  },
});
</script>
