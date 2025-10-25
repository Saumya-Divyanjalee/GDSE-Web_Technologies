import StudentDTO from "../dto/StudentDTO.js";
import student_db from "../db/DB.js";
// import {add_student, delete_student, update_student} from "../model/StudentModel";
import {add_student,delete_student,get_students,get_student_detail,update_student} from "../model/StudentModel.js";


// class Student{
//     constructor(f_name,l_name,address){
//         this.f_name=f_name;
//         this.l_name=l_name;
//         this.address=address;
//     }
//     get f_name(){
//         return this.f_name;
//     }
//     get l_name(){
//         return this.l_name;
//     }
//     get address(){
//         return this.address;
//     }
//     set f_name(f_name){
//         this.f_name = f_name;
//     }
//     set l_name(l_name){
//         this.l_name = l_name;
//     }
//     set address(address){
//         this.address = address;
//     }
// }
//
//
// let tbl_row;////////////////////////1
//     /////////////////////// 1.
//     // $('#student_save_btn').on('click', function(){
//     //     // console.log('save_btn_clicked...');
//     //
//     //     let f_name= $('#f_name').val();
//     //     // console.log("First Name: "+f_name);
//     //
//     //     let l_name =$('#l_name').val();
//     //     // console.log("Last Name: "+l_name);
//     //
//     //     let address=$('#address').val();
//     //     // console.log("Address: "+address);
//
//     ////////////////////////////////////////////////////////////
//
//
//     const add_student_record1 = (obj)=> {
//     // let tbl_row = "<tr><td>" + f_name + "</td><td>" + l_name + "</td><td>" + address + "</td></tr>";
//     let tbl_row = `<tr><td>${obj.f_name}</td><td>${obj.l_name}</td><td>${obj.address}</td></tr>`;
//
//     $("#student_table_body").append(tbl_row);
// }
//     $("#student_save_btn").on('click', function(){
//     console.log("save btn clicked");
//
//     let f_name =$("#f_name").val();
//     let l_name=$("#l_name").val();
//     let address=$("#address").val();
//
//     let student_obj = new Student(f_name,l_name,address);
//     // add_student_record1(f_name,l_name,address);
//             // add_student_record1();
// }
//     )
//
//     $("tr").on("click", () =>{
//     console.log("clicked");
// });
//
// ///////////////////////////////////////////
//
//     //click values showing txt field, txt area
//
//     let add_student_record = (f_name,l_name,address)=>{
//         let tbl_row = `<tr> <td>${obj.f_name}</td> <td>${obj.l_name}</td> <td>${obj.address}</td> </tr>` ;
//         $("#student_table_body").append(tbl_row);
//
//     }
//     $('#student_save_btn').on("click",function () {
//         console.log("clicked...");
//         let f_name = $('#f_name').val();
//         let l_name = $('#l_name').val();
//         let address = $('#address').val();
//         // console.log(f_name);
//         // console.log(l_name);
//         // console.log(address);
//         // let tbl_row = "<tr> <td>" + f_name + "</td> <td>" + l_name + "</td> <td>" + address + "</td> </tr>";//1 st version
//         // let tbl_row = <tr> <td>${f_name}</td> <td>${l_name}</td> <td>${address}</td> </tr>;//2 nd version
//         // $("#student_tbl_body").append(tbl_row);
//
//
//         /////////////////////////////////////
//
//         let student_obj = {
//             f_name:f_name,
//             l_name:l_name,
//             address:address,
//
//
//         };
//
//
//         add_student_record(f_name,l_name,address);
//     });
//
//     // $('#student_tbl_body').on('click','tr', function (){
//     //     let result =$(this).index();
//     //     console.log(result);
//     // });
//
//     $('#student_table_body').on('click','tr', function (){
//         tbl_row=$(this);///////////////////////////2
//
//
//         let tds =$(this).children();
//         let td1 =tds.eq(0).text();
//         let td2 =tds.eq(1).text();
//         let td3 =tds.eq(2).text();
//
//         $("#f_name").val(td1);
//         $("#l_name").val(td2);
//         $("#address").val(td3);
//     });
//     ///////////////////////////////////delete 3
//
//
// $("#student_delete_btn").on('click', () =>{
//     tbl_row.remove();
//     $("#student_reset_btn").click();//automatically delete and text field clear/reset
// })
//
//
//
//
//
//
//
//
//
//
// ==================== Student DTO =======================

