import { auth } from "@/auth";
import BookOverview from "@/components/BookOverview";
import Booklist from "@/components/Booklist";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

export default async function Home()  {

  const session = await auth()
  const result = await db.select().from(users);
  
  return (
    <>
      <BookOverview
        {...sampleBooks[0]}
        userId={session?.user?.id as string}
      />
      <Booklist 
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"

      />
    </>
  );
}
