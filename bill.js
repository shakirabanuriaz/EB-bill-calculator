
function calculateEbBill()
{
    var unit = document.getElementById("units").value;
    console.log("The number entered is: " + unit);
    
    var totalBill=0;
    
    var slab1=100;
    var slab2=100;
    var slab3=200;
    var slab4=100;

    var slab1_charge=0.00;
    var slab2_charge=2.25;
    var slab3_charge=4.50;
    var slab4_charge=6.00;
    
    if (unit<=100){        
         slab2=0;
         slab3=0;
         slab4=0    
    }
    else if(unit <=200 && unit>=100){        
         slab2= unit-slab1;
         slab3=0;
         slab4=0;   
    }
    else if(unit<=400 && unit>=200){       
         slab3= unit-slab1-slab2;
         slab4=0;
    }
    else if(unit<=500 && unit>=400){       
        var slab4 = unit-slab1-slab2-slab3;       
    }

    totalBill= (slab1 * slab1_charge)+ (slab2 * slab2_charge) + (slab3 * slab3_charge)+ (slab4 * slab4_charge);
    document.getElementById("totalAmt").innerHTML= totalBill;
}

