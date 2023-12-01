
import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'



const Detail = () => {


  const params = useParams();


  const { state, dataApi } = useContext(ContextGlobal)

  const getDentist = async () => {
    await dataApi(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  }

  useEffect(() => {
    getDentist()

  }, [params])

  return (
     /* aqui deberan renderizar la informacion en detalle de un user en especifico */
    /* Deberan mostrar el name - email - phone - website por cada user en especifico */
    <main className={state.theme}>
      <div className='detail'>
        <h1>Detalle del dentista {state.data.id}</h1>
        <table>
          <tbody>
            <tr>
              <th>Nombre</th>
              <td>{state.data.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{state.data.email}</td>
            </tr>
            <tr>
              <th>Teléfono</th>
              <td>{state.data.phone}</td>
            </tr>
            <tr>
              <th>Sitio Web</th>
              <td>{state.data.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
   
  )
}

export default Detail