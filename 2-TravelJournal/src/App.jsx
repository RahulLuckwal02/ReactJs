import Entry from "./componets/Entry"
import Header from "./componets/Header" 
import data from "./data"

export default function App() {

  const entries = data.map((entry) =>{
    return(
      <Entry
      key = {entry.id}
      entry = {entry}
      />
    )
  })

  return(
    <>
      <Header/>
      <main>
        {entries}
      </main>
    </>
  )
}