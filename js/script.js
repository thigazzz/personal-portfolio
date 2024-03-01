(function(document, window){

    window.addEventListener('load', () => {
        main()
    })

    function currentDeviceType() {
        document.querySelectorAll("header").forEach(header => {
            if ( window.getComputedStyle(header).display != 'none') {
                deviceType = header.getAttribute("class")
            }
        })
        return deviceType
    }

    const modalEl = document.querySelector('.modal')

    function main() {
        addInternLinks()
        clickOutsideOfModal()
        expandProjectImage()
    }

    function addInternLinks() {
        document.querySelectorAll("header a[href^='#']").forEach(navElement => {
            const idOfSection = navElement.getAttribute("href")
            navElement.addEventListener('click', event => {
                event.preventDefault()
                scrollToSection(idOfSection, currentDeviceType())
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
        document.querySelectorAll(".image-container")
        .forEach(container => {
            container.addEventListener('click', (event) => {
                    href = container.querySelector('img').getAttribute("src").split("-")
                    srcOfImage = href[0]
                    srcOfImage += "-" + currentDeviceType() + ".png" // ex: assets/img1 + - + desktop + .png
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
        modalEl.classList.add('show')
        document.querySelector(".modal .container .content").appendChild(content)
    }

    function clickOutsideOfModal() {
        container = document.querySelector(".modal .container")
        container.addEventListener('click', () => closeModal())
    }

    function closeModal() {
        contentContainer = document.querySelector(".modal .container .content")
        contentContainer.removeChild(contentContainer.firstElementChild)
        modalEl.classList.remove('show')
    }

})(document, window)

