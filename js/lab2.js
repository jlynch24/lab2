const submitButton = document.getElementById("submit"); //Gets that object
submitButton.addEventListener("click", function(event) {
    //Pure havascript
    const firstTextBox = document.getElementById(input1);
    const secondTextBox = document.getElementById(input2);

    var first = firstTextBox.value;
    var second = secondTextBox.value;

    //jQuery
    var third = $('#input3').val();

    console.log("First: ", first);
    console.log("Second: ", second);
    console.log("Third: ", third);

    alert(first +"\n" + second + "\n" + third);

    //Stop form from firing
    ///Here is my new comment
    //Another comment
	//Yet another comment
    event.preventDefault(); //How is it is deprecated?
});

$('#clear').click(function() {
    $("#input1").val("");
    $("#input2").val("");
    $("#input2").val("");
});