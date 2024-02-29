(function(document, window){

    window.addEventListener('load', () => {
        main()
    })


    function main() {
        addInternLinks()
        clickOutsideOfModal()
        expandProjectImage()
    }

    function addInternLinks() {
        document.querySelectorAll("header a[href^='#']").forEach(navElement => {
            const idOfSection = navElement.getAttribute("href")
            navElement.addEventListener('click', event => {
                headerElement = navElement.parentElement.parentElement.parentElement
                deviceType = headerElement.getAttribute("class")
                event.preventDefault()
                scrollToSection(idOfSection, deviceType)
            })
        })
    }
    
    function scrollToSection(idOfSection, deviceType) {
        const topOfTargetElement = document.querySelector(idOfSection).offsetTop
        
        if (deviceType == 'desktop') {
            fromWhere = document.querySelector(".main")
            toWhere =  topOfTargetElement - fromWhere.offsetTop
        }
        else {
            fromWhere = window
            toWhere =  topOfTargetElement - 120
        }

        scrollFor(fromWhere, toWhere)
    }

    function scrollFor(element, to) {
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

