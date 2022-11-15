import { MonthlyViewingTime } from './MonthlyViewingTime';

export interface JSONstats {
    id: string;
    titles: number;
    totalTime: number;
    notFound: number;
    movies: number;
    longestBinge: number;
    longestBingeDate: string;
    weekdays: number[];
    months: number[];
    years: Object;
    monthly: MonthlyViewingTime[];
    mostWatchedSeries: string;
    mostWatchedSeriesEpisodes: number;
    mostWatchedSeriesTotalTime: number;
    mostWatchedMovie: string;
    mostWatchedMovieTimes: number;
}
