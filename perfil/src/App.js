import React, { Component } from 'react';
import './App.css';

 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: 'Dados pessoais'
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  
  entrar(){
    // this.state.nome = 'Joseffe Oliveira'
    this.setState({
      idade: <b>Idade</b>,
      idade2: '19 anos',
      nome: 'Lucas Sarabando Esteves  ',
      data_de_nascimento:<b>Data_de_nascimento</b>,
      data_de_nascimento2: '02/02/2002',
      genero: 'Masculino',
      endereco: <b>Endereço</b>,
      endereco2: ' Rua PRINCESA ISABEL, 99, APTO 23',
      formacao: <b>Formação</b>,
      formacao2:' Ciências da Computação ',
      experiencia: <b>Experiência</b>,
      experiencia2: 'Social Media Manager',
      projetomaster: <b>Projetos</b>,
      projeto1: <a href = 'https://github.com/lucasesteves013/web-NodeJS-ReactJS1/tree/main/tarefa-projeto' >Projeto 1</a>,
      projeto2: <a href = 'https://github.com/lucasesteves013/web-NodeJS-ReactJS1/tree/main/multiplicador' >Projeto 2</a>,
      projeto3: <a href = 'https://github.com/lucasesteves013/web-NodeJS-ReactJS1/tree/main/aluno-projeto' >Projeto 3</a>,
      projeto4: <a href = 'https://github.com/lucasesteves013/web-NodeJS-ReactJS1/tree/main/contador' >Projeto 4</a>
      }
    );
  }
    
 
  render(){
    return(
      <div>
        <Meuperfil />
        <right>
          <center>
          <button onClick={this.entrar}>Mostrar</button>
          <h2>
          {this.state.nome}
          </h2>
          </center>
          <center>
          <div style={{ height: 20 }}> 
            {this.state.idade} <br />
            {this.state.idade2} <br />
            {this.state.data_de_nascimento} <br />
            {this.state.data_de_nascimento2} <br />
            {this.state.endereco} <br />
            {this.state.endereco2} <br />
            {this.state.formacao} <br />
            {this.state.formacao2} <br />
            {this.state.experiencia} <br />
            {this.state.experiencia2} <br />
            {this.state.projetomaster} <br />
            {this.state.projeto1} <br />
            {this.state.projeto2} <br />
            {this.state.projeto3} <br />
            {this.state.projeto4}
          </div>
          </center>

        </right>
      </div>
    );
  }}
 
 
export default App;

 class Meuperfil extends Component {
   
   render(){
     
    let img = '';
    
    return(
      <center>
      <img src={img} width={250} height={250} />
      </center>
      
    );
   }
 }
