	var  m8_checker1 = 0;
	var  m8_checker2 = 0;
	var  m8_checker3 = 0;
	var  m8_checker4 = 0;
	var  m8_checker5 = 0;


	function m8_mylight(m8_cell_number){
    	var m8_x = m8_cell_number;

    

        if(m8_x=="1"){
        document.getElementById("m8_c1").style.color = "#ffba29";
        }
        
        else if(m8_x=="12"){
        document.getElementById("m8_c1").style.color = "#ffba29";
        document.getElementById("m8_c2").style.color = "#ffba29";
    	}
        
        else if(m8_x=="123"){
        document.getElementById("m8_c1").style.color = "#ffba29";
        document.getElementById("m8_c2").style.color = "#ffba29";
        document.getElementById("m8_c3").style.color = "#ffba29";
        }

        else if(m8_x=="1234"){
        document.getElementById("m8_c1").style.color = "#ffba29";
        document.getElementById("m8_c2").style.color = "#ffba29";
        document.getElementById("m8_c3").style.color = "#ffba29";
        document.getElementById("m8_c4").style.color = "#ffba29";
        }

        else if(m8_x=="12345"){
        document.getElementById("m8_c1").style.color = "#ffba29";
        document.getElementById("m8_c2").style.color = "#ffba29";
        document.getElementById("m8_c3").style.color = "#ffba29";
        document.getElementById("m8_c4").style.color = "#ffba29";
        document.getElementById("m8_c5").style.color = "#ffba29";
        }

    

    }


function m8_turnoff(){

    if( m8_checker1 != 1 && m8_checker2 != 1 && m8_checker3 != 1 && m8_checker4 != 1 && m8_checker5 != 1){
    	document.getElementById("m8_c1").style.color = "#808080";
        document.getElementById("m8_c2").style.color = "#808080";
        document.getElementById("m8_c3").style.color = "#808080";
        document.getElementById("m8_c4").style.color = "#808080";
        document.getElementById("m8_c5").style.color = "#808080";
    }

    }

    function m8_slecting(m8_input_number){

    	var m8_y = m8_input_number;

    	if(m8_y=="1"){
        document.getElementById("m8_c1").style.color = "orange";
        document.getElementById("m8_c2").style.color = "#808080";
        document.getElementById("m8_c3").style.color = "#808080";
        document.getElementById("m8_c4").style.color = "#808080";
        document.getElementById("m8_c5").style.color = "#808080";
        m8_checker1 = 1;
        }
        
        else if(m8_y=="12"){
        document.getElementById("m8_c1").style.color = "orange";
        document.getElementById("m8_c2").style.color = "orange";
        document.getElementById("m8_c3").style.color = "#808080";
        document.getElementById("m8_c4").style.color = "#808080";
        document.getElementById("m8_c5").style.color = "#808080";
        m8_checker2 = 1;
    	}
        
        else if(m8_y=="123"){
        document.getElementById("m8_c1").style.color = "orange";
        document.getElementById("m8_c2").style.color = "orange";
        document.getElementById("m8_c3").style.color = "orange";
        document.getElementById("m8_c4").style.color = "#808080";
        document.getElementById("m8_c5").style.color = "#808080";
         m8_checker3 = 1;
        }

        else if(m8_y=="1234"){
        document.getElementById("m8_c1").style.color = "orange";
        document.getElementById("m8_c2").style.color = "orange";
        document.getElementById("m8_c3").style.color = "orange";
        document.getElementById("m8_c4").style.color = "orange";
        document.getElementById("m8_c5").style.color = "#808080";
         m8_checker4 = 1;
        }

        else if(m8_y=="12345"){
        document.getElementById("m8_c1").style.color = "orange";
        document.getElementById("m8_c2").style.color = "orange";
        document.getElementById("m8_c3").style.color = "orange";
        document.getElementById("m8_c4").style.color = "orange";
        document.getElementById("m8_c5").style.color = "orange";
         m8_checker5 = 1;
        }

    }




