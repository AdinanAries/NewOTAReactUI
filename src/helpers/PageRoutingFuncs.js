export function show_login_page(){
    document.getElementById("home_page").style.display="none";
    document.getElementById("trips_page").style.display="none";
    document.getElementById("login_page").style.display="block";
}

export function show_home_page(){
    document.getElementById("login_page").style.display="none";
    document.getElementById("trips_page").style.display="none";
    document.getElementById("home_page").style.display="block";
}

export function show_trips_page(){
    document.getElementById("login_page").style.display="none";
    document.getElementById("home_page").style.display="none";
    document.getElementById("trips_page").style.display="block";
}