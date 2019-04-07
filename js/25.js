    var  m25_checker1 = 0;
    var  m25_checker2 = 0;
    var  m25_checker3 = 0;
    var  m25_checker4 = 0;
    var  m25_checker5 = 0;


    function m25_mylight(m25_cell_number){
        var m25_x = m25_cell_number;

    

        if(m25_x=="1"){
        document.getElementById("m25_c1").style.color = "#ffba29";
        }
        
        else if(m25_x=="12"){
        document.getElementById("m25_c1").style.color = "#ffba29";
        document.getElementById("m25_c2").style.color = "#ffba29";
        }
        
        else if(m25_x=="123"){
        document.getElementById("m25_c1").style.color = "#ffba29";
        document.getElementById("m25_c2").style.color = "#ffba29";
        document.getElementById("m25_c3").style.color = "#ffba29";
        }

        else if(m25_x=="1234"){
        document.getElementById("m25_c1").style.color = "#ffba29";
        document.getElementById("m25_c2").style.color = "#ffba29";
        document.getElementById("m25_c3").style.color = "#ffba29";
        document.getElementById("m25_c4").style.color = "#ffba29";
        }

        else if(m25_x=="12345"){
        document.getElementById("m25_c1").style.color = "#ffba29";
        document.getElementById("m25_c2").style.color = "#ffba29";
        document.getElementById("m25_c3").style.color = "#ffba29";
        document.getElementById("m25_c4").style.color = "#ffba29";
        document.getElementById("m25_c5").style.color = "#ffba29";
        }

    

    }





    

    function m25_slecting(m25_input_number){

        var m25_y = m25_input_number;

        if(m25_y=="1"){
        document.getElementById("m25_c1").style.color = "orange";
        document.getElementById("m25_c2").style.color = "#808080";
        document.getElementById("m25_c3").style.color = "#808080";
        document.getElementById("m25_c4").style.color = "#808080";
        document.getElementById("m25_c5").style.color = "#808080";
        m25_checker1 = 1;
        m25_checker2 = 0;
        m25_checker3 = 0;
        m25_checker4 = 0;
        m25_checker5 = 0;
        }
        
        else if(m25_y=="12"){
        document.getElementById("m25_c1").style.color = "orange";
        document.getElementById("m25_c2").style.color = "orange";
        document.getElementById("m25_c3").style.color = "#808080";
        document.getElementById("m25_c4").style.color = "#808080";
        document.getElementById("m25_c5").style.color = "#808080";
        m25_checker1 = 1;
        m25_checker2 = 1;
        m25_checker3 = 0;
        m25_checker4 = 0;
        m25_checker5 = 0;
        }
        
        else if(m25_y=="123"){
        document.getElementById("m25_c1").style.color = "orange";
        document.getElementById("m25_c2").style.color = "orange";
        document.getElementById("m25_c3").style.color = "orange";
        document.getElementById("m25_c4").style.color = "#808080";
        document.getElementById("m25_c5").style.color = "#808080";
        m25_checker1 = 1;
        m25_checker2 = 1;
        m25_checker3 = 1;
        m25_checker4 = 0;
        m25_checker5 = 0;
        }

        else if(m25_y=="1234"){
        document.getElementById("m25_c1").style.color = "orange";
        document.getElementById("m25_c2").style.color = "orange";
        document.getElementById("m25_c3").style.color = "orange";
        document.getElementById("m25_c4").style.color = "orange";
        document.getElementById("m25_c5").style.color = "#808080";
        m25_checker1 = 1;
        m25_checker2 = 1;
        m25_checker3 = 1;
        m25_checker4 = 1;
        m25_checker5 = 0;
        }

        else if(m25_y=="12345"){
        document.getElementById("m25_c1").style.color = "orange";
        document.getElementById("m25_c2").style.color = "orange";
        document.getElementById("m25_c3").style.color = "orange";
        document.getElementById("m25_c4").style.color = "orange";
        document.getElementById("m25_c5").style.color = "orange";
        m25_checker1 = 1;
        m25_checker2 = 1;
        m25_checker3 = 1;
        m25_checker4 = 1;
        m25_checker5 = 1;
        }

    }



function m25_turnoff(){

    if( m25_checker1 != "1" && m25_checker2 != "1" && m25_checker3 != "1" && m25_checker4 != "1" && m25_checker5 != "1"){
        document.getElementById("m25_c1").style.color = "#808080";
        document.getElementById("m25_c2").style.color = "#808080";
        document.getElementById("m25_c3").style.color = "#808080";
        document.getElementById("m25_c4").style.color = "#808080";
        document.getElementById("m25_c5").style.color = "#808080";
    }

    if( m25_checker1 == "1" && m25_checker2 != "1" && m25_checker3 != "1" && m25_checker4 != "1" && m25_checker5 != "1"){
        document.getElementById("m25_c1").style.color = "orange";
        document.getElementById("m25_c2").style.color = "#808080";
        document.getElementById("m25_c3").style.color = "#808080";
        document.getElementById("m25_c4").style.color = "#808080";
        document.getElementById("m25_c5").style.color = "#808080";
    }

    if( m25_checker1 == "1" && m25_checker2 == "1" && m25_checker3 != "1" && m25_checker4 != "1" && m25_checker5 != "1"){
        document.getElementById("m25_c1").style.color = "orange";
        document.getElementById("m25_c2").style.color = "orange";
        document.getElementById("m25_c3").style.color = "#808080";
        document.getElementById("m25_c4").style.color = "#808080";
        document.getElementById("m25_c5").style.color = "#808080";
    }

    if( m25_checker1 == "1" && m25_checker2 == "1" && m25_checker3 == "1" && m25_checker4 != "1" && m25_checker5 != "1"){
        document.getElementById("m25_c1").style.color = "orange";
        document.getElementById("m25_c2").style.color = "orange";
        document.getElementById("m25_c3").style.color = "orange";
        document.getElementById("m25_c4").style.color = "#808080";
        document.getElementById("m25_c5").style.color = "#808080";
    }

    if( m25_checker1 == "1" && m25_checker2 == "1" && m25_checker3 == "1" && m25_checker4 == "1" && m25_checker5 != "1"){
        document.getElementById("m25_c1").style.color = "orange";
        document.getElementById("m25_c2").style.color = "orange";
        document.getElementById("m25_c3").style.color = "orange";
        document.getElementById("m25_c4").style.color = "orange";
        document.getElementById("m25_c5").style.color = "#808080";
    }

    if( m25_checker1 == "1" && m25_checker2 == "1" && m25_checker3 == "1" && m25_checker4 == "1" && m25_checker5 == "1"){
        document.getElementById("m25_c1").style.color = "orange";
        document.getElementById("m25_c2").style.color = "orange";
        document.getElementById("m25_c3").style.color = "orange";
        document.getElementById("m25_c4").style.color = "orange";
        document.getElementById("m25_c5").style.color = "orange";
    }
}  