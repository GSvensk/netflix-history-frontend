export interface JSONstats {
    totalTime: number;
    notFound: number;
    movies: number;
    longestBinge: number;
    longestBingeDate: string;
    weekdays: number[];
    months: number[];
    years: Object;
    mostWatchedSeries: string;
    mostWatchedSeriesEpisodes: number;
    mostWatchedSeriesTotalTime: number;
    mostWatchedMovie: string;
    mostWatchedMovieTimes: number;
}