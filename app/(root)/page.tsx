import BookOverview from "@/components/BookOverview";
import Booklist from "@/components/Booklist";
import { sampleBooks } from "@/constants";

export default function Home() {
  return (
    <>
      <BookOverview
        {...sampleBooks[0]}
      />
      <Booklist 
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"

      />
    </>
  );
}
