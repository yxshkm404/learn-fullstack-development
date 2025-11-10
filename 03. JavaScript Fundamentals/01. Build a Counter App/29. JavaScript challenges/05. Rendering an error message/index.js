// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let errorParagraph = document.getElementById("error")

function purchase(){
    console.log("button clicked");

    errorParagraph.textContent = "Something went wrong, please try again"

}


