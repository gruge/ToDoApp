<template>
<div>
  <app-bg />
  <app-header />
  <app-body  @create="Create" />
  <div v-if="show">
  <app-notes/>
  </div>
  <app-footer />
</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppBody from '@/components/AppBody.vue'
import AppBg from '@/components/AppBg.vue'
import AppNotes from '@/components/AppNotes.vue'

export default {
  components: {
    AppBg,
    AppHeader,
    AppFooter,
    AppBody,
    AppNotes
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    Create() {
        this.show = !this.show
    }
  }
}
</script>
