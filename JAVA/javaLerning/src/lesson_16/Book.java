package javaLerning.src.lesson_16;

public class Book {
    private int isbn;
    private String bookName;
    private String author;


    public int getIsbn() {
        return isbn;
    }

    public void setIsbn(int isbn) {
        this.isbn = isbn;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Book(int isbn, String bookName, String author) {
        setIsbn(isbn);
        setBookName(bookName);
        setAuthor(author);
    }

    @Override
    public String toString() {
        return "ISBN is: " + getIsbn() + "\nbook name is: " + getBookName() + "\nauthor name is: " + getAuthor() + "\n";
    }

    @Override
    public boolean equals(Object obj) {

        // 1. Check if it's the same memory address (cheapest check and most accurate)
        if (this == obj) return true;

        // 2. Check if the 'obj' is NULL or if the Class is not the same, return false;
        if (obj == null || getClass() != obj.getClass()) return false;

        // 3. Let's cast 'obj' to 'Person' because we know it's the same type
        Book objBook = (Book) obj;

        //4. Check ISBN
        if (getIsbn() != objBook.getIsbn()) return false;

        // *. Last check to perform
        return getBookName().equals(objBook.getBookName());
    }

}
