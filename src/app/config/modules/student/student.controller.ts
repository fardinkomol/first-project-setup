import { Request, Response } from 'express';
import { StudentServices } from './student.service';
// import { z } from 'zod';
import studentValidationSchema from './student.zod.validation';

//import studentValidationSchema from './student.validation';
// import Joi from 'joi';
const createStudent = async (req: Request, res: Response) => {
  try {
    // creating a schema validation using zod

    // const studentValidationSchema = z.object({
    //   id: z.string(),
    //   name: z.object({
    //     firstName: z
    //       .string()
    //       .max(20, { message: 'First Name cannot be more than 20 characters' }),
    //   }),
    // });

    const { student: studentData } = req.body;

    //  data validation using joi
    // const { error, value } = studentValidationSchema.validate(studentData);

    // data validation using zod

    const zodparsedData = studentValidationSchema.parse(studentData);

    const result = await StudentServices.createStudentintoDB(zodparsedData);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong',
    //     error: error.details,
    //   });
    // }

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      data: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
