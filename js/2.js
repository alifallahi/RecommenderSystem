    var  m2_checker1 = 0;
    var  m2_checker2 = 0;
    var  m2_checker3 = 0;
    var  m2_checker4 = 0;
    var  m2_checker5 = 0;


    function m2_mylight(m2_cell_number){
        var m2_x = m2_cell_number;

    

        if(m2_x=="1"){
        document.getElementById("m2_c1").style.color = "#ffba29";
        }
        
        else if(m2_x=="12"){
        document.getElementById("m2_c1").style.color = "#ffba29";
        document.getElementById("m2_c2").style.color = "#ffba29";
        }
        
        else if(m2_x=="123"){
        document.getElementById("m2_c1").style.color = "#ffba29";
        document.getElementById("m2_c2").style.color = "#ffba29";
        document.getElementById("m2_c3").style.color = "#ffba29";
        }

        else if(m2_x=="1234"){
        document.getElementById("m2_c1").style.color = "#ffba29";
        document.getElementById("m2_c2").style.color = "#ffba29";
        document.getElementById("m2_c3").style.color = "#ffba29";
        document.getElementById("m2_c4").style.color = "#ffba29";
        }

        else if(m2_x=="12345"){
        document.getElementById("m2_c1").style.color = "#ffba29";
        document.getElementById("m2_c2").style.color = "#ffba29";
        document.getElementById("m2_c3").style.color = "#ffba29";
        document.getElementById("m2_c4").style.color = "#ffba29";
        document.getElementById("m2_c5").style.color = "#ffba29";
        }

    

    }


function m2_turnoff(){

    if( m2_checker1 != 1 && m2_checker2 != 1 && m2_checker3 != 1 && m2_checker4 != 1 && m2_checker5 != 1){
        document.getElementById("m2_c1").style.color = "#808080";
        document.getElementById("m2_c2").style.color = "#808080";
        document.getElementById("m2_c3").style.color = "#808080";
        document.getElementById("m2_c4").style.color = "#808080";
        document.getElementById("m2_c5").style.color = "#808080";
    }

    }

    function m2_slecting(m2_input_number){

        var m2_y = m2_input_number;

        if(m2_y=="1"){
        document.getElementById("m2_c1").style.color = "orange";
        document.getElementById("m2_c2").style.color = "#808080";
        document.getElementById("m2_c3").style.color = "#808080";
        document.getElementById("m2_c4").style.color = "#808080";
        document.getElementById("m2_c5").style.color = "#808080";
        m2_checker1 = 1;
        }
        
        else if(m2_y=="12"){
        document.getElementById("m2_c1").style.color = "orange";
        document.getElementById("m2_c2").style.color = "orange";
        document.getElementById("m2_c3").style.color = "#808080";
        document.getElementById("m2_c4").style.color = "#808080";
        document.getElementById("m2_c5").style.color = "#808080";
        m2_checker2 = 1;
        }
        
        else if(m2_y=="123"){
        document.getElementById("m2_c1").style.color = "orange";
        document.getElementById("m2_c2").style.color = "orange";
        document.getElementById("m2_c3").style.color = "orange";
        document.getElementById("m2_c4").style.color = "#808080";
        document.getElementById("m2_c5").style.color = "#808080";
         m2_checker3 = 1;
        }

        else if(m2_y=="1234"){
        document.getElementById("m2_c1").style.color = "orange";
        document.getElementById("m2_c2").style.color = "orange";
        document.getElementById("m2_c3").style.color = "orange";
        document.getElementById("m2_c4").style.color = "orange";
        document.getElementById("m2_c5").style.color = "#808080";
         m2_checker4 = 1;
        }

        else if(m2_y=="12345"){
        document.getElementById("m2_c1").style.color = "orange";
        document.getElementById("m2_c2").style.color = "orange";
        document.getElementById("m2_c3").style.color = "orange";
        document.getElementById("m2_c4").style.color = "orange";
        document.getElementById("m2_c5").style.color = "orange";
         m2_checker5 = 1;
        }

    }




