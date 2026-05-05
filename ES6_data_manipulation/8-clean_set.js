export default function cleanSet(set, startString) {
    if (startString === '') {
        return ""
    }
    return [...set].filter(string => string.startsWith(startString))
    .map(string => string.slice(startString.length))
    .join("-");
}
