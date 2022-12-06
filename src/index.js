// write your code here
let upperDiv = document.getElementById("ramen-menu")

fetch("http://localhost:3000/ramens")

.then(res => res.json())
.then(function(ramens){
  console.log(ramens)

  ramens.map(function(ramen){
     
    

    let image = document.createElement("img")

    upperDiv.appendChild(image)

    image.src = ramen.image

    image.addEventListener("click", dropDown)

    function dropDown(e){
      e.preventDefault()
      let images = document.querySelector(".detail-image")
      let names = document.querySelector(".name")
      let restaurant = document.querySelector(".restaurant")
      let rate = document.querySelector("#rating-display")
      let comments = document.getElementById("comment-display")

      images.src = ramen.image
      names.textContent = ramen.name
      restaurant.textContent = ramen.restaurant
      rate.textContent = ramen.rating
      comments.textContent = ramen.comment
    }

  
   
  })
 
})

const form = document.getElementById("new-ramen")

form.addEventListener("submit", function(e){

  e.preventDefault()

  
  upperDiv.innerHTML = `${createNew()}`

})

function createNew(e){

  let newName = document.getElementById("new-name")
  let newRestaurant = document.getElementById("new-restaurant")
  let newImage = document.getElementById("new-image")
  let newRating = document.getElementById("new-rating")
  let newComment = document.getElementById("new-comment")

  newName.textContent = newName.value
  newRestaurant.textContent = newRestaurant.value
  newImage.textContent = newImage.value
  newRating.textContent = newRating.value
  newComment.textContent = newComment.value
}
createNew(e)