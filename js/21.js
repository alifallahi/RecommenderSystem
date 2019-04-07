    var  m21_checker1 = 0;
    var  m21_checker2 = 0;
    var  m21_checker3 = 0;
    var  m21_checker4 = 0;
    var  m21_checker5 = 0;


    function m21_mylight(m21_cell_number){
        var m21_x = m21_cell_number;

    

        if(m21_x=="1"){
        document.getElementById("m21_c1").style.color = "#ffba29";
        }
        
        else if(m21_x=="12"){
        document.getElementById("m21_c1").style.color = "#ffba29";
        document.getElementById("m21_c2").style.color = "#ffba29";
        }
        
        else if(m21_x=="123"){
        document.getElementById("m21_c1").style.color = "#ffba29";
        document.getElementById("m21_c2").style.color = "#ffba29";
        document.getElementById("m21_c3").style.color = "#ffba29";
        }

        else if(m21_x=="1234"){
        document.getElementById("m21_c1").style.color = "#ffba29";
        document.getElementById("m21_c2").style.color = "#ffba29";
        document.getElementById("m21_c3").style.color = "#ffba29";
        document.getElementById("m21_c4").style.color = "#ffba29";
        }

        else if(m21_x=="12345"){
        document.getElementById("m21_c1").style.color = "#ffba29";
        document.getElementById("m21_c2").style.color = "#ffba29";
        document.getElementById("m21_c3").style.color = "#ffba29";
        document.getElementById("m21_c4").style.color = "#ffba29";
        document.getElementById("m21_c5").style.color = "#ffba29";
        }

    

    }





    

    function m21_slecting(m21_input_number){

        var m21_y = m21_input_number;

        if(m21_y=="1"){
        document.getElementById("m21_c1").style.color = "orange";
        document.getElementById("m21_c2").style.color = "#808080";
        document.getElementById("m21_c3").style.color = "#808080";
        document.getElementById("m21_c4").style.color = "#808080";
        document.getElementById("m21_c5").style.color = "#808080";
        m21_checker1 = 1;
        m21_checker2 = 0;
        m21_checker3 = 0;
        m21_checker4 = 0;
        m21_checker5 = 0;
        }
        
        else if(m21_y=="12"){
        document.getElementById("m21_c1").style.color = "orange";
        document.getElementById("m21_c2").style.color = "orange";
        document.getElementById("m21_c3").style.color = "#808080";
        document.getElementById("m21_c4").style.color = "#808080";
        document.getElementById("m21_c5").style.color = "#808080";
        m21_checker1 = 1;
        m21_checker2 = 1;
        m21_checker3 = 0;
        m21_checker4 = 0;
        m21_checker5 = 0;
        }
        
        else if(m21_y=="123"){
        document.getElementById("m21_c1").style.color = "orange";
        document.getElementById("m21_c2").style.color = "orange";
        document.getElementById("m21_c3").style.color = "orange";
        document.getElementById("m21_c4").style.color = "#808080";
        document.getElementById("m21_c5").style.color = "#808080";
        m21_checker1 = 1;
        m21_checker2 = 1;
        m21_checker3 = 1;
        m21_checker4 = 0;
        m21_checker5 = 0;
        }

        else if(m21_y=="1234"){
        document.getElementById("m21_c1").style.color = "orange";
        document.getElementById("m21_c2").style.color = "orange";
        document.getElementById("m21_c3").style.color = "orange";
        document.getElementById("m21_c4").style.color = "orange";
        document.getElementById("m21_c5").style.color = "#808080";
        m21_checker1 = 1;
        m21_checker2 = 1;
        m21_checker3 = 1;
        m21_checker4 = 1;
        m21_checker5 = 0;
        }

        else if(m21_y=="12345"){
        document.getElementById("m21_c1").style.color = "orange";
        document.getElementById("m21_c2").style.color = "orange";
        document.getElementById("m21_c3").style.color = "orange";
        document.getElementById("m21_c4").style.color = "orange";
        document.getElementById("m21_c5").style.color = "orange";
        m21_checker1 = 1;
        m21_checker2 = 1;
        m21_checker3 = 1;
        m21_checker4 = 1;
        m21_checker5 = 1;
        }

    }



function m21_turnoff(){

    if( m21_checker1 != "1" && m21_checker2 != "1" && m21_checker3 != "1" && m21_checker4 != "1" && m21_checker5 != "1"){
        document.getElementById("m21_c1").style.color = "#808080";
        document.getElementById("m21_c2").style.color = "#808080";
        document.getElementById("m21_c3").style.color = "#808080";
        document.getElementById("m21_c4").style.color = "#808080";
        document.getElementById("m21_c5").style.color = "#808080";
    }

    if( m21_checker1 == "1" && m21_checker2 != "1" && m21_checker3 != "1" && m21_checker4 != "1" && m21_checker5 != "1"){
        document.getElementById("m21_c1").style.color = "orange";
        document.getElementById("m21_c2").style.color = "#808080";
        document.getElementById("m21_c3").style.color = "#808080";
        document.getElementById("m21_c4").style.color = "#808080";
        document.getElementById("m21_c5").style.color = "#808080";
    }

    if( m21_checker1 == "1" && m21_checker2 == "1" && m21_checker3 != "1" && m21_checker4 != "1" && m21_checker5 != "1"){
        document.getElementById("m21_c1").style.color = "orange";
        document.getElementById("m21_c2").style.color = "orange";
        document.getElementById("m21_c3").style.color = "#808080";
        document.getElementById("m21_c4").style.color = "#808080";
        document.getElementById("m21_c5").style.color = "#808080";
    }

    if( m21_checker1 == "1" && m21_checker2 == "1" && m21_checker3 == "1" && m21_checker4 != "1" && m21_checker5 != "1"){
        document.getElementById("m21_c1").style.color = "orange";
        document.getElementById("m21_c2").style.color = "orange";
        document.getElementById("m21_c3").style.color = "orange";
        document.getElementById("m21_c4").style.color = "#808080";
        document.getElementById("m21_c5").style.color = "#808080";
    }

    if( m21_checker1 == "1" && m21_checker2 == "1" && m21_checker3 == "1" && m21_checker4 == "1" && m21_checker5 != "1"){
        document.getElementById("m21_c1").style.color = "orange";
        document.getElementById("m21_c2").style.color = "orange";
        document.getElementById("m21_c3").style.color = "orange";
        document.getElementById("m21_c4").style.color = "orange";
        document.getElementById("m21_c5").style.color = "#808080";
    }

    if( m21_checker1 == "1" && m21_checker2 == "1" && m21_checker3 == "1" && m21_checker4 == "1" && m21_checker5 == "1"){
        document.getElementById("m21_c1").style.color = "orange";
        document.getElementById("m21_c2").style.color = "orange";
        document.getElementById("m21_c3").style.color = "orange";
        document.getElementById("m21_c4").style.color = "orange";
        document.getElementById("m21_c5").style.color = "orange";
    }
}  