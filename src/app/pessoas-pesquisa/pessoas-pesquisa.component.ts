import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit
{
  pessoas = [
    { nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG', ativo: true },
    { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', ativo: false },
    { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', ativo: true },
    { nome: 'Luís Pereira', cidade: 'Curitiva', estado: 'PR', ativo: true },
    { nome: 'Paula Maria', cidade: 'Uberlândia', estado: 'MG', ativo: true },
    { nome: 'Vilma Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false },
    { nome: 'Manoel Pinheiro 2', cidade: 'Uberlândia', estado: 'MG', ativo: true },
    { nome: 'Vilma Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false },
    { nome: 'Sebastião da Silva 2', cidade: 'São Paulo', estado: 'SP', ativo: false },
    { nome: 'Carla Souza2', cidade: 'Florianópolis', estado: 'SC', ativo: true },
    { nome: 'Luís Pereira2', cidade: 'Curitiva', estado: 'PR', ativo: true },
    { nome: 'Vilma Andrade2', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false },
    { nome: 'Manoel Pinheiro3', cidade: 'Uberlândia', estado: 'MG', ativo: true },
    { nome: 'Vilma Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false },
    { nome: 'Sebastião da Silva3', cidade: 'São Paulo', estado: 'SP', ativo: false },
    { nome: 'Carla Souza3', cidade: 'Florianópolis', estado: 'SC', ativo: true },
    { nome: 'Luís Pereira3', cidade: 'Curitiva', estado: 'PR', ativo: true },
    { nome: 'Vilma Andrade3', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false },
    { nome: 'Manoel Pinheiro4', cidade: 'Uberlândia', estado: 'MG', ativo: true },
    { nome: 'Vilma Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false },
    { nome: 'Sebastião da Silva4', cidade: 'São Paulo', estado: 'SP', ativo: false },
    { nome: 'Carla Souza4', cidade: 'Florianópolis', estado: 'SC', ativo: true },
    { nome: 'Luís Pereira4', cidade: 'Curitiva', estado: 'PR', ativo: true },
    { nome: 'Vilma Andrade4', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
