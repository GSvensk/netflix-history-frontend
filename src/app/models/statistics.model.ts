export interface Statistics {

    general: {
        titles: number;
        totalTime: number;
        longestBinge: number;
        longestBingeDate: string;
    };

    movies: {
        movies: number;
        mostWatchedMovie: string;
        mostWatchedMovieTimes: number;
    };

    series: {
        mostWatchedSeries: string;
        mostWatchedSeriesEpisodes: number;
        mostWatchedSeriesTotalTime: number;
    };

    periods: {
        weekdays: number[];
        months: number[];
        years: Object;
    };

    meta: {
        notFound: number;
    };
}
