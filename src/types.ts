export enum Weather {
	Sunny = "sunny",
	Rainy = "rainy",
	Windy = "windy",
}

export enum Visibility {
	Great = "great",
	Good = "good",
	Poor = "poor",
}

export interface Diary {
	id: number;
	date: string;
	weather: Weather;
	visibility: Visibility;
	comment: string;
}

export type DiaryWithoutId = Omit<Diary, "id">;
