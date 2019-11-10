<template>
  <div class="search">
    <SearchInput ref="search-input" />
    <div class=" wrapper">
      <div class="hot">
        <h1 class="title">热门搜索</h1>
        <ul class="list">
          <li class="item" v-for="(item, index) in selectKeys" :key="index" @click="setSearch(item)">{{ item }}</li>
        </ul>
      </div>
      <div class="history" ref="history">
        <h1 class="title">
          <span>搜索历史</span>
          <span class="icon" @click="handleClick"><i class="icon-clear"></i></span>
        </h1>
        <SearchHistory :setSearch="setSearch" ref="searchHistory" />
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapMutations } from 'vuex';
import SearchInput from '@/components/SearchInput/index.vue';
import SearchHistory from '@/components/SearchHistory/index.vue';
import { jsonp } from '@/utils';
import { hotKeyParam, SUCCESS } from '@/config';
import { UPDATE_SEARCH_HISTORY } from '@/store/modules/global/mutation-types';
import { UPDATE_CONFIRM_SHOW, UPDATE_CONFIRM_TITLE, UPDATE_CONFIRM_EXECUTE } from '@/store/modules/confirm/mutation-types';

export default {
  name: 'Search',
  data() {
    return {
      hotKeys: [],
      count: 10,
      index: 0,
      selectKeys: [],
    };
  },
  components: {
    SearchInput,
    SearchHistory,
  },
  methods: {
    setSearch(value) {
      this.$refs['search-input'].setSearch(value);
    },
    handleClick() {
      this[UPDATE_CONFIRM_SHOW](true);
      this[UPDATE_CONFIRM_TITLE]('是否删除搜索历史');
      this[UPDATE_CONFIRM_EXECUTE](this.confirm);
    },
    confirm() {
      this[UPDATE_SEARCH_HISTORY]([]);
    },
    ...mapMutations('global', [UPDATE_SEARCH_HISTORY]),
    ...mapMutations('confirm', [UPDATE_CONFIRM_SHOW, UPDATE_CONFIRM_TITLE, UPDATE_CONFIRM_EXECUTE]),
  },
  created() {
    jsonp('https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg', hotKeyParam)
      .then((res) => {
        if (res.code === SUCCESS) {
          this.hotKeys = res.data.hotkey.map(item => item.k);
          this.selectKeys = this.hotKeys.slice(this.index * this.count, (this.index + 1) * this.count);
          // 注意这里需要刷新一下
          this.$refs.searchHistory.refresh();
        }
      });
  },
};

</script>
<style scoped lang="scss">
.search {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: -1;

  >.wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px 20px 0 20px;

    >.hot {
      margin-bottom: 20px;

      >.title {
        margin-bottom: 20px;
        font-size: $font-size-medium;
        color: hsla(0, 0%, 100%, .5);
      }

      >.list {
        display: flex;
        flex-wrap: wrap;

        >.item {
          padding: 5px 10px;
          margin-bottom: 10px;
          margin-right: 20px;
          background-color: #333;
          border-radius: 6px;
          color: hsla(0, 0%, 100%, .3);
          font-size: $font-size-medium;
        }
      }
    }

    >.history {
      flex: 1;
      position: relative;
      padding-top: 40px;
      overflow: hidden;

      >.title {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        font-size: $font-size-medium;
        color: hsla(0, 0%, 100%, .5);
      }
    }
  }
}

</style>
