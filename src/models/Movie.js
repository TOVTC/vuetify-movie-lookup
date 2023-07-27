export class Movie {
    constructor(id, title, originalTitle, posterPath, language, releaseDate, runtime, tagline, homepage, overview, genres, languages, productionCompanies) {
        this.id = id,
        this.title = title,
        this.originalTitle = originalTitle || "",
        this.posterPath = posterPath || "",
        this.language = language || "",
        this.releaseDate = releaseDate || "",
        this.runtime = runtime || "",
        this.tagline = tagline || "",
        this.homepage = homepage || "",
        this.overview = overview || "",
        this.genres = this._parseObjects(genres),
        this.languages = this._parseObjects(languages),
        this.productionCompanies = this._parseObjects(productionCompanies)
    }

    // this is probably not going to work lmao
    _parseObjects(propName, data) {
        let targetValues = [];

        data.forEach(item => {
            targetValues.push(item[propName]);
        });

        return targetValues;
    }
}