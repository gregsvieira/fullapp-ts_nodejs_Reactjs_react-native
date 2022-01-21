import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'greg@toup.com',
        password: '123456',
        techs: [
            'Node.js', 
            'ReactJS',
            'React Native',
            { title: 'Javascript', experience: 100},
        ],
    });

    return response.json({ message: 'hello world!' });
}

/*
Estudos aqui:
- Tipagens primitivas:
    string, number, boolean, object, array
- Interfaces - formas de definir tipagens de conjuntos de dados(principalmente objetos)
- Vetores - Para tipar se põe dentro do interface e se põe o formato que ele recebe, techs:String<string>
            Mas em caso de um objeto mais completo, com arrays variados 
            devemos criar OUTRA interface passando os valores:
            techs: Array<string | TechObject>;
            e na outra interface colocamos o objeto referenciado.
            e em caso de array de strings, pode-se passar mais simples:  techs:string[]; */