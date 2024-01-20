import { useEffect, useState } from "react";
import { api } from "../../../../services/api.js";

import { Button } from "../../../../component/Button/index.jsx";

import * as S from "./styles.jsx";
import { ItemSupplierModal } from "../ItemSupplierModal/index.jsx";

export function ManagementItemEditSupplier({ itemId, infoData, loading }) {
	const [pageLoading, setPageLoading] = useState(loading);
	const [dataInfo, setDataInfo] = useState();

	const [selectedReference, setSelectedReference] = useState(null);
	const [newSupplierModal, setNewSupplierModal] = useState(false);

	useEffect(() => {
		setDataInfo(infoData);
	}, [infoData]);

	return (
		<S.Container>
			{newSupplierModal && (
				<ItemSupplierModal itemId={itemId} showModal={setNewSupplierModal} />
			)}
			<S.InnerContainer>
				<S.HeaderInner>
					<S.HeaderInnerTitle>Referencia de Fornecedores</S.HeaderInnerTitle>
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
									<S.ReferenceNameText>
										{data.supplier_item_name}
									</S.ReferenceNameText>
								</S.ReferenceText>
								<S.ReferenceText>
									Nome do fornecedor:
									<S.ReferenceNameText>
										{data.supplier_name}
									</S.ReferenceNameText>
								</S.ReferenceText>
								<S.ReferenceText>
									Referência:
									<S.ReferenceNameText>
										{data.supplier_item_reference}
									</S.ReferenceNameText>
								</S.ReferenceText>
								<S.ReferenceText>
									Descrição:
									<S.ReferenceNameText>
										{data.supplier_item_description}
									</S.ReferenceNameText>
								</S.ReferenceText>
							</S.ReferenceBox>
						</S.ReferenceContainer>
					))}

				<S.UserDataContent>
					<S.ButtonContainer width={"256px"}>
						{
							<>
								<Button
									value="add"
									typeStyle="add"
									onClick={() => setNewSupplierModal(true)}
									disable={pageLoading}
								/>
								<S.ActionText>Adicionar referência</S.ActionText>
							</>
						}

						{selectedReference && (
							<>
								<Button
									value="remove"
									typeStyle="remove"
									onClick={() => null}
									disable={pageLoading}
								/>
								<S.ActionText>Excluir</S.ActionText>
							</>
						)}
					</S.ButtonContainer>
				</S.UserDataContent>
			</S.InnerContainer>
		</S.Container>
	);
}
