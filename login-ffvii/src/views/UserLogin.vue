<template>
  <div class="login-form">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input
          id="email"
          type="email"
          v-model="email"
          maxlength="100"
          required
          @input="validateEmail"
          :class="{ 'is-invalid': emailError }"
        />
        <span v-if="emailError" class="error">{{ emailError }}</span>
      </div>

      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input
          id="password"
          type="password"
          v-model="password"
          maxlength="20"
          required
          @input="validatePassword"
          :class="{ 'is-invalid': passwordError }"
        />
        <span v-if="passwordError" class="error">{{ passwordError }}</span>
      </div>

      <button type="submit" :disabled="!isFormValid">Iniciar Sesión</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const email = ref('');
const password = ref('');

const emailError = ref('');
const passwordError = ref('');

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = emailRegex.test(email.value)
    ? ''
    : 'Formato de correo no válido';
};

const validatePassword = () => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
  passwordError.value = passwordRegex.test(password.value)
    ? ''
    : 'La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.';
};

const isFormValid = computed(() => !emailError.value && !passwordError.value);

const handleLogin = () => {
  validateEmail();
  validatePassword();

  if (isFormValid.value) {
    alert('¡Inicio de sesión exitoso!');
    // Aquí puedes manejar el envío del formulario (e.g., llamada a una API).
  }
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 12px;
}
.is-invalid {
  border: 1px solid red;
}
.form-group {
  margin-bottom: 15px;
}
button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
