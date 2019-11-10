const common = {
  g_tk: 1928093487,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp',
  platform: 'yqq',
  needNewCode: 0,
};

export const slideParam = {
  ...common,
  platform: 'h5',
  uin: 0,
  needNewCode: 1,
};

export const cdListParam = {
  platform: 'yqq',
  hostUin: 0,
  sin: 0,
  ein: 29,
  sortId: 5,
  needNewCode: 0,
  categoryId: 10000000,
  rnd: Math.random(),
  format: 'json',
};

export const singerListParam = {
  ...common,
  channel: 'singer',
  page: 'list',
  key: 'all_all_all',
  pagesize: 100,
  pagenum: 1,
  hostUin: 0,
};

export const singerDetailParam = {
  ...common,
  hostUin: 0,
  order: 'listen',
  begin: 0,
  num: 80,
  songstatus: 1,
};

export const rankListParam = {
  ...common,
  uin: 0,
  needNewCode: 1,
  platform: 'h5',
};

export const rankDetailParam = {
  ...common,
  needNewCode: 1,
  uin: 0,
  tpl: 3,
  page: 'detail',
  type: 'top',
  platform: 'h5',
};

export const hotKeyParam = {
  ...common,
  uin: 0,
  needNewCode: 1,
  platform: 'h5',
};

export const SUCCESS = 0;

export const ERROR = 1;

export const letters = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};

export const SEQUENCE = 0;
export const RANDOM = 1;
export const LOOP = 2;

export const SEARCH_HISTORY = 'SEARCH_HISTORY';
export const RECENT_PLAYBACK = 'RECENT_PLAYBACK';
export const LOVE = 'LOVE';

export default {

};