// class StudentDTO {
//     constructor(f_name, l_name, address) {
//         this._f_name=f_name;
//         this._l_name=l_name;
//         this._address=address;
//     }
//
//     get f_name() {
//         return this._f_name;
//     }
//
//     get l_name() {
//         return this._l_name;
//     }
//
//     get address() {
//         return this._address;
//     }
//
//     set f_name(f_name) {
//         this._f_name=f_name;
//     }
//
//     set l_name(l_name) {
//         this._l_name=l_name;
//     }
//
//     set address(address) {
//         this._address=address;
//     }
//
// }



// const add_student_record = (obj) => {
// const load_student_record = (obj) => {
//     $("#student_table_body").empty();
//
//     student_db.map((obj, index) => {
//         let tbl_row = `<tr> <td>${obj.f_name}</td> <td>${obj.l_name}</td> <td>${obj.address}</td> <tr>`;
//         $("#student_table_body").append(tbl_row);
//     });
//
//
//     // let tbl_row = `<tr> <td>${obj.f_name}</td> <td>${obj.l_name}</td> <td>${obj.address}</td> <tr>`;
//     // $("#student_table_body").append(tbl_row);
// }
//
// $("#student_save_btn").on("click", function () {
//     console.log("save btn clicked!!!")
//     let f_name = $("#f_name").val();
//     let l_name = $("#l_name").val();
//     let address = $("#address").val();
//
//     let student_obj = new StudentDTO(f_name, l_name, address);
//     student_db.push(student_obj);//////////////////////
//     load_student_record();
// });
//
//
//
// $("#student_table_body").on('click', 'tr', function () {
//     // tbl_row = $(this);
//
//      tbl_row = $(this).index();
//     let tds = $(this).children();
//
//     let f_name = tds.eq(0).text(); // fname
//     let l_last = tds.eq(1).text(); // lname
//     let address = tds.eq(2).text(); // address
//
//     $("#f_name").val(f_name);
//     $("#l_name").val(l_last);
//     $("#address").val(address);
// });


//////////////////////////////////////////////////
const loads_student_tbl = () => {
    $("#student_table_body").empty();

    let student_list=get_students();

    student_db.map((obj, index) => {
        let tbl_row = `<tr> <td>${obj.f_name}</td> <td>${obj.l_name}</td> <td>${obj.address}</td> <tr>`;
        $("#student_table_body").append(tbl_row);
    });
}
////////////////// add
$("#student_save_btn").on("click", function () {
    let f_name = $("#f_name").val();
    let l_name = $("#l_name").val();
    let address = $("#address").val();

    // let student_obj = new StudentDTO(f_name, l_name, address);
    // student_db.push(student_obj);
    add_student(f_name, l_name, address);
    loads_student_tbl();
});

// ==================== Select Student =======================

$("#student_table_body").on('click', 'tr', function () {
    // tbl_row = $(this);

    let tbl_row = $(this).index();

    // let tds = $(this).children();
    //
    // let f_name = tds.eq(0).text(); // fname
    // let l_last = tds.eq(1).text(); // lname
    // let address = tds.eq(2).text(); // address

    let student_obj = get_student_detail(tbl_row);

    $("#f_name").val(f_name);
    $("#l_name").val(l_last);
    $("#address").val(address);
});


$("#student_delete_btn").on('click', () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
            });
        }
    });
    // tbl_row.remove();
    // $("#student_reset_btn").click();

    delete_student(tbl_row);
    // student_db.splice(tbl_row,1);
    loads_student_tbl();
    $("#student_reset_btn").click();
});

let tbl_row;
