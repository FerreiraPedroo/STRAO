import { useEffect, useState } from "react";
import { api } from "services/api.js";

import { ButtonIcon } from "component/ButtonIcon/index.jsx";

import { PageContainer } from "component/container/PageContainer/styles.jsx";

import { ItemSupplierModal } from "../ItemReferenceSupplierModal/index.jsx";

import * as S from "./styles.jsx";

export function ManagementReferenceSupplier({ itemId, infoData, setNotification }) {
	const [dataInfo, setDataInfo] = useState();

	const [selectedReference, setSelectedReference] = useState(null);
	const [newSupplierModal, setNewSupplierModal] = useState(false);

	useEffect(() => {
		setDataInfo(infoData);
	}, [infoData]);

	return (
		<PageContainer>
			{newSupplierModal && (
				<ItemSupplierModal
					itemId={itemId}
					showModal={setNewSupplierModal}
					setNotification={setNotification}
				/>
			)}
			<S.InnerContainer theme={"normal"}>
				<S.HeaderInner>
					<S.HeaderInnerTitle theme={"normal"}>Referencia de Fornecedores</S.HeaderInnerTitle>
				</S.HeaderInner>
				{dataInfo &&
					dataInfo.map((data) => (
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
					))}

				<S.UserDataContent>
					<S.ButtonContainer width={"100%"}>
						{
							<>
								<ButtonIcon
									value="add"
									typeStyle="add"
									onClick={() => setNewSupplierModal(true)}
									disable={''}
								/>
								<S.ActionText>Adicionar referência</S.ActionText>
							</>
						}

						{selectedReference && (
							<>
								<ButtonIcon
									value="remove"
									typeStyle="remove"
									onClick={() => null}
									disable={''}
								/>
								<S.ActionText>Excluir</S.ActionText>
							</>
						)}
					</S.ButtonContainer>
				</S.UserDataContent>
			</S.InnerContainer>
		</PageContainer>
	);
}
