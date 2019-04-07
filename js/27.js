	var  m27_checker1 = 0;
	var  m27_checker2 = 0;
	var  m27_checker3 = 0;
	var  m27_checker4 = 0;
	var  m27_checker5 = 0;


	function m27_mylight(m27_cell_number){
    	var m27_x = m27_cell_number;

    

        if(m27_x=="1"){
        document.getElementById("m27_c1").style.color = "#ffba29";
        }
        
        else if(m27_x=="12"){
        document.getElementById("m27_c1").style.color = "#ffba29";
        document.getElementById("m27_c2").style.color = "#ffba29";
    	}
        
        else if(m27_x=="123"){
        document.getElementById("m27_c1").style.color = "#ffba29";
        document.getElementById("m27_c2").style.color = "#ffba29";
        document.getElementById("m27_c3").style.color = "#ffba29";
        }

        else if(m27_x=="1234"){
        document.getElementById("m27_c1").style.color = "#ffba29";
        document.getElementById("m27_c2").style.color = "#ffba29";
        document.getElementById("m27_c3").style.color = "#ffba29";
        document.getElementById("m27_c4").style.color = "#ffba29";
        }

        else if(m27_x=="12345"){
        document.getElementById("m27_c1").style.color = "#ffba29";
        document.getElementById("m27_c2").style.color = "#ffba29";
        document.getElementById("m27_c3").style.color = "#ffba29";
        document.getElementById("m27_c4").style.color = "#ffba29";
        document.getElementById("m27_c5").style.color = "#ffba29";
        }

    

    }


function m27_turnoff(){

    if( m27_checker1 != 1 && m27_checker2 != 1 && m27_checker3 != 1 && m27_checker4 != 1 && m27_checker5 != 1){
    	document.getElementById("m27_c1").style.color = "#808080";
        document.getElementById("m27_c2").style.color = "#808080";
        document.getElementById("m27_c3").style.color = "#808080";
        document.getElementById("m27_c4").style.color = "#808080";
        document.getElementById("m27_c5").style.color = "#808080";
    }

    }

    function m27_slecting(m27_input_number){

    	var m27_y = m27_input_number;

    	if(m27_y=="1"){
        document.getElementById("m27_c1").style.color = "orange";
        document.getElementById("m27_c2").style.color = "#808080";
        document.getElementById("m27_c3").style.color = "#808080";
        document.getElementById("m27_c4").style.color = "#808080";
        document.getElementById("m27_c5").style.color = "#808080";
        m27_checker1 = 1;
        }
        
        else if(m27_y=="12"){
        document.getElementById("m27_c1").style.color = "orange";
        document.getElementById("m27_c2").style.color = "orange";
        document.getElementById("m27_c3").style.color = "#808080";
        document.getElementById("m27_c4").style.color = "#808080";
        document.getElementById("m27_c5").style.color = "#808080";
        m27_checker2 = 1;
    	}
        
        else if(m27_y=="123"){
        document.getElementById("m27_c1").style.color = "orange";
        document.getElementById("m27_c2").style.color = "orange";
        document.getElementById("m27_c3").style.color = "orange";
        document.getElementById("m27_c4").style.color = "#808080";
        document.getElementById("m27_c5").style.color = "#808080";
         m27_checker3 = 1;
        }

        else if(m27_y=="1234"){
        document.getElementById("m27_c1").style.color = "orange";
        document.getElementById("m27_c2").style.color = "orange";
        document.getElementById("m27_c3").style.color = "orange";
        document.getElementById("m27_c4").style.color = "orange";
        document.getElementById("m27_c5").style.color = "#808080";
         m27_checker4 = 1;
        }

        else if(m27_y=="12345"){
        document.getElementById("m27_c1").style.color = "orange";
        document.getElementById("m27_c2").style.color = "orange";
        document.getElementById("m27_c3").style.color = "orange";
        document.getElementById("m27_c4").style.color = "orange";
        document.getElementById("m27_c5").style.color = "orange";
         m27_checker5 = 1;
        }

    }




