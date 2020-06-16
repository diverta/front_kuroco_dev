<template>
  <v-dialog v-model="dialog" persistent max-width="440">
    <template v-slot:activator="{ on }">
      <v-row
        class="flex-column ma-0 pa-0 mr-4"
        style="max-width: 80px; min-width: 80px"
      >
        <div class="d-flex ma-0 pa-0 justify-space-around">
          <v-btn
            x-small
            class="ma-0 pa-0 js-upload-button"
            color="primary mx-4"
            fab
            dark
            v-on="on"
            :disabled="!uploader"
          >
            <v-icon dark>mdi-upload</v-icon>
          </v-btn>
          <input type="file" hidden ref="uploader" @change="(e) => onChangeInputFile(e)" />
        </div>
      </v-row>
    </template>
    <v-card class="js-upload-form">
      <v-card-title class="headline">FILE UPLOAD</v-card-title>
      <v-card-text>
        <v-form>
          <v-container class="px-4 py-0" fluid no-gutter>
            <v-text-field
              v-model="uploadedFile.fileId"
              label="file_id"
              class="js-upload-form-file-id"
            ></v-text-field>
            <v-text-field
              v-model="uploadedFile.fileNm"
              label="file_nm"
              class="js-upload-form-file-nm"
            ></v-text-field>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="js-upload-form-select-button"
          text
          @click="() => $refs.uploader.click()"
          >SELECT FILE</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn
          class="js-upload-form-close-button"
          text
          @click="dialog = false"
          >CLOSE</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapState } from 'vuex';
import { UploaderFactory } from '../../generated/core/Uploader';
import { Auth } from '../../generated/core/Auth';

export default Vue.extend({
  name: 'Uploader',
  watch: {
    loggedIn(loggedIn) {
      loggedIn ? this.mountUploader() : this.uploader = null;
    }
  },
  data() {
    return {
      uploader: null as any,
      dialog: false,
      uploadedFile: {
        fileNm: '',
        fileId: '',
      },
    };
  },
  computed: {
    ...mapState([
      'loggedIn',
    ])
  },
  methods: {
    onChangeInputFile(e: Event) {
      const newFile = (e.target as any).files[0] as File;
      const alert = (type: 'ok' | 'ng', msg = '') => window.alert(`${type.toUpperCase()}: ${msg}`)
      if(!newFile) return;
      this.uploader
        .upload(newFile)
        .then((res: any) => {
          this.uploadedFile = {
            fileNm: newFile.name,
            fileId: res.file_id
          };
          this.dialog = true;
        })
        .catch((err: any) => {
          alert('ng', err)
        });
    },
    async mountUploader() {
      try {
        this.uploader = await UploaderFactory.create({})
      } catch(e) {
        console.error('could not creat uploader for:', e);
      }
    }
  },
});
</script>
