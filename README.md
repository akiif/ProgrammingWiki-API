<div align="center" style="text-align:center">

# [ProgrammingWiki-API](https://programmingwiki.onrender.com/)

### A REST API that serves programming concepts and offers a variety of filtering methods (random article, searching by title and tags)

</div>

## Getting Started:

#### ProgrammingWiki-API does not require any API token, authorization or payment to work.

## `API Open Endpoints`: https://programmingwiki.onrender.com/

## Usage

### `GET all the articles` [https://programmingwiki.onrender.com/articles](https://programmingwiki.onrender.com/articles)

```
[
    {
        "_id": "635ff0cc4912dde95273add8",
        "title": "Java",
        "content": "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere, meaning that compiled Java code can run on all platforms that support Java without the need to recompile.",
        "tags": [
            "Language",
            "Software-Development",
            "Web-Development"
        ],
        "__v": 0
    },
    {
        "_id": "635ff1834912dde95273adde",
        "title": "JavaScript",
        "content": "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions.",
        "tags": [
            "Language",
            "Web-Development"
        ],
        "__v": 0
    },
    .
    .
    .
]
```

---

### `GET a random article` [https://programmingwiki.onrender.com/random](https://programmingwiki.onrender.com/random)

```
[
    {
        "_id": "635ffec52de4cd52ee038381",
        "title": "Database",
        "content": "A database is a systematic collection of data. They support electronic storage and manipulation of data. Databases make data management easy.",
        "tags": [
            "DBMS",
            "Database"
        ],
        "__v": 0
    }
]
```

---

### `GET a single article by title:` [https://programmingwiki.onrender.com/articles?q=REST](https://programmingwiki.onrender.com/articles?q=REST)

#### Add the title you want to search for in the URL parameters using 'q' key(i.e. Append a '?' to the url and append q=title, where title is the title you want to query).

Example: https://programmingwiki.onrender.com/articles?q=Javascript

```
[
    {
        "_id": "635ff1834912dde95273adde",
        "title": "JavaScript",
        "content": "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions.",
        "tags": [
            "Language",
            "Web-Development"
        ],
        "__v": 0
    }
]
```
---

### `GET articles by tags:` [https://programmingwiki.onrender.com/articles?tags=API&tags=Backend](https://programmingwiki.onrender.com/articles?tags=API&tags=Backend)

#### Add the tags you want to search for in the URL parameters using 'tags' key (i.e. Append a '?' to the url and append tags=tag-name, where tag-name is the tag you want to query, if you have multiple tags to query then use & to separate the tags).

Example: https://programmingwiki.onrender.com/articles?tags=API&tags=Backend


```
[
    {
        "_id": "635ff41d860fe403c3f0148f",
        "title": "Node.js",
        "content": "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications.",
        "tags": [
            "Web-Development",
            "Backend",
            "Runtime-Environment",
            "JavaScript-Framework",
            "Framework"
        ],
        "__v": 0
    },
    {
        "_id": "6360eeebbbd604d6985864e5",
        "title": "REST",
        "content": "REST is short for REpresentational State Transfer. It's an architectural style for designing APIs.",
        "tags": [
            "API"
        ],
        "__v": 0
    }
]
```

Some of the tags available are:

-   Web-Development
-   Languages
-   API
-   Framework
-   Database
-   Frontend
-   JavaScript-Library
-   Backend
-   Network
-   Software-Development

---

## Related: programmingwiki npm package

### Install

```sh
npm install programmingwiki
```
### Refer: 
- #### npm: [https://www.npmjs.com/package/programmingwiki](https://www.npmjs.com/package/programmingwiki)
- #### github: [https://github.com/akiif/programmingwiki](https://github.com/akiif/programmingwiki)