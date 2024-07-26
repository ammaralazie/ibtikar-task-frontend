export function isEmpty(str: string): boolean {
    return str.trim() === '';
}

export function isEmptyArray<T>(arr: T[]): boolean {
    return arr.length === 0;
}

export function isNullOrUndefined(value: any): value is null | undefined {
    return value === null || value === undefined;
}


export function truncateString(inputString: string, maxWords: number) {
    const words = inputString.split(' ');
    if (words.length > maxWords) {
        const truncatedWords = words.slice(0, maxWords);
        const truncatedString = truncatedWords.join(' ') + ' ...';

        return truncatedString;
    }
    return inputString;
}