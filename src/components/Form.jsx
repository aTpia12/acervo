import React from 'react'

const Form = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>
        Autores
      </h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade Autores y {''}
        <span className='text-yellow-500 font-bold'>Administralos</span>
      </p>
      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className='mb-5'>
          <label htmlFor='name' className='block text-gray-700 uppercase font-bold'>Nombre <span className='text-red-600'>*</span></label>
          <input 
            id='name'
            type='text'
            placeholder='Nombre del autor...' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='last_name' className='block text-gray-700 uppercase font-bold'>Apellido Paterno <span className='text-red-600'>*</span></label>
          <input 
            type='text'
            id='last_name'
            placeholder='Apellido Paterno...' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='second_name' className='block text-gray-700 uppercase font-bold'>Apellido Materno</label>
          <input 
            type='text'
            id='second_name'
            placeholder='Apellido Materno...' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='gender' className='block text-gray-700 uppercase font-bold'>Genero</label>
          <select 
            id='gender'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          >
            <option value="F">Femenino</option>
            <option value="M">Masculino</option>
          </select>
        </div>
        <div className='mb-5'>
          <label htmlFor='nationality' className='block text-gray-700 uppercase font-bold'>Nacionalidad</label>
          <input 
            type='text'
            id='nationality'
            placeholder='Nacionalidad...' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='birth_date' className='block text-gray-700 uppercase font-bold'>Fecha de Nacimiento</label>
          <input 
            type='date'
            id='birth_date'
            placeholder='Fecha de Nacimiento...' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='birth_place' className='block text-gray-700 uppercase font-bold'>Lugar de Nacimiento</label>
          <input 
            type='text'
            id='birth_place'
            placeholder='Lugar de Nacimiento...' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='death_date' className='block text-gray-700 uppercase font-bold'>Fecha de Fallecimiento</label>
          <input 
            type='date'
            id='death_date'
            placeholder='Fecha de Fallecimiento...' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='death_place' className='block text-gray-700 uppercase font-bold'>Lugar de Fallecimiento</label>
          <input 
            type='text'
            id='death_place'
            placeholder='Lugar de Fallecimiento...' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='biography' className='block text-gray-700 uppercase font-bold'>Biografía</label>
          <textarea 
            placeholder='Biografía...' 
            id='biography'
            rows="7"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='pseudonym' className='block text-gray-700 uppercase font-bold'>Seudonimo</label>
          <input 
            type='text'
            id='pseudonym'
            placeholder='Seudonimo...' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <input 
            type='submit'
            value='Guardar Autor' 
            className='cursor-pointer transition-colors hover:bg-yellow-400 w-full p-2 mt-2 bg-yellow-500 rounded-md'
          />
        </div>
      </form>
    </div>
  )
}

export default Form