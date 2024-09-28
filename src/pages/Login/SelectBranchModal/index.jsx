import { useState } from "react";

import { useDispatch } from "react-redux";
import { providerUpdateAppData } from "services/store/features/data/appData.js";

import { api } from "services/api.js";

import * as S from "./styles.jsx";

export function SelectBranchModal({ branchList, goHome }) {
	const useDispath = useDispatch();

	const [loading, setLoading] = useState("");

	async function changeBranchSelected(branchSelected) {
		try {
			if (!loading) {
				setLoading("loading");
				const response = await api.post(`/change-branch`, { branchSelected });
				if (response.status === 201) {
					useDispath(providerUpdateAppData(response.data));
					goHome();
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
			<S.Modal theme={""}>
				<S.ModalMessageTitle>{"SELECIONE A EMPRESA"}</S.ModalMessageTitle>
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
			</S.Modal>
		</S.Container>
	);
}
