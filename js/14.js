    var  m14_checker1 = 0;
    var  m14_checker2 = 0;
    var  m14_checker3 = 0;
    var  m14_checker4 = 0;
    var  m14_checker5 = 0;


    function m14_mylight(m14_cell_number){
        var m14_x = m14_cell_number;

    

        if(m14_x=="1"){
        document.getElementById("m14_c1").style.color = "#ffba29";
        }
        
        else if(m14_x=="12"){
        document.getElementById("m14_c1").style.color = "#ffba29";
        document.getElementById("m14_c2").style.color = "#ffba29";
        }
        
        else if(m14_x=="123"){
        document.getElementById("m14_c1").style.color = "#ffba29";
        document.getElementById("m14_c2").style.color = "#ffba29";
        document.getElementById("m14_c3").style.color = "#ffba29";
        }

        else if(m14_x=="1234"){
        document.getElementById("m14_c1").style.color = "#ffba29";
        document.getElementById("m14_c2").style.color = "#ffba29";
        document.getElementById("m14_c3").style.color = "#ffba29";
        document.getElementById("m14_c4").style.color = "#ffba29";
        }

        else if(m14_x=="12345"){
        document.getElementById("m14_c1").style.color = "#ffba29";
        document.getElementById("m14_c2").style.color = "#ffba29";
        document.getElementById("m14_c3").style.color = "#ffba29";
        document.getElementById("m14_c4").style.color = "#ffba29";
        document.getElementById("m14_c5").style.color = "#ffba29";
        }

    

    }





    

    function m14_slecting(m14_input_number){

        var m14_y = m14_input_number;

        if(m14_y=="1"){
        document.getElementById("m14_c1").style.color = "orange";
        document.getElementById("m14_c2").style.color = "#808080";
        document.getElementById("m14_c3").style.color = "#808080";
        document.getElementById("m14_c4").style.color = "#808080";
        document.getElementById("m14_c5").style.color = "#808080";
        m14_checker1 = 1;
        m14_checker2 = 0;
        m14_checker3 = 0;
        m14_checker4 = 0;
        m14_checker5 = 0;
        }
        
        else if(m14_y=="12"){
        document.getElementById("m14_c1").style.color = "orange";
        document.getElementById("m14_c2").style.color = "orange";
        document.getElementById("m14_c3").style.color = "#808080";
        document.getElementById("m14_c4").style.color = "#808080";
        document.getElementById("m14_c5").style.color = "#808080";
        m14_checker1 = 1;
        m14_checker2 = 1;
        m14_checker3 = 0;
        m14_checker4 = 0;
        m14_checker5 = 0;
        }
        
        else if(m14_y=="123"){
        document.getElementById("m14_c1").style.color = "orange";
        document.getElementById("m14_c2").style.color = "orange";
        document.getElementById("m14_c3").style.color = "orange";
        document.getElementById("m14_c4").style.color = "#808080";
        document.getElementById("m14_c5").style.color = "#808080";
        m14_checker1 = 1;
        m14_checker2 = 1;
        m14_checker3 = 1;
        m14_checker4 = 0;
        m14_checker5 = 0;
        }

        else if(m14_y=="1234"){
        document.getElementById("m14_c1").style.color = "orange";
        document.getElementById("m14_c2").style.color = "orange";
        document.getElementById("m14_c3").style.color = "orange";
        document.getElementById("m14_c4").style.color = "orange";
        document.getElementById("m14_c5").style.color = "#808080";
        m14_checker1 = 1;
        m14_checker2 = 1;
        m14_checker3 = 1;
        m14_checker4 = 1;
        m14_checker5 = 0;
        }

        else if(m14_y=="12345"){
        document.getElementById("m14_c1").style.color = "orange";
        document.getElementById("m14_c2").style.color = "orange";
        document.getElementById("m14_c3").style.color = "orange";
        document.getElementById("m14_c4").style.color = "orange";
        document.getElementById("m14_c5").style.color = "orange";
        m14_checker1 = 1;
        m14_checker2 = 1;
        m14_checker3 = 1;
        m14_checker4 = 1;
        m14_checker5 = 1;
        }

    }



function m14_turnoff(){

    if( m14_checker1 != "1" && m14_checker2 != "1" && m14_checker3 != "1" && m14_checker4 != "1" && m14_checker5 != "1"){
        document.getElementById("m14_c1").style.color = "#808080";
        document.getElementById("m14_c2").style.color = "#808080";
        document.getElementById("m14_c3").style.color = "#808080";
        document.getElementById("m14_c4").style.color = "#808080";
        document.getElementById("m14_c5").style.color = "#808080";
    }

    if( m14_checker1 == "1" && m14_checker2 != "1" && m14_checker3 != "1" && m14_checker4 != "1" && m14_checker5 != "1"){
        document.getElementById("m14_c1").style.color = "orange";
        document.getElementById("m14_c2").style.color = "#808080";
        document.getElementById("m14_c3").style.color = "#808080";
        document.getElementById("m14_c4").style.color = "#808080";
        document.getElementById("m14_c5").style.color = "#808080";
    }

    if( m14_checker1 == "1" && m14_checker2 == "1" && m14_checker3 != "1" && m14_checker4 != "1" && m14_checker5 != "1"){
        document.getElementById("m14_c1").style.color = "orange";
        document.getElementById("m14_c2").style.color = "orange";
        document.getElementById("m14_c3").style.color = "#808080";
        document.getElementById("m14_c4").style.color = "#808080";
        document.getElementById("m14_c5").style.color = "#808080";
    }

    if( m14_checker1 == "1" && m14_checker2 == "1" && m14_checker3 == "1" && m14_checker4 != "1" && m14_checker5 != "1"){
        document.getElementById("m14_c1").style.color = "orange";
        document.getElementById("m14_c2").style.color = "orange";
        document.getElementById("m14_c3").style.color = "orange";
        document.getElementById("m14_c4").style.color = "#808080";
        document.getElementById("m14_c5").style.color = "#808080";
    }

    if( m14_checker1 == "1" && m14_checker2 == "1" && m14_checker3 == "1" && m14_checker4 == "1" && m14_checker5 != "1"){
        document.getElementById("m14_c1").style.color = "orange";
        document.getElementById("m14_c2").style.color = "orange";
        document.getElementById("m14_c3").style.color = "orange";
        document.getElementById("m14_c4").style.color = "orange";
        document.getElementById("m14_c5").style.color = "#808080";
    }

    if( m14_checker1 == "1" && m14_checker2 == "1" && m14_checker3 == "1" && m14_checker4 == "1" && m14_checker5 == "1"){
        document.getElementById("m14_c1").style.color = "orange";
        document.getElementById("m14_c2").style.color = "orange";
        document.getElementById("m14_c3").style.color = "orange";
        document.getElementById("m14_c4").style.color = "orange";
        document.getElementById("m14_c5").style.color = "orange";
    }
}  