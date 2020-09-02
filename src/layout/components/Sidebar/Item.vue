<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    isBlank: {
      type: Boolean,
      default: false
    }
  },
  render(h, context) {
    const { icon, title, isBlank } = context.props
    const vnodes = []

    if (icon) {
      if (icon.includes('el-icon')) {
        vnodes.push(<i class={[icon, 'sub-el-icon']} />)
      } else {
        vnodes.push(<svg-icon icon-class={icon} />)
      }
    }

    if (title) {
      if (isBlank) {
        vnodes.push(
          <span slot="title">
            {title} <i style="padding-left:10px" class="el-icon-top-right" />
          </span>
        )
      } else {
        vnodes.push(<span slot="title">{title}</span>)
      }
    }
    return vnodes
  }
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
