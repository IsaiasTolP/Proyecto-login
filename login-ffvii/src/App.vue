<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/login">Iniciar Sesión</router-link></li>
        <li><router-link to="/signup">Registrarse</router-link></li>
      </ul>
    </nav>
    <router-view />
    <!-- Aquí se renderizan las rutas -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
nav {
  background-color: #f8f9fa;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 15px;
}
nav ul li {
  display: inline;
}
nav ul li a {
  text-decoration: none;
  color: #007bff;
}
nav ul li a.router-link-active {
  font-weight: bold;
  color: #0056b3;
}
</style>
