<template>
  <div>
    <textarea
      ref="textArea"
      cols="50"
      rows="7"
    >
    </textarea>
    <ul v-if="count">
      <li>Paragraphes: {{ count.paragraphs }}</li>
      <li>Phrases: {{ count.sentences }}</li>
      <li>Mots: {{ count.words }}</li>
    </ul>
  </div>
</template>
<script>
import * as Countable from 'countable'
export default {
  mounted() {
    Countable.on(this.$refs.textArea, (count) => {
      this.count = count
    })
  },
  beforeUnmount() {
    Countable.off(this.$refs.textArea)
  },
  data() {
    return { count: null }
  }
}
</script>
