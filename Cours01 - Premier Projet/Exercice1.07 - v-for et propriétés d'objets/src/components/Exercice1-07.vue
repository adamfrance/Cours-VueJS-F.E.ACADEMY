<script setup>
const information = {
  title: "Mes informations sur un composant",
  subtitle: "Test sur VueJS",
  items: ["Looping", "Data", "Methods"],
};
</script>
<template>
  <div>
    <div v-for="(value, key) in information" :key="key">
      {{ key }}: {{ value.toString() }}
    </div>
  </div>
</template>
