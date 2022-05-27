<script>
import { computed } from 'vue'

export default {
  data() {
    const current = new Date();
    const year = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
    return { year }
  }
}
</script>

<template>
  <footer>
    <p>Copyright &copy; {{ year }} </p>
  </footer>
</template>