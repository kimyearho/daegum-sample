<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
  props: {
    to: {
      type: String,
      required: true
    },
    meta: {
      type: Object,
      required: true
    }
  },
  computed: {
    type() {
      if (this.isExternal || this.isBlank) {
        return 'a'
      }
      return 'router-link'
    },
    isExternal() {
      return isExternal(this.to)
    },
    isBlank() {
      return this.meta.blank ? true : false
    }
  },
  methods: {
    linkProps(to) {
      // NOTE 외부링크 이거나, 메타정보에 blank가 true이면
      if (this.isExternal || this.isBlank) {
        return {
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        to: to
      }
    }
  }
}
</script>
