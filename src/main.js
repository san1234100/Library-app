import Library from './Library'
import Book from './Book'

const formEl = document.querySelector('form');
const bookListEl = document.querySelector("#bookList");

const library = new Library()


function handleMarkAsRead(index){
  const book = library.getBooks()[index]
  book.markAsRead();
  renderLibraryBooks();
}

function handleDelete(index){
  library.removeBook(index)
  renderLibraryBooks();
}

const card = (book,index) => ` <li class="bg-orange-100 p-2 rounded flex justify-between">
<div class="${book.read ? "line-through" : ""}">${book.title} by ${book.author}</div>
<div>
<button class="btn bg-green-700 hover:bg-green-800" data-action="mark-read"  data-index="${index}">
Mark as read
</button>
<button class="btn bg-red-700 hover:bg-red-800" data-action="remove" data-index="${index}">
Remove
</button>
</div>
</li>`;

bookListEl.addEventListener("click",(e)=>{
   const target = e.target;
   if(target.tagName === 'BUTTON'){
    const action = target.getAttribute('data-action')
    const index = target.getAttribute('data-index')
     if(action === 'mark-read'){
      handleMarkAsRead(index)
     }else{
      handleDelete(index)
     }
   }
})

function renderLibraryBooks(){
  const bookListHeaderCountEl = document.querySelector("#book_count");
  const bookList = library.getBooks()
  console.log(bookList);
  bookListHeaderCountEl.textContent = bookList.length;
  let bookListEls = '';
  bookList.forEach((book,index)=>{
    bookListEls+= card(book,index)
  })
  bookListEl.innerHTML = bookListEls;
}

const inputs = document.querySelectorAll('input');

const resetForm = ()=>{
  inputs[0].value = '';
  inputs[1].value = '';
}

formEl.addEventListener("submit",(e)=>{
  e.preventDefault();
  const title = inputs[0].value;
  const author = inputs[1].value;
  //Add book to the library
  library.addBook(new Book(title,author))
  // Render the list of books present in the library
  renderLibraryBooks()

  //Reset the form after an book is added
   resetForm();
})