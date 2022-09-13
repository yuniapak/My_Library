# My_Library

### App to collect, rate and share your favorite books

## [Trello](https://trello.com/b/Fd4JKdbE/mylibrary).

## [Front End](https://github.com/yuniapak/My_Library-REACT).
## About:
- Create your own libraries the way you want 
- Find and rate any book 
- Follow your friends and family and see what they are about to read 

---
## Technologies:
- Django/Psql
- React

---

## Diagrams:

Component Hierarchy


ERD


---
## MVP

- Create 4 models: User, Friend List, Book and Review with one to many relations
- Create routes Create, Read, Update, Delete for reviews, books 
- Authentication system
- When user authenticated can accsses fuul CRUD with books adding them from 3rd party API(Open Library), updating status of the book, adding rating and comment
- User will be able to search for other users and following them, able to see their libraries and comments
- All added and rated books will be stored on local db
- 3 types of search Book, Author, User name
- Create model user_book
- Add 3rd party API(Open Library)

---
## Post MVP

- Create recommendations for books based on recently added books by author
- Create feed to see recent activity of users you follow, their new comments, added books, new status of the book (from: 'reading' to 'read')