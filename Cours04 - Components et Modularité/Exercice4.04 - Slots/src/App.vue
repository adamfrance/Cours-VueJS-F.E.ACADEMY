<template>
  <div id="app">
    <Card>
      <template #image>
        <img src="https://picsum.photos/id/1015/300" />
      </template>
      <template #title>
        <h2>My Holiday picture</h2>
      </template>
      <template #description>
        <p>Ici je peux décrire le contenu d'une image</p>
        <p>Par exemple, ce que l'on peut voir sur la photo est un beau paysage.</p>
      </template>
    </Card>
  </div>
</template>
<script>
import Card from './components/Card.vue'
export default {
  components: {
    Card
  }
}
</script>
