type Mods = Record<string, boolean>;

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    const array = [
        cls,
        ...Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([className]) => className),
        ...additional.filter(value => Boolean(value))
    ];

    return array.join(' ');
}