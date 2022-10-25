import React from "react";

const PaginationControls = ({ page, totalPages, onBackClick, onNextClick }) => {
  return (
    <div className="flex gap-2">
      <button className="font-light" onClick={onBackClick}>Voltar</button>
      <span className="font-bold">{page} de {totalPages}</span>
      <button className="font-light" onClick={onNextClick}>Avaçar</button>
    </div>
  )
}

export default PaginationControls;