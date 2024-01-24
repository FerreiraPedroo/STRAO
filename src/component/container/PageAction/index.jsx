import React from "react";

import { Button } from "../../Button";

import * as S from "./styles.jsx";

// const actions: [
// 		{
// 			title: "Excluir",
// 			typeStyle: "remove",
//          show: true,
// 			action: () => {}
// 		},
// 		{
// 			title: "Editar",
// 			typeStyle: "edit",
//          show: true,
// 			action: (data) =>
// 				navigate("/admin/data/edit", {
// 					state: { dataId: data._id }
// 				})
// 		}
// 	]/

/**
 * @param {{actionData: [{name:string, typeStyle: string, show: boolean, action: function}], dataSelected: string, loading: boolean}}
 * actionData - RECEBE UM ARRAY DE OBJETOS QUE SERÁ OS BOTÕES DAS AÇÕES //
 * dataSelected - UMA STRING PARA QUE OS BOTÕES FIQUE HABILITADOS OU DESABILITADOS //
 * loading - SE O COMPONENTE PAI ESTÁ ESPERANDO ALGUM DADO PARA PODE HABILITAR AS AÇÕES.
 * @returns
 */
export const PageAction = ({ actionsData = [], dataSelected, loading = false }) => {
	return (
		<S.ActionsContainer key="pageAction">
			<S.ActionsTitle>Ações</S.ActionsTitle>
			<S.ActionsBox>
				{actionsData.map((action) => (
					<S.ActionButtonBox key={action.name} show={action.show || dataSelected}>
						<Button
							typeStyle={action.typeStyle}
							title={action.name}
							onClick={() => action.action(dataSelected)}
							disable={loading}
						/>
						<S.ActionText>{action.name}</S.ActionText>
					</S.ActionButtonBox>
				))}
			</S.ActionsBox>
		</S.ActionsContainer>
	);
};
