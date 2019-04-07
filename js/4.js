	var  m4_checker1 = 0;
	var  m4_checker2 = 0;
	var  m4_checker3 = 0;
	var  m4_checker4 = 0;
	var  m4_checker5 = 0;


	function m4_mylight(m4_cell_number){
    	var m4_x = m4_cell_number;

    

        if(m4_x=="1"){
        document.getElementById("m4_c1").style.color = "#ffba29";
        }
        
        else if(m4_x=="12"){
        document.getElementById("m4_c1").style.color = "#ffba29";
        document.getElementById("m4_c2").style.color = "#ffba29";
    	}
        
        else if(m4_x=="123"){
        document.getElementById("m4_c1").style.color = "#ffba29";
        document.getElementById("m4_c2").style.color = "#ffba29";
        document.getElementById("m4_c3").style.color = "#ffba29";
        }

        else if(m4_x=="1234"){
        document.getElementById("m4_c1").style.color = "#ffba29";
        document.getElementById("m4_c2").style.color = "#ffba29";
        document.getElementById("m4_c3").style.color = "#ffba29";
        document.getElementById("m4_c4").style.color = "#ffba29";
        }

        else if(m4_x=="12345"){
        document.getElementById("m4_c1").style.color = "#ffba29";
        document.getElementById("m4_c2").style.color = "#ffba29";
        document.getElementById("m4_c3").style.color = "#ffba29";
        document.getElementById("m4_c4").style.color = "#ffba29";
        document.getElementById("m4_c5").style.color = "#ffba29";
        }

    

    }


function m4_turnoff(){

    if( m4_checker1 != 1 && m4_checker2 != 1 && m4_checker3 != 1 && m4_checker4 != 1 && m4_checker5 != 1){
    	document.getElementById("m4_c1").style.color = "#808080";
        document.getElementById("m4_c2").style.color = "#808080";
        document.getElementById("m4_c3").style.color = "#808080";
        document.getElementById("m4_c4").style.color = "#808080";
        document.getElementById("m4_c5").style.color = "#808080";
    }

    }

    function m4_slecting(m4_input_number){

    	var m4_y = m4_input_number;

    	if(m4_y=="1"){
        document.getElementById("m4_c1").style.color = "orange";
        document.getElementById("m4_c2").style.color = "#808080";
        document.getElementById("m4_c3").style.color = "#808080";
        document.getElementById("m4_c4").style.color = "#808080";
        document.getElementById("m4_c5").style.color = "#808080";
        m4_checker1 = 1;
        }
        
        else if(m4_y=="12"){
        document.getElementById("m4_c1").style.color = "orange";
        document.getElementById("m4_c2").style.color = "orange";
        document.getElementById("m4_c3").style.color = "#808080";
        document.getElementById("m4_c4").style.color = "#808080";
        document.getElementById("m4_c5").style.color = "#808080";
        m4_checker2 = 1;
    	}
        
        else if(m4_y=="123"){
        document.getElementById("m4_c1").style.color = "orange";
        document.getElementById("m4_c2").style.color = "orange";
        document.getElementById("m4_c3").style.color = "orange";
        document.getElementById("m4_c4").style.color = "#808080";
        document.getElementById("m4_c5").style.color = "#808080";
         m4_checker3 = 1;
        }

        else if(m4_y=="1234"){
        document.getElementById("m4_c1").style.color = "orange";
        document.getElementById("m4_c2").style.color = "orange";
        document.getElementById("m4_c3").style.color = "orange";
        document.getElementById("m4_c4").style.color = "orange";
        document.getElementById("m4_c5").style.color = "#808080";
         m4_checker4 = 1;
        }

        else if(m4_y=="12345"){
        document.getElementById("m4_c1").style.color = "orange";
        document.getElementById("m4_c2").style.color = "orange";
        document.getElementById("m4_c3").style.color = "orange";
        document.getElementById("m4_c4").style.color = "orange";
        document.getElementById("m4_c5").style.color = "orange";
         m4_checker5 = 1;
        }

    }




