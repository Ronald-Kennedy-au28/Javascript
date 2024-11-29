
const starContainer = document.querySelector(".star")
const allStars = document.querySelectorAll(".star span")
const rating = document.querySelector("h3 span")

starContainer.addEventListener("click",(e)=>{
    if(e.target.classList.contains("star")){
        return
    }
        
    for(let i=0;i<allStars.length ;i++){
        if(allStars[i].classList.contains("gold")){
            allStars[i].classList.remove("gold")
        }
    } 
    const starNum = e.target.dataset.pos  
    for(let i=0;i<starNum ;i++){
        allStars[i].classList.add("gold")
    } 
    rating.innerText = starNum     
})

starContainer.addEventListener("mouseover",(e)=>{
    if(e.target.classList.contains("star")){
        return
    }
        
    for(let i=0;i<allStars.length ;i++){
        if(allStars[i].classList.contains("gold")){
            allStars[i].classList.remove("gold")
        }
    } 
    const starNum = e.target.dataset.pos  
    for(let i=0;i<starNum ;i++){
        allStars[i].classList.add("gold")
    }     
})

starContainer.addEventListener("mouseout",(e)=>{ 
    for(let i=0;i<allStars.length ;i++){
        if(allStars[i].classList.contains("gold")){
            allStars[i].classList.remove("gold")
        }
    } 
    const currentRating = document.querySelector("h3 span").innerText 
    for(let i=0;i<currentRating ;i++){
        allStars[i].classList.add("gold")
    }     
})