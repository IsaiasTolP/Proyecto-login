<template>
  <AuthProvider>
    <div id="app">
      <MyNavbar />
      <router-view />
    </div>
  </AuthProvider>
</template>

<script setup lang="ts">
import MyNavbar from './components/MyNavbar.vue'; // Importamos el Navbar
import AuthProvider from './components/AuthProvider.vue'; // Importamos AuthProvider
</script>

<style scoped></style>
