# Node.js Animal Registry

## Description

This project is a simple animal management system built with Node.js and JSON data storage. It demonstrates how to perform CRUD-like operations (Create, Update, and Delete) on records stored in a local JSON file.

The application manages a collection of animals, including information such as their name, type, and habitat. All changes are persisted directly to the JSON file using Node.js file system operations.

## Features

### Animal Registration

* Adds new animals to the registry.
* Stores:

  * ID
  * Name
  * Type
  * Habitat

### Animal Update

* Searches for an animal by its ID.
* Updates animal information.
* Saves the changes to the JSON file.

### Animal Removal

* Finds animals using their ID.
* Removes records from the registry.
* Updates the stored data automatically.

### JSON Data Persistence

* Reads data from a local JSON file.
* Writes updated data back to the file.
* Maintains information without requiring a database.

## Data Structure

Example animal records:

```json
{
  "animais": [
    {
      "id": 1,
      "nome": "Leão",
      "tipo": "Mamífero",
      "habitat": "Savana"
    },
    {
      "id": 2,
      "nome": "Pinguim",
      "tipo": "Ave",
      "habitat": "Pólo Sul"
    },
    {
      "id": 3,
      "nome": "Cobra",
      "tipo": "Réptil",
      "habitat": "Floresta Tropical"
    }
  ]
}
```

## Skills Demonstrated

* JavaScript fundamentals
* Node.js development
* JSON manipulation
* File handling with Node.js
* CRUD operations
* Data persistence
* Object manipulation
* Array manipulation
* Error handling
* Backend development fundamentals

### Array Methods Used

* `push()`
* `find()`
* `findIndex()`
* `splice()`

### Node.js Features Used

* `require()`
* `fs.writeFile()`
* JSON parsing and serialization
* File system operations

## Technologies Used

* Node.js
* JavaScript
* JSON
* File System Module (`fs`)

## Learning Objectives

This project was created to practice:

* Working with structured JSON data
* Managing local data storage
* Implementing CRUD operations
* Manipulating arrays and objects
* Reading and writing files
* Backend programming concepts

## Project Structure

```text
├── animais.json
├── index.js
└── README.md
```

### File Description

* **animais.json** — Stores all animal records.
* **index.js** — Contains the logic for adding, updating, and removing animals.
* **README.md** — Project documentation.

## How to Run

### Prerequisites

* Node.js installed on your machine.

### Installation

Clone the repository:

```bash
git clone https://github.com/GustavoPGCordeiro/nodejs-animal-registry.git
```

Navigate to the project folder:

```bash
cd your-repository
```

Run the application:

```bash
node index.js
```

## Example Operations

### Add a New Animal

```javascript
{
  id: 4,
  nome: "Cachorro",
  tipo: "Mamífero",
  habitat: "Residências humanas"
}
```

### Update Habitat

```javascript
animal.habitat = "Floresta tropical";
```

### Remove an Animal

```javascript
animais.splice(indice, 1);
```

## Concepts Covered

* JSON-based storage
* Data persistence
* Record management
* CRUD principles
* File system operations
* Backend logic implementation

## Academic Purpose

This project was developed as part of JavaScript and Node.js programming practice focused on file manipulation, JSON data management, CRUD operations, and backend development fundamentals.

