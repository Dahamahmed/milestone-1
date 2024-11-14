const toggleButton = document.getElementById(`ontoggle-skills`) as HTMLButtonElement
const skills = document.getElementById(`skills`)as HTMLElement

toggleButton?.addEventListener(`onclick` , ()=> {
    if(skills?.style.display === `none`){
        skills.style.display = `Lock`
    }else{
        skills.style.display =`none`
    }
});