<template>
  <div
    v-show="show"
    class="absolute bottom-0 w-full p-20 bg-white h-1/5"
  >
    {{text}}
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    show: Boolean
  }
}
</script>
