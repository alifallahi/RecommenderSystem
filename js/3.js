    var  m3_checker1 = 0;
    var  m3_checker2 = 0;
    var  m3_checker3 = 0;
    var  m3_checker4 = 0;
    var  m3_checker5 = 0;


    function m3_mylight(m3_cell_number){
        var m3_x = m3_cell_number;

    

        if(m3_x=="1"){
        document.getElementById("m3_c1").style.color = "#ffba29";
        }
        
        else if(m3_x=="12"){
        document.getElementById("m3_c1").style.color = "#ffba29";
        document.getElementById("m3_c2").style.color = "#ffba29";
        }
        
        else if(m3_x=="123"){
        document.getElementById("m3_c1").style.color = "#ffba29";
        document.getElementById("m3_c2").style.color = "#ffba29";
        document.getElementById("m3_c3").style.color = "#ffba29";
        }

        else if(m3_x=="1234"){
        document.getElementById("m3_c1").style.color = "#ffba29";
        document.getElementById("m3_c2").style.color = "#ffba29";
        document.getElementById("m3_c3").style.color = "#ffba29";
        document.getElementById("m3_c4").style.color = "#ffba29";
        }

        else if(m3_x=="12345"){
        document.getElementById("m3_c1").style.color = "#ffba29";
        document.getElementById("m3_c2").style.color = "#ffba29";
        document.getElementById("m3_c3").style.color = "#ffba29";
        document.getElementById("m3_c4").style.color = "#ffba29";
        document.getElementById("m3_c5").style.color = "#ffba29";
        }

    

    }





    

    function m3_slecting(m3_input_number){

        var m3_y = m3_input_number;

        if(m3_y=="1"){
        document.getElementById("m3_c1").style.color = "orange";
        document.getElementById("m3_c2").style.color = "#808080";
        document.getElementById("m3_c3").style.color = "#808080";
        document.getElementById("m3_c4").style.color = "#808080";
        document.getElementById("m3_c5").style.color = "#808080";
        m3_checker1 = 1;
        m3_checker2 = 0;
        m3_checker3 = 0;
        m3_checker4 = 0;
        m3_checker5 = 0;
        }
        
        else if(m3_y=="12"){
        document.getElementById("m3_c1").style.color = "orange";
        document.getElementById("m3_c2").style.color = "orange";
        document.getElementById("m3_c3").style.color = "#808080";
        document.getElementById("m3_c4").style.color = "#808080";
        document.getElementById("m3_c5").style.color = "#808080";
        m3_checker1 = 1;
        m3_checker2 = 1;
        m3_checker3 = 0;
        m3_checker4 = 0;
        m3_checker5 = 0;
        }
        
        else if(m3_y=="123"){
        document.getElementById("m3_c1").style.color = "orange";
        document.getElementById("m3_c2").style.color = "orange";
        document.getElementById("m3_c3").style.color = "orange";
        document.getElementById("m3_c4").style.color = "#808080";
        document.getElementById("m3_c5").style.color = "#808080";
        m3_checker1 = 1;
        m3_checker2 = 1;
        m3_checker3 = 1;
        m3_checker4 = 0;
        m3_checker5 = 0;
        }

        else if(m3_y=="1234"){
        document.getElementById("m3_c1").style.color = "orange";
        document.getElementById("m3_c2").style.color = "orange";
        document.getElementById("m3_c3").style.color = "orange";
        document.getElementById("m3_c4").style.color = "orange";
        document.getElementById("m3_c5").style.color = "#808080";
        m3_checker1 = 1;
        m3_checker2 = 1;
        m3_checker3 = 1;
        m3_checker4 = 1;
        m3_checker5 = 0;
        }

        else if(m3_y=="12345"){
        document.getElementById("m3_c1").style.color = "orange";
        document.getElementById("m3_c2").style.color = "orange";
        document.getElementById("m3_c3").style.color = "orange";
        document.getElementById("m3_c4").style.color = "orange";
        document.getElementById("m3_c5").style.color = "orange";
        m3_checker1 = 1;
        m3_checker2 = 1;
        m3_checker3 = 1;
        m3_checker4 = 1;
        m3_checker5 = 1;
        }

    }



function m3_turnoff(){

    if( m3_checker1 != "1" && m3_checker2 != "1" && m3_checker3 != "1" && m3_checker4 != "1" && m3_checker5 != "1"){
        document.getElementById("m3_c1").style.color = "#808080";
        document.getElementById("m3_c2").style.color = "#808080";
        document.getElementById("m3_c3").style.color = "#808080";
        document.getElementById("m3_c4").style.color = "#808080";
        document.getElementById("m3_c5").style.color = "#808080";
    }

    if( m3_checker1 == "1" && m3_checker2 != "1" && m3_checker3 != "1" && m3_checker4 != "1" && m3_checker5 != "1"){
        document.getElementById("m3_c1").style.color = "orange";
        document.getElementById("m3_c2").style.color = "#808080";
        document.getElementById("m3_c3").style.color = "#808080";
        document.getElementById("m3_c4").style.color = "#808080";
        document.getElementById("m3_c5").style.color = "#808080";
    }

    if( m3_checker1 == "1" && m3_checker2 == "1" && m3_checker3 != "1" && m3_checker4 != "1" && m3_checker5 != "1"){
        document.getElementById("m3_c1").style.color = "orange";
        document.getElementById("m3_c2").style.color = "orange";
        document.getElementById("m3_c3").style.color = "#808080";
        document.getElementById("m3_c4").style.color = "#808080";
        document.getElementById("m3_c5").style.color = "#808080";
    }

    if( m3_checker1 == "1" && m3_checker2 == "1" && m3_checker3 == "1" && m3_checker4 != "1" && m3_checker5 != "1"){
        document.getElementById("m3_c1").style.color = "orange";
        document.getElementById("m3_c2").style.color = "orange";
        document.getElementById("m3_c3").style.color = "orange";
        document.getElementById("m3_c4").style.color = "#808080";
        document.getElementById("m3_c5").style.color = "#808080";
    }

    if( m3_checker1 == "1" && m3_checker2 == "1" && m3_checker3 == "1" && m3_checker4 == "1" && m3_checker5 != "1"){
        document.getElementById("m3_c1").style.color = "orange";
        document.getElementById("m3_c2").style.color = "orange";
        document.getElementById("m3_c3").style.color = "orange";
        document.getElementById("m3_c4").style.color = "orange";
        document.getElementById("m3_c5").style.color = "#808080";
    }

    if( m3_checker1 == "1" && m3_checker2 == "1" && m3_checker3 == "1" && m3_checker4 == "1" && m3_checker5 == "1"){
        document.getElementById("m3_c1").style.color = "orange";
        document.getElementById("m3_c2").style.color = "orange";
        document.getElementById("m3_c3").style.color = "orange";
        document.getElementById("m3_c4").style.color = "orange";1
        document.getElementById("m3_c5").style.color = "orange";
    }
}