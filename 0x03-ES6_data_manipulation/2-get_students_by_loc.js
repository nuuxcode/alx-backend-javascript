export default function getStudentsByLocation(listStudents, xtargetLocation) {
  return listStudents.filter(({ location }) => location === xtargetLocation);
}
