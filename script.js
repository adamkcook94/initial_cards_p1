const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active')
    })
})

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

// Questions - arrow functions? 

// If we don't have the removeActiveClass() all of the panels will have an active class when clicked on.
// Therefore we must loop through each of the panels in order to remove the active class.