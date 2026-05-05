export default function updateStudentGradeByCity(array, city, newGrades) {
  if (!Array.isArray(array)) {
    return [];
  }
  return array
  .filter(student => student.location === city)
  .map(student => {
    const gradeObj = newGrades.find(
        grade => grade.studentId === student.id
      );
      
    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: gradeObj ? gradeObj.grade : 'N/A'
    };
  });
}
