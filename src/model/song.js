import logo from '@/assets/logo.png';

class Song {
  constructor({
    id = '',
    strMediaMid = '',
    albumname = '',
    albummid = '',
    songname = '',
    songmid = '',
    authors = [],
    audioSrc = '',
    interval = 0,
    canplay = true,
    lyric = '',
  }) {
    // 这个属性在获取歌词用到
    this.id = id;
    this.authors = authors;
    // 这个属性在拼接audioSrc值时用到
    this.strMediaMid = strMediaMid;
    this.albumname = albumname;
    // 图片路径
    this.albummid = albummid;
    this.songname = songname;
    // 获取vkey
    this.songmid = songmid;
    this.audioSrc = audioSrc;
    this.interval = interval;
    this.canplay = canplay;
    this.lyric = lyric;
    this.image = albummid === '' ? logo : `https://y.gtimg.cn/music/photo_new/T002R300x300M000${albummid}.jpg?max_age=2592000`;
  }
}

export default Song;
