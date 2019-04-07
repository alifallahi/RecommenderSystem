	var  m28_checker1 = 0;
	var  m28_checker2 = 0;
	var  m28_checker3 = 0;
	var  m28_checker4 = 0;
	var  m28_checker5 = 0;


	function m28_mylight(m28_cell_number){
    	var m28_x = m28_cell_number;

    

        if(m28_x=="1"){
        document.getElementById("m28_c1").style.color = "#ffba29";
        }
        
        else if(m28_x=="12"){
        document.getElementById("m28_c1").style.color = "#ffba29";
        document.getElementById("m28_c2").style.color = "#ffba29";
    	}
        
        else if(m28_x=="123"){
        document.getElementById("m28_c1").style.color = "#ffba29";
        document.getElementById("m28_c2").style.color = "#ffba29";
        document.getElementById("m28_c3").style.color = "#ffba29";
        }

        else if(m28_x=="1234"){
        document.getElementById("m28_c1").style.color = "#ffba29";
        document.getElementById("m28_c2").style.color = "#ffba29";
        document.getElementById("m28_c3").style.color = "#ffba29";
        document.getElementById("m28_c4").style.color = "#ffba29";
        }

        else if(m28_x=="12345"){
        document.getElementById("m28_c1").style.color = "#ffba29";
        document.getElementById("m28_c2").style.color = "#ffba29";
        document.getElementById("m28_c3").style.color = "#ffba29";
        document.getElementById("m28_c4").style.color = "#ffba29";
        document.getElementById("m28_c5").style.color = "#ffba29";
        }

    

    }


function m28_turnoff(){

    if( m28_checker1 != 1 && m28_checker2 != 1 && m28_checker3 != 1 && m28_checker4 != 1 && m28_checker5 != 1){
    	document.getElementById("m28_c1").style.color = "#808080";
        document.getElementById("m28_c2").style.color = "#808080";
        document.getElementById("m28_c3").style.color = "#808080";
        document.getElementById("m28_c4").style.color = "#808080";
        document.getElementById("m28_c5").style.color = "#808080";
    }

    }

    function m28_slecting(m28_input_number){

    	var m28_y = m28_input_number;

    	if(m28_y=="1"){
        document.getElementById("m28_c1").style.color = "orange";
        document.getElementById("m28_c2").style.color = "#808080";
        document.getElementById("m28_c3").style.color = "#808080";
        document.getElementById("m28_c4").style.color = "#808080";
        document.getElementById("m28_c5").style.color = "#808080";
        m28_checker1 = 1;
        }
        
        else if(m28_y=="12"){
        document.getElementById("m28_c1").style.color = "orange";
        document.getElementById("m28_c2").style.color = "orange";
        document.getElementById("m28_c3").style.color = "#808080";
        document.getElementById("m28_c4").style.color = "#808080";
        document.getElementById("m28_c5").style.color = "#808080";
        m28_checker2 = 1;
    	}
        
        else if(m28_y=="123"){
        document.getElementById("m28_c1").style.color = "orange";
        document.getElementById("m28_c2").style.color = "orange";
        document.getElementById("m28_c3").style.color = "orange";
        document.getElementById("m28_c4").style.color = "#808080";
        document.getElementById("m28_c5").style.color = "#808080";
         m28_checker3 = 1;
        }

        else if(m28_y=="1234"){
        document.getElementById("m28_c1").style.color = "orange";
        document.getElementById("m28_c2").style.color = "orange";
        document.getElementById("m28_c3").style.color = "orange";
        document.getElementById("m28_c4").style.color = "orange";
        document.getElementById("m28_c5").style.color = "#808080";
         m28_checker4 = 1;
        }

        else if(m28_y=="12345"){
        document.getElementById("m28_c1").style.color = "orange";
        document.getElementById("m28_c2").style.color = "orange";
        document.getElementById("m28_c3").style.color = "orange";
        document.getElementById("m28_c4").style.color = "orange";
        document.getElementById("m28_c5").style.color = "orange";
         m28_checker5 = 1;
        }

    }




