import * as React from "react"

function App() {
    const [name, setName] = React.useState("Adam");
    const [age, SetAge] = React.useState(35)

    return (
        <>
          <section>
            <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>My Name is {name}</p>
          </section>
          <section>
          <input
              type="number"
              value={age}
              onChange={(e) => SetAge(e.target.value)}
            />
            <p>My Age is {age}</p>
          </section>
        </>
    );
}

export default App;