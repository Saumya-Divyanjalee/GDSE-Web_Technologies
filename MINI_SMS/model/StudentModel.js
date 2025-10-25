import student_db from "../db/DB.js";
// import studentDTO from "../dto/StudentDTO";
import StudentDTO from "../dto/StudentDTO.js";

////////////////////// add
const add_student = (f_name,l_name,address) => {
    // student_db.push(obj);
    let student_obj = new StudentDTO(f_name, l_name, address);
    student_db.push(student_obj);


}

////////////// delete

const delete_student = (index) => {
    student_db.splice(index, 1);
}


//////////////////// get students

const get_students = () => {
    return student_db;

}
const get_student_detail = (id) => {
    return student_db[id];
}

///////////////////////// update
const update_student = (index) => {
    student_db.splice(index, 1);
}

// export default add_student;
export {add_student, delete_student,get_students,get_student_detail,update_student}