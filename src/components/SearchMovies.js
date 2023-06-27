import React from 'react';
 import { useEffect, useState,useRef } from "react"; 

import { UseFetch } from "../hooks/UseFetch";
function SearchMovies(){
	 const [moviesxd, setState] = useState({
		
		movie:[]
		
		
		
	  });

	  let [keyword, setSearch] = useState (
		
	  );

	  useEffect(() => {
		UseFetch(`https://www.omdbapi.com/?s=${keyword}&apikey=895ee07f`)
		  .then(({Search}) => {

			 /* const[{Title,Year,Poster}] =Search  */ 
 
			  setState(Search);
			  console.log(Search)

				setSearch ( keyword);
				
				
			

		  })
		  .catch(() => console.error);
	  }, []);

	
	
	  let buscador=useRef()





	  ;
if(!localStorage.getItem('buscador')){
	keyword="asd"
}else{
	
	keyword= localStorage.getItem('buscador')
}
	  


function pelicula(){
	
	let resul = buscador.current.value
	  let peliculas = (localStorage.setItem('buscador',resul))
	   
	 

}




  
	// Credenciales de API
	const apiKey = 'X'; // Intenta poner cualquier cosa antes para probar
	
	return(
		<div className="container-fluid">
			{
				
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET"  >
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input ref={buscador}  type="text" className="form-control" />
								

								</div>
								<button onClick={pelicula}     className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
					
					<div className="col-12">
							
								
								
								
						{ keyword == "asd"    ? <h2>Busque una pelicula</h2>:  <h2>Películas para la palabra: {keyword}</h2>}
							
						</div>
						{/* Listado de películas */}
						{
						keyword !="asd" &&	moviesxd.length > 0  ? moviesxd.map((movie, i) => {
								return (
									
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={movie.Poster}
														alt={movie.Title} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{movie.Year}</p>
											</div>
										</div>
									</div>
								)
							}):keyword !="asd" && moviesxd.length === undefined && <h2>no se encontro la pelicula</h2>
						}
					</div>
				
				</>
				
			}
		</div>
	)
}

export default SearchMovies;
