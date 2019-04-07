	var  m29_checker1 = 0;
	var  m29_checker2 = 0;
	var  m29_checker3 = 0;
	var  m29_checker4 = 0;
	var  m29_checker5 = 0;


	function m29_mylight(m29_cell_number){
    	var m29_x = m29_cell_number;

    

        if(m29_x=="1"){
        document.getElementById("m29_c1").style.color = "#ffba29";
        }
        
        else if(m29_x=="12"){
        document.getElementById("m29_c1").style.color = "#ffba29";
        document.getElementById("m29_c2").style.color = "#ffba29";
    	}
        
        else if(m29_x=="123"){
        document.getElementById("m29_c1").style.color = "#ffba29";
        document.getElementById("m29_c2").style.color = "#ffba29";
        document.getElementById("m29_c3").style.color = "#ffba29";
        }

        else if(m29_x=="1234"){
        document.getElementById("m29_c1").style.color = "#ffba29";
        document.getElementById("m29_c2").style.color = "#ffba29";
        document.getElementById("m29_c3").style.color = "#ffba29";
        document.getElementById("m29_c4").style.color = "#ffba29";
        }

        else if(m29_x=="12345"){
        document.getElementById("m29_c1").style.color = "#ffba29";
        document.getElementById("m29_c2").style.color = "#ffba29";
        document.getElementById("m29_c3").style.color = "#ffba29";
        document.getElementById("m29_c4").style.color = "#ffba29";
        document.getElementById("m29_c5").style.color = "#ffba29";
        }

    

    }


function m29_turnoff(){

    if( m29_checker1 != 1 && m29_checker2 != 1 && m29_checker3 != 1 && m29_checker4 != 1 && m29_checker5 != 1){
    	document.getElementById("m29_c1").style.color = "#808080";
        document.getElementById("m29_c2").style.color = "#808080";
        document.getElementById("m29_c3").style.color = "#808080";
        document.getElementById("m29_c4").style.color = "#808080";
        document.getElementById("m29_c5").style.color = "#808080";
    }

    }

    function m29_slecting(m29_input_number){

    	var m29_y = m29_input_number;

    	if(m29_y=="1"){
        document.getElementById("m29_c1").style.color = "orange";
        document.getElementById("m29_c2").style.color = "#808080";
        document.getElementById("m29_c3").style.color = "#808080";
        document.getElementById("m29_c4").style.color = "#808080";
        document.getElementById("m29_c5").style.color = "#808080";
        m29_checker1 = 1;
        }
        
        else if(m29_y=="12"){
        document.getElementById("m29_c1").style.color = "orange";
        document.getElementById("m29_c2").style.color = "orange";
        document.getElementById("m29_c3").style.color = "#808080";
        document.getElementById("m29_c4").style.color = "#808080";
        document.getElementById("m29_c5").style.color = "#808080";
        m29_checker2 = 1;
    	}
        
        else if(m29_y=="123"){
        document.getElementById("m29_c1").style.color = "orange";
        document.getElementById("m29_c2").style.color = "orange";
        document.getElementById("m29_c3").style.color = "orange";
        document.getElementById("m29_c4").style.color = "#808080";
        document.getElementById("m29_c5").style.color = "#808080";
         m29_checker3 = 1;
        }

        else if(m29_y=="1234"){
        document.getElementById("m29_c1").style.color = "orange";
        document.getElementById("m29_c2").style.color = "orange";
        document.getElementById("m29_c3").style.color = "orange";
        document.getElementById("m29_c4").style.color = "orange";
        document.getElementById("m29_c5").style.color = "#808080";
         m29_checker4 = 1;
        }

        else if(m29_y=="12345"){
        document.getElementById("m29_c1").style.color = "orange";
        document.getElementById("m29_c2").style.color = "orange";
        document.getElementById("m29_c3").style.color = "orange";
        document.getElementById("m29_c4").style.color = "orange";
        document.getElementById("m29_c5").style.color = "orange";
         m29_checker5 = 1;
        }

    }




