export default function hasValuesFromArray() {
    return array.every((value) => set.has(value))
}
