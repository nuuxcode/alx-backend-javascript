export default function getStudentsByLocation(listStudents, targetLocation) {
  return listStudents.filter(({ location }) => location === targetLocation);
}
