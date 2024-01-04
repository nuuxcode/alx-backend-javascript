export default class HolbertonCourse {
  constructor(name, length, students) {
    this._checkType(name, 'string', 'Name');
    this._checkType(length, 'number', 'Length');
    this._checkType(students, 'array', 'Students');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._checkType(name, 'string', 'Name');
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._checkType(length, 'number', 'Length');
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._checkType(students, 'array', 'Students');
    students.forEach((student) => this._checkType(student, 'string', 'Students'));
    this._students = students;
  }

  // eslint-disable-next-line class-methods-use-this
  _checkType(value, type, variableName, errorMessageParam) {
    let errorMessage = errorMessageParam;
    if (!errorMessage) {
      switch (type) {
        case 'string':
          errorMessage = `${variableName} must be a string`;
          break;
        case 'number':
          errorMessage = `${variableName} must be a number`;
          break;
        case 'array':
          errorMessage = `${variableName} must be an array of strings`;
          break;
        default:
          errorMessage = 'Invalid type';
      }
    }

    if (type === 'array') {
      if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
        throw new TypeError(errorMessage);
      }
      // eslint-disable-next-line valid-typeof
    } else if (typeof value !== type) {
      throw new TypeError(errorMessage);
    }
  }
}
