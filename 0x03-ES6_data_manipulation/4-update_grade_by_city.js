export default function updateStudentGradeByCity(listStudents, targetLocation, newGrades) {
  const targetStudents = listStudents.filter(({ location }) => location === targetLocation);
  const results = targetStudents.map((obj) => {
    const targetNewGrade = newGrades.filter(({ studentId }) => studentId === obj.id);
    const grade = targetNewGrade[0] ? targetNewGrade[0].grade : 'N/A';
    return { ...obj, grade };
  });
  return results;
}
