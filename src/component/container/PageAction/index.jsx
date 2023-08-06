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
export const PageAction = ({
	actionsData = [],
	dataSelected,
	loading = false
}) => {
	return (
		<S.ActionsContainer>
			<S.ActionsTitle>Ações</S.ActionsTitle>
			{actionsData.map((action) => (
				<S.ActionButtonBox
					key={action.title}
					show={action.show || dataSelected}
				>
					<Button
						typeStyle={action.typeStyle}
						title={action.title}
						onClick={() => action.action(dataSelected)}
					/>
					{action.title}
				</S.ActionButtonBox>
			))}
		</S.ActionsContainer>
	);
};
