 if (!localStorage.getItem("theme")) {
     localStorage.setItem("theme", "light")
 }
 if (!localStorage.getItem("sidebarCollupsed")) {
     localStorage.setItem("sidebarCollupsed", "true")
 }

 window.addEventListener("load", ()=>{
    // Responsive html font size
let iw = window.innerWidth;
let rootScreenWidth = 1366;
let rootFontPercentage = 44.46;
let html = document.querySelector("html")


if(iw <577){
    let currentFontSize = (rootFontPercentage * iw) / 520;
    html.setAttribute("style", `font-size:${currentFontSize}%`);
}else{
    console.log("window object ......")
    let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
    html.setAttribute("style", `font-size:${currentFontSize}%`);

}
})


window.addEventListener("resize", function () {
    let IW = window.innerWidth;
    let rootScreenWidth2 = 1366;
    let rootFontPercentage2 = 44.46;
    let html = document.querySelector("html")

    if(IW <577){
        let currentFontSize2 = (rootFontPercentage2 * IW) / 520;
        html.setAttribute("style", `font-size:${currentFontSize2}%`);
    }else{
        let currentFontSize2 = (rootFontPercentage2 * IW) / rootScreenWidth2;
        html.setAttribute("style", `font-size:${currentFontSize2}%`);
    
    }
    

})



//sidebar 
let sidebarlogotop = document.querySelector("#sidebarlogotop")
let sidebarToogleButton = document.querySelector("#sidebarToogleButton")
let sidebarTogglesButton = document.querySelector("#sidebarTogglesButton")
let sidebarCollupsed = localStorage.getItem("sidebarCollupsed")

let sidebar = document.querySelector("#sidebar");
let mainbody = document.querySelector("#mainbody");
if (sidebarCollupsed === "true") {
    sidebar.classList.add("collupsed")
    mainbody.classList.add("expand")
    sidebarlogotop.classList.add("collupsed")
    sidebarTogglesButton.classList.add("collupsed")
}
sidebarTogglesButton.addEventListener("click", () => {
    sidebar.classList.toggle("collupsed")
    mainbody.classList.toggle("expand")
    sidebarlogotop.classList.toggle("collupsed")
    sidebarTogglesButton.classList.toggle("collupsed")
    if (sidebarCollupsed === "true") {
        localStorage.setItem("sidebarCollupsed", "false")
    } else {
        localStorage.setItem("sidebarCollupsed", "true")
    }
})


//code for theme -> dark mode and light mode
const themeSelector = document.querySelector("#themeSelector");
const themeSelectorSmall = document.querySelector("#themeSelectorSmall");
const themeChangeSwitch = document.querySelector("#themeChangeSwitch");
const themeChangeSwitchSmall = document.querySelector("#themeChangeSwitchSmall");
const mobileSideMenu = document.querySelector("#mobileSideMenu")




// element selection for apply theme change

let topbar = document.querySelector("#topbar")
let body = document.querySelector("body")
let indexChartWrapper = document.querySelector(".indexChartWrapper")
let indexChartBottomArea = document.querySelector(".indexChartBottomArea")
let mobileTopBar = document.querySelector("#mobileTopBar")







let mainLogo = document.querySelector("#mainLogo")


mainLogo.src = './resources/icons/sidebar_icons/sidebarlogo2.png'

let currentTheme = localStorage.getItem("theme")
if (currentTheme === "dark") {
    themeSelector.classList.add("dark")
    themeSelectorSmall.classList.add("dark")
    topbar.classList.add("dark")
    sidebar.classList.add("dark")
    body.classList.add("dark")
    mobileTopBar.classList.add("dark")
    indexChartBottomArea.classList.add("dark")
    indexChartWrapper.classList.add("dark")
    mobileSideMenu.classList.add("dark")
    mainLogo.src = './resources/icons/sidebar_icons/darkModeLogo.png'
}


