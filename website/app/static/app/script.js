skills_link = document.getElementById("A")
experience_link = document.getElementById("B")
education_link = document.getElementById("C")
skills = document.getElementsByClassName("skills")[0]
educations = document.getElementsByClassName("educations")[0]
experiences = document.getElementsByClassName("experiences")[0]
//####################################################################################
education_link.addEventListener( "mouseover", ()=> {
    educations.style.display = "flex"
    educations.style.flexDirection = "column"
    educations.style.justifyContent = "flex-start"
    educations.style.alignItems = "start"
    educations.style.gap = "15px"
    educations.style.fontSize = "1vw"
})

education_link.addEventListener( "mouseout", ()=> {educations.style.display = "none"})
//####################################################################################
skills_link.addEventListener( "mouseover", ()=> {
    skills.style.display = "flex"
    skills.style.flexDirection = "column"
    skills.style.justifyContent = "flex-start"
    skills.style.alignItems = "start"
    skills.style.gap = "15px"
    skills.style.fontSize = "1vw"
})

skills_link.addEventListener( "mouseout", ()=> {skills.style.display = "none"})
//####################################################################################
experience_link.addEventListener( "mouseover", ()=> {
    experiences.style.display = "flex"
    experiences.style.flexDirection = "column"
    experiences.style.justifyContent = "flex-start"
    experiences.style.alignItems = "start"
    experiences.style.gap = "15px"
    experiences.style.fontSize = "1vw"
})

experience_link.addEventListener( "mouseout", ()=> {experiences.style.display = "none"})
//####################################################################################