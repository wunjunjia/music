class Cd {
  constructor({
    author,
    desc,
    image,
    id,
    songs = [],
  }) {
    this.author = author;
    this.desc = desc;
    this.image = image;
    this.id = id;
    this.songs = songs;
  }
}

export default Cd;
