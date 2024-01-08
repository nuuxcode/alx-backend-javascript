export default function updateStudentGradeByCity(listStudents, targetLocation, newGrades) {
  return listStudents
    .filter(({ location }) => location === targetLocation)
    .map((obj) => {
      const targetNewGrade = newGrades.filter(({ studentId }) => studentId === obj.id);
      const { grade = 'N/A' } = targetNewGrade.length > 0 ? targetNewGrade[0] : {};
      return { ...obj, grade };
    });
}
