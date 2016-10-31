var nameInput = $("#name-input")
var sortButton = $("#sort-button")
var enrolledStudentList = $("#enrolled-students")

var houses = [
  "Ravenclaw",
  "Hufflepuff",
  "Gryfindor",
  "Slytherin"
]

var index = "unchosen"

var name = "unknown"

function chooseRandomHouse() {
  index = houses[Math.floor(Math.random()*houses.length)]
  enrolledStudentList.html(name + " should be in " + index + "!")
}

sortButton.click(function() {
   name = nameInput.val()
   chooseRandomHouse()
  })


  var newStudentElement = $("<div></div>")
  // what here?

  enrolledStudentList.append(newStudentElement)
