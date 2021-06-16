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


  /* A função buscarPorId ela lista todos os id e procura se entre eles existe o id solicitado, caso existe ele retorna o id. */
  buscarPorId(id: number): Tarefa{
    const tarefas : Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }


    /* A função atualizar lista todas as tarefas e procura a terefa informada no parametro.
    caso a tarefa seja encontrada ele mostra a na posição existente para atualiar os valores e gravo ela no localStorage e tenho a tarefa atualizada. */
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj,index,objs) =>{
      if(tarefa.id === obj.id){
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  };

  /* A função remover lista todas as tarefas, filtra e retorna todas as tarefas diferentes do id informado. */
  remover(id: number): void{
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void{
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs)=> {
      if(id === obj.id){
        objs[index].concluida = !obj.concluida;
      }
    });
  }
}
