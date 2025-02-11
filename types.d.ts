interface Book {
    title?:string;
    author?:string;
    genre?:string;
    rating?:number;
    totalCopies?:string;
    available_copies?:number;
    description?:string;
    color?:string;
    cover?:string;
    id?:number;
    video?:string;
    summary?:string;
    isLoanedBook?:boolean;
}

interface AuthCredentials {
    fullName: string;
    email: string;
    password: string;
    universityId: number;
    universityCard: string;
  }