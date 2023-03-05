var sidebarNav = document.getElementById('sidebar-nav');
var sidebarTrigger = document.getElementById('sidebar__trigger');
function closeSidebar(){
   sidebarNav.style.left='-260px';
}
function openSidebar(){
   sidebarNav.style.left='0px';
}
function myFunction(x) {
   if (x.matches) {
      sidebarNav.style.left='-260px';
   } else {
      sidebarNav.style.left='0px';
   }
   }
   var x = window.matchMedia("(max-width: 700px)")
   myFunction(x)
   x.addListener(myFunction) 