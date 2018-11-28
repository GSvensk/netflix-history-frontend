export interface JSONstats {
    runtime: number;
    not_found: number;
    movies: number;
    highscore: number;
    highscoreDate: Date;
    weekdays: number[];
    months: number[];
    years: Object;
    top_series: string;
    top_series_episodes: number;
    top_series_total_time: number;
    top_movie: string;
    top_movie_times: number;
}