export default function appendToEachArrayValue(array, appendString) {
  let new_array = []
  for (const value of array) {
    new_array = [...new_array, appendString + value];
  }

  return new_array;
}