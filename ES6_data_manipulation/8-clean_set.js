export default function cleanSet(set, startString) {
    if (typeof startString !== "string" || startString.length === 0) {
        return ""
    }
    return [...set].filter(string => string.startsWith(startString))
    .map(string => string.slice(startString.length))
    .join("-");
}
