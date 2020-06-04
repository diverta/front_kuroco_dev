<template>
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
            :disabled="!uploader"
            @click="() => $refs.uploader.click()"
            >
                <v-icon dark>mdi-upload</v-icon>
            </v-btn>
            <input type="file" hidden ref="uploader" @change="(e) => onChangeInputFile(e)" />
        </div>
    </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { UploaderFactory } from '../../generated/core/Uploader';
import { Auth } from '../../generated/core/Auth';

export default Vue.extend({
    name: 'Uploader',
    data() {
        return {
            uploader: null as any,
        };
    },
    methods: {
        onChangeInputFile(e: Event) {
            const newFile = (e.target as any).files[0] as File;
            console.log(newFile);
            const alert = (type: 'ok' | 'ng', msg = '') => window.alert(`${type.toUpperCase()}: ${msg}`)
            this.uploader
                .upload(newFile)
                .then((res: any) => alert('ok', res))
                .catch((err: any) => alert('ng', err));
        },
    },
    async mounted () {
        this.uploader = await UploaderFactory.create({})
    }
});
</script>
