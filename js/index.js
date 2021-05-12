let page = document.querySelector('header nav');

page.addEventListener('click', function(e){

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
        pagesMain[index].setAttribute('hidden', true)
        pagesMain[index].classList.add('page')
    }

    let pageActive = document.querySelector('main .'+page)
    pageActive.removeAttribute('hidden')
    pageActive.classList.remove('page')

})


