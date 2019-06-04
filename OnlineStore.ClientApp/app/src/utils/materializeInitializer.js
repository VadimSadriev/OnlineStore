export const initNavBar = M => {
    const sideNavBarElems = document.querySelectorAll('.sidenav')
    const sideNavBarInstances = M.Sidenav.init(sideNavBarElems, null)

    // event to close hiden side-navbar if main nav bar is shown
    window.addEventListener('resize', function () {

        if (window.innerWidth >= 992) {
            for (let i = 0; i < sideNavBarInstances.length; i++) {
                if (sideNavBarInstances[i].isOpen) {
                    sideNavBarInstances[i].close()
                }
            }
        }
    })
}