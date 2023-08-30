let body = document.getElementsByTagName('body')[0]
let allItems = document.getElementsByClassName('allItems')[0]
let data = document.getElementsByClassName('data')[0]
let currentlyData = document.getElementsByClassName('currentlyData')[0]
let nextEventer = document.getElementsByClassName('nextEventer')[0]
let bgBanner = document.getElementsByClassName('forBgBanner')[0] 
let bgBanner2 = document.getElementsByClassName('forBgBanner2')[0] 
let forImg = document.getElementsByClassName('forImg')[0]
let user = document.getElementsByClassName('user')[0]
let password = document.getElementsByClassName('password')[0]
let forBgBanner3 = document.getElementsByClassName('forBgBanner3')[0]
let toNextPage = document.getElementsByClassName('toNextPage')[0]
let wrongItems = document.getElementsByClassName('wrongItems')[0]
let understandBtn = document.getElementsByClassName('understandBtn')[0]
let optionsBtn = document.getElementsByClassName('optionsBtn')[0]
let optionsBtn2 = document.getElementsByClassName('optionsBtn2')[0]
let extraBtns = document.getElementsByClassName('extraBtns')[0]
let options = document.getElementsByClassName('options')[0]
let passwordNum = document.getElementsByClassName('passwordNum')[0]
let passwordText = document.getElementsByClassName('passwordText')[0]
let passwordInput = document.getElementsByClassName('passwordInput')[0]
let codeInput = document.getElementsByClassName('codeInput')[0]
let hintForText = document.getElementsByClassName('hintForText')[0]
let hintForNum = document.getElementsByClassName('hintForNum')[0]


nextEventer.addEventListener('click', function() {
    nextEventer.style.marginTop = '-170rem'
    setTimeout(() => {
        setTimeout(() => {
            nextEventer.style.opacity = '0'
        }, 1000)
        nextEventer.style.display = 'none'
    },1000)
    setTimeout(function() {
    bgBanner.style.display = 'none'
    bgBanner2.style.display = 'block'
    setTimeout(function() {
        bgBanner2.style.opacity = '1'
    },2000)
    // forImg.style.display = 'block'
    // user.style.display = 'block'
    // password.style.display = 'block'
    // toNextPage.style.display = 'block'
    // optionsBtn.style.display = 'block'
    // extraBtns.style.display = 'block'
    },800)
    
    extraBtns.style.marginTop = '0.1px'
    setTimeout(function() {
        forImg.style.display = 'block'
        user.style.display = 'block'
        password.style.display = 'block'
        toNextPage.style.display = 'block'
        optionsBtn.style.display = 'block'
        extraBtns.style.display = 'block'
        setTimeout(function() {
            forImg.style.opacity = '1'
            user.style.opacity = '1'
            password.style.opacity = '1'
            toNextPage.style.opacity = '1'
            optionsBtn.style.opacity = '1'
            extraBtns.style.opacity = '1'
        },1000)
    },800)
})
function findCorrect(){
    toNextPage.addEventListener('click', function() {
        hintForText.style.display = 'none'
        if(password.value == 'TTTTt') {
        forBgBanner3.style.display = 'block'
        allItems.style.display = 'none'
    }
    if(password.value != 'TTTTt'){
        password.style.display = 'none'
        passwordNum.style.display = 'none'
        toNextPage.style.display = 'none'
        optionsBtn.style.display = 'none'
        optionsBtn2.style.display = 'none'
        options.style.display = 'none'
        hintForText.style.display = 'none'
        hintForNum.style.display = 'none'
        wrongItems.style.display = 'block'
    }
    if(passwordNum.value == '797797') {
        allItems.style.display = 'none'
        forBgBanner3.style.display = 'block'
    }
    if(passwordNum.value != '797797'){
        password.style.display = 'none'
        passwordNum.style.display = 'none'
        toNextPage.style.display = 'none'
        optionsBtn.style.display = 'none'
        optionsBtn2.style.display = 'none'
        options.style.display = 'none'
        hintForNum.style.display = 'none'
        wrongItems.style.display = 'block'
    }
    


    function showHint() {
        understandBtn.addEventListener('click', function() {
            if(password.style.display == 'block') {
                codeInput.style.borderColor = 'transparent'
                passwordInput.style.borderColor = 'rgb(131, 129, 129)'
            }
            if(passwordNum.style.display == 'block') {
                passwordInput.style.borderColor = 'transparent'
                codeInput.style.borderColor = 'rgb(131, 129, 129)'
            }
            if(passwordText.style.display == 'block') {
                hintForText.style.display = 'block'
                hintForNum.style.display = 'none'
            }
            if(passwordNum.style.display == 'block') {
                password.style.display = 'none'
                hintForText.style.display = 'none'
            }
        })}
        showHint()

    })
}

