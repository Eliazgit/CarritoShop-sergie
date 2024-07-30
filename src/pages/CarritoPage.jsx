import { useContext } from 'react'
import {CarritoContext} from '../context/CarritoContext'

export const CarritoPage = () =>{

	const { ListaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

	const calcularTotal = () => {
		return ListaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).tofixed(2)
	}


	const handleImpresion = () => {
		print()
	}
	return (

		<>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Precio</th>
						<th scope="col">Cantidad</th>
						<th scope="col">Eliminar</th>
					</tr>
				</thead>
				<tbody>
					{
						ListaCompras.map(item => (

							<tr key={item.id}>
								<th>{item.title}</th>
								<td>{item.price}</td>
								<td>
									<button className='btn btn-outline-primary' onClick={aumentarCantidad}>+</button>
									<button className='btn btn-primary'>{item.cantidad} </button>
									<button className='btn btn-outline-primary' onClick={disminuirCantidad}>-</button>


								</td>
								<td><button
									type='button'
									className='btn btn-danger'
									onClick={() => eliminarCompra(item.id)}

								></button></td>
							</tr>
						))
					}

					<th><b>TOTAL:</b></th>
					<td></td>
					<td>${calcularTotal()} </td>
					<td></td>

				</tbody>
			</table>
			<div className='d-grid gap-2'>
				<button
					className='btn btn-primary'
					onClick={handleImpresion}
					disabled={ListaCompras < 1}
				>COMPRAR</button>
			</div>
		</>
	)
}


