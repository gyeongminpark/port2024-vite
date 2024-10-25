import {intro} from "./intro.js"
import {graphics} from "./graphics.js"
import {link} from "./link.js"
import {smooth} from "./smooth.js"
import {publishing} from "./publishing.js"
import {project} from "./project.js"
import {splide} from "./splide.js"
import {menu} from "./menu.js"
import {aboutme} from "./aboutme.js"


window.addEventListener('load',function(){
    menu()
    link()
    graphics()
    intro()
    smooth()
    publishing()
    project()
    splide()
    aboutme()
})

