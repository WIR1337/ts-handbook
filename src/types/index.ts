import type { Writable } from "svelte/store"

type Repeats = 2 | 3
type ID = string | number


interface DateRepeat {
    year:  number,
    month:  number,
    day:  number
}

interface DayCollection {
    sentences: string[],
	countRepeat: number,
	id: number,
	totalRepeat: Repeats
}

interface SevenDayCollection extends DayCollection{
    dateOfRepeat: DateRepeat,
    typeOfRepeat: 7
}
interface FourteenDayCollection extends DayCollection {
    dateOfRepeat: DateRepeat,
    typeOfRepeat: 14
}

type DayStore = Writable<DayCollection[]>