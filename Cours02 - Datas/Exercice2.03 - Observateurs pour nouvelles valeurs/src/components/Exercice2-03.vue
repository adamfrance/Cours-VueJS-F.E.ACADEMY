<template>
  <div class="container">
    <h1>Magasin de Montres</h1>
    <div>
      Journée Promo
      <strike>Prix avant réduction: {{ oldDiscount }}%</strike>
      <strong> Prix actuel: {{ discount }}% OFF</strong>
    </div>
    <button @click="updateDiscount">Augmente la réduction!!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldDiscount: 0,
      discount: 5,
    };
  },
  methods: {
    updateDiscount() {
      this.discount = this.discount + 5;
    },
  },
  watch: {
    discount(newValue, oldValue) {
      this.oldDiscount = oldValue;
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin: 0;
}
button {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
