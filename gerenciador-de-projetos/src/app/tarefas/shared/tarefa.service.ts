import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  /*ListarTodos() é função que ira listar todas as tarefas existentes , e se não houver tarefas irá retornar uma array vazia.*/

  listarTodos(): Tarefa[]{
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  /* Aqui eu cria a função para cadastrar tarefas, onde tarefa irá receber os 3 atributos em seguida puxo todas as tarefas existentes, tarefa.id recebera a data  atual e adiciono no final da lista de tarefas a nova tarefa com o id alterado.*/
  cadastrar(tarefa: Tarefa): void{
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);

  }
}
