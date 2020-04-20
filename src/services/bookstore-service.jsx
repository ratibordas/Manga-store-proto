import imgforexample from '../img/pets-aesthetics-manga.jpg'
import heroAcademy from '../img/hero-academy.jpg'
import demonSlayer from '../img/demon-slayer.jpg'
import vinlandSaga from '../img/vinland-saga.jpg'
import beastars from '../img/beastars.jpg'
import persona5 from '../img/persona5.jpg'
import ghoul from '../img/ghoul.jpg'
import jojo from '../img/jojo.jpg'
import madeInAbyss from '../img/made-in-abyss.jpg'

export default class BookstoreService {

data = [
            {
                id: 1, title: "My Hero Academia", author: "Kohei Horikoshi",
                price: 10,
                coverImage: heroAcademy
    },
    {
                id: 2, title: "Demon Slayer", author: "Koyoharu Gotouge",
                price: 12,
                coverImage: demonSlayer
    },
     {
                id: 3, title: "Vinland Saga", author: "Makoto Yukimura",
                price: 8,
                coverImage: vinlandSaga
    },
      {
                id: 4, title: "BEASTARS", author: "Paru Itagaki",
                price: 9,
                coverImage: beastars
    },
       {
                id: 5, title: "Persona 5", author: "Hisato Murasaki",
                price: 7,
                coverImage: persona5
    },
        {
                id: 6, title: "Tokyo Ghoul: re", author: "Sui Ishida",
                price: 11,
                coverImage: ghoul
    },
         {
                id: 7, title: "JoJo's Bizarre Adventure", author: "Hirohiko Araki",
                price: 14,
                coverImage: jojo
    },
          {
                id: 8, title: "Made in Abyss", author: "Akihito Tsukushi",
                price: 10,
                coverImage: madeInAbyss
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