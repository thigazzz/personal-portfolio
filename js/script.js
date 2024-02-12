(function(document, window){
    window.addEventListener('load', () => {
        document.querySelectorAll("header").forEach(header => {
            scrollToSections(header)
        })
    })
    function scrollToSections(header) {
        navItems = header.querySelectorAll("a[href^='#']").forEach(nav => {
            nav.addEventListener('click', event => {
                event.preventDefault()
                const idOfSection = nav.getAttribute("href")
                const topOfTargetElement = document.querySelector(idOfSection).offsetTop
                var to = 0
                if (header.getAttribute("class") == 'desktop') {
                    mainContainer = document.querySelector(".main")
                    to =  topOfTargetElement - mainContainer.offsetTop
                    withElement = mainContainer
                }
                else {
                    window.scrollTo(0, 400)
                    to =  topOfTargetElement - 20
                    withElement = window
                }
                scrollWith(withElement, to)
            })
        })
    }
    function scrollWith(element, to) {
        element.scrollTo({
            top: to,
            behavior: 'smooth',
        })
    }
})(document, window)

