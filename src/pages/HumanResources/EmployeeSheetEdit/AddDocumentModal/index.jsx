import { useState } from "react";
import * as yup from "yup";

import { InputSelect } from "../../../../component/Input/Select/index";
import { InputText } from "../../../../component/Input/Text/index";
import { Button } from "../../../../component/Button";

// import closeModalButon from "../../../../assets/icons/close-modal-red-36x36.svg";

import * as S from "./styles";
import { InputFile } from "../../../../component/Input/File";
import { api } from "../../../../services/api";

export function DocumentModal({ onClick }) {
	const [options] = useState([
		{ value: "", title: "" },
		{ value: "Atestado médico", title: "Atestado médico" },
		{ value: "Declaração", title: "Declaração" },
		{ value: "Folha complementar", title: "Folha complementar" },
		{ value: "Folha de Ponto", title: "Folha de Ponto" },
		{
			value: "Justificativa de hora extra",
			title: "Justificativa de hora extra"
		}
	]);

	const [documentData, setDocumentData] = useState({});
	const [errorDocumentData, setErrorDocumentData] = useState({});

	function changeSelectType(inputName, event) {
		event.preventDefault();

		let newDocumentData = { ...documentData };

		if (inputName === "file") {
			newDocumentData[inputName] = event.target.files[0];
		} else {
			newDocumentData[inputName] = event.target.value;
		}

		setDocumentData(newDocumentData);
	}

	function documentTypeInputs() {
		const days = (
			<S.ModalInputBox>
				<InputText
					key="missingWorkDay"
					inputId="missingWorkDay"
					inputName="missingWorkDay"
					inputType="number"
					inputValue={documentData.missingWorkDay}
					inputErrorMsg={errorDocumentData.missingWorkDay}
					inputOnBlur={validationValues}
					inputOnChange={(e) => changeSelectType("missingWorkDay", e)}
					inputPlaceholder={"Dias de falta"}
					inputShowInfo={true}
					inputWidth={"128px"}
					disabled={false}
					readOnly={false}
				/>
				<InputText
					key="missingWorkDayJustify"
					inputId="missingWorkDayJustify"
					inputName="missingWorkDayJustify"
					inputType="number"
					inputValue={documentData.missingWorkDayJustify}
					inputErrorMsg={errorDocumentData.missingWorkDayJustify}
					inputOnBlur={validationValues}
					inputOnChange={(e) => changeSelectType("missingWorkDayJustify", e)}
					inputPlaceholder={"Dias de falta justificados"}
					inputShowInfo={true}
					inputWidth={"128px"}
					disabled={false}
					readOnly={false}
				/>
			</S.ModalInputBox>
		);
		const hours = (
			<S.ModalInputBox>
				<InputText
					key="extraHours50"
					inputId="extraHours50"
					inputName="extraHours50"
					inputType="time"
					inputValue={documentData.extraHours50}
					inputErrorMsg={errorDocumentData.extraHours50}
					inputOnBlur={validationValues}
					inputOnChange={(e) => changeSelectType("extraHours50", e)}
					inputPlaceholder={"Horas extra 50%"}
					inputShowInfo={true}
					inputWidth={"128px"}
					disabled={false}
					readOnly={false}
				/>
				<InputText
					key="extraHours75"
					inputId="extraHours75"
					inputName="extraHours75"
					inputType="time"
					inputValue={documentData.extraHours75}
					inputErrorMsg={errorDocumentData.extraHours75}
					inputOnBlur={validationValues}
					inputOnChange={(e) => changeSelectType("extraHours75", e)}
					inputPlaceholder={"Horas extra 75%"}
					inputShowInfo={true}
					inputWidth={"128px"}
					disabled={false}
					readOnly={false}
				/>
				<InputText
					key="extraHours100"
					inputId="extraHours100"
					inputName="extraHours100"
					inputType="time"
					inputValue={documentData.extraHours100}
					inputErrorMsg={errorDocumentData.extraHours100}
					inputOnBlur={validationValues}
					inputOnChange={(e) => changeSelectType("extraHours100", e)}
					inputPlaceholder={"Horas extra 100%"}
					inputShowInfo={true}
					inputWidth={"128px"}
					disabled={false}
					readOnly={false}
				/>
			</S.ModalInputBox>
		);
		const discountHours = (
			<S.ModalInputBox>
				<InputText
					key="discountHours"
					inputId="discountHours"
					inputName="discountHours"
					inputType="time"
					inputValue={documentData.discountHours}
					inputErrorMsg={errorDocumentData.discountHours}
					inputOnBlur={validationValues}
					inputOnChange={(e) => changeSelectType("discountHours", e)}
					inputPlaceholder={"Horas de atraso"}
					inputShowInfo={true}
					inputWidth={"128px"}
					disabled={false}
					readOnly={false}
				/>
			</S.ModalInputBox>
		);

		let merge;
		switch (documentData.type) {
			case "Atestado médico":
				merge = <>{days}</>;
				break;
			case "Declaração":
				merge = <>{days}</>;
				break;
			case "Folha complementar":
				merge = (
					<>
						{days}
						{hours}
						{discountHours}
					</>
				);
				break;
			case "Folha de Ponto":
				merge = (
					<>
						{days}
						{hours}
						{discountHours}
					</>
				);
				break;
			case "Justificativa de hora extra":
				merge = <>{hours}</>;
				break;
			default:
				break;
		}

		return merge;
	}

	async function validationValues(input) {
		if (input) {
			input.preventDefault();
		}
		console.log(input.target.files[0])

		const objectValidator = {
			"Atestado médico": {
				missingWorkDay: yup
					.number("Deve ser numérico.")
					.min(0, "Deve ser positivo.")
					.integer(),
				missingWorkDayJustify: yup
					.number("Deve ser numérico.")
					.min(0, "Deve ser positivo.")
					.integer(),
				file: yup
					.mixed()
					.required("Por favor, selecione um arquivo")
					.test("is-file", "O valor deve ser um arquivo", (value) => {
						return value instanceof File;
					})
			},
			Declaração: {
				missingWorkDay: yup
					.number("Deve ser numérico.")
					.min(0, "Deve ser positivo.")
					.integer(),
				missingWorkDayJustify: yup
					.number("Deve ser numérico.")
					.min(0, "Deve ser positivo.")
					.integer(),
				file: yup
					.mixed()
					.required("Por favor, selecione um arquivo")
					.test("file", "O valor deve ser um arquivo", (value) => {
						console.log({ value })
						return value instanceof File;
					})
			},
			"Folha complementar": {
				missingWorkDay: yup
					.number("Deve ser numérico.")
					.min(0, "Deve ser positivo.")
					.integer(),
				missingWorkDayJustify: yup
					.number("Deve ser numérico.")
					.min(0, "Deve ser positivo.")
					.integer(),
				extraHours50: yup.string().test((value, ctx) => {
					if (value.length !== 5) {
						return ctx.createError({ message: "Formato invalido." });
					}
					return true;
				}),
				extraHours75: yup.string().test((value, ctx) => {
					if (value.length !== 5) {
						return ctx.createError({ message: "Formato invalido." });
					}
					return true;
				}),
				extraHours100: yup.string().test((value, ctx) => {
					if (value.length !== 5) {
						return ctx.createError({ message: "Formato invalido." });
					}
					return true;
				}),
				discountHours: yup.string().test((value, ctx) => {
					if (value.length !== 5) {
						return ctx.createError({ message: "Formato invalido." });
					}
					return true;
				}),
				file: yup
					.mixed()
					.required("Por favor, selecione um arquivo")
					.test("is-file", "O valor deve ser um arquivo", (value) => {
						return value instanceof File;
					})
			},
			"Folha de Ponto": {
				missingWorkDay: yup
					.number("Deve ser numérico.")
					.min(0, "Deve ser positivo.")
					.integer(),
				missingWorkDayJustify: yup
					.number("Deve ser numérico.")
					.min(0, "Deve ser positivo.")
					.integer(),
				extraHours50: yup.string().test((value, ctx) => {
					if (value.length !== 5) {
						return ctx.createError({ message: "Formato invalido." });
					}
					return true;
				}),
				extraHours75: yup.string().test((value, ctx) => {
					if (value.length !== 5) {
						return ctx.createError({ message: "Formato invalido." });
					}
					return true;
				}),
				extraHours100: yup.string().test((value, ctx) => {
					if (value.length !== 5) {
						return ctx.createError({ message: "Formato invalido." });
					}
					return true;
				}),
				discountHours: yup.string().test((value, ctx) => {
					if (value.length !== 5) {
						return ctx.createError({ message: "Formato invalido." });
					}
					return true;
				}),
				file: yup
					.mixed()
					.required("Por favor, selecione um arquivo")
					.test("is-file", "O valor deve ser um arquivo", (value) => {
						return value instanceof File;
					})
			},
			"Justificativa de hora extra": {
				extraHours50: yup.string().test((value, ctx) => {
					if (value.length !== 5) {
						return ctx.createError({ message: "Formato invalido." });
					}
					return true;
				}),
				extraHours75: yup.string().test((value, ctx) => {
					if (value.length !== 5) {
						return ctx.createError({ message: "Formato invalido." });
					}
					return true;
				}),
				extraHours100: yup.string().test((value, ctx) => {
					if (value.length !== 5) {
						return ctx.createError({ message: "Formato invalido." });
					}
					return true;
				}),
				file: yup
					.mixed()
					.test("is-file", "O valor deve ser um arquivo", (value) => {
						console.log(value);
						return value instanceof File;
					})
			}
		};

		let schemaValidationSelect = yup
			.object()
			.shape(objectValidator[documentData.type]);

		const validationReturn = await schemaValidationSelect
			.validate(documentData)
			.then((valid) => {
				const newSetErrorDocumentData = { ...errorDocumentData };
				delete newSetErrorDocumentData[input.target.name];
				setErrorDocumentData(newSetErrorDocumentData);
				return valid;
			})
			.catch((erro) => {
				console.log(erro);
				const newSetErrorDocumentData = { ...errorDocumentData };
				newSetErrorDocumentData[erro.path] = erro.errors;
				setErrorDocumentData(newSetErrorDocumentData);
				return false;
			});

		return validationReturn;
	}

	async function sendDocument() {
		const validation = await validationValues();

		if (validation) {
			let formData = new FormData();

			for (const [key, value] of Object.entries(validation)) {
				formData.set(key, value);
			}

			const { data } = api.post("/rh/employee/sheets/send-document", formData);
		}
	}
	console.log(documentData);
	return (
		<S.Container>
			<S.Modal>
				<S.ModalClose src={closeModalButon} onClick={onClick}></S.ModalClose>
				<S.ModalTitle>ADICIONAR DOCUMENTOS</S.ModalTitle>

				<S.ModalCenterBox>
					<S.ModalTextInfo>
						Tipos de arquivos: PDF, JPG, PNG | Tamanho máximo: 10MB
					</S.ModalTextInfo>

					<S.TypeFileBox>
						<InputSelect
							selectId={"type"}
							selectName={"type"}
							selectValue={documentData.type}
							selectOnChange={(e) => changeSelectType("type", e)}
							selectPlaceholder={"Tipo de documento"}
							selectShowInfo={true}
							disabled={false}
							width={"212px"}
							options={options}
						/>
						<InputFile
							inputId={"file"}
							inputName={"file"}
							inputValue={documentData.file}
							inputErrorMsg={errorDocumentData.file}
							// inputOnBlur={validationValues}
							inputOnChange={(e) => {
								changeSelectType("file", e);
								validationValues(e);
							}}
							inputPlaceholder={"Arquivo do documento"}
							inputShowInfo={true}
							inputWidth={"100%"}
							disabled={false}
						/>
					</S.TypeFileBox>

					{documentTypeInputs()}

					{documentData.hasOwnProperty("type") && documentData.type != "" ? (
						<Button
							typeStyle="normal"
							value="Salvar"
							onClick={() => sendDocument()}
						/>
					) : null}
				</S.ModalCenterBox>
			</S.Modal>
		</S.Container>
	);
}
