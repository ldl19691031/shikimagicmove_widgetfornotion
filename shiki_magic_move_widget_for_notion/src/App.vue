<script setup>
import { createHighlighter } from 'shiki';
import { ShikiMagicMove } from 'shiki-magic-move/vue';
import { ref, onMounted } from 'vue';

import 'shiki-magic-move/dist/style.css';

const highlighter = ref(null);
const initialCode = `const hello = 'world'`;
const updatedCode = `let hi = 'hello'`;
const code = ref(initialCode);
const isLoading = ref(true);
const isBefore = ref(true);

async function initializeHighlighter() {
  highlighter.value = await createHighlighter({
    themes: ['nord'],
    langs: ['javascript', 'typescript'],
  });
  isLoading.value = false;
}

function showBefore() {
  code.value = initialCode;
  isBefore.value = true;
}

function showAfter() {
  code.value = updatedCode;
  isBefore.value = false;
}

onMounted(() => {
  initializeHighlighter();
});
</script>

<template>
  <div id="app">
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-else class="code-container">
      <ShikiMagicMove
        lang="ts"
        theme="nord"
        :highlighter="highlighter"
        :code="code"
        :options="{ duration: 800, stagger: 0.3, lineNumbers: true }"
      />
      <button
        class="before-button"
        @click="showBefore"
        :disabled="isBefore"
      >
        Before
      </button>
      <button
        class="after-button"
        @click="showAfter"
        :disabled="!isBefore"
      >
        After
      </button>
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw; /* Ensure the app fills the entire width */
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
  background-color: #2e3440;
  overflow: hidden; /* Prevent scrollbars */
}

.code-container {
  position: relative;
  width: 100%; /* Make the code container fill the width */
  height: 100%;
}

.shiki-magic-move-container {
  width: 100%; /* Ensure the code block fills the container */
  height: 100%;
  overflow: auto;
}

.before-button,
.after-button {
  position: absolute;
  bottom: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.before-button:hover:not(:disabled),
.after-button:hover:not(:disabled) {
  background-color: #45a049;
}

.before-button:disabled,
.after-button:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
}

.before-button {
  left: 1rem;
}

.after-button {
  right: 1rem;
}
</style>
