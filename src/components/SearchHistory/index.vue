<template>
  <div class="searchHistory">
    <ScrollView :dataSource="searchHistory" ref="scrollView">
      <ul class="list">
        <li class="item" v-for="(item, index) in searchHistory" :key="index" @click="setSearch(item)">
          <p>{{ item }}</p>
          <span class="icon" @click.stop.prevent="remove(index)"><i class="icon-delete"></i></span>
        </li>
      </ul>
    </ScrollView>
  </div>
</template>
<script type="text/javascript">
import { mapState, mapMutations } from 'vuex';
import ScrollView from '@/components/ScrollView/index.vue';
import { UPDATE_SEARCH_HISTORY } from '@/store/modules/global/mutation-types';
import mixin from '@/mixin';

const { bottom } = mixin;
export default {
  name: 'SearchHistory',
  mixins: [bottom],
  props: {
    setSearch: {
      type: Function,
      required: true,
    },
  },
  computed: {
    ...mapState('global', {
      searchHistory: state => state.searchHistory,
    }),
  },
  components: {
    ScrollView,
  },
  methods: {
    remove(index) {
      this[UPDATE_SEARCH_HISTORY](this.searchHistory.filter((item, i) => i !== index));
    },
    refresh() {
      this.$refs.scrollView.refresh();
    },
    ...mapMutations('global', [UPDATE_SEARCH_HISTORY]),
  },
};

</script>
<style scoped lang="scss">
.searchHistory {
  position: relative;
  width: 100%;
  height: 100%;

  .list {
    font-size: $font-size-medium-x;
    padding-bottom: 20px;

    >.item {
      display: flex;
      align-items: center;
      height: 40px;
      color: hsla(0, 0%, 100%, .5);

      >p {
        flex: 1;

        @include no-wrap();
      }

      >.icon {
        width: 14px;
        height: 14px;
        font-size: $font-size-medium;
        color: hsla(0, 0%, 100%, .3);
        @include extend-click();
      }
    }
  }
}

</style>
