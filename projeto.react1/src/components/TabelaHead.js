import React from "react";

export const TabelaHead = (props) => (
    <thead>
        <tr>
            <th colspan="4">Tabela de Livros</th> 
        </tr>

        <tr>
            <th>ISBN <div class="container-setinhas">
                        <div onClick={( ) => props.ordernarCrescenteIsbn()}>&#129093;</div>
                        <div onClick={( ) => props.ordenarDecrescenteIsbn( )}>&#129095;</div>
                     </div>            
            </th>  
            <th>Título <div class="container-setinhas">
                        <div onClick={( ) => props.ordernarCrescente( )}>&#129093;</div>
                        <div onClick={( ) => props.ordernarDecrescente( )}>&#129095;</div>
                       </div>
            </th>
            
            <th>Autor <div class="cotainer-setinhas">
                <div onClick={( ) => props.ordernarCrescenteAutor( )}>&#129093;</div>
                <div onClick={( ) => props.ordenarDecrescenteAutor( )}>&#129095;</div>
                </div>
                </th>
            <th></th>  
        </tr>
        
    </thead>
);
