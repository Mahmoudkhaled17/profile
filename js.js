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