themeSelector.addEventListener("click", function () {
    themeSelectorSmall.classList.toggle("dark")
    themeSelector.classList.toggle("dark")
    topbar.classList.toggle("dark")
    sidebar.classList.toggle("dark")
    body.classList.toggle("dark")
    mobileTopBar.classList.toggle("dark")
    mobileSideMenu.classList.toggle("dark");
    indexChartWrapper.classList.toggle("dark")
    indexChartBottomArea.classList.toggle("dark")

    if (localStorage.getItem("theme") === "dark") {
        mainLogo.src = './resources/icons/sidebar_icons/sidebarlogo2.png'
        localStorage.setItem("theme", "light")
        

    } else if (localStorage.getItem("theme") === "light") {        
        mainLogo.src = './resources/icons/sidebar_icons/darkModeLogo.png'
        localStorage.setItem("theme", "dark")
    }
})


themeSelectorSmall.addEventListener("click", function () {
    themeSelectorSmall.classList.toggle("dark")
    themeSelector.classList.toggle("dark")
    body.classList.toggle("dark")
    mobileTopBar.classList.toggle("dark")
    mobileSideMenu.classList.toggle("dark");
    indexChartWrapper.classList.toggle("dark")
    indexChartBottomArea.classList.toggle("dark")
    topbar.classList.toggle("dark")
    sidebar.classList.toggle("dark")

    if (localStorage.getItem("theme") === "dark") {
        localStorage.setItem("theme", "light")
        mainLogo.src = './resources/icons/sidebar_icons/sidebarlogo2.png'

    } else if (localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark")
        mainLogo.src = './resources/icons/sidebar_icons/darkModeLogo.png'
    }
})


//index page bottom tabs code start from here//


//left side code //
let indexChartBottomAreaInner = document.querySelector("#indexChartBottomAreaInner") // main wrapper

let indexMostProftableTrades = document.querySelector("#indexMostProftableTrades")
let indexMostProftableTradesBtn = document.querySelector("#indexMostProftableTradesBtn")

let indexTopTraders = document.querySelector("#indexTopTraders")
let indexTopTradersBtn = document.querySelector("#indexTopTrdersBtn")

let indexTopTraded = document.querySelector("#indexTopTraded")
let indexTopTradedBtn = document.querySelector("#indexTopTrdedBtn")


function indexChartBottomAreaInnerFadeAnimation() {
    indexChartBottomAreaInner.classList.add("fadeAnimation")
    setTimeout(() => {
        indexChartBottomAreaInner.classList.remove("fadeAnimation")
    }, 300);
}

indexMostProftableTradesBtn.addEventListener("click", function () {
    indexChartBottomAreaInnerFadeAnimation()
    indexMostProftableTradesBtn.classList.add("active")
    indexTopTradersBtn.classList.remove("active")
    indexTopTradedBtn.classList.remove("active")

    setTimeout(() => {
        indexMostProftableTrades.style.display = "flex"
        indexTopTraders.style.display = "none"
        indexTopTraded.style.display = "none"
    }, 150);

})


indexTopTradersBtn.addEventListener("click", function () {
    indexChartBottomAreaInnerFadeAnimation()
    indexTopTradersBtn.classList.add("active")
    indexTopTradedBtn.classList.remove("active")
    indexMostProftableTradesBtn.classList.remove("active")

    setTimeout(() => {
        indexTopTraders.style.display = "flex"
        indexMostProftableTrades.style.display = "none"
        indexTopTraded.style.display = "none"
    }, 150);

})


indexTopTradedBtn.addEventListener("click", function () {
    indexChartBottomAreaInnerFadeAnimation()
    indexTopTradedBtn.classList.add("active")
    indexTopTradersBtn.classList.remove("active")
    indexMostProftableTradesBtn.classList.remove("active")

    setTimeout(() => {
        indexTopTraded.style.display = "flex"
        indexMostProftableTrades.style.display = "none"
        indexTopTraders.style.display = "none"
    }, 150);
})


