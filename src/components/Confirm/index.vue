<template>
  <transition name="confirm">
    <div class="confirm" v-show="show">
      <div class="container">
        <h1 class="title">{{ title }}</h1>
        <div class="btn">
          <span @click="cancel">取消</span>
          <span @click="ensure">清空</span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import { UPDATE_CONFIRM_SHOW } from '@/store/modules/confirm/mutation-types';

export default {
  name: 'Confirm',
  computed: {
    ...mapState('confirm', {
      show: state => state.show,
      title: state => state.title,
      execute: state => state.execute,
    }),
  },
  methods: {
    cancel() {
      this[UPDATE_CONFIRM_SHOW](false);
    },
    ensure() {
      this[UPDATE_CONFIRM_SHOW](false);
      this.execute();
    },
    ...mapMutations('confirm', [UPDATE_CONFIRM_SHOW]),
  },
};

</script>
<style lang="scss" scoped>
.confirm {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $color-background-d;

  >.container {
    width: 271px;
    height: 103px;
    background-color: #333;
    border-radius: 13px;
    font-size: $font-size-large;

    >.title {
      line-height: 60px;
      text-align: center;
      color: hsla(0, 0%, 100%, .5);
      border-bottom: 1px solid rgba(0, 0, 0, .3);
    }

    >.btn {
      color: hsla(0, 0%, 100%, .3);

      >span {
        display: inline-block;
        width: 135px;
        text-align: center;
        line-height: 42px;

        &:first-child {
          border-right: 1px solid rgba(0, 0, 0, .3);
        }
      }
    }
  }
}

.confirm-enter,
.confirm-leave-to {
  opacity: 0;

  >.container {
    transform: scale(1.2);
  }
}

.confirm-enter-active,
.confirm-leave-active {
  transition: opacity .4s ease;

  >.container {
    transition: transform .4s ease;
  }
}

</style>
