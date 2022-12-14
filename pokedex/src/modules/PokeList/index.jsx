import React, { useState } from "react";
import PaginationControls from "./components/PaginationControls";
import PokemonCard from "./components/PokemonCard";

const PokeList = (props) => {
  const { pokemons, loading, page, totalPages, setPage } = props;

  const onBackClickHandler = () => {
    console.log('Volta')
    page > 0 && setPage(page - 1)
  }

  const onNextClickHandler = () => {
    console.log('Avança')
    page + 1 !== totalPages && setPage(page + 1)
  }

  return (

    <>
      {loading ? (
        <div className="p-20 flex justify-center items-center">
          <h1 className="text-indigo-500 font-bold">Carregando...</h1>
        </div>
      ) : (
        <div>
          <div className="w-full py-4 pr-10 flex justify-end ">
            <PaginationControls
              page={page + 1}
              totalPages={totalPages}
              onBackClick={onBackClickHandler}
              onNextClick={onNextClickHandler}
            />
          </div>
          <div className="gap-10 px-10 grid grid-cols-3">
            {pokemons && pokemons.map((pokemon, index) => {
              return (
                <PokemonCard key={index} pokemon={pokemon} />
              )
            })}

          </div>
        </div>
      )}
    </>
  )

}
export default PokeList;