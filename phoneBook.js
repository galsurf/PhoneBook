contacts = [];
    contacts[0]={
        fName:"defaulty",
        lName:"defaultivy",
        phoneNumber: "0000",
        eMailAdd:"default123@default.com"
    }


 
function sorter(){
    console.log("yess");
};


function save(){
    if(contacts[0].fName == "defaulty"){
        contacts[0].fName = document.getElementById("fname");
        contacts[0].lName = document.getElementById("lname");
        contacts[0].phoneNumber = document.getElementById("Pnumber");
        contacts[0].eMailAdd = document.getElementById("email"); 
    }
    console.log(contacts[0].fName + contacts[0].lName );
    
}



