import React, { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { useFormik } from "formik";

import { PageTitle } from "../../../component/PageTitle";
import { InputText } from "../../../component/Input/Text";
import { InputDate } from "../../../component/Input/Date";
import { InputSelect } from "../../../component/Input/Select";

import { DriverLicense } from "./DriverLicense";
import { Occupation } from "./Occupation";
import { Uniform } from "./Uniform";
import { Address } from "./Address";

import { Button } from "../../../component/Button";

import * as S from "./styles";
import { useSelector } from "react-redux";
import { NotificationModal } from "../../../component/NotificationModal";
import { useNavigate } from "react-router-dom";

const formikAditionalValues = {
	uniform: {
		head: {
			helmet: {
				name: "",
				storeCode: "",
				receiveData: "",
				observation: ""
			},
			mask: {
				name: "",
				storeCode: "",
				receiveData: "",
				observation: ""
			},
			glasses: {
				name: "",
				storeCode: "",
				receiveData: "",
				observation: ""
			},
			earProtector: {
				name: "",
				storeCode: "",
				receiveData: "",
				observation: ""
			},
			other: {
				name: "",
				storeCode: "",
				receiveData: "",
				observation: ""
			}
		},
		body: {
			apron: [
				{
					name: "",
					storeCode: "",
					receiveData: "",
					observation: ""
				}
			],
			shirt: [
				{
					name: "",
					storeCode: "",
					receiveData: "",
					observation: ""
				}
			],
			glasses: [
				{
					name: "",
					storeCode: "",
					receiveData: "",
					observation: ""
				}
			],
			earProtector: [
				{
					name: "",
					storeCode: "",
					receiveData: "",
					observation: ""
				}
			],
			other: [
				{
					name: "",
					storeCode: "",
					receiveData: "",
					observation: ""
				}
			]
		},
		waistLegs: {
			longPants: [
				{
					name: "",
					storeCode: "",
					receiveData: "",
					observation: ""
				}
			],
			shinGuard: [
				{
					name: "",
					storeCode: "",
					receiveData: "",
					observation: ""
				}
			],
			other: [
				{
					name: "",
					storeCode: "",
					receiveData: "",
					observation: ""
				}
			]
		},
		armsHands: {
			glove: [
				{
					name: "",
					storeCode: "",
					receiveData: "",
					observation: ""
				}
			],
			other: [
				{
					name: "",
					storeCode: "",
					receiveData: "",
					observation: ""
				}
			]
		},
		foot: {
			securityBoot: [
				{
					name: "",
					storeCode: "",
					receiveData: "",
					observation: ""
				}
			],
			other: [
				{
					name: "",
					storeCode: "",
					receiveData: "",
					observation: ""
				}
			]
		}
	},
	address: {
		type: "home",
		zipCode: "",
		address: "",
		number: "",
		reference: "",
		district: "",
		city: "",
		state: "",
		country: "",
		other: "",
		map: ""
	},
	driverLicense: {
		withoutLicense: "",
		register: "",
		expeditionDate: "",
		expireDate: "",
		photoDriverLicense: "",
		points: "",
		pointsHistory: [],
		category: []
	}
};

export const HumanResourcesEmployeeRegister = () => {
	const appData = useSelector((state) => state.appData.dataInfo);
	const [contractSelected, setContractSelected] = useState();
	const navigate = useNavigate();

	const [messageModal, setMessageModal] = useState();

	const formik = useFormik({
		initialValues: {
			fullName: "",
			identification: "",
			photo: "",
			birthDay: "",
			job_id: "",
			department_id: "",
			admission: "",
			demission: "",
			contract_id: "",
			centerCost_id: ""
			// driverLicense: { ...formikAditionalValues.driverLicense },
			// uniform: { ...formikAditionalValues.uniform },
			// address: { ...formikAditionalValues.address }
		},
		validate: (values) => {
			const errors = {};

			if (!values.fullName) {
				errors.fullName = "O nome não pode ficar em branco.";
			}
			if (!values.job_id) {
				errors.job_id = "Selecione um campo.";
			}
			if (!values.department_id) {
				errors.department_id = "Selecione um campo.";
			}
			if (!values.contract_id) {
				errors.contract_id = "Selecione um campo.";
			}
			if (!values.centerCost_id) {
				errors.centerCost_id = "Selecione um campo.";
			}

			return errors;
		},
		onSubmit: async (values, actions) => {
			const result = await registerEmployee(values);

			if (result) {
				setMessageModal({
					type: "full",
					theme: "success",
					messageTitle: "Sucesso",
					message: "Funcionário registrado com sucesso."
				});
				formik.resetForm();
			}

			return;
		}
	});

	useEffect(() => {}, []);

	const registerEmployee = async (values) => {
		try {
			const { data } = await api.post("/rh/employee/register", { ...values });
			return true;
		} catch (err) {
			let errMessage = "";
			let onClick = "";
			if (err.response.data) {
				errMessage = err.response.data.message;
				if (err.response.data.codStatus == 401) {
					onClick = () => navigate("/login");
				}
			} else {
				errMessage = err.message;
			}
			setMessageModal({
				type: "modal",
				theme: "fail",
				messageTitle: "Erro",
				message: `Não foi possivel registrar o funcionario. ${errMessage}`,
				onClick: onClick
			});
			return false;
		}
	};

	return (
		<S.Container>
			<PageTitle
				title="Registro de funcionário"
				subTitle="registre um novo funcionário em um contrato."
			/>
			{messageModal && (
				<NotificationModal
					type={messageModal.type}
					theme={messageModal.theme}
					message={messageModal.message}
					messageTitle={messageModal.messageTitle}
					onClick={() => setMessageModal(false)}
				/>
			)}
			{appData && appData.departments ? (
				<>
					<S.PersonalInformationContainer>
						<S.PhotoBox>
							<S.EmployeePhoto />
							<S.PhotoButtons>
								<Button typeStyle="add" disable={true} />
								<Button typeStyle="remove" disable={true} />
								<Button typeStyle="edit" disable={true} />
							</S.PhotoButtons>
						</S.PhotoBox>
						<S.InputContainer>
							<S.InputBox>
								<InputText
									inputId="fullName"
									inputName="fullName"
									inputValue={formik.values.fullName}
									inputPlaceholder="Nome completo"
									inputOnChange={formik.handleChange}
									inputShowInfo={true}
								/>
								<S.ErrorMessage>
									{formik.touched.fullName && formik.errors.fullName}
								</S.ErrorMessage>
							</S.InputBox>

							<S.InputBox>
								<InputText
									inputId="identification"
									inputName="identification"
									inputValue={formik.values.identification}
									inputPlaceholder="Nº de Identificação"
									inputOnChange={formik.handleChange}
									inputShowInfo={true}
								/>
								<S.ErrorMessage>
									{formik.touched.identification &&
										formik.errors.identification}
								</S.ErrorMessage>
							</S.InputBox>

							<S.InputBox>
								<InputDate
									inputId="birthDay"
									inputName="birthDay"
									inputValue={formik.values.birthDay}
									inputPlaceholder="Data de nascimento"
									inputOnChange={formik.handleChange}
									inputShowInfo={true}
								/>
								<S.ErrorMessage>
									{formik.touched.birthDay && formik.errors.birthDay}
								</S.ErrorMessage>
							</S.InputBox>

							<S.InputBox>
								<InputSelect
									selectId="department_id"
									selectName="department_id"
									selectValue={formik.values.department_id}
									selectPlaceholder="Departamento"
									selectShowInfo={true}
									selectOnChange={formik.handleChange}
								>
									<option value=""></option>
									{appData.hasOwnProperty("departments") &&
										Object.values(appData.departments).map((department) => (
											<option key={department.title} value={department._id}>
												{department.title}
											</option>
										))}
								</InputSelect>
								<S.ErrorMessage>
									{formik.touched.department_id && formik.errors.department_id}
								</S.ErrorMessage>
							</S.InputBox>

							<S.InputBox>
								<InputSelect
									selectId="contract_id"
									selectName="contract_id"
									selectValue={formik.values.contract_id}
									selectPlaceholder="Contrato"
									selectShowInfo={true}
									selectOnChange={(e) => {
										setContractSelected(
											document.getElementById(e.target.value)
												? document
														.getElementById(e.target.value)
														.attributes.getNamedItem("name").value
												: ""
										);
										formik.handleChange(e);
									}}
									disabled={!formik.values.department_id}
								>
									<option value=""></option>
									{appData.hasOwnProperty("contracts") &&
										Object.values(appData.contracts).map((contract) => (
											<option
												key={contract.title}
												id={contract._id}
												name={contract.title}
												value={contract._id}
											>
												{contract.title}
											</option>
										))}
								</InputSelect>
								<S.ErrorMessage>
									{formik.touched.contract_id && formik.errors.contract_id}
								</S.ErrorMessage>
							</S.InputBox>

							<S.InputBox>
								<InputSelect
									selectId="job_id"
									selectName="job_id"
									selectValue={formik.values.job_id}
									selectPlaceholder="Cargo"
									selectShowInfo={true}
									selectOnChange={formik.handleChange}
									disabled={!contractSelected}
								>
									<option value=""></option>
									{appData.contracts.hasOwnProperty(contractSelected) &&
										appData.contracts[contractSelected].jobs.map((job) => (
											<option key={job.title} value={job._id}>
												{job.title}
											</option>
										))}
								</InputSelect>
								<S.ErrorMessage>
									{formik.touched.job_id && formik.errors.job_id}
								</S.ErrorMessage>
							</S.InputBox>

							<S.InputBox>
								<InputSelect
									selectId="centerCost_id"
									selectName="centerCost_id"
									selectValue={formik.values.centerCost_id}
									selectPlaceholder="Centro de custo"
									selectShowInfo={true}
									selectOnChange={formik.handleChange}
									disabled={!formik.values.job_id}
								>
									<option value=""></option>
									{appData.contracts.hasOwnProperty(contractSelected) &&
										appData.contracts[contractSelected].centerCosts.map(
											(centerCost) => (
												<option key={centerCost.title} value={centerCost._id}>
													{centerCost.title}
												</option>
											)
										)}
								</InputSelect>
								<S.ErrorMessage>
									{formik.touched.centerCost_id && formik.errors.centerCost_id}
								</S.ErrorMessage>
							</S.InputBox>
						</S.InputContainer>
					</S.PersonalInformationContainer>

					<S.InformationContainer>
						{/* <DriverLicense formik={formik} /> */}
						{/* <Occupation formik={formik} />
						<Uniform formik={formik} /> */}
						{/* <Address formik={formik} /> */}
					</S.InformationContainer>

					<S.SubmitBox>
						<S.SubmitButton
							type="submit"
							disabled={formik.isSubmitting}
							onClick={(e) => formik.handleSubmit(e)}
						/>
					</S.SubmitBox>
				</>
			) : (
				"Não disponivel"
			)}
		</S.Container>
	);
};
