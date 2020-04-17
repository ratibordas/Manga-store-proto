import imgforexample from '../pets-aesthetics-manga.jpg'


export default class BookstoreService {

data = [
            {
                id: 1, title: "Any", author: "No name",
                price: 100,
                coverImage: imgforexample
    },
    {
                id: 2, title: "Any2", author: "No name2",
                price: 200,
                coverImage: imgforexample
    },
     {
                id: 3, title: "Any2", author: "No name2",
                price: 200,
                coverImage: imgforexample
    },
      {
                id: 4, title: "Any2", author: "No name2",
                price: 200,
                coverImage: imgforexample
    },
       {
                id: 5, title: "Any2", author: "No name2",
                price: 200,
                coverImage: imgforexample
    },
        {
                id: 6, title: "Any2", author: "No name2",
                price: 200,
                coverImage: imgforexample
    },
         {
                id: 7, title: "Any2", author: "No name2",
                price: 200,
                coverImage: imgforexample
    },
          {
                id: 8, title: "Any2", author: "No name2",
                price: 200,
                coverImage: imgforexample
    },
     
          
        ];

    getBooks() {
        return new Promise((resolve ) => {
            setTimeout(() => {
                resolve(this.data)
            }, 500)
        })
    }
}