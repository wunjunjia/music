<template>
  <Detail v-if="target" :target="target" ref="detail" />
</template>
<script type="text/javascript">
import { mapGetters, mapActions } from 'vuex';
import mixin from '@/mixin';
import { CD_DETAIL } from '@/config';

const { detail } = mixin;
export default {
  name: 'CdDetail',
  data() {
    return {
      keys: ['id', 'desc'],
    };
  },
  mixins: [detail],
  computed: {
    ...mapGetters('cd', ['find']),
  },
  methods: {
    getDetail(id) {
      return this.getCdDetail(id);
    },
    ...mapActions('cd', ['getCdDetail']),
  },
  created() {
    if (this.way !== CD_DETAIL) this.updateWay(CD_DETAIL);
  },
};

</script>
