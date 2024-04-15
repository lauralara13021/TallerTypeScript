export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    imageSerie: string;
  
    constructor(
      id: number,
      name: string,
      channel: string,
      seasons: number,
      description: string,
      link: string,
      imageSerie: string
    ) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.link = link;
      this.imageSerie = imageSerie;
    }
  }