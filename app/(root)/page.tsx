import BookOverview from "@/components/BookOverview";
import Booklist from "@/components/Booklist";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

export default async function Home()  {

  const result = await db.select().from(users);
  console.log(JSON.stringify(result,null,2));
  
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
