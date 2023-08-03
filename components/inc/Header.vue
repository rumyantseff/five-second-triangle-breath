<template>
    <v-app-bar class="elevation-0 mx-0 my-2 rounded-xl white align-center">
        <img class="" src="/images/logo.png" width="32">
        <v-toolbar-title class="toolbar mx-2"><h4>Breath Triangle</h4></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu v-model="languageMenu" offset-y>
            <template #activator="{ on, attrs }">
                <v-btn class="text-capitalize pentanary primary--text" small fab outlined text v-bind="attrs" v-on="on">
                  <v-icon>mdi-translate</v-icon>
                </v-btn>
            </template>
            <v-list >
                <v-list-item-group v-for="(lang, index) in langs" :key="index" @click="handleMenuItemClick(lang)">
                    <v-list-item class="primary--text" :to="switchLocalePath(lang.option)">{{ lang.title }}</v-list-item>
                </v-list-item-group>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
export default {
  name: 'IndexLayout',
  data () {
    return {
      langs: [
        { title: 'Русский', option: 'ru' },
        { title: 'Slovenský', option: 'sk' },
        { title: 'English', option: 'en' },
        { title: 'Deutsch', option: 'de' },
      ],
      activeLang: 'Русский',
      dialog: false,
      languageMenu: false,
    }
  },

  methods: {
    handleMenuItemClick (lang) {
      this.activeLang = lang.title;
    },
  },
}
</script>

<style>
.toolbar {
    background: linear-gradient(135deg, #746c7c 0%, #7289ab 100%) !important;
    background-clip: text !important;
    -webkit-background-clip: text !important;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent !important;    
    -moz-text-fill-color: transparent;
}
</style>