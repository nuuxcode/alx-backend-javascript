export default function createReportObject(employeesList) {
  const getNumberOfDepartments = () => Object.keys(employeesList).length;
  return { allEmployees: employeesList, getNumberOfDepartments };
}
