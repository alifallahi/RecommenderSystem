    var  m10_checker1 = 0;
    var  m10_checker2 = 0;
    var  m10_checker3 = 0;
    var  m10_checker4 = 0;
    var  m10_checker5 = 0;


    function m10_mylight(m10_cell_number){
        var m10_x = m10_cell_number;

    

        if(m10_x=="1"){
        document.getElementById("m10_c1").style.color = "#ffba29";
        }
        
        else if(m10_x=="12"){
        document.getElementById("m10_c1").style.color = "#ffba29";
        document.getElementById("m10_c2").style.color = "#ffba29";
        }
        
        else if(m10_x=="123"){
        document.getElementById("m10_c1").style.color = "#ffba29";
        document.getElementById("m10_c2").style.color = "#ffba29";
        document.getElementById("m10_c3").style.color = "#ffba29";
        }

        else if(m10_x=="1234"){
        document.getElementById("m10_c1").style.color = "#ffba29";
        document.getElementById("m10_c2").style.color = "#ffba29";
        document.getElementById("m10_c3").style.color = "#ffba29";
        document.getElementById("m10_c4").style.color = "#ffba29";
        }

        else if(m10_x=="12345"){
        document.getElementById("m10_c1").style.color = "#ffba29";
        document.getElementById("m10_c2").style.color = "#ffba29";
        document.getElementById("m10_c3").style.color = "#ffba29";
        document.getElementById("m10_c4").style.color = "#ffba29";
        document.getElementById("m10_c5").style.color = "#ffba29";
        }

    

    }





    

    function m10_slecting(m10_input_number){

        var m10_y = m10_input_number;

        if(m10_y=="1"){
        document.getElementById("m10_c1").style.color = "orange";
        document.getElementById("m10_c2").style.color = "#808080";
        document.getElementById("m10_c3").style.color = "#808080";
        document.getElementById("m10_c4").style.color = "#808080";
        document.getElementById("m10_c5").style.color = "#808080";
        m10_checker1 = 1;
        m10_checker2 = 0;
        m10_checker3 = 0;
        m10_checker4 = 0;
        m10_checker5 = 0;
        }
        
        else if(m10_y=="12"){
        document.getElementById("m10_c1").style.color = "orange";
        document.getElementById("m10_c2").style.color = "orange";
        document.getElementById("m10_c3").style.color = "#808080";
        document.getElementById("m10_c4").style.color = "#808080";
        document.getElementById("m10_c5").style.color = "#808080";
        m10_checker1 = 1;
        m10_checker2 = 1;
        m10_checker3 = 0;
        m10_checker4 = 0;
        m10_checker5 = 0;
        }
        
        else if(m10_y=="123"){
        document.getElementById("m10_c1").style.color = "orange";
        document.getElementById("m10_c2").style.color = "orange";
        document.getElementById("m10_c3").style.color = "orange";
        document.getElementById("m10_c4").style.color = "#808080";
        document.getElementById("m10_c5").style.color = "#808080";
        m10_checker1 = 1;
        m10_checker2 = 1;
        m10_checker3 = 1;
        m10_checker4 = 0;
        m10_checker5 = 0;
        }

        else if(m10_y=="1234"){
        document.getElementById("m10_c1").style.color = "orange";
        document.getElementById("m10_c2").style.color = "orange";
        document.getElementById("m10_c3").style.color = "orange";
        document.getElementById("m10_c4").style.color = "orange";
        document.getElementById("m10_c5").style.color = "#808080";
        m10_checker1 = 1;
        m10_checker2 = 1;
        m10_checker3 = 1;
        m10_checker4 = 1;
        m10_checker5 = 0;
        }

        else if(m10_y=="12345"){
        document.getElementById("m10_c1").style.color = "orange";
        document.getElementById("m10_c2").style.color = "orange";
        document.getElementById("m10_c3").style.color = "orange";
        document.getElementById("m10_c4").style.color = "orange";
        document.getElementById("m10_c5").style.color = "orange";
        m10_checker1 = 1;
        m10_checker2 = 1;
        m10_checker3 = 1;
        m10_checker4 = 1;
        m10_checker5 = 1;
        }

    }



function m10_turnoff(){

    if( m10_checker1 != "1" && m10_checker2 != "1" && m10_checker3 != "1" && m10_checker4 != "1" && m10_checker5 != "1"){
        document.getElementById("m10_c1").style.color = "#808080";
        document.getElementById("m10_c2").style.color = "#808080";
        document.getElementById("m10_c3").style.color = "#808080";
        document.getElementById("m10_c4").style.color = "#808080";
        document.getElementById("m10_c5").style.color = "#808080";
    }

    if( m10_checker1 == "1" && m10_checker2 != "1" && m10_checker3 != "1" && m10_checker4 != "1" && m10_checker5 != "1"){
        document.getElementById("m10_c1").style.color = "orange";
        document.getElementById("m10_c2").style.color = "#808080";
        document.getElementById("m10_c3").style.color = "#808080";
        document.getElementById("m10_c4").style.color = "#808080";
        document.getElementById("m10_c5").style.color = "#808080";
    }

    if( m10_checker1 == "1" && m10_checker2 == "1" && m10_checker3 != "1" && m10_checker4 != "1" && m10_checker5 != "1"){
        document.getElementById("m10_c1").style.color = "orange";
        document.getElementById("m10_c2").style.color = "orange";
        document.getElementById("m10_c3").style.color = "#808080";
        document.getElementById("m10_c4").style.color = "#808080";
        document.getElementById("m10_c5").style.color = "#808080";
    }

    if( m10_checker1 == "1" && m10_checker2 == "1" && m10_checker3 == "1" && m10_checker4 != "1" && m10_checker5 != "1"){
        document.getElementById("m10_c1").style.color = "orange";
        document.getElementById("m10_c2").style.color = "orange";
        document.getElementById("m10_c3").style.color = "orange";
        document.getElementById("m10_c4").style.color = "#808080";
        document.getElementById("m10_c5").style.color = "#808080";
    }

    if( m10_checker1 == "1" && m10_checker2 == "1" && m10_checker3 == "1" && m10_checker4 == "1" && m10_checker5 != "1"){
        document.getElementById("m10_c1").style.color = "orange";
        document.getElementById("m10_c2").style.color = "orange";
        document.getElementById("m10_c3").style.color = "orange";
        document.getElementById("m10_c4").style.color = "orange";
        document.getElementById("m10_c5").style.color = "#808080";
    }

    if( m10_checker1 == "1" && m10_checker2 == "1" && m10_checker3 == "1" && m10_checker4 == "1" && m10_checker5 == "1"){
        document.getElementById("m10_c1").style.color = "orange";
        document.getElementById("m10_c2").style.color = "orange";
        document.getElementById("m10_c3").style.color = "orange";
        document.getElementById("m10_c4").style.color = "orange";1
        document.getElementById("m10_c5").style.color = "orange";
    }
}