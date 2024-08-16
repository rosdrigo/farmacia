import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Produto from '../../../model/Produto';
import Categoria from '../../../model/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';


function CadastrarProduto() {
    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();


    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        descricao: '',
    });

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        descricao: '',
        quantidade: 0,
        laboratorio: '',
        preco: 0,
        foto: '',
        categoria: null,
    });

    async function buscarProdutoPorId(id: string) {
        await buscar(`/produtos/${id}`, setProduto);
    }

    async function buscarCategoriaPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria);
    }

    async function buscarCategoria() {
        await buscar('/categorias', setCategorias);
    }



    useEffect(() => {
        buscarCategoria();
        if (id !== undefined) {
            buscarProdutoPorId(id);
            console.log(categoria);

        }
    }, [id]);

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        });
    }, [categoria]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria,

        });
    }

    function retornar() {
        navigate('/produtos');
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log({ produto });

        if (id != undefined) {

            try {
                await atualizar(`/produtos`, produto, setProduto,);

                toastAlerta('Produto atualizada com sucesso', 'sucesso');
                retornar();


            } catch (error: any) {
                toastAlerta('Erro ao atualizar o Produto ', 'erro');
            }
        }

        else {
            try {
                await cadastrar(`/produtos`, produto, setProduto);

                toastAlerta('Produto cadastrada com sucesso', 'sucesso');
                retornar();

            } catch (error: any) {
                toastAlerta('Erro ao cadastrar o Produto', 'erro');
            }
        }
    }


        const carregandoCategoria = categoria.descricao === '';

        return (
            <div className="container flex flex-col mx-auto items-center">
                <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

                <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
                    <div className="flex flex-col gap-0">
                        <label htmlFor="titulo">Nome</label>
                        <input
                            value={produto.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            type="text"
                            placeholder="Nome"
                            name="nome"
                            required
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col gap-0">
                        <label htmlFor="titulo">Descrição</label>
                        <input
                            value={produto.descricao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            type="text"
                            placeholder="Descricao"
                            name="descricao"
                            required
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col gap-0">
                        <label htmlFor="titulo">Quantidade</label>
                        <input
                            value={produto.quantidade}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            type="number"
                            placeholder="Quantidade"
                            name="quantidade"
                            required
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col gap-0">
                        <label htmlFor="titulo">Laboratorio</label>
                        <input
                            value={produto.laboratorio}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            type="text"
                            placeholder="Laboratorio"
                            name="laboratorio"
                            required
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col gap-0">
                        <label htmlFor="titulo">Preço</label>
                        <input
                            value={produto.preco}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            type="number"
                            placeholder="Preço"
                            name="preco"
                            required
                            className="border-2 border-slate-700 rounded p-2"
                        />


                        <div className="flex flex-col gap-0"></div>
                        <label htmlFor="titulo">Foto</label>
                        <input
                            value={produto.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            type="text"
                            placeholder="Foto"
                            name="foto"
                            required
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div >
                    <div className="flex flex-col gap-0">
                        <p>Categoria do produto</p>
                        <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
                            <option value="" selected disabled>Selecione uma categoria</option>
                            {categorias.map((categoria) => (
                                <>
                                    <option value={categoria.id} >{categoria.nome}</option>
                                </>
                            ))}
                        </select>
                    </div>
                    <button disabled={carregandoCategoria} type='submit' className='rounded disabled:bg-slate-200 bg-blue-600 hover:bg-blue-900 text-white font-bold w-1/2 mx-auto block py-2'>
                        {carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
                    </button>
                </form >
            </div>
        );
    }


    export default CadastrarProduto;