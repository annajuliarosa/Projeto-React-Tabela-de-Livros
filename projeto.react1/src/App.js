import React, {Component} from "react";
import './index.css';
import TabelaHead from "./components/TabelaHead";
import TabelaFoot from "./components/TabelaFoot";
import TabelaBody from "./components/TabelaBody";

class App extends Component{

  state = {
    
    livros: []
  };

  componentDidMount() {
    fetch("/livros.json")
      .then(response => response.json())
      .then(livros => this.setState({livros}))
      .catch(function(error){
        console.log("Erro na requisição");
        alert("Erro na requisição");

      })

      .finally(function(){
        console.log("Sempre retorna")
      });
    };

    handleRemoverLinha = (id) =>
     {
      const livros = this.state.livros.filter(l => l.id !== id);
      this.setState({livros})
     };

     handerOrdenarCrescenteISBN= (id) => { 
      const livros = this.state.livros.sort((a, b) => 
      a.id<b.id ? -1 : 0
      );
     }

     handerOrdenarDecrescenteISBN= (id) => { 
      const livros = this.state.livros.sort((a, b) => 
      a.id<b.id ? -1 : 0
      );

      livros.reverse();
      this.setState({livros});
     }

     handlerOrdernarCrescente =(titulo) =>{
      const livros = this.state.livros.sort((a, b) => 
      a.titulo<b.titulo ? -1 : 0
      );

      this.setState({livros})
     };

      handlerOrdenarDecrescente = titulo => {
        const livros = this.state.livros.sort((a, b) =>
        a.titulo< b.titulo ? -1 : 0 
        );

      livros.reverse();
      this.setState({livros});

      };

      handlerOrdernarCrescenteAutor =(autor) =>{
        const livros = this.state.livros.sort((a, b) => 
        a.autor<b.autor? -1 : 0
        );
  
        this.setState({livros})
       };
  
        handlerOrdenarDecrescenteAutor = (autor) => {
          const livros = this.state.livros.sort((a, b) =>
          a.autor< b.autor ? -1 : 0 
          );
  
        livros.reverse();
        this.setState({livros});
  
        };

    render(){
     
  return (

    <table className="tabela">

    <TabelaHead ordernarCrescente={ this.handlerOrdernarCrescente}
    ordenarDecrescente= {this.handlerOrdenarDecrescente}
    ordernarCrescenteIsbn= {this.handerOrdenarCrescenteISBN}
    ordenarDecrescenteIsbn= {this.handerOrdenarDecrescenteISBN}
    ordernarCrescenteAutor= {this.handlerOrdernarCrescenteAutor}
    ordenarDecrescenteAutor= {this.handlerOrdenarDecrescenteAutor}/>
  
    
    <TabelaFoot qDeLivros = {this.state.livros.length} />
    <TabelaBody livros={this.state.livros} removerLinha={this.handleRemoverLinha}/>
    </table>
  );
}
}
export default App;
