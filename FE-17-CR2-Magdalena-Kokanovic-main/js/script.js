



let data = JSON.parse(tasks);


document.getElementById("tasks").innerHTML += `<div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4" id="child">`;



for (let theData of data) {


  document.getElementById("child").innerHTML += `

<div class="col">
  <div class="card h-100">
  <div class="card-header">
  <p class="c-header-text"><mark><i>Task</i></mark></p>
  </div>
  <img src="${theData.image}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${theData.Taskname}</h5>
  <p class="card-text">${theData.description}</p>
  <p class="card-text">${theData.place}</p>
  <div class="cont">
  <p class="card-text">Priority level: </p>
   <button class="btn btn-success" id="priority"> ${theData.importance}</button>
   </div>
  <p class="card-text">Deadline:  ${theData.deadline}</p>
  </div>
    <div class="card-footer">
    <button class="btn btn-danger">Delete</button>
    <button class="btn btn-success">Done</button>
    </div>
  </div>
</div>`;


  let prioButtons = document.getElementsByClassName('btn btn-success')

  for (button of prioButtons) {

    button.addEventListener('click', function () {

      if (parseInt(this.innerHTML) < 5) {

        this.innerHTML = String((parseInt(this.innerHTML) + 1))

      }

    });



    button.addEventListener("click", function () {
      if (parseInt(this.innerHTML) < 5) {

        this.innerHTML = String((parseInt(this.innerHTML) + 1))
        if (parseInt(this.innerHTML) > 1 && parseInt(this.innerHTML) < 3) {
          this.className = "btn btn-warning";
        } else if (parseInt(this.innerHTML) > 3) {
          this.className = "btn btn-danger";
        }
      }
    });




  }



}


let child = document.getElementById("child")




let prioButtons = document.getElementsByClassName('btn btn-success')


let marks = document.getElementsByTagName("mark")

for(mark of marks) {

  mark.style.background = "aqua"
  
}


let contClasses = document.getElementsByClassName("cont")

for (cont of contClasses) {
  cont.style.display = "inline-flex"
  cont.style.gap = "10pt";
  cont.style.marginBottom = "12pt"
  cont.style.marginTop = "12pt"
}




let cardFooters = document.getElementsByClassName("card-footer");


for (cardFooter of cardFooters) {

  cardFooter.style.textAlign = "right"
}



























