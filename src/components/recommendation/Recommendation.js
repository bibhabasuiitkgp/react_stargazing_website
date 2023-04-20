import React from 'react'
import Books from '../Books'

export default function Recommendation() {
  return (
    <section id="Our-Recommendations">
    <h1 className="heading">Our Recommendations</h1>
    <div className="search">
      <input
        type="search"
        name="search"
        id="searchBox"
        placeholder="Type here to search"
      />
      <div className="searchBtn">
        <ion-icon name="search-outline"></ion-icon>
      </div>
    </div>
    <div className="grid" style={{marginTop: "20vh"}}>
           {/* book 1 */}
    <Books
          imgsrc="/img/BOOK_1.png"
          title="An Astronaut's Guide to life on Earth"
          author="Anthony Doerr"
          />
           {/* book 2 */}
           <Books
          imgsrc="/img/BOOK_2.png"
          title="The Backyard Astronomer's Guide"
          author="Joseph Murphy"
          />
           {/* book 3 */}
    <Books
          imgsrc="/img/BOOK_3.png"
          title="Packing for Mars"
          author="Morgan Housel"
          />
           {/* book 4 */}
           <Books
          imgsrc="/img/BOOK_4.png"
          title="Back to earth"
          author="Sarah Pearse"
          />
           {/* book 5 */}
    <Books
          imgsrc="/img/BOOK_5.png"
          title="Solar System Space"
          author="James Clear"
          />
           {/* book 6 */}
    <Books
          imgsrc="/img/book10.jpg"
          title="Think and Grow Rich"
          author="Napoleon Hill"
          />
           {/* book 7 */}
           <Books
          imgsrc="/img/book8.jpg"
          title="The Woman in the Window"
          author="A.J. Finn"
          />
           {/* book 8 */}
    <Books
          imgsrc="/img/book7.jpg"
          title="Something I Never Told You"
          author="Shravya Bhinder"
          />
    </div>
  </section>

  )
}
