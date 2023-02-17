import Author from "./Author"

const AuthorList = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h2 className='font-black text-3xl text-center'>Listado de Autores</h2>
      <p className='text-xl mt-5 mb-10 text-center'>Administra tus {''}
        <span className='text-yellow-500 font-bold'>Autores e información</span></p>

        <Author />
        <Author />
        <Author />
    </div>

  )
}

export default AuthorList