import React, { useState } from "react";

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
export const PageSectionAction = ({
	actionsData = [],
	dataSelected,
	loading = false
}) => {

	const [action, setAction] = useState();

	return (
		<S.ActionsContainer>
			<S.ActionsTitle>Ações</S.ActionsTitle>
			{actionsData.map((action) => (
				<S.ActionButtonBox
					key={action.name}
					show={action.show || dataSelected}
				>
					<Button
						typeStyle={action.typeStyle}
						title={action.name}
						onClick={() => action.action(dataSelected)}
					/>
					{action.name}
				</S.ActionButtonBox>
			))}
		</S.ActionsContainer>
	);
};


