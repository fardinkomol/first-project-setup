import { z } from 'zod';

// Define Zod schema for UserName
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, { message: 'First Name cannot be more than 20 characters' })
    .regex(/^[A-Z][a-z]*$/, {
      message: 'First name must start with a capital letter',
    }),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .trim()
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: 'Last name must contain only letters',
    }),
});

// Define Zod schema for Guardian
const guardianValidationSchema = z.object({
  fatherName: z.string().trim(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

// Define Zod schema for LocalGuardian
const localGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

// Define Zod schema for Student
const studentValidationSchema = z.object({
  id: z.string(),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string(),
  email: z.string().email({ message: 'Invalid email format' }),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
});

export { studentValidationSchema };
export default studentValidationSchema;
