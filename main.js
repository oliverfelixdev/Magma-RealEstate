let tl = gsap.timeline();
function toggleMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.toggle("cross"); // Toggle cross class for animation or effect
  menuIcon.classList.toggle("bgManipulte"); // Toggle background color
}

function toggleSidebar() {
    const menuIcon = document.getElementById('menuBar');
    const sidebar = document.getElementById('sidebar');
    let sidebarVisible  = false;

    menuIcon.addEventListener("click", () => {
        sidebarVisible = !sidebarVisible;

        if(sidebarVisible){
            gsap.to(sidebar, {
                right: '0%',
                duration: 1,
                ease: 'power2.out'
            })
        } else{
            gsap.to(sidebar, {
                right: '-100%',
                duration: 1,
                ease: 'power2.out'
            })
        }
    })
} toggleSidebar();