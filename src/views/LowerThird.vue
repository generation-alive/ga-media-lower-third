<template>
  <SimpleLowerThird
    v-if="activeLowerThird"
    v-bind="activeLowerThird"
  />
</template>

<script>
import SimpleLowerThird from '@/components/LowerThirds/SimpleLowerThird.vue'
import { mapActions, mapGetters } from 'vuex'
import socketIo from '@/socket-io'

export default {
  components: { SimpleLowerThird },
  computed: {
    ...mapGetters('lowerThirds', ['activeLowerThird'])
  },
  methods: {
    ...mapActions('lowerThirds', ['startLowerThird', 'stopLowerThird'])
  },
  created () {
    socketIo.on('startLowerThird', (payload) => {
      this.startLowerThird(payload)
    })
    socketIo.on('stopLowerThird', (payload) => {
      this.stopLowerThird(payload)
    })
  }
}
</script>
