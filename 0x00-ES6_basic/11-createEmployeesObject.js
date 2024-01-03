export default function createEmployeesObject(departmentName, employees) {
  const EmployeesObject = { [departmentName]: employees };
  return EmployeesObject;
}
