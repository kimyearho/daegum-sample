<template>
  <div class="navbar">
    <!-- NOTE 새탭에서 표시되는 로고 -->
    <img
      v-if="!isDashboardRule"
      width="65"
      height="65"
      src="@/assets/logo.jpg"
    />
    <!-- NOTE 새탭이 아닐때 표시 함 -->
    <template v-if="isDashboardRule">
      <hamburger
        id="hamburger-container"
        :is-active="sidebar.opened"
        class="hamburger-container"
        @toggleClick="toggleSideBar"
      />
      <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    </template>
    <div class="right-menu">
      <!-- NOTE 모바일이 아닐때만 표시함 -->
      <template v-if="device !== 'mobile'">
        <screen-full id="screenfull" class="right-menu-item hover-effect" />
      </template>
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <!-- REVIEW element ui commonjs erray igorne -->
        <el-dropdown-menu slot="dropdown"></el-dropdown-menu>
        <div class="avatar-wrapper">
          <img
            :src="circleUrl"
            class="user-avatar"
            @click="$store.dispatch('user/logout')"
          />
        </div>
      </el-dropdown>
    </div>
    <div v-if="$route.meta.blank">
      <logo :collapse="false" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Sidebar/Logo'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ScreenFull from '@/components/ScreenFull'

export default {
  name: 'Navbar',
  data() {
    return {
      style: {
        logo: {
          fontSize: '25px',
          color: '#fff',
          margin: '14px 30px'
        }
      },
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  components: {
    ScreenFull,
    Breadcrumb,
    Hamburger,
    Logo
  },
  props: {
    isDashboardRule: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar', 'device'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
#screenfull {
  padding-top: 5px;
  margin-right: 10px;
}
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: #2b2f3a;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 54px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 35px;
          height: 35px;
          border-radius: 10px;
          margin-top: 5px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
