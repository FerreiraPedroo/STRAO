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
 *
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
						/>
						<S.ActionText>{action.name}</S.ActionText>
					</S.ActionButtonBox>
				))}
			</S.ActionsBox>
		</S.ActionsContainer>
	);
};
