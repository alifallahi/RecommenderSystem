	var  m13_checker1 = 0;
	var  m13_checker2 = 0;
	var  m13_checker3 = 0;
	var  m13_checker4 = 0;
	var  m13_checker5 = 0;


	function m13_mylight(m13_cell_number){
    	var m13_x = m13_cell_number;

    

        if(m13_x=="1"){
        document.getElementById("m13_c1").style.color = "#ffba29";
        }
        
        else if(m13_x=="12"){
        document.getElementById("m13_c1").style.color = "#ffba29";
        document.getElementById("m13_c2").style.color = "#ffba29";
    	}
        
        else if(m13_x=="123"){
        document.getElementById("m13_c1").style.color = "#ffba29";
        document.getElementById("m13_c2").style.color = "#ffba29";
        document.getElementById("m13_c3").style.color = "#ffba29";
        }

        else if(m13_x=="1234"){
        document.getElementById("m13_c1").style.color = "#ffba29";
        document.getElementById("m13_c2").style.color = "#ffba29";
        document.getElementById("m13_c3").style.color = "#ffba29";
        document.getElementById("m13_c4").style.color = "#ffba29";
        }

        else if(m13_x=="12345"){
        document.getElementById("m13_c1").style.color = "#ffba29";
        document.getElementById("m13_c2").style.color = "#ffba29";
        document.getElementById("m13_c3").style.color = "#ffba29";
        document.getElementById("m13_c4").style.color = "#ffba29";
        document.getElementById("m13_c5").style.color = "#ffba29";
        }

    

    }


function m13_turnoff(){

    if( m13_checker1 != 1 && m13_checker2 != 1 && m13_checker3 != 1 && m13_checker4 != 1 && m13_checker5 != 1){
    	document.getElementById("m13_c1").style.color = "#808080";
        document.getElementById("m13_c2").style.color = "#808080";
        document.getElementById("m13_c3").style.color = "#808080";
        document.getElementById("m13_c4").style.color = "#808080";
        document.getElementById("m13_c5").style.color = "#808080";
    }

    }

    function m13_slecting(m13_input_number){

    	var m13_y = m13_input_number;

    	if(m13_y=="1"){
        document.getElementById("m13_c1").style.color = "orange";
        document.getElementById("m13_c2").style.color = "#808080";
        document.getElementById("m13_c3").style.color = "#808080";
        document.getElementById("m13_c4").style.color = "#808080";
        document.getElementById("m13_c5").style.color = "#808080";
        m13_checker1 = 1;
        }
        
        else if(m13_y=="12"){
        document.getElementById("m13_c1").style.color = "orange";
        document.getElementById("m13_c2").style.color = "orange";
        document.getElementById("m13_c3").style.color = "#808080";
        document.getElementById("m13_c4").style.color = "#808080";
        document.getElementById("m13_c5").style.color = "#808080";
        m13_checker2 = 1;
    	}
        
        else if(m13_y=="123"){
        document.getElementById("m13_c1").style.color = "orange";
        document.getElementById("m13_c2").style.color = "orange";
        document.getElementById("m13_c3").style.color = "orange";
        document.getElementById("m13_c4").style.color = "#808080";
        document.getElementById("m13_c5").style.color = "#808080";
         m13_checker3 = 1;
        }

        else if(m13_y=="1234"){
        document.getElementById("m13_c1").style.color = "orange";
        document.getElementById("m13_c2").style.color = "orange";
        document.getElementById("m13_c3").style.color = "orange";
        document.getElementById("m13_c4").style.color = "orange";
        document.getElementById("m13_c5").style.color = "#808080";
         m13_checker4 = 1;
        }

        else if(m13_y=="12345"){
        document.getElementById("m13_c1").style.color = "orange";
        document.getElementById("m13_c2").style.color = "orange";
        document.getElementById("m13_c3").style.color = "orange";
        document.getElementById("m13_c4").style.color = "orange";
        document.getElementById("m13_c5").style.color = "orange";
         m13_checker5 = 1;
        }

    }




