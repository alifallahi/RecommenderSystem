	var  m30_checker1 = 0;
	var  m30_checker2 = 0;
	var  m30_checker3 = 0;
	var  m30_checker4 = 0;
	var  m30_checker5 = 0;


	function m30_mylight(m30_cell_number){
    	var m30_x = m30_cell_number;

    

        if(m30_x=="1"){
        document.getElementById("m30_c1").style.color = "#ffba29";
        }
        
        else if(m30_x=="12"){
        document.getElementById("m30_c1").style.color = "#ffba29";
        document.getElementById("m30_c2").style.color = "#ffba29";
    	}
        
        else if(m30_x=="123"){
        document.getElementById("m30_c1").style.color = "#ffba29";
        document.getElementById("m30_c2").style.color = "#ffba29";
        document.getElementById("m30_c3").style.color = "#ffba29";
        }

        else if(m30_x=="1234"){
        document.getElementById("m30_c1").style.color = "#ffba29";
        document.getElementById("m30_c2").style.color = "#ffba29";
        document.getElementById("m30_c3").style.color = "#ffba29";
        document.getElementById("m30_c4").style.color = "#ffba29";
        }

        else if(m30_x=="12345"){
        document.getElementById("m30_c1").style.color = "#ffba29";
        document.getElementById("m30_c2").style.color = "#ffba29";
        document.getElementById("m30_c3").style.color = "#ffba29";
        document.getElementById("m30_c4").style.color = "#ffba29";
        document.getElementById("m30_c5").style.color = "#ffba29";
        }

    

    }


function m30_turnoff(){

    if( m30_checker1 != 1 && m30_checker2 != 1 && m30_checker3 != 1 && m30_checker4 != 1 && m30_checker5 != 1){
    	document.getElementById("m30_c1").style.color = "#808080";
        document.getElementById("m30_c2").style.color = "#808080";
        document.getElementById("m30_c3").style.color = "#808080";
        document.getElementById("m30_c4").style.color = "#808080";
        document.getElementById("m30_c5").style.color = "#808080";
    }

    }

    function m30_slecting(m30_input_number){

    	var m30_y = m30_input_number;

    	if(m30_y=="1"){
        document.getElementById("m30_c1").style.color = "orange";
        document.getElementById("m30_c2").style.color = "#808080";
        document.getElementById("m30_c3").style.color = "#808080";
        document.getElementById("m30_c4").style.color = "#808080";
        document.getElementById("m30_c5").style.color = "#808080";
        m30_checker1 = 1;
        }
        
        else if(m30_y=="12"){
        document.getElementById("m30_c1").style.color = "orange";
        document.getElementById("m30_c2").style.color = "orange";
        document.getElementById("m30_c3").style.color = "#808080";
        document.getElementById("m30_c4").style.color = "#808080";
        document.getElementById("m30_c5").style.color = "#808080";
        m30_checker2 = 1;
    	}
        
        else if(m30_y=="123"){
        document.getElementById("m30_c1").style.color = "orange";
        document.getElementById("m30_c2").style.color = "orange";
        document.getElementById("m30_c3").style.color = "orange";
        document.getElementById("m30_c4").style.color = "#808080";
        document.getElementById("m30_c5").style.color = "#808080";
         m30_checker3 = 1;
        }

        else if(m30_y=="1234"){
        document.getElementById("m30_c1").style.color = "orange";
        document.getElementById("m30_c2").style.color = "orange";
        document.getElementById("m30_c3").style.color = "orange";
        document.getElementById("m30_c4").style.color = "orange";
        document.getElementById("m30_c5").style.color = "#808080";
         m30_checker4 = 1;
        }

        else if(m30_y=="12345"){
        document.getElementById("m30_c1").style.color = "orange";
        document.getElementById("m30_c2").style.color = "orange";
        document.getElementById("m30_c3").style.color = "orange";
        document.getElementById("m30_c4").style.color = "orange";
        document.getElementById("m30_c5").style.color = "orange";
         m30_checker5 = 1;
        }

    }




