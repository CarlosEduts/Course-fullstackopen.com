import { useState, useEffect } from "react";
import React from "react";
import phonebookServer from "./Server/serverComunic";
import "./App.css";

const TraversePerson = ({ persons }) => {
  const deletePerson = (person) => {
    const deleteConfirm = window.confirm(`Delete ${person.name}`);
    console.log(person.id);
    console.log(deleteConfirm);

    if (deleteConfirm) {
      phonebookServer.deletePerson(person.id).then((response) => {
        console.log("Delete suseful");
        window.location.reload();
      });
    }
  };
  return (
    <div>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
          <button
            onClick={() => {
              deletePerson(person);
            }}
          >
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

const Filter = ({ persons }) => {
  const [filter, setFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);

    let arrayTestName = persons;
    arrayTestName.some((person) => {
      if (person.name.toLowerCase() == filter.toLowerCase()) {
        setFilterValue(`${person.name} ${person.number}`);
      }
    });
  };

  return (
    <div>
      filter shown with: <input value={filter} onChange={handleFilterChange} />
      <h3>Results:</h3>
      <p>{filterValue}</p>
    </div>
  );
};

const PersonForm = ({
  addName,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [message, setMessege] = useState(null);
  const [messegeColor, setMessegeColor] = useState("");

  useEffect(() => {
    console.log("effect");
    phonebookServer.getData().then((Response) => {
      console.log("promise fulfilled");
      setPersons(Response.data);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    var arrayTestName = persons;
    const nameExist = arrayTestName.find((person) => person.name === newName);
    const arrayName = { name: newName, number: newNumber };

    if (nameExist) {
      const updateName = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );

      if (updateName) {
        phonebookServer
          .update(nameExist.id, arrayName)
          .then((response) => {
            setMessege(`Number changed to ${newNumber} successfully`);
            setMessegeColor("greenMessege");
            setTimeout(() => {
              setMessege(null);
              setMessegeColor("");
            }, 5000);
            window.location.reload();
          })
          .catch((error) => {
            setMessege(
              `Information of ${newName} has already removed from server`
            );
            setMessegeColor("redMessege");
            setTimeout(() => {
              setMessege(null);
              setMessegeColor("");
            }, 5000);
          });
      }
    } else {
      phonebookServer.postData(arrayName).then((response) => {
        setPersons(persons.concat(arrayName));
        setMessege(`${newName} has been successfully added`);
        setMessegeColor("greenMessege");
  
        setTimeout(() => {
          setMessege(null);
          setMessegeColor("");
        }, 5000);
      }).catch((error) => {
    
        setMessege(`"error": "Person validation failed: name: Path name is shorter than the minimum allowed length (3)." or "number is not valid phone number."`);
        setMessegeColor("redMessege");
  
        setTimeout(() => {
          setMessege(null);
          setMessegeColor("");
        }, 5000);
      })


    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div className={messegeColor}>{message}</div>
      <Filter persons={persons} />
      <h2>add a new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <TraversePerson persons={persons} />
      ...
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
