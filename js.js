function showe(vara){
    switch (vara) {
        case "map":
            document.getElementsByClassName("mapviewer")[0].style.display='block'
            document.getElementsByClassName("profile")[0].style.display='none'
            break;
    
        case "prof":
            document.getElementsByClassName("profile")[0].style.display='block'
            document.getElementsByClassName("mapviewer")[0].style.display='none'
            
            break;

    }
}

function showtap(vex){
    switch (vex){
            case "tap":
            console.log(document.getElementsByClassName("hash")[0].style.display)
            if(String(document.getElementsByClassName("hash")[0].style.display)=="" ||String(document.getElementsByClassName("hash")[0].style.display)=="none" ){
            document.getElementsByClassName("hash")[0].style.display='flex'
            document.getElementsByClassName("about-me")[0].style.display='none'
            document.getElementsByClassName("Education")[0].style.display='none'
            document.getElementsByClassName("Experances")[0].style.display='none'
            document.getElementsByClassName("projects")[0].style.display='none'
            document.getElementsByClassName("contact-me")[0].style.display='none'
            break;}
            else {
            document.getElementsByClassName("hash")[0].style.display='none'
            document.getElementsByClassName("about-me")[0].style.display='block'

            document.getElementsByClassName("Education")[0].style.display='block'
            document.getElementsByClassName("Experances")[0].style.display='block'
            document.getElementsByClassName("projects")[0].style.display='flex'
            document.getElementsByClassName("contact-me")[0].style.display='block'
            break;
            }

    
}

}


function showtape(ver){
    switch (ver){

        case "about":
        document.getElementsByClassName("about-me")[0].style.display='block'
        document.getElementsByClassName("Education")[0].style.display='none' 
        document.getElementsByClassName("hash")[0].style.display='none'
        document.getElementsByClassName("contact-me")[0].style.display='none'
        document.getElementsByClassName("projects")[0].style.display='none'
        document.getElementsByClassName("Experances")[0].style.display='none'
        break;

        case "ed":
        document.getElementsByClassName("about-me")[0].style.display='none'
        document.getElementsByClassName("Education")[0].style.display='block' 
        document.getElementsByClassName("hash")[0].style.display='none'
        document.getElementsByClassName("contact-me")[0].style.display='none'
        document.getElementsByClassName("projects")[0].style.display='none'
        document.getElementsByClassName("Experances")[0].style.display='none'
        break;

        case "ex":
         document.getElementsByClassName("about-me")[0].style.display='none'
        document.getElementsByClassName("Education")[0].style.display='none' 
        document.getElementsByClassName("hash")[0].style.display='none' 
        document.getElementsByClassName("Experances")[0].style.display='block' 
        document.getElementsByClassName("projects")[0].style.display='none'
        document.getElementsByClassName("contact-me")[0].style.display='none'
      
          break;

        case "pr":
            document.getElementsByClassName("about-me")[0].style.display='none'
            document.getElementsByClassName("Education")[0].style.display='none'
            document.getElementsByClassName("Experances")[0].style.display='none'
            document.getElementsByClassName("projects")[0].style.display='flex'
            document.getElementsByClassName("contact-me")[0].style.display='none'
            document.getElementsByClassName("hash")[0].style.display='none'
            break;
           

            case "con":
            document.getElementsByClassName("about-me")[0].style.display='none'
            document.getElementsByClassName("Education")[0].style.display='none'
            document.getElementsByClassName("Experances")[0].style.display='none'
            document.getElementsByClassName("projects")[0].style.display='none'
            document.getElementsByClassName("contact-me")[0].style.display='block'
            document.getElementsByClassName("hash")[0].style.display='none'
            break;
             }
    
}
