import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { api } from "services/api.js";
import { handleApiResponse } from "helper/handleApiResponse.js";

import { PageList } from "component/container/PageList/index.jsx";
import { PageTitle } from "component/container/PageTitle/index.jsx";
import { PageActions } from "component/container/PageActions/index.jsx";
import { PageContainer } from "component/container/PageContainer/styles.jsx";

import arrowFromSquare from "./arrow-up-right-from-square.svg";
import caretRight from "./caret-right.svg";
import caretDown from "./caret-down.svg";

import "./styles.css";
import { InputText } from "component/Input/Text";
import { InputDate } from "component/Input/Date";
import { InputSelect } from "component/Input/Select";

export function PersonNew() {
	const navigate = useNavigate();
	const [notification, setNotification] = useState();
	const [loading, setLoading] = useState(true);

	const [isOpen, setIsOpen] = useState(false);
	const [showOriginalDepartment, setOriginalDepartment] = useState(true);

	const [pageListData] = useState({
		actions: [
			{
				name: "Nova pessoa",
				typeStyle: "add",
				show: true,
				action: () => {
					navigate("/");
				}
			}
		]
	});

	return (
		<PageContainer>
			<PageTitle title="Cadastrar pessoa" />
			<PageActions actionsData={pageListData.actions} />

			<div className="container">
				<div className={`header ${isOpen ? "":"header-content-closed"}`}>
					<div className="open-button" onClick={() => setIsOpen((prev) => !prev)}>
						<img src={isOpen ? caretDown : caretRight} />
					</div>

					<div className="title-box">
						<div className="title">ATESTADO MÉDICO</div>
						{showOriginalDepartment ? (
							<div className="title-department">segurança do trabalho</div>
						) : null}
					</div>

					{/* <div>
						<div className="redirect">
							<img src={arrowFromSquare} />
						</div>
					</div> */}
				</div>

				<div className={`content ${isOpen ? "":"content-closed"}`}>
					<InputText
						inputId="identification"
						inputName="identification"
						inputValue={"Registro"}
						inputOnChange={()=>null}
						inputPlaceholder="IDENTIFICAÇÃO"
						inputShowInfo={true}
						inputWidth={"256px"}
						inputErrorMsg={""}
						inputOnBlur={() => "string"}
						disabled={false}
						readOnly={false}
						disableErrorMsg={false}
					/>
					<InputText
						inputId="name"
						inputName="name"
						inputValue={"name"}
						inputOnChange={()=>null}
						inputPlaceholder="Nome completo"
						inputShowInfo={true}
						inputWidth={""}
						inputErrorMsg={""}
						inputOnBlur={() => "string"}
						disabled={false}
						readOnly={false}
						disableErrorMsg={false}
					/>
					<InputDate
					    id="birth_day"
						name="birth_day"
						// value=""
						onChange={()=>null}
						placeholder="DATA DE NASCIMENTO"
						showInfo={true}
						width="128px;"
						errorMsg={""}
						onBlur={() => null}
						disabled={false}
					/>
					<InputSelect 
						selectId="status"
						selectName="status"
						selectValue="status"
						selectOnChange={()=> null}
						selectPlaceholder="STATUS"
						selectShowInfo="status"
						selectErrorMsg="status"
						disabled={false}
						width="160px"
						options={[{name: "ativo", value:"ativo"}]}			
					/>
				</div>
			</div>
		</PageContainer>
	);
}
