<template>
  <div>
    <p>STATUS: {{ loginStatus }}</p>
    <p>
      id:
      <input type="email" v-model="email" />
    </p>
    <p>
      pw:
      <input type="password" v-model="password" />
    </p>
    <p>
      <button @click="handleClickLogin">LOGIN</button>
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