findCorrect()

function openOptions() {
    optionsBtn.addEventListener('click', function() {
        optionsBtn.style.display = 'none'
        options.style.display = 'block'
        optionsBtn2.style.display = 'block'
        password.style.backgroundColor = 'rgba(27, 26, 26, 0.897)'
        passwordNum.style.backgroundColor = 'rgba(27, 26, 26, 0.897)'
        extraBtns.style.marginTop = '2.3px'
    })
    optionsBtn2.addEventListener('click', function() {
        optionsBtn.style.display = 'block'
        options.style.display = 'none'
        optionsBtn2.style.display = 'none'
        password.style.backgroundColor = 'rgba(27, 26, 26, 0.897)'
        passwordNum.style.backgroundColor = 'rgba(27, 26, 26, 0.897)'
        extraBtns.style.marginTop = '0.1px'
    })
    password.addEventListener('click', function() {
        password.style.backgroundColor = 'white'
        // options.style.display = 'none'
    })
    passwordNum.addEventListener('click', function() {
        passwordNum.style.backgroundColor = 'white'
        // options.style.display = 'none'
    })
}

openOptions()

function endFunction() {
    passwordInput.addEventListener('click', function() {
        passwordNum.style.display = 'none'
        password.style.display = 'block'
        hintForNum.style.display = 'none'
        codeInput.style.borderColor = 'transparent'
        passwordInput.style.borderColor = 'rgb(131, 129, 129)'
    })
    codeInput.addEventListener('click', function() {
        password.style.display = 'none'
        passwordNum.style.display = 'block'
        hintForText.style.display = 'none'
        passwordInput.style.borderColor = 'transparent'
        codeInput.style.borderColor = 'rgb(131, 129, 129)'
    })

}
endFunction()

if(codeInput.click) {
    codeInput.addEventListener('click', function() {
        
        if(understandBtn.click) {
            understandBtn.addEventListener('click', function() {
                password.style.display = 'none'
                hintForText.style.display = 'none'
                passwordNum.style.display = 'block'
                hintForNum.style.display = 'block'
            })
        }
    })
}
if(passwordInput.click) {
    passwordInput.addEventListener('click', function() {
        
        if(understandBtn.click) {
            understandBtn.addEventListener('click', function() {
                password.style.display = 'block'
                hintForText.style.display = 'block'
                passwordNum.style.display = 'none'
                hintForNum.style.display = 'none'
            })
        }
    })
}
if(understandBtn.click) {
    understandBtn.addEventListener('click', function() {
        if(passwordNum.style.display == 'none') {
                password.style.display = 'block'
                hintForText.style.display = 'block'
                passwordNum.style.display = 'none'
                hintForNum.style.display = 'none'
                optionsBtn.style.display = 'block'
                toNextPage.style.display = 'block'
                wrongItems.style.display = 'none'
                passwordInput.style.borderColor = 'rgb(131, 129, 129)'
                codeInput.style.borderColor = 'transparent'
        }
    })
        
        }