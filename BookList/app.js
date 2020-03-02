function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI() {}


UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
        <td> ${book.title} </td>
        <td> ${book.author} </td>
        <td> ${book.isbn} </td>
        <td> <a href="" class = "delete"> X </a> </td>
        ` ;
  list.appendChild(row);
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('ISBN').value = '';
}

UI.prototype.showMsg = function(errorMsg, className){
  const div = document.createElement('div');
  div.className = className;
  div.textContent = errorMsg;
  document.getElementById('book-form').insertAdjacentElement('beforebegin', div);

  setTimeout(function(){
    document.querySelector(`.${className}`).remove();
  }, 3000)
}

UI.prototype.deleteBook = function(target){
  if (target.className == 'delete'){
    target.parentElement.parentElement.remove();
  }
}


//Event listeners
document.getElementById('book-form').addEventListener('submit', function(e){

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('ISBN').value;

  //once you have information, instantiate book constructor
  const book = new Book(title,author,isbn);
  const ui = new UI();

  //Validate
  if (title == '' || author == '' || isbn == ''){
    ui.showMsg('Please fill in all fields', 'error');
  }else{
      ui.showMsg('Book Added!', 'success');
      ui.addBookToList(book);
  }


  //clear text fields
  ui.clearFields();

  e.preventDefault();
});

//Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
  const ui = new UI();
  ui.deleteBook(e.target);
  e.preventDefault();
});
