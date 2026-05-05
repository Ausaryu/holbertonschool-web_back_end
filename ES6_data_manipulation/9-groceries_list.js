export default function groceriesList() {
  const groceries = [
    {name: "Apples", value: 10},
    {name: "Tomatoes", value: 10},
    {name: "Pasta", value: 1},
    {name: "Rice", value: 1},
    {name: "Banana", value: 5},
  ];
  const result = new Map();
  groceries.forEach(grocery => result.set(grocery.name, grocery.value));
  return result;
}
