    var  m15_checker1 = 0;
    var  m15_checker2 = 0;
    var  m15_checker3 = 0;
    var  m15_checker4 = 0;
    var  m15_checker5 = 0;


    function m15_mylight(m15_cell_number){
        var m15_x = m15_cell_number;

    

        if(m15_x=="1"){
        document.getElementById("m15_c1").style.color = "#ffba29";
        }
        
        else if(m15_x=="12"){
        document.getElementById("m15_c1").style.color = "#ffba29";
        document.getElementById("m15_c2").style.color = "#ffba29";
        }
        
        else if(m15_x=="123"){
        document.getElementById("m15_c1").style.color = "#ffba29";
        document.getElementById("m15_c2").style.color = "#ffba29";
        document.getElementById("m15_c3").style.color = "#ffba29";
        }

        else if(m15_x=="1234"){
        document.getElementById("m15_c1").style.color = "#ffba29";
        document.getElementById("m15_c2").style.color = "#ffba29";
        document.getElementById("m15_c3").style.color = "#ffba29";
        document.getElementById("m15_c4").style.color = "#ffba29";
        }

        else if(m15_x=="12345"){
        document.getElementById("m15_c1").style.color = "#ffba29";
        document.getElementById("m15_c2").style.color = "#ffba29";
        document.getElementById("m15_c3").style.color = "#ffba29";
        document.getElementById("m15_c4").style.color = "#ffba29";
        document.getElementById("m15_c5").style.color = "#ffba29";
        }

    

    }





    

    function m15_slecting(m15_input_number){

        var m15_y = m15_input_number;

        if(m15_y=="1"){
        document.getElementById("m15_c1").style.color = "orange";
        document.getElementById("m15_c2").style.color = "#808080";
        document.getElementById("m15_c3").style.color = "#808080";
        document.getElementById("m15_c4").style.color = "#808080";
        document.getElementById("m15_c5").style.color = "#808080";
        m15_checker1 = 1;
        m15_checker2 = 0;
        m15_checker3 = 0;
        m15_checker4 = 0;
        m15_checker5 = 0;
        }
        
        else if(m15_y=="12"){
        document.getElementById("m15_c1").style.color = "orange";
        document.getElementById("m15_c2").style.color = "orange";
        document.getElementById("m15_c3").style.color = "#808080";
        document.getElementById("m15_c4").style.color = "#808080";
        document.getElementById("m15_c5").style.color = "#808080";
        m15_checker1 = 1;
        m15_checker2 = 1;
        m15_checker3 = 0;
        m15_checker4 = 0;
        m15_checker5 = 0;
        }
        
        else if(m15_y=="123"){
        document.getElementById("m15_c1").style.color = "orange";
        document.getElementById("m15_c2").style.color = "orange";
        document.getElementById("m15_c3").style.color = "orange";
        document.getElementById("m15_c4").style.color = "#808080";
        document.getElementById("m15_c5").style.color = "#808080";
        m15_checker1 = 1;
        m15_checker2 = 1;
        m15_checker3 = 1;
        m15_checker4 = 0;
        m15_checker5 = 0;
        }

        else if(m15_y=="1234"){
        document.getElementById("m15_c1").style.color = "orange";
        document.getElementById("m15_c2").style.color = "orange";
        document.getElementById("m15_c3").style.color = "orange";
        document.getElementById("m15_c4").style.color = "orange";
        document.getElementById("m15_c5").style.color = "#808080";
        m15_checker1 = 1;
        m15_checker2 = 1;
        m15_checker3 = 1;
        m15_checker4 = 1;
        m15_checker5 = 0;
        }

        else if(m15_y=="12345"){
        document.getElementById("m15_c1").style.color = "orange";
        document.getElementById("m15_c2").style.color = "orange";
        document.getElementById("m15_c3").style.color = "orange";
        document.getElementById("m15_c4").style.color = "orange";
        document.getElementById("m15_c5").style.color = "orange";
        m15_checker1 = 1;
        m15_checker2 = 1;
        m15_checker3 = 1;
        m15_checker4 = 1;
        m15_checker5 = 1;
        }

    }



function m15_turnoff(){

    if( m15_checker1 != "1" && m15_checker2 != "1" && m15_checker3 != "1" && m15_checker4 != "1" && m15_checker5 != "1"){
        document.getElementById("m15_c1").style.color = "#808080";
        document.getElementById("m15_c2").style.color = "#808080";
        document.getElementById("m15_c3").style.color = "#808080";
        document.getElementById("m15_c4").style.color = "#808080";
        document.getElementById("m15_c5").style.color = "#808080";
    }

    if( m15_checker1 == "1" && m15_checker2 != "1" && m15_checker3 != "1" && m15_checker4 != "1" && m15_checker5 != "1"){
        document.getElementById("m15_c1").style.color = "orange";
        document.getElementById("m15_c2").style.color = "#808080";
        document.getElementById("m15_c3").style.color = "#808080";
        document.getElementById("m15_c4").style.color = "#808080";
        document.getElementById("m15_c5").style.color = "#808080";
    }

    if( m15_checker1 == "1" && m15_checker2 == "1" && m15_checker3 != "1" && m15_checker4 != "1" && m15_checker5 != "1"){
        document.getElementById("m15_c1").style.color = "orange";
        document.getElementById("m15_c2").style.color = "orange";
        document.getElementById("m15_c3").style.color = "#808080";
        document.getElementById("m15_c4").style.color = "#808080";
        document.getElementById("m15_c5").style.color = "#808080";
    }

    if( m15_checker1 == "1" && m15_checker2 == "1" && m15_checker3 == "1" && m15_checker4 != "1" && m15_checker5 != "1"){
        document.getElementById("m15_c1").style.color = "orange";
        document.getElementById("m15_c2").style.color = "orange";
        document.getElementById("m15_c3").style.color = "orange";
        document.getElementById("m15_c4").style.color = "#808080";
        document.getElementById("m15_c5").style.color = "#808080";
    }

    if( m15_checker1 == "1" && m15_checker2 == "1" && m15_checker3 == "1" && m15_checker4 == "1" && m15_checker5 != "1"){
        document.getElementById("m15_c1").style.color = "orange";
        document.getElementById("m15_c2").style.color = "orange";
        document.getElementById("m15_c3").style.color = "orange";
        document.getElementById("m15_c4").style.color = "orange";
        document.getElementById("m15_c5").style.color = "#808080";
    }

    if( m15_checker1 == "1" && m15_checker2 == "1" && m15_checker3 == "1" && m15_checker4 == "1" && m15_checker5 == "1"){
        document.getElementById("m15_c1").style.color = "orange";
        document.getElementById("m15_c2").style.color = "orange";
        document.getElementById("m15_c3").style.color = "orange";
        document.getElementById("m15_c4").style.color = "orange";
        document.getElementById("m15_c5").style.color = "orange";
    }
}  