import logo from '@/assets/logo.png';

class Song {
  constructor({
    albumname = '',
    albummid = '',
    songname = '',
    songmid = '',
    authors = [],
    audioSrc = '',
    interval = 0,
    canplay = true,
    lyric = '',
    love = false,
  }) {
    this.authors = authors;
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
    this.love = love;
  }
}

export default Song;
