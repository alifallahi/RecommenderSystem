    var  m1_checker1 = 0;
    var  m1_checker2 = 0;
    var  m1_checker3 = 0;
    var  m1_checker4 = 0;
    var  m1_checker5 = 0;


    function m1_mylight(m1_cell_number){
        var m1_x = m1_cell_number;

    

        if(m1_x=="1"){
        document.getElementById("m1_c1").style.color = "#ffba29";
        }
        
        else if(m1_x=="12"){
        document.getElementById("m1_c1").style.color = "#ffba29";
        document.getElementById("m1_c2").style.color = "#ffba29";
        }
        
        else if(m1_x=="123"){
        document.getElementById("m1_c1").style.color = "#ffba29";
        document.getElementById("m1_c2").style.color = "#ffba29";
        document.getElementById("m1_c3").style.color = "#ffba29";
        }

        else if(m1_x=="1234"){
        document.getElementById("m1_c1").style.color = "#ffba29";
        document.getElementById("m1_c2").style.color = "#ffba29";
        document.getElementById("m1_c3").style.color = "#ffba29";
        document.getElementById("m1_c4").style.color = "#ffba29";
        }

        else if(m1_x=="12345"){
        document.getElementById("m1_c1").style.color = "#ffba29";
        document.getElementById("m1_c2").style.color = "#ffba29";
        document.getElementById("m1_c3").style.color = "#ffba29";
        document.getElementById("m1_c4").style.color = "#ffba29";
        document.getElementById("m1_c5").style.color = "#ffba29";
        }

    

    }





    

    function m1_slecting(m1_input_number){

        var m1_y = m1_input_number;

        if(m1_y=="1"){
        document.getElementById("m1_c1").style.color = "orange";
        document.getElementById("m1_c2").style.color = "#808080";
        document.getElementById("m1_c3").style.color = "#808080";
        document.getElementById("m1_c4").style.color = "#808080";
        document.getElementById("m1_c5").style.color = "#808080";
        m1_checker1 = 1;
        m1_checker2 = 0;
        m1_checker3 = 0;
        m1_checker4 = 0;
        m1_checker5 = 0;
        }
        
        else if(m1_y=="12"){
        document.getElementById("m1_c1").style.color = "orange";
        document.getElementById("m1_c2").style.color = "orange";
        document.getElementById("m1_c3").style.color = "#808080";
        document.getElementById("m1_c4").style.color = "#808080";
        document.getElementById("m1_c5").style.color = "#808080";
        m1_checker1 = 1;
        m1_checker2 = 1;
        m1_checker3 = 0;
        m1_checker4 = 0;
        m1_checker5 = 0;
        }
        
        else if(m1_y=="123"){
        document.getElementById("m1_c1").style.color = "orange";
        document.getElementById("m1_c2").style.color = "orange";
        document.getElementById("m1_c3").style.color = "orange";
        document.getElementById("m1_c4").style.color = "#808080";
        document.getElementById("m1_c5").style.color = "#808080";
        m1_checker1 = 1;
        m1_checker2 = 1;
        m1_checker3 = 1;
        m1_checker4 = 0;
        m1_checker5 = 0;
        }

        else if(m1_y=="1234"){
        document.getElementById("m1_c1").style.color = "orange";
        document.getElementById("m1_c2").style.color = "orange";
        document.getElementById("m1_c3").style.color = "orange";
        document.getElementById("m1_c4").style.color = "orange";
        document.getElementById("m1_c5").style.color = "#808080";
        m1_checker1 = 1;
        m1_checker2 = 1;
        m1_checker3 = 1;
        m1_checker4 = 1;
        m1_checker5 = 0;
        }

        else if(m1_y=="12345"){
        document.getElementById("m1_c1").style.color = "orange";
        document.getElementById("m1_c2").style.color = "orange";
        document.getElementById("m1_c3").style.color = "orange";
        document.getElementById("m1_c4").style.color = "orange";
        document.getElementById("m1_c5").style.color = "orange";
        m1_checker1 = 1;
        m1_checker2 = 1;
        m1_checker3 = 1;
        m1_checker4 = 1;
        m1_checker5 = 1;
        }

    }



function m1_turnoff(){

    if( m1_checker1 != "1" && m1_checker2 != "1" && m1_checker3 != "1" && m1_checker4 != "1" && m1_checker5 != "1"){
        document.getElementById("m1_c1").style.color = "#808080";
        document.getElementById("m1_c2").style.color = "#808080";
        document.getElementById("m1_c3").style.color = "#808080";
        document.getElementById("m1_c4").style.color = "#808080";
        document.getElementById("m1_c5").style.color = "#808080";
    }

    if( m1_checker1 == "1" && m1_checker2 != "1" && m1_checker3 != "1" && m1_checker4 != "1" && m1_checker5 != "1"){
        document.getElementById("m1_c1").style.color = "orange";
        document.getElementById("m1_c2").style.color = "#808080";
        document.getElementById("m1_c3").style.color = "#808080";
        document.getElementById("m1_c4").style.color = "#808080";
        document.getElementById("m1_c5").style.color = "#808080";
    }

    if( m1_checker1 == "1" && m1_checker2 == "1" && m1_checker3 != "1" && m1_checker4 != "1" && m1_checker5 != "1"){
        document.getElementById("m1_c1").style.color = "orange";
        document.getElementById("m1_c2").style.color = "orange";
        document.getElementById("m1_c3").style.color = "#808080";
        document.getElementById("m1_c4").style.color = "#808080";
        document.getElementById("m1_c5").style.color = "#808080";
    }

    if( m1_checker1 == "1" && m1_checker2 == "1" && m1_checker3 == "1" && m1_checker4 != "1" && m1_checker5 != "1"){
        document.getElementById("m1_c1").style.color = "orange";
        document.getElementById("m1_c2").style.color = "orange";
        document.getElementById("m1_c3").style.color = "orange";
        document.getElementById("m1_c4").style.color = "#808080";
        document.getElementById("m1_c5").style.color = "#808080";
    }

    if( m1_checker1 == "1" && m1_checker2 == "1" && m1_checker3 == "1" && m1_checker4 == "1" && m1_checker5 != "1"){
        document.getElementById("m1_c1").style.color = "orange";
        document.getElementById("m1_c2").style.color = "orange";
        document.getElementById("m1_c3").style.color = "orange";
        document.getElementById("m1_c4").style.color = "orange";
        document.getElementById("m1_c5").style.color = "#808080";
    }

    if( m1_checker1 == "1" && m1_checker2 == "1" && m1_checker3 == "1" && m1_checker4 == "1" && m1_checker5 == "1"){
        document.getElementById("m1_c1").style.color = "orange";
        document.getElementById("m1_c2").style.color = "orange";
        document.getElementById("m1_c3").style.color = "orange";
        document.getElementById("m1_c4").style.color = "orange";
        document.getElementById("m1_c5").style.color = "orange";
    }
}  