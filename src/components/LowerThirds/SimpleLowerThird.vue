<template>
  <transition name="bounceInUp">
    <aside
      v-show="show"
      class="absolute bottom-0 flex items-center w-full px-20 pb-8 -mb-8 bg-white h-1/5"
    >
      <div v-if="icon"  class="flex-none mr-8 text-8xl">
        <transition name="fadeInUp">
          <component v-show="showChildren" :is="icon" />
        </transition>
      </div>
      <div>
        <transition name="fadeInUp">
          <div v-show="showChildren">
            <h1 v-if="title" class="text-5xl font-semibold" :class="{'mb-4': description}">{{title}}</h1>
            <p v-if="description" class="text-4xl text-gray-700">{{description}}</p>
          </div>
        </transition>
      </div>
    </aside>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      showChildrenState: false
    }
  },
  props: {
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    show: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    showChildren () {
      return this.show && this.showChildrenState
    }
  },
  mounted () {
    setTimeout(() => {
      this.showChildrenState = true
    }, 250)
  }
}
</script>
