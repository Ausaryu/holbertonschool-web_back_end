export default function report(employeesList) {
  return {
    allEmployees: employeesList,

    getNumberOfDepartments(allEmployees) {
      return Object.keys(allEmployees).length;
    },
  };
}