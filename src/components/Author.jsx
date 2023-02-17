
const Author = () => {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
      <span className='font-normal normal-case'>Augusto Tapia Sánchez</span></p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>Genero: {''}
      <span className='font-normal normal-case'>Masculino</span></p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>Nacionalidad: {''}
      <span className='font-normal normal-case'>Mexicana</span></p>

      <div className='flex'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de Nacimiento: {''}
        <span className='font-normal normal-case'>12/02/1986</span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase ml-5'>Lugar de Nacimiento: {''}
        <span className='font-normal normal-case'>Xalapa</span></p>
      </div>

      <div className='flex'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de Fallecimiento: {''}
        <span className='font-normal normal-case'>---</span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase ml-5'>Lugar de Fallecimiento: {''}
        <span className='font-normal normal-case'>---</span></p>
      </div>

      <p className='font-bold mb-3 text-gray-700 uppercase'>Boigrafía: {''}
      <span className='font-normal normal-case text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt accusamus minima dicta dolores, enim aut magni iste officiis tempora ipsum inventore vitae ratione non aliquam totam numquam, cumque sed?</span></p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>Seudonimo: {''}
      <span className='font-normal normal-case'>---</span></p>
  </div>
  )
}

export default Author