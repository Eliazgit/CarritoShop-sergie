import { useReducer } from 'react'
import { CarritoContext } from './CarritoContext'


const initialState = []

export const CarritoProvider = ({ children }) => {


	const comprasReducer = (state = initialState, action = {}) => {
		switch (action.type) {

			case '[CARRITO] agregar cantidad de compra':
				return [...state, action.payload]


			case '[CARRITO] aumentar cantidad de compra':
				return state.map(item => {
					const cant = item.cantidad + 1
					if (item.id === action.payload) return { ...item, cantidad: cant }
					return item
				})


			case '[CARRITO] disminuir cantidad de compra':
				return state.map(item => {
					const cant = item.cantidad - 1
					if (item.id === action.payload && item.cantidad > 1) return { ...item, cantidad: cant }
					return item
				})

			case '[CARRITO] eliminar cantidad de compra':
				return state.filter(compra => compra.id !== action.payload)


			default:
				return state


		}
	}

	const [ListaCompras, dispatch] = useReducer(comprasReducer, initialState)

	const agregarCompra = (compra) => {
		compra.cantidad = 1
		const action = {
			type: '[CARRITO] agregar cantidad de compra',
			payload: compra
		}
		dispatch(action)
	}

	const aumentarCantidad = (id) => {
		const action = {
			type: '[CARRITO] aumentar cantidad de compra',
			payload: id
		}
		dispatch(action)
	}

	const disminuirCantidad = (id) => {
		const action = {
			type: '[CARRITO] disminuir cantidad de compra',
			payload: id
		}
		dispatch(action)
	}

	const eliminarCompra = (id) => {
		const action = {
			type: '[CARRITO] eliminar cantidad de compra',
			payload: id
		}
		dispatch(action)
	}

	return (

		<CarritoContext.Provider value={{ ListaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }} >
			{children}
		</CarritoContext.Provider>
	)
}


