	var  m11_checker1 = 0;
	var  m11_checker2 = 0;
	var  m11_checker3 = 0;
	var  m11_checker4 = 0;
	var  m11_checker5 = 0;


	function m11_mylight(m11_cell_number){
    	var m11_x = m11_cell_number;

    

        if(m11_x=="1"){
        document.getElementById("m11_c1").style.color = "#ffba29";
        }
        
        else if(m11_x=="12"){
        document.getElementById("m11_c1").style.color = "#ffba29";
        document.getElementById("m11_c2").style.color = "#ffba29";
    	}
        
        else if(m11_x=="123"){
        document.getElementById("m11_c1").style.color = "#ffba29";
        document.getElementById("m11_c2").style.color = "#ffba29";
        document.getElementById("m11_c3").style.color = "#ffba29";
        }

        else if(m11_x=="1234"){
        document.getElementById("m11_c1").style.color = "#ffba29";
        document.getElementById("m11_c2").style.color = "#ffba29";
        document.getElementById("m11_c3").style.color = "#ffba29";
        document.getElementById("m11_c4").style.color = "#ffba29";
        }

        else if(m11_x=="12345"){
        document.getElementById("m11_c1").style.color = "#ffba29";
        document.getElementById("m11_c2").style.color = "#ffba29";
        document.getElementById("m11_c3").style.color = "#ffba29";
        document.getElementById("m11_c4").style.color = "#ffba29";
        document.getElementById("m11_c5").style.color = "#ffba29";
        }

    

    }


function m11_turnoff(){

    if( m11_checker1 != 1 && m11_checker2 != 1 && m11_checker3 != 1 && m11_checker4 != 1 && m11_checker5 != 1){
    	document.getElementById("m11_c1").style.color = "#808080";
        document.getElementById("m11_c2").style.color = "#808080";
        document.getElementById("m11_c3").style.color = "#808080";
        document.getElementById("m11_c4").style.color = "#808080";
        document.getElementById("m11_c5").style.color = "#808080";
    }

    }

    function m11_slecting(m11_input_number){

    	var m11_y = m11_input_number;

    	if(m11_y=="1"){
        document.getElementById("m11_c1").style.color = "orange";
        document.getElementById("m11_c2").style.color = "#808080";
        document.getElementById("m11_c3").style.color = "#808080";
        document.getElementById("m11_c4").style.color = "#808080";
        document.getElementById("m11_c5").style.color = "#808080";
        m11_checker1 = 1;
        }
        
        else if(m11_y=="12"){
        document.getElementById("m11_c1").style.color = "orange";
        document.getElementById("m11_c2").style.color = "orange";
        document.getElementById("m11_c3").style.color = "#808080";
        document.getElementById("m11_c4").style.color = "#808080";
        document.getElementById("m11_c5").style.color = "#808080";
        m11_checker2 = 1;
    	}
        
        else if(m11_y=="123"){
        document.getElementById("m11_c1").style.color = "orange";
        document.getElementById("m11_c2").style.color = "orange";
        document.getElementById("m11_c3").style.color = "orange";
        document.getElementById("m11_c4").style.color = "#808080";
        document.getElementById("m11_c5").style.color = "#808080";
         m11_checker3 = 1;
        }

        else if(m11_y=="1234"){
        document.getElementById("m11_c1").style.color = "orange";
        document.getElementById("m11_c2").style.color = "orange";
        document.getElementById("m11_c3").style.color = "orange";
        document.getElementById("m11_c4").style.color = "orange";
        document.getElementById("m11_c5").style.color = "#808080";
         m11_checker4 = 1;
        }

        else if(m11_y=="12345"){
        document.getElementById("m11_c1").style.color = "orange";
        document.getElementById("m11_c2").style.color = "orange";
        document.getElementById("m11_c3").style.color = "orange";
        document.getElementById("m11_c4").style.color = "orange";
        document.getElementById("m11_c5").style.color = "orange";
         m11_checker5 = 1;
        }

    }




