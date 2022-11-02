<template>
  <div :class="[darkMode === true ? 'dark' : '']">
    <main class="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <Header />
      <router-view />
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      darkMode: true,
    };
  },
  methods: {
    updateThemeMode() {
      this.darkMode = !this.darkMode;
    },
  },
};
</script>
