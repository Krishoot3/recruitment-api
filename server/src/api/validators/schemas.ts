import * as yup from 'yup';

export const candidateSchema = yup.object().shape({
    fullName: yup.string().min(3).max(200).required(),
    salary: yup.number().min(4).max(20000).required(),
    skills: yup.string().min(3).max(200).required()
});

export const usersSchema = yup.object().shape({
    email: yup.string().email().min(5).max(50).required(),
    password: yup.string().min(8).max(100).required()
});