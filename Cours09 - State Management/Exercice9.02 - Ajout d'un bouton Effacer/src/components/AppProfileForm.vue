<template>
  <section class="md:w-2/3 flex flex-col p-12 items-center">

  	<!-- Inputs -->
    <div class="flex flex-col">
      <label class="flex text-gray-800 mb-2" for="name">Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        class="border-2 border-solid border-blue-200 rounded 
          px-2 py-1"
		v-model="name"
      />
    </div>

    <div class="flex flex-col mt-2">
      <label class="flex text-gray-800 mb-2" for="occupation">Occupation</label>
      <input
        id="occupation"
        type="text"
        name="occupation"
        v-model="occupation"
        class="border-2 border-solid border-blue-200 rounded 
          px-2 py-1"
      />
    </div>

    <div class="w-1/2 flex md:flex-row mt-12">
      <button
        class="flex md:w-1/2 justify-center"
        type="button"
        @click="clear()"
      >
        Clear
      </button>
      <button
        class="flex md:w-1/2 justify-center"
        type="submit"
        @click="submitForm()"
      >
        Submit
      </button>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['submit'])

const name = ref('');
const occupation = ref('');

function submitForm() {
  emit('submit', { 
    name: this.name, 
    occupation: this.occupation
  });
}

function clear() {
  this.name = '';
  this.occupation = '';
  emit('submit', {});
}
</script>

