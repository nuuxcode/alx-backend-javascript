export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((acc, { id }) => acc + id, 0)
}
