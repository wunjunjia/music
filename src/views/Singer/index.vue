<template>
  <div class="singer">
    <ScrollView ref="scrollView" :handleScroll="handleScroll">
      <ul v-show="!this.loading">
        <li v-for="(group, index) in groups" :key="index" ref="group" class="group">
          <h1 class="title">{{ group.text }}</h1>
          <ul class="singerList">
            <li v-for="singer in group.singers" :key="singer.id" class="item" @click="gotoDetail(singer.serial)">
              <img v-lazy="singer.image" alt="avatar">
              <p class="name">{{ singer.name }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </ScrollView>
    <Loading v-if="this.loading" />
    <ul class="letterList" @touchstart.stop.prevent="handleTouchStart" @touchmove.stop.prevent="handleTouchMove">
      <li class="item" :class="{active: currentIndex === index}" v-for="(group, index) in groups" :key="index" ref="letter">
        {{ group.text === '热门' ? '热' : group.text }}
      </li>
    </ul>
    <h1 class="cue title" ref="cue">热门</h1>
    <transition name="detail">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import ScrollView from '@/components/ScrollView/index.vue';
import Loading from '@/components/Loading/index.vue';
import Singer from '@/model/singer';
import { jsonp } from '@/utils';
import {
  singerListParam,
  SUCCESS,
  letters,
} from '@/config';
import { BATCH_ADD } from '@/store/modules/singer/mutation-types';
import mixin from '@/mixin';

const { bottom } = mixin;
export default {
  name: 'Singer',
  data() {
    return {
      currentIndex: 0,
      loading: false,
      startY: 0,
      startIndex: 0,
      groups: [{ text: '热门', singers: [] }].concat(Object.keys(letters).map(key => ({
        text: key,
        singers: [],
      }))),
    };
  },
  mixins: [bottom],
  methods: {
    handleTouchStart(e) {
      this.startY = e.targetTouches[0].clientY;
      this.startIndex = this.$refs.letter.findIndex(item => item === e.target);
      this.currentIndex = this.startIndex;
      this.$refs.scrollView.scrollToElement(this.$refs.group[this.currentIndex]);
      this.$refs.cue.innerHTML = this.groups[this.currentIndex].text;
    },
    handleTouchMove(e) {
      const interval = this.startIndex + Math.floor((e.targetTouches[0].clientY - this.startY) / 18);
      if (interval >= 0 && interval < this.groups.length) {
        this.currentIndex = interval;
        this.$refs.scrollView.scrollToElement(this.$refs.group[this.currentIndex]);
        this.$refs.cue.innerHTML = this.groups[this.currentIndex].text;
      }
    },
    handleScroll(pos) {
      if (pos.y > 0) {
        this.$refs.cue.style.top = `${pos.y}px`;
        return;
      }
      const y = Math.abs(pos.y);
      const group = this.$refs.group;
      const cue = this.$refs.cue;
      for (let i = group.length - 1; i >= 0; --i) {
        if (y >= group[i].offsetTop) {
          if (this.currentIndex !== i) {
            cue.innerHTML = this.groups[i].text;
            this.currentIndex = i;
          }

          if (i < group.length - 1) {
            const interval = group[i + 1].offsetTop - y;
            cue.style.top = `${-30 + (interval <= 30 ? interval : 30)}px`;
          } else {
            cue.style.top = 0;
          }
          return;
        }
      }
    },
    gotoDetail(serial) {
      this.$router.history.push({
        path: `/singer/${serial}`,
      });
    },
    ...mapMutations('singer', [BATCH_ADD]),
  },
  components: {
    ScrollView,
    Loading,
  },
  created() {
    this.loading = true;
    jsonp('https://c.y.qq.com/v8/fcg-bin/v8.fcg', singerListParam)
      .then((data) => {
        if (data.code === SUCCESS) {
          const list = data.data.list.map(singer => new Singer({
            id: singer.Fsinger_id,
            name: singer.Fsinger_name,
            serial: singer.Fsinger_mid,
            letter: singer.Findex,
          }));
          this.BATCH_ADD(list);
          for (let i = 0; i < 10; ++i) {
            this.groups[0].singers.push(list[i]);
          }
          list.forEach((singer) => {
            if (letters[singer.letter]) {
              this.groups[letters[singer.letter]].singers.push(singer);
            }
          });
          this.groups = this.groups.filter(item => item.singers.length > 0);
          this.loading = false;
          this.$nextTick(() => {
            this.$refs.scrollView.refresh();
          });
        }
      });
  },
};

</script>
<style scoped lang="scss">
.singer {
  position: relative;
  width: 100%;
  height: 100%;
  color: hsla(0, 0%, 100%, .5);
  overflow: hidden;

  .group {
    padding-bottom: 20px;

    &:last-child {
      padding-bottom: 0;
    }

    >.singerList {
      >.item {
        display: flex;
        align-items: center;
        padding-left: 30px;
        padding-top: 20px;

        >img {
          width: 50px;
          height: 50px;
          margin-right: 20px;
          border-radius: 50%;
        }

        >.name {
          font-size: $font-size-medium;
        }
      }
    }
  }

  .title {
    padding-left: 20px;
    height: 30px;
    line-height: 30px;
    font-size: $font-size-small;
    background: #333;
  }

  .letterList {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: 999;
    padding: 20px 0;
    background: rgba(0, 0, 0, .3);

    >.item {
      width: 2ch;
      padding: 3px 0;
      margin-right: 3px;
      line-height: 1;
      color: hsla(0, 0%, 100%, .5);
      font-size: $font-size-small;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;

      &.active {
        color: $color-theme;
      }
    }
  }

  .cue {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}

</style>
