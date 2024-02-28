(function(document, window){

    // TODO: Put this is a InternalLinks function
    window.addEventListener('load', () => {
        document.querySelectorAll("header").forEach(header => {
            scrollToSections(header)
        })
        clickOutsideOfModal()
        expandProjectImage()
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
                    to =  topOfTargetElement - 120
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

    function expandProjectImage() {

        const imageContainer = document.querySelectorAll(".image-container")
        .forEach(container => {
            container.addEventListener('click', (event) => {
                    _typeOfDevice = ''
                    header = document.querySelectorAll("header").forEach(h => {
                        if ( window.getComputedStyle(h).display != 'none') {
                            _typeOfDevice = h.getAttribute("class")
                        }
                    })
                    href = container.querySelector('img').getAttribute("src").split("-")
                    srcOfImage = href[0]
                    srcOfImage += "-" + _typeOfDevice + ".png"
                    displayImage(srcOfImage)
                    event.preventDefault()
                })
            })
    }
    function displayImage(href) {
        copyImage = document.createElement('img')
        copyImage.classList.add("image-card")
        copyImage.setAttribute("alt", "nada por enquanto")
        copyImage.setAttribute("src", href)
        openModal(copyImage)
    }
    function openModal(content) {
        modal = document.querySelector('.modal').classList.add('show')
        contentContainer = document.querySelector(".modal .container .content")
        contentContainer.appendChild(content)
    }

    function clickOutsideOfModal() {
        container = document.querySelector(".modal .container")
        container.addEventListener('click', (event) => closeModal())
    }

    function closeModal() {
        contentContainer = document.querySelector(".modal .container .content")
        contentContainer.removeChild(contentContainer.firstElementChild)
        modal = document.querySelector('.modal').classList.remove('show')
    }
})(document, window)

