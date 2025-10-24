let tbl_row;////////////////////////1
    /////////////////////// 1.
    // $('#student_save_btn').on('click', function(){
    //     // console.log('save_btn_clicked...');
    //
    //     let f_name= $('#f_name').val();
    //     // console.log("First Name: "+f_name);
    //
    //     let l_name =$('#l_name').val();
    //     // console.log("Last Name: "+l_name);
    //
    //     let address=$('#address').val();
    //     // console.log("Address: "+address);

    ////////////////////////////////////////////////////////////


    const add_student_record1 = (f_name,l_name,address)=> {
    // let tbl_row = "<tr><td>" + f_name + "</td><td>" + l_name + "</td><td>" + address + "</td></tr>";
    let tbl_row = `<tr><td>${f_name}</td><td>${l_name}</td><td>${address}</td></tr>`;

    $("#student_table_body").append(tbl_row);
}
    $("#student_save_btn").on('click', function(){
    console.log("save btn clicked");

    let f_name =$("#f_name").val();
    let l_name=$("#l_name").val();
    let address=$("#address").val();

    add_student_record1(f_name,l_name,address);
}
    )

    $("tr").on("click", () =>{
    console.log("clicked");
});

///////////////////////////////////////////

    //click values showing txt field, txt area

    let add_student_record = (f_name,l_name,address)=>{
        let tbl_row = `<tr> <td>${f_name}</td> <td>${l_name}</td> <td>${address}</td> </tr>` ;
        $("#student_table_body").append(tbl_row);

    }
    $('#student_save_btn').on("click",function () {
        console.log("clicked...");
        let f_name = $('#f_name').val();
        let l_name = $('#l_name').val();
        let address = $('#address').val();
        // console.log(f_name);
        // console.log(l_name);
        // console.log(address);
        // let tbl_row = "<tr> <td>" + f_name + "</td> <td>" + l_name + "</td> <td>" + address + "</td> </tr>";//1 st version
        // let tbl_row = <tr> <td>${f_name}</td> <td>${l_name}</td> <td>${address}</td> </tr>;//2 nd version
        // $("#student_tbl_body").append(tbl_row);
        add_student_record(f_name,l_name,address);
    });

    // $('#student_tbl_body').on('click','tr', function (){
    //     let result =$(this).index();
    //     console.log(result);
    // });

    $('#student_table_body').on('click','tr', function (){
        tbl_row=$(this);///////////////////////////2


        let tds =$(this).children();
        let td1 =tds.eq(0).text();
        let td2 =tds.eq(1).text();
        let td3 =tds.eq(2).text();

        $("#f_name").val(td1);
        $("#l_name").val(td2);
        $("#address").val(td3);
    });
    ///////////////////////////////////delete 3


$("#student_delete_btn").on('click', () =>{
    tbl_row.remove();
    $("#student_reset_btn").click();//automatically delete and text field clear/reset
})








