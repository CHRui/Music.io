<template>
    <div ref="wrapper">
      <slot></slot>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    }
  },
  data() {
    return {};
  },
  watch: {
    data() {
      this.$nextTick(() => {
        this.refresh();
      });
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    // 初始化
    _initScroll() {
      if(!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
    },
    enable() {
      this.$scroll && this.scroll.enable()
    },
    disable() {
      this.$scroll && this.scroll.disable()
    },
    refresh() {
      this.$scroll && this.scroll.refresh()
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
