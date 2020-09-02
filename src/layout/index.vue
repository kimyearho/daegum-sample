<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar v-if="isSidebar" class="sidebar-container" />
    <div class="main-container" :style="!isSidebar ? 'marginLeft: 0px' : ''">
      <div
        :class="{ 'fixed-header': true }"
        :style="!isSidebar ? 'width: 100%' : ''"
      >
        <navbar :is-dashboard-rule="isSidebar" />

        <!-- NOTE 새창에서는 탭 네비게이션을 표시하지 않음  -->
        <tags-view v-if="isSidebar" />
      </div>
      <app-main />
      <footer-bar />
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar, FooterBar } from './components'
import TagsView from '@/components/TagsView/index.vue'
import { mapState } from 'vuex'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    TagsView,
    Sidebar,
    FooterBar
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: (state) => state.app.sidebar
    }),
    isSidebar() {
      return !this.$route.meta.blank
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
