<template>
  <Triangle />
</template>

<script>
import Triangle from '@/components/Triangle'
import '@/assets/style.scss'

export default {
  name: 'IndexPage',
  components: {
      Triangle,
  },
  layout: 'index',
}
</script>