import React from "react";

import { ButtonIcon } from "../../ButtonIcon/index.jsx";

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
 * @param {{actionsData: [{name:string, typeStyle: string, show: boolean, action: function}], dataSelected: string, loading: boolean}}
 * actionData - RECEBE UM ARRAY DE OBJETOS QUE SERÁ OS BOTÕES DAS AÇÕES //
 * dataSelected - UMA STRING PARA QUE OS BOTÕES FIQUE HABILITADOS OU DESABILITADOS //
 * loading - SE O COMPONENTE PAI ESTÁ ESPERANDO ALGUM DADO PARA PODE HABILITAR AS AÇÕES.
 * @returns
 */
export const PageAction = ({
	theme = "normal",
	actionsData = [],
	dataSelected,
	loading = false
}) => {
	return (
		<S.Container theme={theme} key="pageAction">
			<S.ContainerTitle theme={theme}>Ações</S.ContainerTitle>
			<S.Box theme={theme}>
				{actionsData.map((action) => (
					<S.ButtonBox
						theme={theme}
						disabled={null}
						key={action.name}
						show={action.show || dataSelected}
					>
						<ButtonIcon
							typeStyle={action.typeStyle}
							title={action.name}
							onClick={() => action.action(dataSelected)}
							disable={loading}
						/>
						<S.ButtonText>{action.name}</S.ButtonText>
					</S.ButtonBox>
				))}
			</S.Box>
		</S.Container>
	);
};
