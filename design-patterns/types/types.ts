export type Record<K extends string, T> = {
    [P in K]: T
}
