    var  m9_checker1 = 0;
    var  m9_checker2 = 0;
    var  m9_checker3 = 0;
    var  m9_checker4 = 0;
    var  m9_checker5 = 0;


    function m9_mylight(m9_cell_number){
        var m9_x = m9_cell_number;

    

        if(m9_x=="1"){
        document.getElementById("m9_c1").style.color = "#ffba29";
        }
        
        else if(m9_x=="12"){
        document.getElementById("m9_c1").style.color = "#ffba29";
        document.getElementById("m9_c2").style.color = "#ffba29";
        }
        
        else if(m9_x=="123"){
        document.getElementById("m9_c1").style.color = "#ffba29";
        document.getElementById("m9_c2").style.color = "#ffba29";
        document.getElementById("m9_c3").style.color = "#ffba29";
        }

        else if(m9_x=="1234"){
        document.getElementById("m9_c1").style.color = "#ffba29";
        document.getElementById("m9_c2").style.color = "#ffba29";
        document.getElementById("m9_c3").style.color = "#ffba29";
        document.getElementById("m9_c4").style.color = "#ffba29";
        }

        else if(m9_x=="12345"){
        document.getElementById("m9_c1").style.color = "#ffba29";
        document.getElementById("m9_c2").style.color = "#ffba29";
        document.getElementById("m9_c3").style.color = "#ffba29";
        document.getElementById("m9_c4").style.color = "#ffba29";
        document.getElementById("m9_c5").style.color = "#ffba29";
        }

    

    }





    

    function m9_slecting(m9_input_number){

        var m9_y = m9_input_number;

        if(m9_y=="1"){
        document.getElementById("m9_c1").style.color = "orange";
        document.getElementById("m9_c2").style.color = "#808080";
        document.getElementById("m9_c3").style.color = "#808080";
        document.getElementById("m9_c4").style.color = "#808080";
        document.getElementById("m9_c5").style.color = "#808080";
        m9_checker1 = 1;
        m9_checker2 = 0;
        m9_checker3 = 0;
        m9_checker4 = 0;
        m9_checker5 = 0;
        }
        
        else if(m9_y=="12"){
        document.getElementById("m9_c1").style.color = "orange";
        document.getElementById("m9_c2").style.color = "orange";
        document.getElementById("m9_c3").style.color = "#808080";
        document.getElementById("m9_c4").style.color = "#808080";
        document.getElementById("m9_c5").style.color = "#808080";
        m9_checker1 = 1;
        m9_checker2 = 1;
        m9_checker3 = 0;
        m9_checker4 = 0;
        m9_checker5 = 0;
        }
        
        else if(m9_y=="123"){
        document.getElementById("m9_c1").style.color = "orange";
        document.getElementById("m9_c2").style.color = "orange";
        document.getElementById("m9_c3").style.color = "orange";
        document.getElementById("m9_c4").style.color = "#808080";
        document.getElementById("m9_c5").style.color = "#808080";
        m9_checker1 = 1;
        m9_checker2 = 1;
        m9_checker3 = 1;
        m9_checker4 = 0;
        m9_checker5 = 0;
        }

        else if(m9_y=="1234"){
        document.getElementById("m9_c1").style.color = "orange";
        document.getElementById("m9_c2").style.color = "orange";
        document.getElementById("m9_c3").style.color = "orange";
        document.getElementById("m9_c4").style.color = "orange";
        document.getElementById("m9_c5").style.color = "#808080";
        m9_checker1 = 1;
        m9_checker2 = 1;
        m9_checker3 = 1;
        m9_checker4 = 1;
        m9_checker5 = 0;
        }

        else if(m9_y=="12345"){
        document.getElementById("m9_c1").style.color = "orange";
        document.getElementById("m9_c2").style.color = "orange";
        document.getElementById("m9_c3").style.color = "orange";
        document.getElementById("m9_c4").style.color = "orange";
        document.getElementById("m9_c5").style.color = "orange";
        m9_checker1 = 1;
        m9_checker2 = 1;
        m9_checker3 = 1;
        m9_checker4 = 1;
        m9_checker5 = 1;
        }

    }



function m9_turnoff(){

    if( m9_checker1 != "1" && m9_checker2 != "1" && m9_checker3 != "1" && m9_checker4 != "1" && m9_checker5 != "1"){
        document.getElementById("m9_c1").style.color = "#808080";
        document.getElementById("m9_c2").style.color = "#808080";
        document.getElementById("m9_c3").style.color = "#808080";
        document.getElementById("m9_c4").style.color = "#808080";
        document.getElementById("m9_c5").style.color = "#808080";
    }

    if( m9_checker1 == "1" && m9_checker2 != "1" && m9_checker3 != "1" && m9_checker4 != "1" && m9_checker5 != "1"){
        document.getElementById("m9_c1").style.color = "orange";
        document.getElementById("m9_c2").style.color = "#808080";
        document.getElementById("m9_c3").style.color = "#808080";
        document.getElementById("m9_c4").style.color = "#808080";
        document.getElementById("m9_c5").style.color = "#808080";
    }

    if( m9_checker1 == "1" && m9_checker2 == "1" && m9_checker3 != "1" && m9_checker4 != "1" && m9_checker5 != "1"){
        document.getElementById("m9_c1").style.color = "orange";
        document.getElementById("m9_c2").style.color = "orange";
        document.getElementById("m9_c3").style.color = "#808080";
        document.getElementById("m9_c4").style.color = "#808080";
        document.getElementById("m9_c5").style.color = "#808080";
    }

    if( m9_checker1 == "1" && m9_checker2 == "1" && m9_checker3 == "1" && m9_checker4 != "1" && m9_checker5 != "1"){
        document.getElementById("m9_c1").style.color = "orange";
        document.getElementById("m9_c2").style.color = "orange";
        document.getElementById("m9_c3").style.color = "orange";
        document.getElementById("m9_c4").style.color = "#808080";
        document.getElementById("m9_c5").style.color = "#808080";
    }

    if( m9_checker1 == "1" && m9_checker2 == "1" && m9_checker3 == "1" && m9_checker4 == "1" && m9_checker5 != "1"){
        document.getElementById("m9_c1").style.color = "orange";
        document.getElementById("m9_c2").style.color = "orange";
        document.getElementById("m9_c3").style.color = "orange";
        document.getElementById("m9_c4").style.color = "orange";
        document.getElementById("m9_c5").style.color = "#808080";
    }

    if( m9_checker1 == "1" && m9_checker2 == "1" && m9_checker3 == "1" && m9_checker4 == "1" && m9_checker5 == "1"){
        document.getElementById("m9_c1").style.color = "orange";
        document.getElementById("m9_c2").style.color = "orange";
        document.getElementById("m9_c3").style.color = "orange";
        document.getElementById("m9_c4").style.color = "orange";1
        document.getElementById("m9_c5").style.color = "orange";
    }
}