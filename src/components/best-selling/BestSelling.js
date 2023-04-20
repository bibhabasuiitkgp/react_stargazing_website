import React from 'react'
import Books from '../Books'

export default function BestSelling() {
  return (
    <section id="Best-selling-books">
        <h1 className="heading">Best Selling Books</h1>
        <div className="grid">

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
          imgsrc="/img/book6.webp"
          title="Think Like a Monk"
          author="Jay Shetty"
          />
           {/* book 7 */}
          <Books
          imgsrc="/img/book4.webp"
          title="The Retreat"
          author="Sarah Pearse"
          />
           {/* book 8 */}
          <Books
          imgsrc="/img/book1.webp"
          title="All The Light We Cannot See"
          author="Anthony Doerr"
          />
        </div>
      </section>
  )
}
