import React, { useState, useEffect, useContext } from "react";
import { api } from "../../../services/api";
import { useFormik } from "formik";
import { GlobalContext } from "../../../provider/app";

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
	const { userData, handleContext } = useContext(GlobalContext);
	const [contractSelected, setContractSelected] = useState();

	const formik = useFormik({
		initialValues: {
			fullName: "",
			identification: "",
			photo: "",
			birthDay: "",
			job: "",
			department: "",
			admission: "",
			demission: "",
			contract_id: "",
			centerCost_id: "",
			driverLicense: { ...formikAditionalValues.driverLicense },
			uniform: { ...formikAditionalValues.uniform },
			address: { ...formikAditionalValues.address }
		},
		validate: (values) => {
			const errors = {};

			if (!values.full_name) {
				errors.full_name = "O nome não pode ficar em branco.";
			}
			if (!values.job) {
				errors.job = "Selecione um campo.";
			}
			if (!values.department) {
				errors.department = "Selecione um campo.";
			}
			if (!values.contract_id) {
				errors.contract_id = "Selecione um campo.";
			}
			if (!values.center_cost_id) {
				errors.center_cost_id = "Selecione um campo.";
			}

			return errors;
		},
		onSubmit: async (values) => {
			await registerEmployee(values);
			return;
		}
	});

	useEffect(() => {
		console.log(formik.values);
	}, []);
	const registerEmployee = async (values) => {
		try {
			const { data } = await api.post("/rh/employee/register", values);
			if (data.codStatus === 200) {
			}
		} catch (err) {
			return false;
		}
	};
console.log(userData);
	return (
		<S.Container>
			<PageTitle
				title="Registro de funcionário"
				subTitle="registre um novo funcionário em um contrato."
			/>
			{userData && userData.departments ? (
				<>
					{/* <S.PersonalInformationContainer>
						<S.PhotoBox>
							<S.EmployeePhoto />
							<S.PhotoButtons>
								<Button typeStyle="add" />
								<Button typeStyle="remove" disable={true} />
								<Button typeStyle="edit"/>
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
									{formik.touched.contract_id && formik.errors.contract_id}
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
									{formik.touched.contract_id && formik.errors.contract_id}
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
										formik.handleChange(e);
										setContractSelected(e.target.value);
									}}
								>
									<option value="">Selecione o contrato</option>
									{userData.hasOwnProperty("contracts") &&
										userData.contracts.map((contract) => (
											<option key={contract.title} value={contract.id}>
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
									selectId="centerCost_id"
									selectName="centerCost_id"
									selectValue={formik.values.centerCost_id}
									selectPlaceholder="Centro de custo"
									selectShowInfo={true}
									selectOnChange={(e) => {
										formik.handleChange(e);
										setContractSelected(e.target.value);
									}}
								>
									<option value="">Selecione o centro de custo</option>
									{userData.hasOwnProperty("centersCost") &&
										userData.centersCost.map((centerCost) => (
											<option key={centerCost.title} value={centerCost.id}>
												{centerCost.title}
											</option>
										))}
								</InputSelect>
								<S.ErrorMessage>
									{formik.touched.centerCost_id && formik.errors.centerCost_id}
								</S.ErrorMessage>
							</S.InputBox>

							<S.InputBox>
								<InputSelect
									selectId="job"
									selectName="job"
									selectValue={formik.values.job}
									selectPlaceholder="Cargo"
									selectShowInfo={true}
									selectOnChange={(e) => {
										formik.handleChange(e);
										setContractSelected(e.target.value);
									}}
								>
									<option value="">Selecione o cargo</option>
									{userData.hasOwnProperty("jobs") &&
										userData.jobs.map((job) => (
											<option key={job.title} value={job.id}>
												{job.title}
											</option>
										))}
								</InputSelect>
								<S.ErrorMessage>
									{formik.touched.job && formik.errors.job}
								</S.ErrorMessage>
							</S.InputBox>

							<S.InputBox>
								<InputSelect
									selectId="department"
									selectName="department"
									selectValue={formik.values.department}
									selectPlaceholder="Departamento"
									selectShowInfo={true}
									selectOnChange={(e) => {
										formik.handleChange(e);
										setContractSelected(e.target.value);
									}}
								>
									<option value="">Selecione o cargo</option>
							{userData.hasOwnProperty("departments") &&
								userData.departments.map((department) => (
									<option key={department.title} value={department.id}>
										{department.title}
									</option>
								))}

									<option value="">Selecione o departamento</option>
									<option value="Administração">Administração</option>
									<option value="Departamento Pessoal">
										Departamento Pessoal
									</option>
									<option value="Financeiro">Financeiro</option>
									<option value="Operacional">Operacional</option>
									<option value="Recursos Humanos">Recursos Humanos</option>
									<option value="Suprimentos">Suprimentos</option>
								</InputSelect>
								<S.ErrorMessage>
									{formik.touched.department && formik.errors.department}
								</S.ErrorMessage>
							</S.InputBox>
						</S.InputContainer>
					</S.PersonalInformationContainer> */}

					<S.InformationContainer>
						<DriverLicense formik={formik} />
						{/* <Occupation formik={formik} /> */}
						{/* <Uniform formik={formik} /> */}
						<Address formik={formik} />
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
