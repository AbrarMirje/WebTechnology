console.log("Welcome To AJAX World");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // GET request
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true); // always used asynchronous js, it helps user to not stuck in spinning if server goes down

    // POST request
    xhr.open('POST', 'https://dummyjson.com/posts/1', true);
    xhr.setRequestHeader('Content-type', 'application/json');

    // What to do on progress --> (Optional)
    xhr.onprogress = function () {
        console.log('On progress');
    }

    // What to do when response is ready
    xhr.onload = function () {
        // 200 is http status for OK
        if (this.status == 200) {
            console.log(this.responseText);
        } else {
            console.error('Something went wrong!');
        }
    }

    // Send the request
    params =`{
        "id": 1,
        "title": "His mother had always taught him",
        "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        "userId": 9,
        "tags": [
          "history",
          "american",
          "crime"
        ],
        "reactions": 2
      }` 
    xhr.send(params);

    console.log('We are done!');
}