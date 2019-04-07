    var  m19_checker1 = 0;
    var  m19_checker2 = 0;
    var  m19_checker3 = 0;
    var  m19_checker4 = 0;
    var  m19_checker5 = 0;


    function m19_mylight(m19_cell_number){
        var m19_x = m19_cell_number;

    

        if(m19_x=="1"){
        document.getElementById("m19_c1").style.color = "#ffba29";
        }
        
        else if(m19_x=="12"){
        document.getElementById("m19_c1").style.color = "#ffba29";
        document.getElementById("m19_c2").style.color = "#ffba29";
        }
        
        else if(m19_x=="123"){
        document.getElementById("m19_c1").style.color = "#ffba29";
        document.getElementById("m19_c2").style.color = "#ffba29";
        document.getElementById("m19_c3").style.color = "#ffba29";
        }

        else if(m19_x=="1234"){
        document.getElementById("m19_c1").style.color = "#ffba29";
        document.getElementById("m19_c2").style.color = "#ffba29";
        document.getElementById("m19_c3").style.color = "#ffba29";
        document.getElementById("m19_c4").style.color = "#ffba29";
        }

        else if(m19_x=="12345"){
        document.getElementById("m19_c1").style.color = "#ffba29";
        document.getElementById("m19_c2").style.color = "#ffba29";
        document.getElementById("m19_c3").style.color = "#ffba29";
        document.getElementById("m19_c4").style.color = "#ffba29";
        document.getElementById("m19_c5").style.color = "#ffba29";
        }

    

    }





    

    function m19_slecting(m19_input_number){

        var m19_y = m19_input_number;

        if(m19_y=="1"){
        document.getElementById("m19_c1").style.color = "orange";
        document.getElementById("m19_c2").style.color = "#808080";
        document.getElementById("m19_c3").style.color = "#808080";
        document.getElementById("m19_c4").style.color = "#808080";
        document.getElementById("m19_c5").style.color = "#808080";
        m19_checker1 = 1;
        m19_checker2 = 0;
        m19_checker3 = 0;
        m19_checker4 = 0;
        m19_checker5 = 0;
        }
        
        else if(m19_y=="12"){
        document.getElementById("m19_c1").style.color = "orange";
        document.getElementById("m19_c2").style.color = "orange";
        document.getElementById("m19_c3").style.color = "#808080";
        document.getElementById("m19_c4").style.color = "#808080";
        document.getElementById("m19_c5").style.color = "#808080";
        m19_checker1 = 1;
        m19_checker2 = 1;
        m19_checker3 = 0;
        m19_checker4 = 0;
        m19_checker5 = 0;
        }
        
        else if(m19_y=="123"){
        document.getElementById("m19_c1").style.color = "orange";
        document.getElementById("m19_c2").style.color = "orange";
        document.getElementById("m19_c3").style.color = "orange";
        document.getElementById("m19_c4").style.color = "#808080";
        document.getElementById("m19_c5").style.color = "#808080";
        m19_checker1 = 1;
        m19_checker2 = 1;
        m19_checker3 = 1;
        m19_checker4 = 0;
        m19_checker5 = 0;
        }

        else if(m19_y=="1234"){
        document.getElementById("m19_c1").style.color = "orange";
        document.getElementById("m19_c2").style.color = "orange";
        document.getElementById("m19_c3").style.color = "orange";
        document.getElementById("m19_c4").style.color = "orange";
        document.getElementById("m19_c5").style.color = "#808080";
        m19_checker1 = 1;
        m19_checker2 = 1;
        m19_checker3 = 1;
        m19_checker4 = 1;
        m19_checker5 = 0;
        }

        else if(m19_y=="12345"){
        document.getElementById("m19_c1").style.color = "orange";
        document.getElementById("m19_c2").style.color = "orange";
        document.getElementById("m19_c3").style.color = "orange";
        document.getElementById("m19_c4").style.color = "orange";
        document.getElementById("m19_c5").style.color = "orange";
        m19_checker1 = 1;
        m19_checker2 = 1;
        m19_checker3 = 1;
        m19_checker4 = 1;
        m19_checker5 = 1;
        }

    }



function m19_turnoff(){

    if( m19_checker1 != "1" && m19_checker2 != "1" && m19_checker3 != "1" && m19_checker4 != "1" && m19_checker5 != "1"){
        document.getElementById("m19_c1").style.color = "#808080";
        document.getElementById("m19_c2").style.color = "#808080";
        document.getElementById("m19_c3").style.color = "#808080";
        document.getElementById("m19_c4").style.color = "#808080";
        document.getElementById("m19_c5").style.color = "#808080";
    }

    if( m19_checker1 == "1" && m19_checker2 != "1" && m19_checker3 != "1" && m19_checker4 != "1" && m19_checker5 != "1"){
        document.getElementById("m19_c1").style.color = "orange";
        document.getElementById("m19_c2").style.color = "#808080";
        document.getElementById("m19_c3").style.color = "#808080";
        document.getElementById("m19_c4").style.color = "#808080";
        document.getElementById("m19_c5").style.color = "#808080";
    }

    if( m19_checker1 == "1" && m19_checker2 == "1" && m19_checker3 != "1" && m19_checker4 != "1" && m19_checker5 != "1"){
        document.getElementById("m19_c1").style.color = "orange";
        document.getElementById("m19_c2").style.color = "orange";
        document.getElementById("m19_c3").style.color = "#808080";
        document.getElementById("m19_c4").style.color = "#808080";
        document.getElementById("m19_c5").style.color = "#808080";
    }

    if( m19_checker1 == "1" && m19_checker2 == "1" && m19_checker3 == "1" && m19_checker4 != "1" && m19_checker5 != "1"){
        document.getElementById("m19_c1").style.color = "orange";
        document.getElementById("m19_c2").style.color = "orange";
        document.getElementById("m19_c3").style.color = "orange";
        document.getElementById("m19_c4").style.color = "#808080";
        document.getElementById("m19_c5").style.color = "#808080";
    }

    if( m19_checker1 == "1" && m19_checker2 == "1" && m19_checker3 == "1" && m19_checker4 == "1" && m19_checker5 != "1"){
        document.getElementById("m19_c1").style.color = "orange";
        document.getElementById("m19_c2").style.color = "orange";
        document.getElementById("m19_c3").style.color = "orange";
        document.getElementById("m19_c4").style.color = "orange";
        document.getElementById("m19_c5").style.color = "#808080";
    }

    if( m19_checker1 == "1" && m19_checker2 == "1" && m19_checker3 == "1" && m19_checker4 == "1" && m19_checker5 == "1"){
        document.getElementById("m19_c1").style.color = "orange";
        document.getElementById("m19_c2").style.color = "orange";
        document.getElementById("m19_c3").style.color = "orange";
        document.getElementById("m19_c4").style.color = "orange";
        document.getElementById("m19_c5").style.color = "orange";
    }
}  