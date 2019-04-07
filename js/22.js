    var  m22_checker1 = 0;
    var  m22_checker2 = 0;
    var  m22_checker3 = 0;
    var  m22_checker4 = 0;
    var  m22_checker5 = 0;


    function m22_mylight(m22_cell_number){
        var m22_x = m22_cell_number;

    

        if(m22_x=="1"){
        document.getElementById("m22_c1").style.color = "#ffba29";
        }
        
        else if(m22_x=="12"){
        document.getElementById("m22_c1").style.color = "#ffba29";
        document.getElementById("m22_c2").style.color = "#ffba29";
        }
        
        else if(m22_x=="123"){
        document.getElementById("m22_c1").style.color = "#ffba29";
        document.getElementById("m22_c2").style.color = "#ffba29";
        document.getElementById("m22_c3").style.color = "#ffba29";
        }

        else if(m22_x=="1234"){
        document.getElementById("m22_c1").style.color = "#ffba29";
        document.getElementById("m22_c2").style.color = "#ffba29";
        document.getElementById("m22_c3").style.color = "#ffba29";
        document.getElementById("m22_c4").style.color = "#ffba29";
        }

        else if(m22_x=="12345"){
        document.getElementById("m22_c1").style.color = "#ffba29";
        document.getElementById("m22_c2").style.color = "#ffba29";
        document.getElementById("m22_c3").style.color = "#ffba29";
        document.getElementById("m22_c4").style.color = "#ffba29";
        document.getElementById("m22_c5").style.color = "#ffba29";
        }

    

    }





    

    function m22_slecting(m22_input_number){

        var m22_y = m22_input_number;

        if(m22_y=="1"){
        document.getElementById("m22_c1").style.color = "orange";
        document.getElementById("m22_c2").style.color = "#808080";
        document.getElementById("m22_c3").style.color = "#808080";
        document.getElementById("m22_c4").style.color = "#808080";
        document.getElementById("m22_c5").style.color = "#808080";
        m22_checker1 = 1;
        m22_checker2 = 0;
        m22_checker3 = 0;
        m22_checker4 = 0;
        m22_checker5 = 0;
        }
        
        else if(m22_y=="12"){
        document.getElementById("m22_c1").style.color = "orange";
        document.getElementById("m22_c2").style.color = "orange";
        document.getElementById("m22_c3").style.color = "#808080";
        document.getElementById("m22_c4").style.color = "#808080";
        document.getElementById("m22_c5").style.color = "#808080";
        m22_checker1 = 1;
        m22_checker2 = 1;
        m22_checker3 = 0;
        m22_checker4 = 0;
        m22_checker5 = 0;
        }
        
        else if(m22_y=="123"){
        document.getElementById("m22_c1").style.color = "orange";
        document.getElementById("m22_c2").style.color = "orange";
        document.getElementById("m22_c3").style.color = "orange";
        document.getElementById("m22_c4").style.color = "#808080";
        document.getElementById("m22_c5").style.color = "#808080";
        m22_checker1 = 1;
        m22_checker2 = 1;
        m22_checker3 = 1;
        m22_checker4 = 0;
        m22_checker5 = 0;
        }

        else if(m22_y=="1234"){
        document.getElementById("m22_c1").style.color = "orange";
        document.getElementById("m22_c2").style.color = "orange";
        document.getElementById("m22_c3").style.color = "orange";
        document.getElementById("m22_c4").style.color = "orange";
        document.getElementById("m22_c5").style.color = "#808080";
        m22_checker1 = 1;
        m22_checker2 = 1;
        m22_checker3 = 1;
        m22_checker4 = 1;
        m22_checker5 = 0;
        }

        else if(m22_y=="12345"){
        document.getElementById("m22_c1").style.color = "orange";
        document.getElementById("m22_c2").style.color = "orange";
        document.getElementById("m22_c3").style.color = "orange";
        document.getElementById("m22_c4").style.color = "orange";
        document.getElementById("m22_c5").style.color = "orange";
        m22_checker1 = 1;
        m22_checker2 = 1;
        m22_checker3 = 1;
        m22_checker4 = 1;
        m22_checker5 = 1;
        }

    }



function m22_turnoff(){

    if( m22_checker1 != "1" && m22_checker2 != "1" && m22_checker3 != "1" && m22_checker4 != "1" && m22_checker5 != "1"){
        document.getElementById("m22_c1").style.color = "#808080";
        document.getElementById("m22_c2").style.color = "#808080";
        document.getElementById("m22_c3").style.color = "#808080";
        document.getElementById("m22_c4").style.color = "#808080";
        document.getElementById("m22_c5").style.color = "#808080";
    }

    if( m22_checker1 == "1" && m22_checker2 != "1" && m22_checker3 != "1" && m22_checker4 != "1" && m22_checker5 != "1"){
        document.getElementById("m22_c1").style.color = "orange";
        document.getElementById("m22_c2").style.color = "#808080";
        document.getElementById("m22_c3").style.color = "#808080";
        document.getElementById("m22_c4").style.color = "#808080";
        document.getElementById("m22_c5").style.color = "#808080";
    }

    if( m22_checker1 == "1" && m22_checker2 == "1" && m22_checker3 != "1" && m22_checker4 != "1" && m22_checker5 != "1"){
        document.getElementById("m22_c1").style.color = "orange";
        document.getElementById("m22_c2").style.color = "orange";
        document.getElementById("m22_c3").style.color = "#808080";
        document.getElementById("m22_c4").style.color = "#808080";
        document.getElementById("m22_c5").style.color = "#808080";
    }

    if( m22_checker1 == "1" && m22_checker2 == "1" && m22_checker3 == "1" && m22_checker4 != "1" && m22_checker5 != "1"){
        document.getElementById("m22_c1").style.color = "orange";
        document.getElementById("m22_c2").style.color = "orange";
        document.getElementById("m22_c3").style.color = "orange";
        document.getElementById("m22_c4").style.color = "#808080";
        document.getElementById("m22_c5").style.color = "#808080";
    }

    if( m22_checker1 == "1" && m22_checker2 == "1" && m22_checker3 == "1" && m22_checker4 == "1" && m22_checker5 != "1"){
        document.getElementById("m22_c1").style.color = "orange";
        document.getElementById("m22_c2").style.color = "orange";
        document.getElementById("m22_c3").style.color = "orange";
        document.getElementById("m22_c4").style.color = "orange";
        document.getElementById("m22_c5").style.color = "#808080";
    }

    if( m22_checker1 == "1" && m22_checker2 == "1" && m22_checker3 == "1" && m22_checker4 == "1" && m22_checker5 == "1"){
        document.getElementById("m22_c1").style.color = "orange";
        document.getElementById("m22_c2").style.color = "orange";
        document.getElementById("m22_c3").style.color = "orange";
        document.getElementById("m22_c4").style.color = "orange";
        document.getElementById("m22_c5").style.color = "orange";
    }
}  