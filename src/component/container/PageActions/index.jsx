import React from "react";

import { ButtonIcon } from "../../Buttons/ButtonIcon/index.jsx";

import * as S from "./styles.jsx";

/**
 * @param {{actionsData: [{name:string, typeStyle: string, show: boolean, action: function}], dataSelected: string, loading: boolean}}
 * actionData - RECEBE UM ARRAY DE OBJETOS QUE SERÁ OS BOTÕES DAS AÇÕES //
 * dataSelected - UMA STRING PARA QUE OS BOTÕES FIQUE HABILITADOS OU DESABILITADOS //
 * loading - SE O COMPONENTE PAI ESTÁ ESPERANDO ALGUM DADO PARA PODE DESABILITAR AS AÇÕES.
 *
 * @example
 * ```JS
 * const actions: [
 * 	{
 * 		title: "Excluir",
 * 		typeStyle: "remove",
 *		show: true,
        disable: true,
 * 		action: () => {}
 * 	},
 * 	{
 * 		title: "Editar",
 * 		typeStyle: "edit",
 * 		show: true,
 * 	    disable: true,
 * 		action: (data) =>
 *				navigate("/admin/data/edit", {
 *				state: { dataId: data._id }
 *		})
 * 	}
 * ]
 * ```
 * @returns
 */
export function PageActions({ actionsData = [], dataSelected = null, loading = false }) {
	return (
		<S.Container key="pageAction">
			{actionsData.map((action) => (
				<S.ButtonBox disabled={loading} key={action.name} show={action.show || dataSelected}>
					<ButtonIcon
						typeStyle={action.typeStyle}
						onClick={() => action.action(dataSelected)}
						disabled={loading || action.disable}
					/>
					<S.ButtonText>{action.name}</S.ButtonText>
				</S.ButtonBox>
			))}
		</S.Container>
	);
}
