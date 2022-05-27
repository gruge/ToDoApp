<script>
import { computed } from 'vue'

export default {
  data() {
    const current = new Date();
    const year = current.getFullYear();
    return { year }
  }
}
</script>

<template>
  <footer>
  <div class="container mx-auto">
    <p style="font-size: 0.8em; color: white; text-align: center; margin-top: 30%" class=" select-none">Copyright &copy; {{ year }} </p>
  </div>
  </footer>
</template>