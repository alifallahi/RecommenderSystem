	var  m18_checker1 = 0;
	var  m18_checker2 = 0;
	var  m18_checker3 = 0;
	var  m18_checker4 = 0;
	var  m18_checker5 = 0;


	function m18_mylight(m18_cell_number){
    	var m18_x = m18_cell_number;

    

        if(m18_x=="1"){
        document.getElementById("m18_c1").style.color = "#ffba29";
        }
        
        else if(m18_x=="12"){
        document.getElementById("m18_c1").style.color = "#ffba29";
        document.getElementById("m18_c2").style.color = "#ffba29";
    	}
        
        else if(m18_x=="123"){
        document.getElementById("m18_c1").style.color = "#ffba29";
        document.getElementById("m18_c2").style.color = "#ffba29";
        document.getElementById("m18_c3").style.color = "#ffba29";
        }

        else if(m18_x=="1234"){
        document.getElementById("m18_c1").style.color = "#ffba29";
        document.getElementById("m18_c2").style.color = "#ffba29";
        document.getElementById("m18_c3").style.color = "#ffba29";
        document.getElementById("m18_c4").style.color = "#ffba29";
        }

        else if(m18_x=="12345"){
        document.getElementById("m18_c1").style.color = "#ffba29";
        document.getElementById("m18_c2").style.color = "#ffba29";
        document.getElementById("m18_c3").style.color = "#ffba29";
        document.getElementById("m18_c4").style.color = "#ffba29";
        document.getElementById("m18_c5").style.color = "#ffba29";
        }

    

    }


function m18_turnoff(){

    if( m18_checker1 != 1 && m18_checker2 != 1 && m18_checker3 != 1 && m18_checker4 != 1 && m18_checker5 != 1){
    	document.getElementById("m18_c1").style.color = "#808080";
        document.getElementById("m18_c2").style.color = "#808080";
        document.getElementById("m18_c3").style.color = "#808080";
        document.getElementById("m18_c4").style.color = "#808080";
        document.getElementById("m18_c5").style.color = "#808080";
    }

    }

    function m18_slecting(m18_input_number){

    	var m18_y = m18_input_number;

    	if(m18_y=="1"){
        document.getElementById("m18_c1").style.color = "orange";
        document.getElementById("m18_c2").style.color = "#808080";
        document.getElementById("m18_c3").style.color = "#808080";
        document.getElementById("m18_c4").style.color = "#808080";
        document.getElementById("m18_c5").style.color = "#808080";
        m18_checker1 = 1;
        }
        
        else if(m18_y=="12"){
        document.getElementById("m18_c1").style.color = "orange";
        document.getElementById("m18_c2").style.color = "orange";
        document.getElementById("m18_c3").style.color = "#808080";
        document.getElementById("m18_c4").style.color = "#808080";
        document.getElementById("m18_c5").style.color = "#808080";
        m18_checker2 = 1;
    	}
        
        else if(m18_y=="123"){
        document.getElementById("m18_c1").style.color = "orange";
        document.getElementById("m18_c2").style.color = "orange";
        document.getElementById("m18_c3").style.color = "orange";
        document.getElementById("m18_c4").style.color = "#808080";
        document.getElementById("m18_c5").style.color = "#808080";
         m18_checker3 = 1;
        }

        else if(m18_y=="1234"){
        document.getElementById("m18_c1").style.color = "orange";
        document.getElementById("m18_c2").style.color = "orange";
        document.getElementById("m18_c3").style.color = "orange";
        document.getElementById("m18_c4").style.color = "orange";
        document.getElementById("m18_c5").style.color = "#808080";
         m18_checker4 = 1;
        }

        else if(m18_y=="12345"){
        document.getElementById("m18_c1").style.color = "orange";
        document.getElementById("m18_c2").style.color = "orange";
        document.getElementById("m18_c3").style.color = "orange";
        document.getElementById("m18_c4").style.color = "orange";
        document.getElementById("m18_c5").style.color = "orange";
         m18_checker5 = 1;
        }

    }




