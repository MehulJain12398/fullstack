import Image from 'next/image';
import React from 'react'
import Star from "../public/icons/star.svg"
import BookIcon from "../public/icons/book.svg"
import { Button } from './ui/button';
import BookCover from './BookCover';

interface Props extends Book {
    userId: string;
  }
  const BookOverview = async ({
    title,
    author,
    genre,
    rating,
    totalCopies,
    available_copies,
    description,
    color,
    cover,
    // id,
    userId
  }: Props) => {
  return (
    <section className='book-overview'>
        <div className='flex flex-1 flex-col gap-5'>
            <h1>{title}</h1>

            <div className="book-info">
          <p>
            By <span className="font-semibold text-light-200">{author}</span>
          </p>

          <p>
            Category{" "}
            <span className="font-semibold text-light-200">{genre}</span>
          </p>

          <div className="flex flex-row gap-1">
            <Image src={Star} alt="star" width={22} height={22} />
            <p>{rating}</p>
          </div>
        </div>

        <div className="book-copies">
          <p>
            Total Books <span>{totalCopies}</span>
          </p>

          <p>
            Available Books <span>{available_copies}</span>
          </p>
        </div>

        <p className="book-description">{description}</p>

        <Button className='book-overview_btn'>
            <Image src={BookIcon} alt='book' width={20} height={20} />
            <p className='font-bebas-neue text-xl text-dark-100'>Borrow</p>
        </Button>
        </div>

        <div className='relative flex flex-1 justify-center'>
            <div className='relative'>
            <BookCover
            variant="wide"
            className="z-10"
            color={color || ""}
            cover={cover || ""}
          />

            <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover
              variant="wide"
              color={color || ""}
              cover={cover || ""}
            />
          </div>
            </div>

        </div>
      
    </section>
  )
}

export default BookOverview