// right side code

let indexChartBottomAreaInnerRight = document.querySelector("#indexChartBottomAreaInnerRight");


function indexChartBottomAreaInnerRightFadeAnimation() {
    indexChartBottomAreaInnerRight.classList.add("fadeAnimation")
    setTimeout(() => {
        indexChartBottomAreaInnerRight.classList.remove("fadeAnimation")
    }, 300);
}


let indexOngoinCompetitionBtn = document.querySelector("#indexOngoinCompetitionBtn")
let indexOngoinCompetition = document.querySelector("#indexOngoinCompetition")

let indexCompletedCompetitionBtn = document.querySelector("#indexCompletedCompetitionBtn")
let indexCompletedCompetition = document.querySelector("#indexCompletedCompetition")

let indexMyCompetitionBtn = document.querySelector("#indexMyCompetitionBtn")
let indexMyCompetition = document.querySelector("#indexMyCompetition")


indexOngoinCompetitionBtn.addEventListener("click", function () {
    indexChartBottomAreaInnerRightFadeAnimation()
    indexOngoinCompetitionBtn.classList.add("active")
    indexCompletedCompetitionBtn.classList.remove("active")
    indexMyCompetitionBtn.classList.remove("active")

    setTimeout(() => {
        indexOngoinCompetition.style.display = "block";
        indexCompletedCompetition.style.display = "none"
        indexMyCompetition.style.display = "none"
    }, 150);

})

indexCompletedCompetitionBtn.addEventListener("click", function () {
    indexChartBottomAreaInnerRightFadeAnimation()
    indexCompletedCompetitionBtn.classList.add("active")
    indexMyCompetitionBtn.classList.remove("active")
    indexOngoinCompetitionBtn.classList.remove("active")

    setTimeout(() => {
        indexCompletedCompetition.style.display = "block"
        indexOngoinCompetition.style.display = "none";
        indexMyCompetition.style.display = "none"
    }, 150);

})

indexMyCompetitionBtn.addEventListener("click", function () {
    indexChartBottomAreaInnerRightFadeAnimation()
    indexMyCompetitionBtn.classList.add("active")
    indexOngoinCompetitionBtn.classList.remove("active")
    indexCompletedCompetitionBtn.classList.remove("active")

    setTimeout(() => {
        indexMyCompetition.style.display = "block"
        indexOngoinCompetition.style.display = "none";
        indexCompletedCompetition.style.display = "none"
    }, 150);

})

//index page bottom tabs code end here//


//language dropdown //

let languageDropdownBtn = document.querySelector("#languageDropdown")
let languageDropdownMenu = document.querySelector("#languageDropdownMenu")

function languageSwitch(prms) {
    languageDropdownMenu.classList.remove("show")
    console.log("language switch function.....");

    alert(prms)
    return false;
}

languageDropdownBtn.addEventListener("click", function () {
    languageDropdownMenu.classList.toggle("show")
    return false;

})
languageDropdownBtn.addEventListener("blur", function () {
    languageDropdownMenu.classList.remove("show")
    return false;

})


// dotment

let dotMenuIcon = document.querySelector("#dotMenuIcon")
let dotMenuDropDown = document.querySelector("#dotMenuDropDown")

dotMenuIcon.addEventListener("click", function () {
    dotMenuDropDown.classList.toggle("show")
})


/*
dotMenuIcon.addEventListener("blur", function (e) {
    setTimeout(() => {
        dotMenuDropDown.classList.remove("show")
    }, 100);
})
*/




// mobile side menu
let mobileHamberger = document.querySelector("#mobileHamberger")





let mobileSideMenuCross = document.querySelector("#mobileSideMenuCross")

mobileHamberger.addEventListener("click", function () {
    mobileSideMenu.classList.add("show")
})

mobileSideMenuCross.addEventListener("click", function () {
    mobileSideMenu.classList.remove("show")
})