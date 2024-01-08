export default function updateStudentGradeByCity(listStudents, targetLocation, newGrades) {
  return listStudents
    .filter(({ location }) => location === targetLocation)
    .map((obj) => {
      const xtargetNewGrade = newGrades.filter(({ studentId }) => studentId === obj.id);
      const { grade = 'N/A' } = xtargetNewGrade.length > 0 ? xtargetNewGrade[0] : {};
      return { ...obj, grade };
    });
}
