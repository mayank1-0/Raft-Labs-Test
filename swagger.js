module.exports = {
    openapi: "3.0.3", // present supported openapi version
    info: {
      title: "Raft-Labs-Test", // short title.
      description: "Uploading csv files data to database", //  desc.
      version: "1.0.0", // version number
      contact: {
        name: "Mayank" // your name
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api/csv", // url
        description: "Local server", // name
      },
    ],
    tags: [
      {
        name: "To import csv data from files to database", // name of a tag
      },
    ],
    components: {
      schemas: {
        // Author model
        Author: {
          type: "object", // data type
          description: "Authors' details", // desc
          properties: {
            email: {
              type: "string", // data-type
              description: "E-mail of author", // desc
              example: "null-walter@echocat.org", // example of an email-id
            },
            firstName: {
              type: "string", // data-type
              description: "first name of author", // desc
              example: "John", // example of a first name
            },
            lastName: {
              type: "string", // data type
              description: "last name of author", // desc
              example: "Murray", // example of a last name
            },
          }
        },
        // Books model
        Books: {
          type: "object", // data type
          properties: {
            title: {
              type: "text", // data-type
              description: "Books' title", // desc
              example: "Schlank im Schlaf ", // example of a books' title
            },
            isbn: {
              type: "string", // data-type
              description: "isbn", // desc
              example: "0004-0005-0008", // example of an isbn
            },
            authors: {
              type: "string", // data type
              description: "email of the author", // desc
              example: "null-Z@echocat.org", // example of a books' author
            },
            description: {
              type: "text", // data type
              description: "book's description", // desc
              example: "Sie wollen auch ein perfektes Dinner kreieren? Mit diesem Buch gelingt es Ihnen!", // example of a book's description
            }
          },
        },
        // Magazines model
        Magazines: {
          type: "object", // data type
          properties: {
            title: {
              type: "string", // data type
              description: "Magazine's title", // desc
              example: "Beautiful cooking", // example of a title
            },
            isbn: {
              type: "string", // data type
              description: "isbn code of magazine", // desc
              example: "0000-1111-2222", // example of a isbn
            },
            authors: {
              type: "string", // data type
              description: "author's email", // desc
              example: "null-walter@echocat.org", // example of a completed value
            },
            publishedAt: {
              type: "date", // data type
              description: "Published magazine's date", // desc
              example: 2011-01-11, // example of a published at date
            }
          },
        }
      },
    },
  };