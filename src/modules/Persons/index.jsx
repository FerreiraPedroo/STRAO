import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { api } from "services/api.js";
import { handleApiResponse } from "helper/handleApiResponse.js";

import { PageList } from "component/container/PageList/index.jsx";
import { PageTitle } from "component/container/PageTitle/index.jsx";
import { PageActions } from "component/container/PageActions/index.jsx";
import { PageContainer } from "component/container/PageContainer/styles.jsx";

import * as S from "./styles.jsx";

// const menuSectors = useSelector((state) => null);

export function Persons() {
	const navigate = useNavigate();
	const [notification, setNotification] = useState();
	const [loading, setLoading] = useState(true);
	const [personSelected, setPersonSelected] = useState(null);
	const [personList, setPersonList] = useState([]);

	const [pageListData] = useState({
		columns: [
			{
				title: "STATUS",
				htmlName: "status",
				size: 0,
				minSize: 120,
				maxSize: 120
			},
			{ title: "NOME", htmlName: "name", size: 0, minSize: 120, maxSize: 700 },
			{
				title: "E-MAIL",
				htmlName: "email",
				size: 0,
				align: "start",
				minSize: 120,
				maxSize: 320
			}
		],
		actions: [
			{
				name: "Nova pessoa",
				typeStyle: "add",
				show: true,
				action: () => {
					navigate("/persons/person");
				}
			},
			{
				name: "Editar usuário",
				typeStyle: "edit",
				show: false,
				action: (data) => {
					navigate("/admin/user/edit", {
						state: { user: data }
					});
				}
			},
			{
				name: "Excluir usuário",
				typeStyle: "remove",
				show: false,
				action: (data) =>
					setNotification({
						type: "full",
						theme: "confirmation",
						messageTitle: "Excluir usuário",
						message: `Deseja confirmar a exclusão do usuário: ${data.name}`,
						setNotification: setNotification,
						onClick: () => deleteUser(data._id),
						buttonTitle: "Confirmar"
					})
			}
		]
	});

	useEffect(() => {
		async function getListData() {
			try {
				const response = await api(`/person/persons`, { method: "GET" });
				await handleApiResponse({ response, setData: setPersonList, setNotification });
				setLoading(false);
			} catch (err) {
				console.log(err);
				setLoading(false);
			}
		}
		getListData();
	}, []);

	return (
		<PageContainer>
			<PageTitle title="Pessoas" />
			<PageActions actionsData={pageListData.actions} />
			<PageList
				listData={personList}
				columns={pageListData.columns}
				setDataSelected={setPersonSelected}
				dataSelected={personSelected}
				loading={loading}
			/>
		</PageContainer>
	);
}
