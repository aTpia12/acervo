import AuthorList from "./components/AuthorList"
import Form from "./components/Form"
import Header from "./components/Header"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
        <AuthorList />
      </div>
    </div>
  )
}

export default App
