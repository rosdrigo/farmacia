import React, { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import Produto from '../../../model/Produto';
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProduto/CardProduto';
import { toastAlerta } from '../../../util/toastAlerta';

function ListaProduto() {
  const [produto, setProduto] = useState<Produto[]>([]);

  

  async function buscarProdutos() {
   
      await buscar('/produtos', setProduto)
  }

         useEffect(() => {
    buscarProdutos();
  }, [produto.length]);

  return (
    <>
      {produto.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {produto.map((produto) => (
          <CardProduto key={produto.id} prod={produto} />
        ))}
      </div>
    </>
  );
}

export default ListaProduto;