export interface JSONstats {
    runtime: number;
    notFound: number;
    movies: number;
    highscore: number;
    highscoreDate: Date;
    weekdays: number[];
    months: number[];
    years: Object;
    topSeries: string;
    topSeriesEpisodes: number;
    topSeriesTotalTime: number;
    topMovie: string;
    topMovieTimes: number;
}