
export const classNames = (className: string, mods: {[key: string]: boolean} = {}, additional: string[] = []) => {
    return [
        className,
        ...additional,
        Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([key, value]) => key)
    ].join(' ')
}
