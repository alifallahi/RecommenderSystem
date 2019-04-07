    var  m5_checker1 = 0;
    var  m5_checker2 = 0;
    var  m5_checker3 = 0;
    var  m5_checker4 = 0;
    var  m5_checker5 = 0;


    function m5_mylight(m5_cell_number){
        var m5_x = m5_cell_number;

    

        if(m5_x=="1"){
        document.getElementById("m5_c1").style.color = "#ffba29";
        }
        
        else if(m5_x=="12"){
        document.getElementById("m5_c1").style.color = "#ffba29";
        document.getElementById("m5_c2").style.color = "#ffba29";
        }
        
        else if(m5_x=="123"){
        document.getElementById("m5_c1").style.color = "#ffba29";
        document.getElementById("m5_c2").style.color = "#ffba29";
        document.getElementById("m5_c3").style.color = "#ffba29";
        }

        else if(m5_x=="1234"){
        document.getElementById("m5_c1").style.color = "#ffba29";
        document.getElementById("m5_c2").style.color = "#ffba29";
        document.getElementById("m5_c3").style.color = "#ffba29";
        document.getElementById("m5_c4").style.color = "#ffba29";
        }

        else if(m5_x=="12345"){
        document.getElementById("m5_c1").style.color = "#ffba29";
        document.getElementById("m5_c2").style.color = "#ffba29";
        document.getElementById("m5_c3").style.color = "#ffba29";
        document.getElementById("m5_c4").style.color = "#ffba29";
        document.getElementById("m5_c5").style.color = "#ffba29";
        }

    

    }





    

    function m5_slecting(m5_input_number){

        var m5_y = m5_input_number;

        if(m5_y=="1"){
        document.getElementById("m5_c1").style.color = "orange";
        document.getElementById("m5_c2").style.color = "#808080";
        document.getElementById("m5_c3").style.color = "#808080";
        document.getElementById("m5_c4").style.color = "#808080";
        document.getElementById("m5_c5").style.color = "#808080";
        m5_checker1 = 1;
        m5_checker2 = 0;
        m5_checker3 = 0;
        m5_checker4 = 0;
        m5_checker5 = 0;
        }
        
        else if(m5_y=="12"){
        document.getElementById("m5_c1").style.color = "orange";
        document.getElementById("m5_c2").style.color = "orange";
        document.getElementById("m5_c3").style.color = "#808080";
        document.getElementById("m5_c4").style.color = "#808080";
        document.getElementById("m5_c5").style.color = "#808080";
        m5_checker1 = 1;
        m5_checker2 = 1;
        m5_checker3 = 0;
        m5_checker4 = 0;
        m5_checker5 = 0;
        }
        
        else if(m5_y=="123"){
        document.getElementById("m5_c1").style.color = "orange";
        document.getElementById("m5_c2").style.color = "orange";
        document.getElementById("m5_c3").style.color = "orange";
        document.getElementById("m5_c4").style.color = "#808080";
        document.getElementById("m5_c5").style.color = "#808080";
        m5_checker1 = 1;
        m5_checker2 = 1;
        m5_checker3 = 1;
        m5_checker4 = 0;
        m5_checker5 = 0;
        }

        else if(m5_y=="1234"){
        document.getElementById("m5_c1").style.color = "orange";
        document.getElementById("m5_c2").style.color = "orange";
        document.getElementById("m5_c3").style.color = "orange";
        document.getElementById("m5_c4").style.color = "orange";
        document.getElementById("m5_c5").style.color = "#808080";
        m5_checker1 = 1;
        m5_checker2 = 1;
        m5_checker3 = 1;
        m5_checker4 = 1;
        m5_checker5 = 0;
        }

        else if(m5_y=="12345"){
        document.getElementById("m5_c1").style.color = "orange";
        document.getElementById("m5_c2").style.color = "orange";
        document.getElementById("m5_c3").style.color = "orange";
        document.getElementById("m5_c4").style.color = "orange";
        document.getElementById("m5_c5").style.color = "orange";
        m5_checker1 = 1;
        m5_checker2 = 1;
        m5_checker3 = 1;
        m5_checker4 = 1;
        m5_checker5 = 1;
        }

    }



function m5_turnoff(){

    if( m5_checker1 != "1" && m5_checker2 != "1" && m5_checker3 != "1" && m5_checker4 != "1" && m5_checker5 != "1"){
        document.getElementById("m5_c1").style.color = "#808080";
        document.getElementById("m5_c2").style.color = "#808080";
        document.getElementById("m5_c3").style.color = "#808080";
        document.getElementById("m5_c4").style.color = "#808080";
        document.getElementById("m5_c5").style.color = "#808080";
    }

    if( m5_checker1 == "1" && m5_checker2 != "1" && m5_checker3 != "1" && m5_checker4 != "1" && m5_checker5 != "1"){
        document.getElementById("m5_c1").style.color = "orange";
        document.getElementById("m5_c2").style.color = "#808080";
        document.getElementById("m5_c3").style.color = "#808080";
        document.getElementById("m5_c4").style.color = "#808080";
        document.getElementById("m5_c5").style.color = "#808080";
    }

    if( m5_checker1 == "1" && m5_checker2 == "1" && m5_checker3 != "1" && m5_checker4 != "1" && m5_checker5 != "1"){
        document.getElementById("m5_c1").style.color = "orange";
        document.getElementById("m5_c2").style.color = "orange";
        document.getElementById("m5_c3").style.color = "#808080";
        document.getElementById("m5_c4").style.color = "#808080";
        document.getElementById("m5_c5").style.color = "#808080";
    }

    if( m5_checker1 == "1" && m5_checker2 == "1" && m5_checker3 == "1" && m5_checker4 != "1" && m5_checker5 != "1"){
        document.getElementById("m5_c1").style.color = "orange";
        document.getElementById("m5_c2").style.color = "orange";
        document.getElementById("m5_c3").style.color = "orange";
        document.getElementById("m5_c4").style.color = "#808080";
        document.getElementById("m5_c5").style.color = "#808080";
    }

    if( m5_checker1 == "1" && m5_checker2 == "1" && m5_checker3 == "1" && m5_checker4 == "1" && m5_checker5 != "1"){
        document.getElementById("m5_c1").style.color = "orange";
        document.getElementById("m5_c2").style.color = "orange";
        document.getElementById("m5_c3").style.color = "orange";
        document.getElementById("m5_c4").style.color = "orange";
        document.getElementById("m5_c5").style.color = "#808080";
    }

    if( m5_checker1 == "1" && m5_checker2 == "1" && m5_checker3 == "1" && m5_checker4 == "1" && m5_checker5 == "1"){
        document.getElementById("m5_c1").style.color = "orange";
        document.getElementById("m5_c2").style.color = "orange";
        document.getElementById("m5_c3").style.color = "orange";
        document.getElementById("m5_c4").style.color = "orange";1
        document.getElementById("m5_c5").style.color = "orange";
    }
}