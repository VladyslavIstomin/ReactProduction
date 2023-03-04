export type Mods = Record<string, boolean | undefined>;

export function classNames(cls: string, mods: Mods = {}, additional: (string | undefined)[] = []): string {
    const array = [
        cls,
        ...Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([className]) => className),
        ...additional.filter(value => Boolean(value))
    ];

    return array.join(' ');
}