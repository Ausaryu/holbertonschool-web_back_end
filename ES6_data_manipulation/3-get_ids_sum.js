export default function getStudentIdsSum(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const sumWithInitial = array.reduce(
    (accumulator, student) => accumulator + student.id,
    0,
  );

  return sumWithInitial;
}
