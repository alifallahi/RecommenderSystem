    var  m23_checker1 = 0;
    var  m23_checker2 = 0;
    var  m23_checker3 = 0;
    var  m23_checker4 = 0;
    var  m23_checker5 = 0;


    function m23_mylight(m23_cell_number){
        var m23_x = m23_cell_number;

    

        if(m23_x=="1"){
        document.getElementById("m23_c1").style.color = "#ffba29";
        }
        
        else if(m23_x=="12"){
        document.getElementById("m23_c1").style.color = "#ffba29";
        document.getElementById("m23_c2").style.color = "#ffba29";
        }
        
        else if(m23_x=="123"){
        document.getElementById("m23_c1").style.color = "#ffba29";
        document.getElementById("m23_c2").style.color = "#ffba29";
        document.getElementById("m23_c3").style.color = "#ffba29";
        }

        else if(m23_x=="1234"){
        document.getElementById("m23_c1").style.color = "#ffba29";
        document.getElementById("m23_c2").style.color = "#ffba29";
        document.getElementById("m23_c3").style.color = "#ffba29";
        document.getElementById("m23_c4").style.color = "#ffba29";
        }

        else if(m23_x=="12345"){
        document.getElementById("m23_c1").style.color = "#ffba29";
        document.getElementById("m23_c2").style.color = "#ffba29";
        document.getElementById("m23_c3").style.color = "#ffba29";
        document.getElementById("m23_c4").style.color = "#ffba29";
        document.getElementById("m23_c5").style.color = "#ffba29";
        }

    

    }





    

    function m23_slecting(m23_input_number){

        var m23_y = m23_input_number;

        if(m23_y=="1"){
        document.getElementById("m23_c1").style.color = "orange";
        document.getElementById("m23_c2").style.color = "#808080";
        document.getElementById("m23_c3").style.color = "#808080";
        document.getElementById("m23_c4").style.color = "#808080";
        document.getElementById("m23_c5").style.color = "#808080";
        m23_checker1 = 1;
        m23_checker2 = 0;
        m23_checker3 = 0;
        m23_checker4 = 0;
        m23_checker5 = 0;
        }
        
        else if(m23_y=="12"){
        document.getElementById("m23_c1").style.color = "orange";
        document.getElementById("m23_c2").style.color = "orange";
        document.getElementById("m23_c3").style.color = "#808080";
        document.getElementById("m23_c4").style.color = "#808080";
        document.getElementById("m23_c5").style.color = "#808080";
        m23_checker1 = 1;
        m23_checker2 = 1;
        m23_checker3 = 0;
        m23_checker4 = 0;
        m23_checker5 = 0;
        }
        
        else if(m23_y=="123"){
        document.getElementById("m23_c1").style.color = "orange";
        document.getElementById("m23_c2").style.color = "orange";
        document.getElementById("m23_c3").style.color = "orange";
        document.getElementById("m23_c4").style.color = "#808080";
        document.getElementById("m23_c5").style.color = "#808080";
        m23_checker1 = 1;
        m23_checker2 = 1;
        m23_checker3 = 1;
        m23_checker4 = 0;
        m23_checker5 = 0;
        }

        else if(m23_y=="1234"){
        document.getElementById("m23_c1").style.color = "orange";
        document.getElementById("m23_c2").style.color = "orange";
        document.getElementById("m23_c3").style.color = "orange";
        document.getElementById("m23_c4").style.color = "orange";
        document.getElementById("m23_c5").style.color = "#808080";
        m23_checker1 = 1;
        m23_checker2 = 1;
        m23_checker3 = 1;
        m23_checker4 = 1;
        m23_checker5 = 0;
        }

        else if(m23_y=="12345"){
        document.getElementById("m23_c1").style.color = "orange";
        document.getElementById("m23_c2").style.color = "orange";
        document.getElementById("m23_c3").style.color = "orange";
        document.getElementById("m23_c4").style.color = "orange";
        document.getElementById("m23_c5").style.color = "orange";
        m23_checker1 = 1;
        m23_checker2 = 1;
        m23_checker3 = 1;
        m23_checker4 = 1;
        m23_checker5 = 1;
        }

    }



function m23_turnoff(){

    if( m23_checker1 != "1" && m23_checker2 != "1" && m23_checker3 != "1" && m23_checker4 != "1" && m23_checker5 != "1"){
        document.getElementById("m23_c1").style.color = "#808080";
        document.getElementById("m23_c2").style.color = "#808080";
        document.getElementById("m23_c3").style.color = "#808080";
        document.getElementById("m23_c4").style.color = "#808080";
        document.getElementById("m23_c5").style.color = "#808080";
    }

    if( m23_checker1 == "1" && m23_checker2 != "1" && m23_checker3 != "1" && m23_checker4 != "1" && m23_checker5 != "1"){
        document.getElementById("m23_c1").style.color = "orange";
        document.getElementById("m23_c2").style.color = "#808080";
        document.getElementById("m23_c3").style.color = "#808080";
        document.getElementById("m23_c4").style.color = "#808080";
        document.getElementById("m23_c5").style.color = "#808080";
    }

    if( m23_checker1 == "1" && m23_checker2 == "1" && m23_checker3 != "1" && m23_checker4 != "1" && m23_checker5 != "1"){
        document.getElementById("m23_c1").style.color = "orange";
        document.getElementById("m23_c2").style.color = "orange";
        document.getElementById("m23_c3").style.color = "#808080";
        document.getElementById("m23_c4").style.color = "#808080";
        document.getElementById("m23_c5").style.color = "#808080";
    }

    if( m23_checker1 == "1" && m23_checker2 == "1" && m23_checker3 == "1" && m23_checker4 != "1" && m23_checker5 != "1"){
        document.getElementById("m23_c1").style.color = "orange";
        document.getElementById("m23_c2").style.color = "orange";
        document.getElementById("m23_c3").style.color = "orange";
        document.getElementById("m23_c4").style.color = "#808080";
        document.getElementById("m23_c5").style.color = "#808080";
    }

    if( m23_checker1 == "1" && m23_checker2 == "1" && m23_checker3 == "1" && m23_checker4 == "1" && m23_checker5 != "1"){
        document.getElementById("m23_c1").style.color = "orange";
        document.getElementById("m23_c2").style.color = "orange";
        document.getElementById("m23_c3").style.color = "orange";
        document.getElementById("m23_c4").style.color = "orange";
        document.getElementById("m23_c5").style.color = "#808080";
    }

    if( m23_checker1 == "1" && m23_checker2 == "1" && m23_checker3 == "1" && m23_checker4 == "1" && m23_checker5 == "1"){
        document.getElementById("m23_c1").style.color = "orange";
        document.getElementById("m23_c2").style.color = "orange";
        document.getElementById("m23_c3").style.color = "orange";
        document.getElementById("m23_c4").style.color = "orange";
        document.getElementById("m23_c5").style.color = "orange";
    }
}  