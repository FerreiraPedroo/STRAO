import React, { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { useFormik } from "formik";

import { PageTitle } from "../../../component/container/PageTitle";
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
import { NotificationModal } from "../../../component/Notification/full";
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
	const navigate = useNavigate();

	const [notification, setNotification] = useState();

	const appData = useSelector((state) => state.appData.dataInfo);

	const [contractSelected, setContractSelected] = useState();
	const [departmentsOptions] = useState(departmentList());
	const [contractOptions] = useState(contractList());
	const [jobOptions, setJobOptions] = useState();
	const [centerCostOptions, setCenterCostOptions] = useState();

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
				setNotification({
					type: "full",
					theme: "success",
					messageTitle: "Sucesso",
					message: `Funcionário registrado com sucesso.`,
					setNotification: setNotification,
					onClick: () => setNotification(""),
					buttonTitle: "Fechar"
				});
				formik.resetForm();
			}

			return;
		}
	});

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
			setNotification({
				type: "modal",
				theme: "fail",
				messageTitle: "Erro",
				message: `Não foi possivel registrar o funcionario. ${errMessage}.`,
				setNotification: setNotification,
				onClick: () => onClick ?? setNotification(""),
				buttonTitle: "Fechar"
			});
			return false;
		}
	};

	function departmentList() {
		const list = [];
		list.push({ value: "", title: "", type: "option" });
		appData.hasOwnProperty("departments") &&
			Object.values(appData.departments).map((department) => {
				list.push({
					value: department._id,
					title: department.title,
					type: "option"
				});
			});

		return list;
	}

	function contractList() {
		const list = [];
		list.push({ value: "", title: "", type: "option" });

		appData.hasOwnProperty("contracts") &&
			Object.values(appData.contracts).map((contract) =>
				list.push({
					value: contract._id,
					title: contract.title,
					type: "option"
				})
			);

		return list;
	}

	useEffect(() => {
		const list = [];
		list.push({ value: "", title: "", type: "option" });

		const contract = Object.values(appData.contracts).find((contract) => {
			return contract._id === contractSelected;
		});

		if (contract) {
			Object.values(contract.jobs).map((job) => {
				list.push({ value: job._id, title: job.title, type: "option" });
			});
		}
		setJobOptions(list);
	}, [contractSelected]);
	useEffect(() => {
		const list = [];
		list.push({ value: "", title: "", type: "option" });

		const contract = Object.values(appData.contracts).find((contract) => {
			return contract._id === contractSelected;
		});

		if (contract) {
			Object.values(contract.centersCost).map((centerCost) => {
				list.push({
					value: centerCost._id,
					title: centerCost.title,
					type: "option"
				});
			});
		}
		setCenterCostOptions(list);
	}, [jobOptions]);

	useEffect(() => {
		try {
			
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
			setNotification({
				type: "modal",
				theme: "fail",
				messageTitle: "Erro",
				message: `Não foi possivel carregar os dados para registro. ${errMessage}.`,
				setNotification: setNotification,
				onClick: () => onClick ?? setNotification(""),
				buttonTitle: "Fechar"
			});
			return false;
		}
	},[])

	return (
		<S.Container>
			<PageTitle
				title="Registro de funcionário"
				subTitle="registre um novo funcionário em um contrato."
			/>
			{notification && (
				<NotificationModal
					type={notification.type}
					theme={notification.theme}
					message={notification.message}
					messageTitle={notification.messageTitle}
					setNotification={notification.setNotification}
					buttonTitle={notification.buttonTitle}
					onClick={notification.onClick}
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
									options={departmentsOptions}
								/>
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
										setContractSelected(e.target.value);
										formik.handleChange(e);
									}}
									disabled={!formik.values.department_id}
									options={contractOptions}
								/>
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
									options={jobOptions}
								/>
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
									options={centerCostOptions}
								/>
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
