import React, { useState, useEffect, useCallback } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { api } from "services/api";
import { NotificationModal } from "component/Notification/modal";

import { PageTitle } from "component/container/PageTitle";
import { PageContainer } from "component/container/PageContainer/styles";
import { InputSelect } from "component/Input/Select";
import { ButtonIcon } from "component/ButtonIcon";

import * as S from "./styles";
import { InputTextArea } from "component/Input/TextArea";

export function SupplyWarehouseShippingNew() {
	const navigate = useNavigate();

	const [notification, setNotification] = useState(null);
	const [pageLoading, setPageLoading] = useState(true);
	const [handleData, setHandleData] = useState({});

	function handleDataState(event) {
		const data = { ...handleData };
		data[event.target.name] = event.target.value;
		setHandleData(data);
	}

	const [stockList, setStockList] = useState(null);
	const [stockSelected, setStockSelected] = useState(null);
	const stockSelectOptions = useCallback((options) => {
		let optionsInfo = [];
		if (options instanceof Array) {
			optionsInfo = options.map((option) => {
				return {
					value: option._id,
					name: option.name,
					type: "option"
				};
			});
		}

		optionsInfo.unshift({
			value: "",
			name: "Selecione o estoque",
			type: "option"
		});

		return optionsInfo;
	}, []);

	const [originaryList, setOriginaryList] = useState(null);
	const [originarySelected, setOriginarySelected] = useState(null);
	const originarySelectOptions = useCallback((options) => {
		let optionsInfo = [];
		if (options instanceof Array) {
			optionsInfo = options.map((option) => {
				return {
					value: option._id,
					name: option.name,
					type: "option"
				};
			});
		}

		optionsInfo.unshift({
			value: "",
			name: "Selecione o destinatário.",
			type: "option"
		});

		return optionsInfo;
	}, []);

	useEffect(() => {
		async function getStocks() {
			try {
				const response = await api.get(`supply/warehouse/stock/list`);
				setStockList(response.data.data);
			} catch (error) {
				setNotification({
					theme: "fail",
					message:
						(error.response && error.response.data.message) ??
						"Erro ao obter os dados dos recebimentos.",
					setNotification: setNotification
				});
			}
		}
		async function getOriginators() {
			try {
				const response = await api.get(`admin/originator/list`);
				setOriginaryList(response.data.data);
			} catch (error) {
				setNotification({
					theme: "fail",
					message:
						(error.response && error.response.data.message) ??
						"Erro ao obter os dados dos recebimentos.",
					setNotification: setNotification
				});
			}
		}
		getStocks();
		getOriginators();
	}, []);

	return (
		<PageContainer>
			{notification && (
				<NotificationModal
					theme={notification.theme}
					message={notification.message}
					setNotification={setNotification}
				/>
			)}

			<PageTitle
				title="Nova expedição de material"
				backUrl={"/supply"}
				subTitle={"Registre a liberação de material."}
			/>

			<S.BlockInfoContainer theme="normal">
				<S.BlockInfoTitle>Informações</S.BlockInfoTitle>
				<S.DataContainer>
					<S.InputBox>
						<InputSelect
							width="256px"
							selectValue={handleData.stock_id}
							selectName={"stock_id"}
							selectShowInfo={true}
							selectPlaceholder={"Estoque"}
							selectOnChange={(e) => {
								handleDataState(e);
								setStockSelected(e.target.value);
							}}
							options={stockSelectOptions(stockList)}
							disabled={!stockList}
						/>
					</S.InputBox>
					<S.InputBox>
						<InputTextArea
							width="320px"
							height="90px"
							textAreaName="description"
							textAreaValue={handleData.description ?? ""}
							textAreaOnChange={handleDataState}
							textAreaPlaceholder={"Descrição"}
							textAreaShowInfo={true}
							textAreaMin="128px"
							textAreaMax="100%"
							textAreaErrorMsg={""}
							textAreaOnBlur={() => ""}
							theme="normal"
						/>
					</S.InputBox>
				</S.DataContainer>
			</S.BlockInfoContainer>

			<S.BlockInfoContainer theme="normal">
				<S.BlockInfoTitle>Destinatário</S.BlockInfoTitle>
				<S.DataContainer>
					<S.InputBox>
						<InputSelect
							width="256px"
							selectValue={handleData.originary_id}
							selectName={"originary_id"}
							selectShowInfo={true}
							selectPlaceholder={"Tipo de destinatario"}
							selectOnChange={(e) => {
								handleDataState(e);
								setOriginarySelected(e.target.value);
							}}
							options={originarySelectOptions(originaryList)}
							disabled={!originaryList}
						/>
					</S.InputBox>
				</S.DataContainer>
			</S.BlockInfoContainer>

			<S.BlockInfoContainer theme="normal">
				<S.BlockInfoTitle>Lista de items da expedição</S.BlockInfoTitle>
				<S.DataContainer>
					<S.InputBox>
						<InputSelect
							width="256px"
							selectValue={handleData.stock_id}
							selectName={"stock_id"}
							selectShowInfo={true}
							selectPlaceholder={"Estoque"}
							selectOnChange={handleDataState}
							options={stockSelectOptions(stockList)}
							disabled={!stockList}
						/>
						<InputSelect
							width="256px"
							selectValue={handleData.originary_id}
							selectName={"originary_id"}
							selectShowInfo={true}
							selectPlaceholder={"Destinatário"}
							selectOnChange={handleDataState}
							options={originarySelectOptions(originaryList)}
							disabled={!originaryList}
						/>
					</S.InputBox>
					<S.InputBox>
						<InputTextArea
							width="320px"
							height="90px"
							textAreaName="description"
							textAreaValue={handleData.description ?? ""}
							textAreaOnChange={handleDataState}
							textAreaPlaceholder={"Descrição"}
							textAreaShowInfo={true}
							textAreaMin="128px"
							textAreaMax="100%"
							textAreaErrorMsg={""}
							textAreaOnBlur={() => ""}
							theme="normal"
						/>
					</S.InputBox>
				</S.DataContainer>
			</S.BlockInfoContainer>
		</PageContainer>
	);
}

{
	/* <ButtonIcon
			typeStyle="correct"
			disable={!stockSelect}
			onClick={() => changeUpdate("department", "add", stockSelect)}
		/> */
}
