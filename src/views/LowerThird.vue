<template>
  <SimpleLowerThird
    v-if="activeLowerThird"
    v-show="activeLowerThird.show"
    v-bind="activeLowerThird"
  />
</template>

<script>
import SimpleLowerThird from '@/components/LowerThirds/SimpleLowerThird.vue'
import { mapGetters } from 'vuex'

export default {
  components: { SimpleLowerThird },
  computed: {
    ...mapGetters('lowerThirds', ['activeLowerThird'])
  }
}
</script>
