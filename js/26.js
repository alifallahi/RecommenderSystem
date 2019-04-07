	var  m26_checker1 = 0;
	var  m26_checker2 = 0;
	var  m26_checker3 = 0;
	var  m26_checker4 = 0;
	var  m26_checker5 = 0;


	function m26_mylight(m26_cell_number){
    	var m26_x = m26_cell_number;

    

        if(m26_x=="1"){
        document.getElementById("m26_c1").style.color = "#ffba29";
        }
        
        else if(m26_x=="12"){
        document.getElementById("m26_c1").style.color = "#ffba29";
        document.getElementById("m26_c2").style.color = "#ffba29";
    	}
        
        else if(m26_x=="123"){
        document.getElementById("m26_c1").style.color = "#ffba29";
        document.getElementById("m26_c2").style.color = "#ffba29";
        document.getElementById("m26_c3").style.color = "#ffba29";
        }

        else if(m26_x=="1234"){
        document.getElementById("m26_c1").style.color = "#ffba29";
        document.getElementById("m26_c2").style.color = "#ffba29";
        document.getElementById("m26_c3").style.color = "#ffba29";
        document.getElementById("m26_c4").style.color = "#ffba29";
        }

        else if(m26_x=="12345"){
        document.getElementById("m26_c1").style.color = "#ffba29";
        document.getElementById("m26_c2").style.color = "#ffba29";
        document.getElementById("m26_c3").style.color = "#ffba29";
        document.getElementById("m26_c4").style.color = "#ffba29";
        document.getElementById("m26_c5").style.color = "#ffba29";
        }

    

    }


function m26_turnoff(){

    if( m26_checker1 != 1 && m26_checker2 != 1 && m26_checker3 != 1 && m26_checker4 != 1 && m26_checker5 != 1){
    	document.getElementById("m26_c1").style.color = "#808080";
        document.getElementById("m26_c2").style.color = "#808080";
        document.getElementById("m26_c3").style.color = "#808080";
        document.getElementById("m26_c4").style.color = "#808080";
        document.getElementById("m26_c5").style.color = "#808080";
    }

    }

    function m26_slecting(m26_input_number){

    	var m26_y = m26_input_number;

    	if(m26_y=="1"){
        document.getElementById("m26_c1").style.color = "orange";
        document.getElementById("m26_c2").style.color = "#808080";
        document.getElementById("m26_c3").style.color = "#808080";
        document.getElementById("m26_c4").style.color = "#808080";
        document.getElementById("m26_c5").style.color = "#808080";
        m26_checker1 = 1;
        }
        
        else if(m26_y=="12"){
        document.getElementById("m26_c1").style.color = "orange";
        document.getElementById("m26_c2").style.color = "orange";
        document.getElementById("m26_c3").style.color = "#808080";
        document.getElementById("m26_c4").style.color = "#808080";
        document.getElementById("m26_c5").style.color = "#808080";
        m26_checker2 = 1;
    	}
        
        else if(m26_y=="123"){
        document.getElementById("m26_c1").style.color = "orange";
        document.getElementById("m26_c2").style.color = "orange";
        document.getElementById("m26_c3").style.color = "orange";
        document.getElementById("m26_c4").style.color = "#808080";
        document.getElementById("m26_c5").style.color = "#808080";
         m26_checker3 = 1;
        }

        else if(m26_y=="1234"){
        document.getElementById("m26_c1").style.color = "orange";
        document.getElementById("m26_c2").style.color = "orange";
        document.getElementById("m26_c3").style.color = "orange";
        document.getElementById("m26_c4").style.color = "orange";
        document.getElementById("m26_c5").style.color = "#808080";
         m26_checker4 = 1;
        }

        else if(m26_y=="12345"){
        document.getElementById("m26_c1").style.color = "orange";
        document.getElementById("m26_c2").style.color = "orange";
        document.getElementById("m26_c3").style.color = "orange";
        document.getElementById("m26_c4").style.color = "orange";
        document.getElementById("m26_c5").style.color = "orange";
         m26_checker5 = 1;
        }

    }




