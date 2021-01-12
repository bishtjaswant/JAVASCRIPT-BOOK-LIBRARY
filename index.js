document.querySelector("#libraryform").addEventListener("submit",(e) => {
          e.preventDefault();

        const book = document.forms["libraryform"]['name'].value
        const author = document.forms["libraryform"]['author'].value
        const type = document.forms["libraryform"]['type'].value

        console.log(book,author,type);


          const bookObject = new BookLibrary(book,author,type); 
    

        if ( (book !=='' && author !=="" && type !=='' ) ) {
                console.log(bookObject);
                bookObject.clear();
                bookObject.display();           
          }else {
              alert('All field required');
          }
});






class BookLibrary{
    constructor(book,author,type) {
         this.book= book;
        this.author= author;
        this.type= type;
    }

    display() {
        let tableDataEelment=   document.querySelector("#tableDataEelment");
        
        let ui = `<tr>
        <td scope="col">#</td>
        <td scope="col">${this.book}</td>
        <td scope="col">${this.author}</td>
        <td scope="col">${this.type}</td>
      </tr>` 
    
    
        tableDataEelment.innerHTML += ui;
    
    }

    clear() {
        document.forms["libraryform"].reset();
    }

    
}