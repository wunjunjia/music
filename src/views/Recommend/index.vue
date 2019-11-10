<template>
  <div class="recommend">
    <ScrollView ref="scrollView" :dataSource="cds">
      <div class="content">
        <Slide v-if="slides.length > 0" :length="slides.length">
          <ul class="slide-banner-wrapper">
            <li v-for="slide in slides" class="slide-item" :key="slide.id">
              <img :src="slide.picUrl" alt="image" @load="onload">
            </li>
          </ul>
        </Slide>
        <h1 class="title">热门歌单推荐</h1>
        <ul class="songList">
          <li v-for="item in cds" class="item" :key="item.id" @click="gotoDetail(item.id)">
            <img v-lazy="item.image" alt="image">
            <div class="content">
              <p class="name">{{ item.author.name }}</p>
              <p class="description">{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </div>
    </ScrollView>
    <Loading v-if="loading" />
    <transition name="detail">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Slide from '@/components/Slide/index.vue';
import Loading from '@/components/Loading/index.vue';
import ScrollView from '@/components/ScrollView/index.vue';
import { jsonp } from '@/utils';
import { slideParam, SUCCESS } from '@/config';
import mixin from '@/mixin';

const { bottom } = mixin;
export default {
  name: 'Recommend',
  data() {
    return {
      slides: [],
      loading: false,
      flag: false,
    };
  },
  mixins: [bottom],
  components: {
    Slide,
    Loading,
    ScrollView,
  },
  computed: {
    ...mapState('cd', {
      cds: state => state.cds,
    }),
  },
  methods: {
    gotoDetail(id) {
      this.$router.history.push({
        path: `/recommend/${id}`,
      });
    },
    onload() {
      if (this.flag) return;
      this.flag = true;
      this.refresh();
    },
    ...mapActions('cd', ['getCdList']),
  },
  created() {
    this.loading = true;
    Promise.all([
      jsonp('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', slideParam),
      this.getCdList(),
    ]).then(([slides]) => {
      this.loading = false;
      if (slides.code === SUCCESS) {
        this.slides = slides.data.slider;
      }
    });
  },
};

</script>
<style scoped lang="scss">
.recommend {
  width: 100%;
  height: 100%;

  .content {
    >.title {
      color: $color-theme;
      font-size: $font-size-medium;
      height: 65px;
      line-height: 65px;
      text-align: center;
    }

    >.songList {
      >.item {
        display: flex;
        align-items: center;
        padding: 0 20px 20px 20px;

        >img {
          width: 60px;
          height: 60px;
          margin-right: 20px;
        }

        >.content {
          font-size: $font-size-medium;
          line-height: 20px;

          >.name {
            margin-bottom: 10px;
          }

          >.description {
            color: hsla(0, 0%, 100%, .3);
          }
        }
      }
    }
  }
}

.slide-banner-wrapper {
  min-height: 1px;
  min-width: 1px;
  font-size: 0;
  white-space: nowrap;

  >.slide-item {
    display: inline-block;
    width: 100%;

    >img {
      /*display: block;*/
      width: 100%;
    }
  }
}

</style>
