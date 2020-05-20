<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <v-row
        class="flex-column ma-0 pa-0 mr-4"
        style="max-width: 80px; min-width: 80px"
      >
        <div class="d-flex ma-0 pa-0 justify-space-around">
          <v-btn
            x-small
            class="ma-0 pa-0 js-login-button"
            color="primary mx-4"
            fab
            dark
            v-on="on"
          >
            <v-icon dark>mdi-login</v-icon>
          </v-btn>
        </div>
        <p class="text-center my-n1">
          <span class="caption js-login-status">{{ loginStatus }}</span>
        </p>
      </v-row>
    </template>
    <v-card class="js-login-form">
      <v-card-title class="headline">LOGIN</v-card-title>
      <v-card-text>
        <v-form>
          <p class="text-md-left ma-0 ml-4 mt-4 js-loggin-form-status">
            <span class="caption">STATUS: {{ loginStatus }}</span>
          </p>
          <v-container class="px-4 py-0" fluid no-gutter>
            <v-text-field
              v-model="email"
              label="email"
              class="js-loggin-form-email"
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="passowrd"
              type="password"
              class="js-loggin-form-password"
            ></v-text-field>
          </v-container>
        </v-form>

        <div class="d-flex justify-space-around">
          <v-btn @click="handleOnClickSamlLogin" icon>
            <img :src="require('@/assets/img/logo_google.svg')" alt="Google" />
          </v-btn>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn class="js-loggin-form-close-button" text @click="dialog = false"
          >CLOSE</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn
          class="js-loggin-form-logout-button"
          text
          @click="handleOnClickLogout"
          >LOGOUT</v-btn
        >
        <v-btn
          class="js-loggin-form-login-button"
          text
          @click="handleOnClickLogin"
          >LOGIN</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { Auth } from '../../generated/core/Auth';
import { MembersService } from '../../generated/services/MembersService';
import { AuthenticationService } from '../../generated/services/AuthenticationService';

export default Vue.extend({
  name: 'Login',
  components: {},
  data() {
    return {
      dialog: false,
      loginStatus: 'ANONYMOUS',
      email: '',
      password: '',
    };
  },
  methods: {
    handleOnClickLogout(): void {
      AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogout({});
      Auth.setAccessToken('');
      Auth.setRefreshToken('');
      this.loginStatus = 'ANONYMOUS';
    },
    handleOnClickLogin(): void {
      Auth.login({
        requestBody: { email: this.email, password: this.password },
      }).then(memberId => {
        console.log(memberId);
        this.loginStatus = 'LOGGEDIN';
      });
    },
    handleOnClickSamlLogin(e: Event) {
      e.stopPropagation();
      e.preventDefault();

      function createNodeWithAttributes(
        tagName: string,
        attributes: { nm: string; val: string }[] = []
      ) {
        const node = document.createElement(tagName);
        attributes.forEach(({ nm, val }) => node.setAttribute(nm, val));
        return node;
      }
      const form = createNodeWithAttributes('form', [
        { nm: 'id', val: 'google_login_saml' },
        { nm: 'action', val: '/direct/login/saml_login/?spid=1' },
        { nm: 'method', val: 'POST' },
      ]);
      const input = createNodeWithAttributes('input', [
        { nm: 'type', val: 'hidden' },
        { nm: 'name', val: 'api_id' },
        { nm: 'value', val: '1' },
      ]);
      form.appendChild(input);

      (document.querySelector('body') as HTMLBodyElement).appendChild(form);
      (document.querySelector(
        '#google_login_saml'
      ) as HTMLFormElement).submit();
    },
  },
});
</script>
