export class MovieOption {
    constructor(id, title, releaseDate) {
        this.id = id,
        this.title = title,
        this.releaseDate = releaseDate || ""
    }
}