import React from 'react'
import {Fragment} from 'react';


const App = () => {
  return (
  <Fragment>
  <BookStore />
  </Fragment>
  );
};

export default App;

const Book = (props) => {
  console.log(props);
  return <article className='book-sheet'>
    <div >
      <img className='img-book' src={props.imageUrl} alt={props.bookTitle}/>
    </div>
    <h3 className='book-title'>{props.bookTitle}</h3>
    <h4 className='book-price'>{props.bookPrice}</h4>
  </article>
};



export const BookStore= () => {
  return (
  <section className = "book-store">
  <Book  imageUrl="https://rukminim1.flixcart.com/image/612/612/kcc9q4w0/book/3/2/4/three-ghost-stories-original-imafthkrh6nzqggs.jpeg?q=70" bookTitle="Three Gosht Stories" bookPrice="₹125" />

  <Book  imageUrl="https://rukminim1.flixcart.com/image/612/612/jku1ksw0/book/2/1/9/the-epic-love-story-it-s-beginning-original-imaf82y4dpdqdfat.jpeg?q=70" bookTitle="The Epic Love Story" bookPrice="₹199" />

  <Book  imageUrl="https://rukminim1.flixcart.com/image/612/612/j7jd2fk0/book/0/0/3/the-imperfect-original-imaexrcczetcvskq.jpeg?q=70" bookTitle="The Imperfect " bookPrice="₹129" />

  <Book  imageUrl="https://rukminim1.flixcart.com/image/612/612/kzfvzww0/book/k/u/6/a-night-at-the-mansion-original-imagbgh89rhmqvjt.jpeg?q=70" bookTitle="Night At The Mansion" bookPrice="₹149" />

  <Book  imageUrl="https://rukminim1.flixcart.com/image/612/612/xif0q/book/h/d/m/think-and-grow-rich-original-imaghhsysqegbdqz.jpeg?q=70" bookTitle="Think and Grow" bookPrice="₹179" />

  <Book  imageUrl="https://rukminim1.flixcart.com/image/612/612/kjuby4w0/book/a/3/9/short-story-basket-vol-1-original-imafzbgpfzztgmkh.jpeg?q=70" bookTitle="Short Story Basket" bookPrice="₹211" />
  
  <Book  imageUrl="https://rukminim1.flixcart.com/image/612/612/kcc9q4w0/book/3/2/4/three-ghost-stories-original-imafthkrh6nzqggs.jpeg?q=70" bookTitle="Three Gosht Stories" bookPrice="₹125" />

  <Book  imageUrl="https://rukminim1.flixcart.com/image/612/612/jku1ksw0/book/2/1/9/the-epic-love-story-it-s-beginning-original-imaf82y4dpdqdfat.jpeg?q=70" bookTitle="The Epic Love Story" bookPrice="₹199" />

  <Book  imageUrl="https://rukminim1.flixcart.com/image/612/612/j7jd2fk0/book/0/0/3/the-imperfect-original-imaexrcczetcvskq.jpeg?q=70" bookTitle="The Imperfect " bookPrice="₹129" />

  <Book  imageUrl="https://rukminim1.flixcart.com/image/612/612/kzfvzww0/book/k/u/6/a-night-at-the-mansion-original-imagbgh89rhmqvjt.jpeg?q=70" bookTitle="Night At The Mansion" bookPrice="₹149" />

  <Book  imageUrl="https://rukminim1.flixcart.com/image/612/612/xif0q/book/h/d/m/think-and-grow-rich-original-imaghhsysqegbdqz.jpeg?q=70" bookTitle="Think and Grow" bookPrice="₹179" />

  <Book  imageUrl="https://rukminim1.flixcart.com/image/612/612/kjuby4w0/book/a/3/9/short-story-basket-vol-1-original-imafzbgpfzztgmkh.jpeg?q=70" bookTitle="Short Story Basket" bookPrice="₹211" />

  <Book  imageUrl="https://rukminim1.flixcart.com/image/612/612/j7jd2fk0/book/0/0/3/the-imperfect-original-imaexrcczetcvskq.jpeg?q=70" bookTitle="The Imperfect " bookPrice="₹129" />

  <Book  imageUrl="https://rukminim1.flixcart.com/image/612/612/kjuby4w0/book/a/3/9/short-story-basket-vol-1-original-imafzbgpfzztgmkh.jpeg?q=70" bookTitle="Short Story Basket" bookPrice="₹211" />

  <Book  imageUrl="https://rukminim1.flixcart.com/image/612/612/jku1ksw0/book/2/1/9/the-epic-love-story-it-s-beginning-original-imaf82y4dpdqdfat.jpeg?q=70" bookTitle="The Epic Love Story" bookPrice="₹199" />
  </section>
  );
};
