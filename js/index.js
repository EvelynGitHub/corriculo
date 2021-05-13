let page = document.querySelectorAll('header nav a[page]');
let btnBars = document.querySelector('header nav .menu-toggle')
let menu = document.querySelector('#menu')

page.forEach( navPage => navPage.addEventListener('click', showPage, false))

function showPage(e){

    if (e.target.tagName != "A" && e.target.parentElement.tagName != "A") return;
    
    let tagA = (e.target.tagName == "I") ? e.target.parentElement : e.target

    let tagsA = document.querySelectorAll('header nav a')

    for(let index=0; index < tagsA.length; index++){
        tagsA[index].classList.remove('active')
    }

    tagA.classList.add('active')

    let page = tagA.attributes['page'].value

    let pagesMain = document.querySelectorAll('main > div')

    for(let index=0; index < pagesMain.length; index++){
        pagesMain[index].classList.add('page')
    }

    let pageActive = document.querySelector('main .'+page)
    pageActive.classList.remove('page')

}

btnBars.addEventListener('click', function (e) {
    e.preventDefault()
    menu.classList.toggle('open')
})

menu.addEventListener('', function (e) {
    console.log("saiu o");
})
