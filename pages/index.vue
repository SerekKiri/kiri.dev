<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-light mb-4">Kacper Potyrała</h1>
          <h3 class="font-weight-light headline mb-4">Find me on</h3>
          <v-row justify="center">
            <v-btn
              text
              icon
              large
              class="mr-2"
              href="https://github.com/SerekKiri"
            >
              <font-awesome-icon class="fa-3x" :icon="faGithub" />
            </v-btn>
            <v-btn
              text
              icon
              large
              class="ml-2"
              href="https://www.linkedin.com/in/kiri/"
            >
              <font-awesome-icon class="fa-3x" size="10" :icon="faLinkedin" />
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default {
  computed: {
    faLinkedin() {
      return faLinkedin;
    },
    faGithub() {
      return faGithub;
    }
  }
};
</script>
