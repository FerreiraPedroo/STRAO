import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { providerUpdateAppData } from "services/store/features/data/appData.js";

import { api } from "services/api.js";

import * as S from "./styles.jsx";

export function SelectBranchModal({ closeModal, branchList }) {
	const useDispath = useDispatch();
	const navigate = useNavigate();

	const [loading, setLoading] = useState("");

	async function changeBranchSelected(branchSelected) {
		try {
			if (!loading) {
				setLoading("loading");
				const response = await api(`/change-branch`, {
					method: "POST",
					body: JSON.stringify({ branchSelected })
				});

				if (response.codStatus) {
					useDispath(providerUpdateAppData(response.data));
					navigate("/home");
				} else {
					throw "ERRO";
				}
			}
		} catch (error) {
			setLoading("");
			console.log(error);
		}
	}

	return (
		<S.Container>
			<S.Modal>
				<S.ModalHeader>
					<S.ModalButtonClose onClick={() => closeModal(false)}>X</S.ModalButtonClose>
					<S.ModalMessageTitle>SELECIONE A EMPRESA</S.ModalMessageTitle>
				</S.ModalHeader>

				<S.ModalContent>
					{branchList &&
						branchList.map((branch) => {
							return (
								<S.BranchCard
									key={branch.ID}
									loading={loading}
									onClick={() => changeBranchSelected(branch.ID)}
								>
									<S.BranchName>{branch.name}</S.BranchName>
									<S.BranchState>{branch.state}</S.BranchState>
									<S.BranchCity>{branch.city}</S.BranchCity>
									<S.BranchDistrict>{branch.district}</S.BranchDistrict>
									<S.BranchAddress>{branch.address}</S.BranchAddress>
								</S.BranchCard>
							);
						})}
				</S.ModalContent>

				<S.ModalFooter>{/* <S.ModalMessageTitle>BUTTON</S.ModalMessageTitle> */}</S.ModalFooter>
			</S.Modal>
		</S.Container>
	);
}
