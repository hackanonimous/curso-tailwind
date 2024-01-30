const App=()=>{
	return(
		<>
			<div className="bg-primary-400 bg-gradient-to-l from-primary-900 border-primary-700 border-2">
				<p className="text-primary-50">Colores personalizados</p>
			</div>
			<div className="w-80 bg-primary-800">
				<p>ancho fijo de un elemento</p>
			</div>
			<div className="m-5 flex md:flex-col bg-primary-300 w-screen h-12">
					<div className="w-1/2 bg-primary-800">1/2</div>
					<div className="w-1/2 hover:w-full ease-in duration-300 bg-primary-400">1/2</div>
			</div>
		</>
	)
}

export default App