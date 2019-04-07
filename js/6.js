    var  m6_checker1 = 0;
    var  m6_checker2 = 0;
    var  m6_checker3 = 0;
    var  m6_checker4 = 0;
    var  m6_checker5 = 0;


    function m6_mylight(m6_cell_number){
        var m6_x = m6_cell_number;

    

        if(m6_x=="1"){
        document.getElementById("m6_c1").style.color = "#ffba29";
        }
        
        else if(m6_x=="12"){
        document.getElementById("m6_c1").style.color = "#ffba29";
        document.getElementById("m6_c2").style.color = "#ffba29";
        }
        
        else if(m6_x=="123"){
        document.getElementById("m6_c1").style.color = "#ffba29";
        document.getElementById("m6_c2").style.color = "#ffba29";
        document.getElementById("m6_c3").style.color = "#ffba29";
        }

        else if(m6_x=="1234"){
        document.getElementById("m6_c1").style.color = "#ffba29";
        document.getElementById("m6_c2").style.color = "#ffba29";
        document.getElementById("m6_c3").style.color = "#ffba29";
        document.getElementById("m6_c4").style.color = "#ffba29";
        }

        else if(m6_x=="12345"){
        document.getElementById("m6_c1").style.color = "#ffba29";
        document.getElementById("m6_c2").style.color = "#ffba29";
        document.getElementById("m6_c3").style.color = "#ffba29";
        document.getElementById("m6_c4").style.color = "#ffba29";
        document.getElementById("m6_c5").style.color = "#ffba29";
        }

    

    }





    

    function m6_slecting(m6_input_number){

        var m6_y = m6_input_number;

        if(m6_y=="1"){
        document.getElementById("m6_c1").style.color = "orange";
        document.getElementById("m6_c2").style.color = "#808080";
        document.getElementById("m6_c3").style.color = "#808080";
        document.getElementById("m6_c4").style.color = "#808080";
        document.getElementById("m6_c5").style.color = "#808080";
        m6_checker1 = 1;
        m6_checker2 = 0;
        m6_checker3 = 0;
        m6_checker4 = 0;
        m6_checker5 = 0;
        }
        
        else if(m6_y=="12"){
        document.getElementById("m6_c1").style.color = "orange";
        document.getElementById("m6_c2").style.color = "orange";
        document.getElementById("m6_c3").style.color = "#808080";
        document.getElementById("m6_c4").style.color = "#808080";
        document.getElementById("m6_c5").style.color = "#808080";
        m6_checker1 = 1;
        m6_checker2 = 1;
        m6_checker3 = 0;
        m6_checker4 = 0;
        m6_checker5 = 0;
        }
        
        else if(m6_y=="123"){
        document.getElementById("m6_c1").style.color = "orange";
        document.getElementById("m6_c2").style.color = "orange";
        document.getElementById("m6_c3").style.color = "orange";
        document.getElementById("m6_c4").style.color = "#808080";
        document.getElementById("m6_c5").style.color = "#808080";
        m6_checker1 = 1;
        m6_checker2 = 1;
        m6_checker3 = 1;
        m6_checker4 = 0;
        m6_checker5 = 0;
        }

        else if(m6_y=="1234"){
        document.getElementById("m6_c1").style.color = "orange";
        document.getElementById("m6_c2").style.color = "orange";
        document.getElementById("m6_c3").style.color = "orange";
        document.getElementById("m6_c4").style.color = "orange";
        document.getElementById("m6_c5").style.color = "#808080";
        m6_checker1 = 1;
        m6_checker2 = 1;
        m6_checker3 = 1;
        m6_checker4 = 1;
        m6_checker5 = 0;
        }

        else if(m6_y=="12345"){
        document.getElementById("m6_c1").style.color = "orange";
        document.getElementById("m6_c2").style.color = "orange";
        document.getElementById("m6_c3").style.color = "orange";
        document.getElementById("m6_c4").style.color = "orange";
        document.getElementById("m6_c5").style.color = "orange";
        m6_checker1 = 1;
        m6_checker2 = 1;
        m6_checker3 = 1;
        m6_checker4 = 1;
        m6_checker5 = 1;
        }

    }



function m6_turnoff(){

    if( m6_checker1 != "1" && m6_checker2 != "1" && m6_checker3 != "1" && m6_checker4 != "1" && m6_checker5 != "1"){
        document.getElementById("m6_c1").style.color = "#808080";
        document.getElementById("m6_c2").style.color = "#808080";
        document.getElementById("m6_c3").style.color = "#808080";
        document.getElementById("m6_c4").style.color = "#808080";
        document.getElementById("m6_c5").style.color = "#808080";
    }

    if( m6_checker1 == "1" && m6_checker2 != "1" && m6_checker3 != "1" && m6_checker4 != "1" && m6_checker5 != "1"){
        document.getElementById("m6_c1").style.color = "orange";
        document.getElementById("m6_c2").style.color = "#808080";
        document.getElementById("m6_c3").style.color = "#808080";
        document.getElementById("m6_c4").style.color = "#808080";
        document.getElementById("m6_c5").style.color = "#808080";
    }

    if( m6_checker1 == "1" && m6_checker2 == "1" && m6_checker3 != "1" && m6_checker4 != "1" && m6_checker5 != "1"){
        document.getElementById("m6_c1").style.color = "orange";
        document.getElementById("m6_c2").style.color = "orange";
        document.getElementById("m6_c3").style.color = "#808080";
        document.getElementById("m6_c4").style.color = "#808080";
        document.getElementById("m6_c5").style.color = "#808080";
    }

    if( m6_checker1 == "1" && m6_checker2 == "1" && m6_checker3 == "1" && m6_checker4 != "1" && m6_checker5 != "1"){
        document.getElementById("m6_c1").style.color = "orange";
        document.getElementById("m6_c2").style.color = "orange";
        document.getElementById("m6_c3").style.color = "orange";
        document.getElementById("m6_c4").style.color = "#808080";
        document.getElementById("m6_c5").style.color = "#808080";
    }

    if( m6_checker1 == "1" && m6_checker2 == "1" && m6_checker3 == "1" && m6_checker4 == "1" && m6_checker5 != "1"){
        document.getElementById("m6_c1").style.color = "orange";
        document.getElementById("m6_c2").style.color = "orange";
        document.getElementById("m6_c3").style.color = "orange";
        document.getElementById("m6_c4").style.color = "orange";
        document.getElementById("m6_c5").style.color = "#808080";
    }

    if( m6_checker1 == "1" && m6_checker2 == "1" && m6_checker3 == "1" && m6_checker4 == "1" && m6_checker5 == "1"){
        document.getElementById("m6_c1").style.color = "orange";
        document.getElementById("m6_c2").style.color = "orange";
        document.getElementById("m6_c3").style.color = "orange";
        document.getElementById("m6_c4").style.color = "orange";1
        document.getElementById("m6_c5").style.color = "orange";
    }
}