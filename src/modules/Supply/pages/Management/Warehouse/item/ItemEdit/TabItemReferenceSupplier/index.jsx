import { useEffect, useState } from "react";
import { api } from "services/api.js";

import * as Yup from "yup";

import { ButtonIcon } from "component/Buttons/ButtonIcon/index.jsx";
import { ItemSupplierModal } from "../ItemReferenceSupplierModal/index.jsx";

import {
	BlockInfoContainer,
	BlockInfoTitle,
	BlockInfoData
} from "modules/Supply/components/BoxInfo/styles";

import * as S from "./styles.jsx";

const validateDataSchema = Yup.object().shape({
	name: Yup.string()
		.required("O nome não pode ser vazio.")
		.min(4, "Minímo de caracteres é 4")
		.max(50, "Maximo de caracteres é 50"),
	status: Yup.mixed().oneOf(["ATIVO", "INATIVO"], "Status inválido")
});

export function ManagementReferenceSupplier({
	infoData,
	setDataInfo,
	isSaving,
	setIsSaving,
	tabSelected,
	tabChanged,
	setTabChanged,
	setNotification,
	dataInfoChanged,
	setDataInfoChanged
}) {
	const [selectedReference, setSelectedReference] = useState(null);
	const [newSupplierModal, setNewSupplierModal] = useState(false);

	const handleDataInfoValidation = async () => {
		try {
			await validateDataSchema.validate(dataInfoChanged, {
				abortEarly: false
			});
		} catch (error) {
			const errors = error.inner.reduce((prev, element) => {
				if (!prev[element.path]) {
					prev[element.path] = element.message;
				}
				return prev;
			}, {});

			setDataValidatorError(errors);
		}
	};

	useEffect(() => {}, []);

	return (
		<>
			<BlockInfoContainer>
				{newSupplierModal && (
					<ItemSupplierModal
						itemId={infoData._id}
						showModal={setNewSupplierModal}
						setNotification={setNotification}
					/>
				)}
				<S.ButtonContainer>
					<S.ButtonBox>
						<ButtonIcon
							value="add"
							typeStyle="add"
							onClick={() => setNewSupplierModal(true)}
							disable={""}
						/>
						<S.ActionText>Adicionar referência</S.ActionText>
					</S.ButtonBox>
				</S.ButtonContainer>
			</BlockInfoContainer>

			<BlockInfoContainer>
				<BlockInfoTitle>Referência do fornecedor</BlockInfoTitle>

				{infoData && infoData.supply_references.length ? (
					infoData.supply_references.map((data) => (
						<S.ReferenceContainer
							key={data.supplier_id}
							onClick={() => setSelectedReference(data.supplier_id)}
							selected={data.supplier_id === selectedReference}
						>
							<S.ReferenceImg src={data.supplier_item_imagem} />
							<S.ReferenceBox>
								<S.ReferenceText>
									Nome do item:
									<S.ReferenceNameText>{data.supplier_item_name}</S.ReferenceNameText>
								</S.ReferenceText>
								<S.ReferenceText>
									Nome do fornecedor:
									<S.ReferenceNameText>{data.supplier_name}</S.ReferenceNameText>
								</S.ReferenceText>
								<S.ReferenceText>
									Referência:
									<S.ReferenceNameText>{data.supplier_item_reference}</S.ReferenceNameText>
								</S.ReferenceText>
								<S.ReferenceText>
									Descrição:
									<S.ReferenceNameText>{data.supplier_item_description}</S.ReferenceNameText>
								</S.ReferenceText>
							</S.ReferenceBox>
						</S.ReferenceContainer>
					))
				) : (
					<>SEM REFERENCIAS</>
				)}

				<BlockInfoData>
					<S.ButtonContainer width={"100%"}>
						{selectedReference && (
							<>
								<ButtonIcon value="remove" typeStyle="remove" onClick={() => null} disable={""} />
								<S.ActionText>Excluir</S.ActionText>
							</>
						)}
					</S.ButtonContainer>
				</BlockInfoData>
			</BlockInfoContainer>
		</>
	);
}
