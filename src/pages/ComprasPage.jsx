import {Card} from '../components/Card'
import { useContext } from 'react'
import {ProductosContext} from '../context/ProductosContext'
import {CarritoContext} from '../context/CarritoContext'

export const ComprasPage = () => {

	const { productos } = useContext(ProductosContext)

	const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

	const handlerAgregar = (compra) => {
		agregarCompra(compra)
	}
	const handlerQuitar = (id) => {
		eliminarCompra(id)
	}


	return (
		<>
			<h1>compras:</h1>
			<hr />
			{productos.map(producto => (

				<Card
					key={producto.id}
					imagen={producto.image}
					titulo={producto.title}
					descripcion={producto.description}
					precio={producto.precio}
					handlerAgregar={() => handlerAgregar(producto)}
					handlerQuitar={() => handlerQuitar(producto.id)}
				></Card>
			))}

		</>
	)
}

