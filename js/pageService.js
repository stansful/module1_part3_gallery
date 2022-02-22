const setNewPage = (value = 1) => {
    localStorage.setItem(PAGE, String(value))
}

const getCurrentPage = () => {
    const page = localStorage.getItem(PAGE)

    if (page) {
        return page
    }

    setNewPage()

    return localStorage.getItem(PAGE)
}