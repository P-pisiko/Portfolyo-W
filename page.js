function footer(){
    son.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
})}

function ust(){
    home.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
})}

function orta(){
    skils.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
})}

document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }
})