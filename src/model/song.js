import logo from '@/assets/logo.png';

class Song {
  constructor({
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
    this.authors = authors;
    this.strMediaMid = strMediaMid;
    this.albumname = albumname;
    this.albummid = albummid;
    this.songname = songname;
    this.songmid = songmid;
    this.audioSrc = audioSrc;
    this.interval = interval;
    this.canplay = canplay;
    this.lyric = lyric;
    this.image = albummid === '' ? logo : `https://y.gtimg.cn/music/photo_new/T002R300x300M000${albummid}.jpg?max_age=2592000`;
  }
}

export default Song;
