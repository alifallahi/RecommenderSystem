	var  m7_checker1 = 0;
	var  m7_checker2 = 0;
	var  m7_checker3 = 0;
	var  m7_checker4 = 0;
	var  m7_checker5 = 0;


	function m7_mylight(m7_cell_number){
    	var m7_x = m7_cell_number;

    

        if(m7_x=="1"){
        document.getElementById("m7_c1").style.color = "#ffba29";
        }
        
        else if(m7_x=="12"){
        document.getElementById("m7_c1").style.color = "#ffba29";
        document.getElementById("m7_c2").style.color = "#ffba29";
    	}
        
        else if(m7_x=="123"){
        document.getElementById("m7_c1").style.color = "#ffba29";
        document.getElementById("m7_c2").style.color = "#ffba29";
        document.getElementById("m7_c3").style.color = "#ffba29";
        }

        else if(m7_x=="1234"){
        document.getElementById("m7_c1").style.color = "#ffba29";
        document.getElementById("m7_c2").style.color = "#ffba29";
        document.getElementById("m7_c3").style.color = "#ffba29";
        document.getElementById("m7_c4").style.color = "#ffba29";
        }

        else if(m7_x=="12345"){
        document.getElementById("m7_c1").style.color = "#ffba29";
        document.getElementById("m7_c2").style.color = "#ffba29";
        document.getElementById("m7_c3").style.color = "#ffba29";
        document.getElementById("m7_c4").style.color = "#ffba29";
        document.getElementById("m7_c5").style.color = "#ffba29";
        }

    

    }


function m7_turnoff(){

    if( m7_checker1 != 1 && m7_checker2 != 1 && m7_checker3 != 1 && m7_checker4 != 1 && m7_checker5 != 1){
    	document.getElementById("m7_c1").style.color = "#808080";
        document.getElementById("m7_c2").style.color = "#808080";
        document.getElementById("m7_c3").style.color = "#808080";
        document.getElementById("m7_c4").style.color = "#808080";
        document.getElementById("m7_c5").style.color = "#808080";
    }

    }

    function m7_slecting(m7_input_number){

    	var m7_y = m7_input_number;

    	if(m7_y=="1"){
        document.getElementById("m7_c1").style.color = "orange";
        document.getElementById("m7_c2").style.color = "#808080";
        document.getElementById("m7_c3").style.color = "#808080";
        document.getElementById("m7_c4").style.color = "#808080";
        document.getElementById("m7_c5").style.color = "#808080";
        m7_checker1 = 1;
        }
        
        else if(m7_y=="12"){
        document.getElementById("m7_c1").style.color = "orange";
        document.getElementById("m7_c2").style.color = "orange";
        document.getElementById("m7_c3").style.color = "#808080";
        document.getElementById("m7_c4").style.color = "#808080";
        document.getElementById("m7_c5").style.color = "#808080";
        m7_checker2 = 1;
    	}
        
        else if(m7_y=="123"){
        document.getElementById("m7_c1").style.color = "orange";
        document.getElementById("m7_c2").style.color = "orange";
        document.getElementById("m7_c3").style.color = "orange";
        document.getElementById("m7_c4").style.color = "#808080";
        document.getElementById("m7_c5").style.color = "#808080";
         m7_checker3 = 1;
        }

        else if(m7_y=="1234"){
        document.getElementById("m7_c1").style.color = "orange";
        document.getElementById("m7_c2").style.color = "orange";
        document.getElementById("m7_c3").style.color = "orange";
        document.getElementById("m7_c4").style.color = "orange";
        document.getElementById("m7_c5").style.color = "#808080";
         m7_checker4 = 1;
        }

        else if(m7_y=="12345"){
        document.getElementById("m7_c1").style.color = "orange";
        document.getElementById("m7_c2").style.color = "orange";
        document.getElementById("m7_c3").style.color = "orange";
        document.getElementById("m7_c4").style.color = "orange";
        document.getElementById("m7_c5").style.color = "orange";
         m7_checker5 = 1;
        }

    }




