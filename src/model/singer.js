class Singer {
  constructor({
    name,
    serial,
    letter,
    id,
    songs = [],
  }) {
    this.name = name;
    this.serial = serial;
    this.letter = letter;
    this.image = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${serial}.jpg?max_age=2592000`;
    this.id = id;
    this.songs = songs;
  }
}

export default Singer;
