   var allData = [];
    var uname =document.getElementById("uname");
    var uphone = document.getElementById("uphone")
    var umail =document.getElementById("umail");
    var ulocation = document.getElementById("ulocation");
function addRecord()
{
    var record ={name:uname.value ,
                 phone:uphone.value ,
                 email:umail.value , 
                 location:ulocation.value
                }
    
    allData.push(record);
    displayForm();
    clearForm();
}

function togglform()
{
    
    var div =document.getElementById("form-container");
    var btn =document.getElementById("btntoggle");

    if(div.style.display == "none")
        {
            div.style.display="block";
            btn.innerHTML='hide <i class="fas fa-arrow-alt-circle-up"></i>'
        }
else
    {
        div.style.display="none";
        btn.innerHTML='show <i class="fas fa-arrow-alt-circle-down"></i>'
    }
}

var inps = document.getElementsByTagName ("input");
function clearForm()
{
    for(var i=0; i<inps.length; i++)
        {
            inps[i].value='';
        }
}

var tableBody =document.getElementById("result");
function displayForm()
{
    var rows="";
    for (var i =0; i<allData.length ; i++)
        {
            rows +="<tr><td>"+allData[i].name+"</td><td>"+allData[i].phone+"</td><td>"+allData[i].email+"</td><td>"+allData[i].location+"</td></tr>"
        }
    tableBody.innerHTML =rows
}   
 
