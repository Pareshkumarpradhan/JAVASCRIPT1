class RailwayForm{
    constructor(givenname, trainno) {

        console.log("CUNSRTUCTOR CALLED..." + givenname + " " + trainno)
        this.name = givenname
        this.trainno = trainno 
    }
    submit(){
        alert(this.name + ": your form is submit for train number: " + this.trainno)
    }
    cancle(){
        alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }
}

// Create a form for Harry
let harryForm = new RailwayForm("Harry",134567)

//create a form for rohan
let rohanForm1 = new RailwayForm("Rohan", 2345678)
let rohanForm2 = new RailwayForm("Rohan", 233245)

harryForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancle()