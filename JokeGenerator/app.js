document.querySelector('.get-jokes').addEventListener('click',function(e){
  //Get Number of jokes
  const numJokes = document.getElementById('number').value;
  const xhr = new XMLHttpRequest();

  xhr.open('GET',`http://api.icndb.com/jokes/random/${numJokes}`, true);

  xhr.onload = function(){
    //check response status
    if (this.status === 200){
      const response = JSON.parse(this.responseText);
      console.log(response);


    let output = '';
    if (response.type === 'success'){
      response.value.forEach(function(value){
        output += `<li>${value.joke}</li>`;
      });
      document.querySelector('.jokes').innerHTML = output;

    }else{
      output += `<li>Something went wrong</li>`;
    }
  }

  }
  xhr.send();
  e.preventDefault();
})
