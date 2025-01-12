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

    <div v-if="message" class="message-box">
      <p>{{ message }}</p>
      <button @click="clearMessage">Cerrar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue';
import { auth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const email = ref('');
const password = ref('');
const message = ref('');

const emailError = ref('');
const passwordError = ref('');

const isAuthenticated = inject('isAuthenticated'); // Inyecta el estado de autenticación
const generateToken = inject('generateToken'); // Inyecta la función para generar el token

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

const handleLogin = async () => {
  validateEmail();
  validatePassword();

  if (isFormValid.value) {
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      message.value = '¡Inicio de sesión exitoso!';
      isAuthenticated.value = true; // Actualiza el estado de autenticación
      generateToken(); // Genera el token y almacena la expiración
      clearFields();

      window.location.href = '/shop';
    } catch (error: any) {
      // Manejar errores de Firebase (por ejemplo, usuario no encontrado o contraseña incorrecta)
      if (error.code === 'auth/user-not-found') {
        message.value =
          'Usuario no encontrado. Verifica tu correo electrónico o regístrate.';
      } else if (error.code === 'auth/wrong-password') {
        message.value = 'Contraseña incorrecta.';
      } else {
        message.value = 'Hubo un error al iniciar sesión. Inténtalo de nuevo.';
      }
    }
  }
};

const clearFields = () => {
  email.value = '';
  password.value = '';
};

const clearMessage = () => {
  message.value = '';
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
.message-box {
  background: #f8f9fa;
  border: 1px solid #ddd;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 5px;
}
</style>
