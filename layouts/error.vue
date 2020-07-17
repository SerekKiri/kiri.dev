<template>
  <v-app>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1
              class="display-1 font-weight-light"
              v-if="error.statusCode === 404"
            >{{ pageNotFound }}</h1>
            <h1 v-else>{{ otherError }}</h1>
            <NuxtLink class="title" style="text-decoration: none;" to="/">Home page</NuxtLink>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred"
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
