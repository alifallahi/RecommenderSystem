	var  m24_checker1 = 0;
	var  m24_checker2 = 0;
	var  m24_checker3 = 0;
	var  m24_checker4 = 0;
	var  m24_checker5 = 0;


	function m24_mylight(m24_cell_number){
    	var m24_x = m24_cell_number;

    

        if(m24_x=="1"){
        document.getElementById("m24_c1").style.color = "#ffba29";
        }
        
        else if(m24_x=="12"){
        document.getElementById("m24_c1").style.color = "#ffba29";
        document.getElementById("m24_c2").style.color = "#ffba29";
    	}
        
        else if(m24_x=="123"){
        document.getElementById("m24_c1").style.color = "#ffba29";
        document.getElementById("m24_c2").style.color = "#ffba29";
        document.getElementById("m24_c3").style.color = "#ffba29";
        }

        else if(m24_x=="1234"){
        document.getElementById("m24_c1").style.color = "#ffba29";
        document.getElementById("m24_c2").style.color = "#ffba29";
        document.getElementById("m24_c3").style.color = "#ffba29";
        document.getElementById("m24_c4").style.color = "#ffba29";
        }

        else if(m24_x=="12345"){
        document.getElementById("m24_c1").style.color = "#ffba29";
        document.getElementById("m24_c2").style.color = "#ffba29";
        document.getElementById("m24_c3").style.color = "#ffba29";
        document.getElementById("m24_c4").style.color = "#ffba29";
        document.getElementById("m24_c5").style.color = "#ffba29";
        }

    

    }


function m24_turnoff(){

    if( m24_checker1 != 1 && m24_checker2 != 1 && m24_checker3 != 1 && m24_checker4 != 1 && m24_checker5 != 1){
    	document.getElementById("m24_c1").style.color = "#808080";
        document.getElementById("m24_c2").style.color = "#808080";
        document.getElementById("m24_c3").style.color = "#808080";
        document.getElementById("m24_c4").style.color = "#808080";
        document.getElementById("m24_c5").style.color = "#808080";
    }

    }

    function m24_slecting(m24_input_number){

    	var m24_y = m24_input_number;

    	if(m24_y=="1"){
        document.getElementById("m24_c1").style.color = "orange";
        document.getElementById("m24_c2").style.color = "#808080";
        document.getElementById("m24_c3").style.color = "#808080";
        document.getElementById("m24_c4").style.color = "#808080";
        document.getElementById("m24_c5").style.color = "#808080";
        m24_checker1 = 1;
        }
        
        else if(m24_y=="12"){
        document.getElementById("m24_c1").style.color = "orange";
        document.getElementById("m24_c2").style.color = "orange";
        document.getElementById("m24_c3").style.color = "#808080";
        document.getElementById("m24_c4").style.color = "#808080";
        document.getElementById("m24_c5").style.color = "#808080";
        m24_checker2 = 1;
    	}
        
        else if(m24_y=="123"){
        document.getElementById("m24_c1").style.color = "orange";
        document.getElementById("m24_c2").style.color = "orange";
        document.getElementById("m24_c3").style.color = "orange";
        document.getElementById("m24_c4").style.color = "#808080";
        document.getElementById("m24_c5").style.color = "#808080";
         m24_checker3 = 1;
        }

        else if(m24_y=="1234"){
        document.getElementById("m24_c1").style.color = "orange";
        document.getElementById("m24_c2").style.color = "orange";
        document.getElementById("m24_c3").style.color = "orange";
        document.getElementById("m24_c4").style.color = "orange";
        document.getElementById("m24_c5").style.color = "#808080";
         m24_checker4 = 1;
        }

        else if(m24_y=="12345"){
        document.getElementById("m24_c1").style.color = "orange";
        document.getElementById("m24_c2").style.color = "orange";
        document.getElementById("m24_c3").style.color = "orange";
        document.getElementById("m24_c4").style.color = "orange";
        document.getElementById("m24_c5").style.color = "orange";
         m24_checker5 = 1;
        }

    }




