import { useState } from 'react'
import '../style/card.css'

export const Card = ({imagen, titulo, descripcion, precio, handlerAgregar, handlerQuitar}) => {

	const [added, setAdded] = useState(false)

	const clickAgregar = () => {
		handlerAgregar()
		setAdded(true)
	}
	const clickQuitar = () => {
		handlerQuitar()
		setAdded(false)
	}

	return (
		<div className='tarjeta'>
			<img src={imagen} alt={titulo} className='tarjeta-imagen' />
			<div className='tarjeta-contenido'>
				<h3 className='tarjeta-titulo'>{titulo} </h3>
				<p className='tarjeta-descripcion'> {descripcion}  </p>
				<p className='tarjeta-precio'> {precio}  </p>

				{added
					? <button
						type='button'
						className='boton-quitar'
						onClick={clickQuitar}>
						quitar del carrito
					</button>
					: <button
						type='button'
						className='boton-agregar'
						onClick={clickAgregar}>
						agregar carrito
					</button>
				}
			</div>
		</div>
	)
}


