export function show_login_page(){
    window.scrollTo(0, 0);
    change_nav_active_icon("mobile_login_menu_item", "desktop_login_menu_item");

    document.getElementById("search_page").style.display="none";
    document.getElementById("explore_page").style.display="none";
    document.getElementById("home_page").style.display="none";
    document.getElementById("trips_page").style.display="none";
    document.getElementById("login_page").style.display="block";
}

export function show_home_page(){
    window.scrollTo(0, 0);
    change_nav_active_icon("mobile_search_menu_item", "desktop_search_menu_item");

    document.getElementById("search_page").style.display="none";
    document.getElementById("explore_page").style.display="none";
    document.getElementById("login_page").style.display="none";
    document.getElementById("trips_page").style.display="none";
    document.getElementById("home_page").style.display="block";
}

export function show_search_page(){
    window.scrollTo(0, 0);
    change_nav_active_icon("mobile_search_menu_item", "desktop_search_menu_item");

    document.getElementById("home_page").style.display="none";
    document.getElementById("explore_page").style.display="none";
    document.getElementById("login_page").style.display="none";
    document.getElementById("trips_page").style.display="none";
    document.getElementById("search_page").style.display="block";
}

export function show_trips_page(){
    window.scrollTo(0, 0);
    change_nav_active_icon("mobile_trips_menu_item", "desktop_trips_menu_item");

    document.getElementById("search_page").style.display="none";
    document.getElementById("explore_page").style.display="none";
    document.getElementById("login_page").style.display="none";
    document.getElementById("home_page").style.display="none";
    document.getElementById("trips_page").style.display="block";
}

export function show_explore_page(){
    window.scrollTo(0, 0);
    change_nav_active_icon("mobile_search_menu_item", "desktop_explore_menu_item");

    document.getElementById("search_page").style.display="none";
    document.getElementById("trips_page").style.display="none";
    document.getElementById("login_page").style.display="none";
    document.getElementById("home_page").style.display="none";
    document.getElementById("explore_page").style.display="block";
}

export function change_nav_active_icon(mobile_id, desktop_id){
    //for mobile
    Array.from(document.getElementsByClassName("header_mobile_menus_item")).forEach(each => {
        each.classList.remove("active");
    });
    //for desktop
    Array.from(document.getElementsByClassName("each-header-menu-item")).forEach(each => {
        each.classList.remove("active");
    });

    //setting current active item
    document.getElementById(mobile_id).classList.add("active");
    document.getElementById(desktop_id).classList.add("active");
}
