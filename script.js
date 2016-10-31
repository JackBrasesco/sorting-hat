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

function chooseRandomHouse() {
   index = Math.floor(Math.random() * houses.length)
  return houses[index]
}

sortButton.click(function() {
  var name = nameInput.val()
   chooseRandomHouse()
  })


  var newStudentElement = $("<div></div>")
  // what here?

  enrolledStudentList.append(newStudentElement)
