import { ProductosContext } from './ProductosContext'
import { useEffect, useState } from 'react'

export const ProductosProvider = ({ children }) => {

	const [productos, setProductos] = useState([])

	const fetchProductos = async () => {

		const response = await fetch('http://fakestoreapi.com/products')
		const data = await response.json()
		console.log(data)
		setProductos(data)

	}

	useEffect(() => {
		fetchProductos()
	}, []);


	return (

		<ProductosContext.ProductosProvider value={{productos}}>
			{children}
		</ProductosContext.ProductosProvider>

	)
}


