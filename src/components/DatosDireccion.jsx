import React from "react";
import {useForm} from 'react-hook-form';
import {registerRequest} from '../api/auth.js'



const DatosDireccion = props => {

  const {register,handleSubmit} = useForm()
  const { yeari, yearf } = props.valores;
  const years = Array.from({ length: yearf - yeari + 1 }, (_, index) => String(parseInt(yeari, 10) + index));

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <form onSubmit={handleSubmit(async(values)=>{
            console.log(values)
            const res = await registerRequest(values)
            console.log(res);
            })}>
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th>Origen del ahorro</th>
                  {years.map((year) => (
                    <th key={year}>{year}</th>
                  ))}
                  <th>Total anual</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Propio</td>
                  {years.map((year) => (
                    <td key={year}>
                      <input type="number" className="form-control" {...register(`propio_${year}`)} />
                    </td>
                  ))}
                  <td></td>
                </tr>
                <tr>
                  <td>Mamá</td>
                  {years.map((year) => (
                    <td key={year}>
                      <input type="number" className="form-control" {...register(`mama_${year}`)} />
                    </td>
                  ))}
                  <td></td>
                </tr>
                <tr>
                  <td>Papá</td>
                  {years.map((year) => (
                    <td key={year}>
                      <input type="number" className="form-control" {...register(`papa_${year}`)} />
                    </td>
                  ))}
                  <td></td>
                </tr>
                <tr>
                  <td>Hermanos</td>
                  {years.map((year) => (
                    <td key={year}>
                      <input type="number" className="form-control" {...register(`hermanos_${year}`)} />
                    </td>
                  ))}
                  <td></td>
                </tr>
                <tr>
                  <td>Otros</td>
                  {years.map((year) => (
                    <td key={year}>
                      <input type="number" className="form-control" {...register(`otros_${year}`)} />
                    </td>
                  ))}
                  <td></td>
                </tr>
                <tr>
                  <td>Total anual</td>
                  {years.map((year) => (
                    <td key={year}></td>
                  ))}
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default DatosDireccion;