export default function getListStudents() {
  const studentsArray = [
    ['Guillaume', 1, 'San Francisco'],
    ['James', 2, 'Columbia'],
    ['Serena', 5, 'San Francisco'],
  ];
  return studentsArray.map(([firstName, id, location]) => ({ id, firstName, location }));
}
