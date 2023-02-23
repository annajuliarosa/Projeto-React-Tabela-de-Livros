import React from "react";

export const TabelaFoot = (props) => (
    <tfoot>
        <tr>
            <td colspan="4">Quantidade de livros na tabela: {props.qDeLivros}</td>
        </tr>
    </tfoot>

);
