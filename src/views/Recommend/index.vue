<template>
  <ScrollView ref="scrollView">
    <div class="recommend">
      <Slide v-if="slides.length > 0" :length="slides.length" :refresh="monitor">
        <ul class="slide-banner-wrapper">
          <li v-for="slide in slides" class="slide-item" :key="slide.id">
            <img :src="slide.picUrl" alt="image">
          </li>
        </ul>
      </Slide>
      <h1 class="title">热门歌单推荐</h1>
      <ul class="songList">
        <li v-for="item in songList" class="item" :key="item.id">
          <img v-lazy="item.image" alt="image">
          <div class="content">
            <p class="name">{{ item.author.name }}</p>
            <p class="description">{{ item.desc }}</p>
          </div>
        </li>
      </ul>
      <Loading v-if="songList.length === 0"/>
    </div>
  </ScrollView>
</template>

<script>
  import axios from 'axios';
  import Slide from '@/components/Slide/index.vue';
  import Loading from '@/components/Loading/index.vue';
  import ScrollView from '@/components/ScrollView/index.vue';
  import SongList from '@/model/songList';
  import {jsonp} from '@/utils';
  import {slideParam, songListParam, SUCCESS} from '@/config';

  export default {
    name: 'Recommend',
    data() {
      return {
        slides: [],
        songList: [],
      };
    },
    components: {
      Slide,
      Loading,
      ScrollView,
    },
    methods: {
      monitor() {
        const timer = setTimeout(() => {
          clearTimeout(timer);
          if (this.$refs.scrollView) {
            this.$refs.scrollView.refresh();
          } else {
            this.monitor();
          }
        }, 20);
      },
    },
    created() {
      jsonp('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', slideParam)
        .then((result) => {
          if (result.code === SUCCESS) {
            this.slides = result.data.slider;
          }
        });
      axios.get('/api/songList', {params: songListParam})
        .then((result) => {
          if (result.data.code === SUCCESS) {
            this.songList = result.data.data.list.map(item => new SongList({
              id: item.dissid,
              author: {name: item.creator.name},
              desc: item.dissname,
              image: item.imgurl,
            }));
            this.$nextTick(() => {
              this.monitor();
            });
          }
        });
    },
  };
</script>

<style scoped lang="scss">
  .recommend {
    > .title {
      color: $color-theme;
      font-size: $font-size-medium;
      height: 65px;
      line-height: 65px;
      text-align: center;
    }

    > .songList {
      > .item {
        display: flex;
        align-items: center;
        padding: 0 20px 20px 20px;

        > img {
          width: 60px;
          height: 60px;
          margin-right: 20px;
        }

        > .content {
          font-size: $font-size-medium;
          line-height: 20px;

          > .name {
            margin-bottom: 10px;
          }

          > .description {
            color: hsla(0, 0%, 100%, .3);
          }
        }
      }
    }
  }

  .slide-banner-wrapper {
    font-size: 0;
    white-space: nowrap;

    > .slide-item {
      display: inline-block;
      width: 100%;

      > img {
        /*display: block;*/
        width: 100%;
      }
    }
  }
</style>
