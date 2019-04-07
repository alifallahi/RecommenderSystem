    var  m17_checker1 = 0;
    var  m17_checker2 = 0;
    var  m17_checker3 = 0;
    var  m17_checker4 = 0;
    var  m17_checker5 = 0;


    function m17_mylight(m17_cell_number){
        var m17_x = m17_cell_number;

    

        if(m17_x=="1"){
        document.getElementById("m17_c1").style.color = "#ffba29";
        }
        
        else if(m17_x=="12"){
        document.getElementById("m17_c1").style.color = "#ffba29";
        document.getElementById("m17_c2").style.color = "#ffba29";
        }
        
        else if(m17_x=="123"){
        document.getElementById("m17_c1").style.color = "#ffba29";
        document.getElementById("m17_c2").style.color = "#ffba29";
        document.getElementById("m17_c3").style.color = "#ffba29";
        }

        else if(m17_x=="1234"){
        document.getElementById("m17_c1").style.color = "#ffba29";
        document.getElementById("m17_c2").style.color = "#ffba29";
        document.getElementById("m17_c3").style.color = "#ffba29";
        document.getElementById("m17_c4").style.color = "#ffba29";
        }

        else if(m17_x=="12345"){
        document.getElementById("m17_c1").style.color = "#ffba29";
        document.getElementById("m17_c2").style.color = "#ffba29";
        document.getElementById("m17_c3").style.color = "#ffba29";
        document.getElementById("m17_c4").style.color = "#ffba29";
        document.getElementById("m17_c5").style.color = "#ffba29";
        }

    

    }





    

    function m17_slecting(m17_input_number){

        var m17_y = m17_input_number;

        if(m17_y=="1"){
        document.getElementById("m17_c1").style.color = "orange";
        document.getElementById("m17_c2").style.color = "#808080";
        document.getElementById("m17_c3").style.color = "#808080";
        document.getElementById("m17_c4").style.color = "#808080";
        document.getElementById("m17_c5").style.color = "#808080";
        m17_checker1 = 1;
        m17_checker2 = 0;
        m17_checker3 = 0;
        m17_checker4 = 0;
        m17_checker5 = 0;
        }
        
        else if(m17_y=="12"){
        document.getElementById("m17_c1").style.color = "orange";
        document.getElementById("m17_c2").style.color = "orange";
        document.getElementById("m17_c3").style.color = "#808080";
        document.getElementById("m17_c4").style.color = "#808080";
        document.getElementById("m17_c5").style.color = "#808080";
        m17_checker1 = 1;
        m17_checker2 = 1;
        m17_checker3 = 0;
        m17_checker4 = 0;
        m17_checker5 = 0;
        }
        
        else if(m17_y=="123"){
        document.getElementById("m17_c1").style.color = "orange";
        document.getElementById("m17_c2").style.color = "orange";
        document.getElementById("m17_c3").style.color = "orange";
        document.getElementById("m17_c4").style.color = "#808080";
        document.getElementById("m17_c5").style.color = "#808080";
        m17_checker1 = 1;
        m17_checker2 = 1;
        m17_checker3 = 1;
        m17_checker4 = 0;
        m17_checker5 = 0;
        }

        else if(m17_y=="1234"){
        document.getElementById("m17_c1").style.color = "orange";
        document.getElementById("m17_c2").style.color = "orange";
        document.getElementById("m17_c3").style.color = "orange";
        document.getElementById("m17_c4").style.color = "orange";
        document.getElementById("m17_c5").style.color = "#808080";
        m17_checker1 = 1;
        m17_checker2 = 1;
        m17_checker3 = 1;
        m17_checker4 = 1;
        m17_checker5 = 0;
        }

        else if(m17_y=="12345"){
        document.getElementById("m17_c1").style.color = "orange";
        document.getElementById("m17_c2").style.color = "orange";
        document.getElementById("m17_c3").style.color = "orange";
        document.getElementById("m17_c4").style.color = "orange";
        document.getElementById("m17_c5").style.color = "orange";
        m17_checker1 = 1;
        m17_checker2 = 1;
        m17_checker3 = 1;
        m17_checker4 = 1;
        m17_checker5 = 1;
        }

    }



function m17_turnoff(){

    if( m17_checker1 != "1" && m17_checker2 != "1" && m17_checker3 != "1" && m17_checker4 != "1" && m17_checker5 != "1"){
        document.getElementById("m17_c1").style.color = "#808080";
        document.getElementById("m17_c2").style.color = "#808080";
        document.getElementById("m17_c3").style.color = "#808080";
        document.getElementById("m17_c4").style.color = "#808080";
        document.getElementById("m17_c5").style.color = "#808080";
    }

    if( m17_checker1 == "1" && m17_checker2 != "1" && m17_checker3 != "1" && m17_checker4 != "1" && m17_checker5 != "1"){
        document.getElementById("m17_c1").style.color = "orange";
        document.getElementById("m17_c2").style.color = "#808080";
        document.getElementById("m17_c3").style.color = "#808080";
        document.getElementById("m17_c4").style.color = "#808080";
        document.getElementById("m17_c5").style.color = "#808080";
    }

    if( m17_checker1 == "1" && m17_checker2 == "1" && m17_checker3 != "1" && m17_checker4 != "1" && m17_checker5 != "1"){
        document.getElementById("m17_c1").style.color = "orange";
        document.getElementById("m17_c2").style.color = "orange";
        document.getElementById("m17_c3").style.color = "#808080";
        document.getElementById("m17_c4").style.color = "#808080";
        document.getElementById("m17_c5").style.color = "#808080";
    }

    if( m17_checker1 == "1" && m17_checker2 == "1" && m17_checker3 == "1" && m17_checker4 != "1" && m17_checker5 != "1"){
        document.getElementById("m17_c1").style.color = "orange";
        document.getElementById("m17_c2").style.color = "orange";
        document.getElementById("m17_c3").style.color = "orange";
        document.getElementById("m17_c4").style.color = "#808080";
        document.getElementById("m17_c5").style.color = "#808080";
    }

    if( m17_checker1 == "1" && m17_checker2 == "1" && m17_checker3 == "1" && m17_checker4 == "1" && m17_checker5 != "1"){
        document.getElementById("m17_c1").style.color = "orange";
        document.getElementById("m17_c2").style.color = "orange";
        document.getElementById("m17_c3").style.color = "orange";
        document.getElementById("m17_c4").style.color = "orange";
        document.getElementById("m17_c5").style.color = "#808080";
    }

    if( m17_checker1 == "1" && m17_checker2 == "1" && m17_checker3 == "1" && m17_checker4 == "1" && m17_checker5 == "1"){
        document.getElementById("m17_c1").style.color = "orange";
        document.getElementById("m17_c2").style.color = "orange";
        document.getElementById("m17_c3").style.color = "orange";
        document.getElementById("m17_c4").style.color = "orange";
        document.getElementById("m17_c5").style.color = "orange";
    }
}  