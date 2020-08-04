function getInfo(){
    var username = document.getElementById("Usernamebox").value
    var password = document.getElementById("Passwordbox").value
    
    for ( i=0; i < objPeople.lenght; i++)  //objPeople = Lista cu userii, grupati pe username+password
    {
        if (username == objPeople[i].username && objPeople[i].password == password)
        {
            console.log( "Nerd: " + username + " is online")
            return 
        }
    
     }
       
        console.log("Username or password incorrect")
        alert("Username or password incorrect")
    } 