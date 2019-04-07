	var  m12_checker1 = 0;
	var  m12_checker2 = 0;
	var  m12_checker3 = 0;
	var  m12_checker4 = 0;
	var  m12_checker5 = 0;


	function m12_mylight(m12_cell_number){
    	var m12_x = m12_cell_number;

    

        if(m12_x=="1"){
        document.getElementById("m12_c1").style.color = "#ffba29";
        }
        
        else if(m12_x=="12"){
        document.getElementById("m12_c1").style.color = "#ffba29";
        document.getElementById("m12_c2").style.color = "#ffba29";
    	}
        
        else if(m12_x=="123"){
        document.getElementById("m12_c1").style.color = "#ffba29";
        document.getElementById("m12_c2").style.color = "#ffba29";
        document.getElementById("m12_c3").style.color = "#ffba29";
        }

        else if(m12_x=="1234"){
        document.getElementById("m12_c1").style.color = "#ffba29";
        document.getElementById("m12_c2").style.color = "#ffba29";
        document.getElementById("m12_c3").style.color = "#ffba29";
        document.getElementById("m12_c4").style.color = "#ffba29";
        }

        else if(m12_x=="12345"){
        document.getElementById("m12_c1").style.color = "#ffba29";
        document.getElementById("m12_c2").style.color = "#ffba29";
        document.getElementById("m12_c3").style.color = "#ffba29";
        document.getElementById("m12_c4").style.color = "#ffba29";
        document.getElementById("m12_c5").style.color = "#ffba29";
        }

    

    }


function m12_turnoff(){

    if( m12_checker1 != 1 && m12_checker2 != 1 && m12_checker3 != 1 && m12_checker4 != 1 && m12_checker5 != 1){
    	document.getElementById("m12_c1").style.color = "#808080";
        document.getElementById("m12_c2").style.color = "#808080";
        document.getElementById("m12_c3").style.color = "#808080";
        document.getElementById("m12_c4").style.color = "#808080";
        document.getElementById("m12_c5").style.color = "#808080";
    }

    }

    function m12_slecting(m12_input_number){

    	var m12_y = m12_input_number;

    	if(m12_y=="1"){
        document.getElementById("m12_c1").style.color = "orange";
        document.getElementById("m12_c2").style.color = "#808080";
        document.getElementById("m12_c3").style.color = "#808080";
        document.getElementById("m12_c4").style.color = "#808080";
        document.getElementById("m12_c5").style.color = "#808080";
        m12_checker1 = 1;
        }
        
        else if(m12_y=="12"){
        document.getElementById("m12_c1").style.color = "orange";
        document.getElementById("m12_c2").style.color = "orange";
        document.getElementById("m12_c3").style.color = "#808080";
        document.getElementById("m12_c4").style.color = "#808080";
        document.getElementById("m12_c5").style.color = "#808080";
        m12_checker2 = 1;
    	}
        
        else if(m12_y=="123"){
        document.getElementById("m12_c1").style.color = "orange";
        document.getElementById("m12_c2").style.color = "orange";
        document.getElementById("m12_c3").style.color = "orange";
        document.getElementById("m12_c4").style.color = "#808080";
        document.getElementById("m12_c5").style.color = "#808080";
         m12_checker3 = 1;
        }

        else if(m12_y=="1234"){
        document.getElementById("m12_c1").style.color = "orange";
        document.getElementById("m12_c2").style.color = "orange";
        document.getElementById("m12_c3").style.color = "orange";
        document.getElementById("m12_c4").style.color = "orange";
        document.getElementById("m12_c5").style.color = "#808080";
         m12_checker4 = 1;
        }

        else if(m12_y=="12345"){
        document.getElementById("m12_c1").style.color = "orange";
        document.getElementById("m12_c2").style.color = "orange";
        document.getElementById("m12_c3").style.color = "orange";
        document.getElementById("m12_c4").style.color = "orange";
        document.getElementById("m12_c5").style.color = "orange";
         m12_checker5 = 1;
        }

    }




