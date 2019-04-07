    var  m20_checker1 = 0;
    var  m20_checker2 = 0;
    var  m20_checker3 = 0;
    var  m20_checker4 = 0;
    var  m20_checker5 = 0;


    function m20_mylight(m20_cell_number){
        var m20_x = m20_cell_number;

    

        if(m20_x=="1"){
        document.getElementById("m20_c1").style.color = "#ffba29";
        }
        
        else if(m20_x=="12"){
        document.getElementById("m20_c1").style.color = "#ffba29";
        document.getElementById("m20_c2").style.color = "#ffba29";
        }
        
        else if(m20_x=="123"){
        document.getElementById("m20_c1").style.color = "#ffba29";
        document.getElementById("m20_c2").style.color = "#ffba29";
        document.getElementById("m20_c3").style.color = "#ffba29";
        }

        else if(m20_x=="1234"){
        document.getElementById("m20_c1").style.color = "#ffba29";
        document.getElementById("m20_c2").style.color = "#ffba29";
        document.getElementById("m20_c3").style.color = "#ffba29";
        document.getElementById("m20_c4").style.color = "#ffba29";
        }

        else if(m20_x=="12345"){
        document.getElementById("m20_c1").style.color = "#ffba29";
        document.getElementById("m20_c2").style.color = "#ffba29";
        document.getElementById("m20_c3").style.color = "#ffba29";
        document.getElementById("m20_c4").style.color = "#ffba29";
        document.getElementById("m20_c5").style.color = "#ffba29";
        }

    

    }





    

    function m20_slecting(m20_input_number){

        var m20_y = m20_input_number;

        if(m20_y=="1"){
        document.getElementById("m20_c1").style.color = "orange";
        document.getElementById("m20_c2").style.color = "#808080";
        document.getElementById("m20_c3").style.color = "#808080";
        document.getElementById("m20_c4").style.color = "#808080";
        document.getElementById("m20_c5").style.color = "#808080";
        m20_checker1 = 1;
        m20_checker2 = 0;
        m20_checker3 = 0;
        m20_checker4 = 0;
        m20_checker5 = 0;
        }
        
        else if(m20_y=="12"){
        document.getElementById("m20_c1").style.color = "orange";
        document.getElementById("m20_c2").style.color = "orange";
        document.getElementById("m20_c3").style.color = "#808080";
        document.getElementById("m20_c4").style.color = "#808080";
        document.getElementById("m20_c5").style.color = "#808080";
        m20_checker1 = 1;
        m20_checker2 = 1;
        m20_checker3 = 0;
        m20_checker4 = 0;
        m20_checker5 = 0;
        }
        
        else if(m20_y=="123"){
        document.getElementById("m20_c1").style.color = "orange";
        document.getElementById("m20_c2").style.color = "orange";
        document.getElementById("m20_c3").style.color = "orange";
        document.getElementById("m20_c4").style.color = "#808080";
        document.getElementById("m20_c5").style.color = "#808080";
        m20_checker1 = 1;
        m20_checker2 = 1;
        m20_checker3 = 1;
        m20_checker4 = 0;
        m20_checker5 = 0;
        }

        else if(m20_y=="1234"){
        document.getElementById("m20_c1").style.color = "orange";
        document.getElementById("m20_c2").style.color = "orange";
        document.getElementById("m20_c3").style.color = "orange";
        document.getElementById("m20_c4").style.color = "orange";
        document.getElementById("m20_c5").style.color = "#808080";
        m20_checker1 = 1;
        m20_checker2 = 1;
        m20_checker3 = 1;
        m20_checker4 = 1;
        m20_checker5 = 0;
        }

        else if(m20_y=="12345"){
        document.getElementById("m20_c1").style.color = "orange";
        document.getElementById("m20_c2").style.color = "orange";
        document.getElementById("m20_c3").style.color = "orange";
        document.getElementById("m20_c4").style.color = "orange";
        document.getElementById("m20_c5").style.color = "orange";
        m20_checker1 = 1;
        m20_checker2 = 1;
        m20_checker3 = 1;
        m20_checker4 = 1;
        m20_checker5 = 1;
        }

    }



function m20_turnoff(){

    if( m20_checker1 != "1" && m20_checker2 != "1" && m20_checker3 != "1" && m20_checker4 != "1" && m20_checker5 != "1"){
        document.getElementById("m20_c1").style.color = "#808080";
        document.getElementById("m20_c2").style.color = "#808080";
        document.getElementById("m20_c3").style.color = "#808080";
        document.getElementById("m20_c4").style.color = "#808080";
        document.getElementById("m20_c5").style.color = "#808080";
    }

    if( m20_checker1 == "1" && m20_checker2 != "1" && m20_checker3 != "1" && m20_checker4 != "1" && m20_checker5 != "1"){
        document.getElementById("m20_c1").style.color = "orange";
        document.getElementById("m20_c2").style.color = "#808080";
        document.getElementById("m20_c3").style.color = "#808080";
        document.getElementById("m20_c4").style.color = "#808080";
        document.getElementById("m20_c5").style.color = "#808080";
    }

    if( m20_checker1 == "1" && m20_checker2 == "1" && m20_checker3 != "1" && m20_checker4 != "1" && m20_checker5 != "1"){
        document.getElementById("m20_c1").style.color = "orange";
        document.getElementById("m20_c2").style.color = "orange";
        document.getElementById("m20_c3").style.color = "#808080";
        document.getElementById("m20_c4").style.color = "#808080";
        document.getElementById("m20_c5").style.color = "#808080";
    }

    if( m20_checker1 == "1" && m20_checker2 == "1" && m20_checker3 == "1" && m20_checker4 != "1" && m20_checker5 != "1"){
        document.getElementById("m20_c1").style.color = "orange";
        document.getElementById("m20_c2").style.color = "orange";
        document.getElementById("m20_c3").style.color = "orange";
        document.getElementById("m20_c4").style.color = "#808080";
        document.getElementById("m20_c5").style.color = "#808080";
    }

    if( m20_checker1 == "1" && m20_checker2 == "1" && m20_checker3 == "1" && m20_checker4 == "1" && m20_checker5 != "1"){
        document.getElementById("m20_c1").style.color = "orange";
        document.getElementById("m20_c2").style.color = "orange";
        document.getElementById("m20_c3").style.color = "orange";
        document.getElementById("m20_c4").style.color = "orange";
        document.getElementById("m20_c5").style.color = "#808080";
    }

    if( m20_checker1 == "1" && m20_checker2 == "1" && m20_checker3 == "1" && m20_checker4 == "1" && m20_checker5 == "1"){
        document.getElementById("m20_c1").style.color = "orange";
        document.getElementById("m20_c2").style.color = "orange";
        document.getElementById("m20_c3").style.color = "orange";
        document.getElementById("m20_c4").style.color = "orange";
        document.getElementById("m20_c5").style.color = "orange";
    }
}  