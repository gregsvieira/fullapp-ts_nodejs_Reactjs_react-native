import React, { useState, useEffect } from 'react';
import api from './services/api.js';
import './App.css';
import backgroundImage from './assets/background.jpg'

import Header from './components/Header';

/* TRÊS CONCEITOS MAIS IMPORTANTES:
        * Componente
        * Propriedade 
            (Informação de componente de pai para filho ex: title="")
        * Estado & Imutabilidade

    //useState retorna um array c/ 2 posições:
    // 1. Variável c/ seu valor inicial
    // 2. Função para atualizarmos esse valor

*/


export default function App(){

    const [projects, setProjects] = useState( []);

    useEffect(() => {
        api.get('/projects').then(response =>{
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject(){
        // setProjects([ ...projects, `Novo projeto ${Date.now()}` ]);
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Gregory Vieira",
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
    <>
    <Header title="Projects" />
    <img src={backgroundImage} />
 <ul>
     {projects.map(project => <li key={project.id}>{project.title}</li> )}
 </ul>
    
    <button type="button" onClick={handleAddProject}>Adicionar Project</button>
    </>
    );
    };

// No react somos obrigados a envolver com algo para poder repetir o component
// Mas para não atrapalhar podemos ao inves de <div> utilizar um elemento vazio <></>