    var  m16_checker1 = 0;
    var  m16_checker2 = 0;
    var  m16_checker3 = 0;
    var  m16_checker4 = 0;
    var  m16_checker5 = 0;


    function m16_mylight(m16_cell_number){
        var m16_x = m16_cell_number;

    

        if(m16_x=="1"){
        document.getElementById("m16_c1").style.color = "#ffba29";
        }
        
        else if(m16_x=="12"){
        document.getElementById("m16_c1").style.color = "#ffba29";
        document.getElementById("m16_c2").style.color = "#ffba29";
        }
        
        else if(m16_x=="123"){
        document.getElementById("m16_c1").style.color = "#ffba29";
        document.getElementById("m16_c2").style.color = "#ffba29";
        document.getElementById("m16_c3").style.color = "#ffba29";
        }

        else if(m16_x=="1234"){
        document.getElementById("m16_c1").style.color = "#ffba29";
        document.getElementById("m16_c2").style.color = "#ffba29";
        document.getElementById("m16_c3").style.color = "#ffba29";
        document.getElementById("m16_c4").style.color = "#ffba29";
        }

        else if(m16_x=="12345"){
        document.getElementById("m16_c1").style.color = "#ffba29";
        document.getElementById("m16_c2").style.color = "#ffba29";
        document.getElementById("m16_c3").style.color = "#ffba29";
        document.getElementById("m16_c4").style.color = "#ffba29";
        document.getElementById("m16_c5").style.color = "#ffba29";
        }

    

    }





    

    function m16_slecting(m16_input_number){

        var m16_y = m16_input_number;

        if(m16_y=="1"){
        document.getElementById("m16_c1").style.color = "orange";
        document.getElementById("m16_c2").style.color = "#808080";
        document.getElementById("m16_c3").style.color = "#808080";
        document.getElementById("m16_c4").style.color = "#808080";
        document.getElementById("m16_c5").style.color = "#808080";
        m16_checker1 = 1;
        m16_checker2 = 0;
        m16_checker3 = 0;
        m16_checker4 = 0;
        m16_checker5 = 0;
        }
        
        else if(m16_y=="12"){
        document.getElementById("m16_c1").style.color = "orange";
        document.getElementById("m16_c2").style.color = "orange";
        document.getElementById("m16_c3").style.color = "#808080";
        document.getElementById("m16_c4").style.color = "#808080";
        document.getElementById("m16_c5").style.color = "#808080";
        m16_checker1 = 1;
        m16_checker2 = 1;
        m16_checker3 = 0;
        m16_checker4 = 0;
        m16_checker5 = 0;
        }
        
        else if(m16_y=="123"){
        document.getElementById("m16_c1").style.color = "orange";
        document.getElementById("m16_c2").style.color = "orange";
        document.getElementById("m16_c3").style.color = "orange";
        document.getElementById("m16_c4").style.color = "#808080";
        document.getElementById("m16_c5").style.color = "#808080";
        m16_checker1 = 1;
        m16_checker2 = 1;
        m16_checker3 = 1;
        m16_checker4 = 0;
        m16_checker5 = 0;
        }

        else if(m16_y=="1234"){
        document.getElementById("m16_c1").style.color = "orange";
        document.getElementById("m16_c2").style.color = "orange";
        document.getElementById("m16_c3").style.color = "orange";
        document.getElementById("m16_c4").style.color = "orange";
        document.getElementById("m16_c5").style.color = "#808080";
        m16_checker1 = 1;
        m16_checker2 = 1;
        m16_checker3 = 1;
        m16_checker4 = 1;
        m16_checker5 = 0;
        }

        else if(m16_y=="12345"){
        document.getElementById("m16_c1").style.color = "orange";
        document.getElementById("m16_c2").style.color = "orange";
        document.getElementById("m16_c3").style.color = "orange";
        document.getElementById("m16_c4").style.color = "orange";
        document.getElementById("m16_c5").style.color = "orange";
        m16_checker1 = 1;
        m16_checker2 = 1;
        m16_checker3 = 1;
        m16_checker4 = 1;
        m16_checker5 = 1;
        }

    }



function m16_turnoff(){

    if( m16_checker1 != "1" && m16_checker2 != "1" && m16_checker3 != "1" && m16_checker4 != "1" && m16_checker5 != "1"){
        document.getElementById("m16_c1").style.color = "#808080";
        document.getElementById("m16_c2").style.color = "#808080";
        document.getElementById("m16_c3").style.color = "#808080";
        document.getElementById("m16_c4").style.color = "#808080";
        document.getElementById("m16_c5").style.color = "#808080";
    }

    if( m16_checker1 == "1" && m16_checker2 != "1" && m16_checker3 != "1" && m16_checker4 != "1" && m16_checker5 != "1"){
        document.getElementById("m16_c1").style.color = "orange";
        document.getElementById("m16_c2").style.color = "#808080";
        document.getElementById("m16_c3").style.color = "#808080";
        document.getElementById("m16_c4").style.color = "#808080";
        document.getElementById("m16_c5").style.color = "#808080";
    }

    if( m16_checker1 == "1" && m16_checker2 == "1" && m16_checker3 != "1" && m16_checker4 != "1" && m16_checker5 != "1"){
        document.getElementById("m16_c1").style.color = "orange";
        document.getElementById("m16_c2").style.color = "orange";
        document.getElementById("m16_c3").style.color = "#808080";
        document.getElementById("m16_c4").style.color = "#808080";
        document.getElementById("m16_c5").style.color = "#808080";
    }

    if( m16_checker1 == "1" && m16_checker2 == "1" && m16_checker3 == "1" && m16_checker4 != "1" && m16_checker5 != "1"){
        document.getElementById("m16_c1").style.color = "orange";
        document.getElementById("m16_c2").style.color = "orange";
        document.getElementById("m16_c3").style.color = "orange";
        document.getElementById("m16_c4").style.color = "#808080";
        document.getElementById("m16_c5").style.color = "#808080";
    }

    if( m16_checker1 == "1" && m16_checker2 == "1" && m16_checker3 == "1" && m16_checker4 == "1" && m16_checker5 != "1"){
        document.getElementById("m16_c1").style.color = "orange";
        document.getElementById("m16_c2").style.color = "orange";
        document.getElementById("m16_c3").style.color = "orange";
        document.getElementById("m16_c4").style.color = "orange";
        document.getElementById("m16_c5").style.color = "#808080";
    }

    if( m16_checker1 == "1" && m16_checker2 == "1" && m16_checker3 == "1" && m16_checker4 == "1" && m16_checker5 == "1"){
        document.getElementById("m16_c1").style.color = "orange";
        document.getElementById("m16_c2").style.color = "orange";
        document.getElementById("m16_c3").style.color = "orange";
        document.getElementById("m16_c4").style.color = "orange";
        document.getElementById("m16_c5").style.color = "orange";
    }
}  