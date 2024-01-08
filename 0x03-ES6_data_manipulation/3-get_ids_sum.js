export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((xacc, { id }) => xacc + id, 0);
}
