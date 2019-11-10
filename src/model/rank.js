class Rank {
  constructor({
    id = '',
    picUrl = '',
    topTitle = '',
    tops = [],
    songs = [],
  }) {
    this.id = id;
    this.picUrl = picUrl;
    this.topTitle = topTitle;
    this.tops = tops;
    this.songs = songs;
  }
}

export default Rank;
