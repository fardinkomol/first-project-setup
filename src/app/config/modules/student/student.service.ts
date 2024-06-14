import { StudentModel } from './student.modal';
import { Student } from './student.interface';
const createStudentintoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
export const StudentServices = { createStudentintoDB };
