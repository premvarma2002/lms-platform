// Admin and grant access to teacher mode from clerk.com and .env NEXT_PUBLIC_TEACHER_ID 

export const isTeacher = (userId?: string | null) => {
    return userId === process.env.NEXT_PUBLIC_TEACHER_ID;
  }