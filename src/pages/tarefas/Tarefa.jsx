import React, {useState, useEffect} from 'react';
import './Tarefa.css';

const Tarefas = () => {
    const [tarefa, setTarefa] = useState({id:0, descricao:'', data: ''});
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    useEffect(() => {
        tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
        setTarefa({ ...tarefa, id: tarefas.length });
    }, []);

    const atualizarValor = (event) => {
        setTarefa({...tarefa, [event.target.id]: event.target.value});
    }

    const salvar = () => {
        tarefas.push(tarefa);
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }

    return(
        <>
            <h1>Cadastro de Tarefas</h1>
            <input type="text" value={tarefa.descricao} id="descricao" onChange={atualizarValor}/><br />
            <input type="text" value={tarefa.data} id="data" onChange={atualizarValor}/><br />

            <button onClick={salvar}>Salvar</button><br /><br />
        </>
    );
}

export default Tarefas;