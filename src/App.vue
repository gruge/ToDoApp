<template>
<div>
  <app-bg />
  <app-header />
  <app-body />
  <app-footer />
</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppBody from '@/components/AppBody.vue'
import AppBg from '@/components/AppBg.vue'

export default {
  components: {
    AppBg,
    AppHeader,
    AppFooter,
    AppBody
  }
}
</script>
