import {CourseInterface} from "../interfaces/course.interface";
export class Course implements Course {
    id: number;
    title: string;
    description: string;
    duration: number;
    date: Date;
}
