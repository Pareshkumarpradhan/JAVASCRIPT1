class RailwayForm{
    submit(){
        alert(this.name + ": your form is submit for train number: " + this.trainno)
    }
    cancle(){
        alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }
    fill(givenname,trainno){
        this.name = givenname
        this.trainno = trainno 
    }
}

// Create a form for Harry
let harryForm = new RailwayForm()
// fill the form with harry's details
harryForm.fill("Harry",134567)

//create a form for rohan
let rohanForm = new RailwayForm()
//fill the form with roham's details
rohanForm.fill("Rohan", 2345678)

harryForm.submit()
rohanForm.submit()
rohanForm.cancle()