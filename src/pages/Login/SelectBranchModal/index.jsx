import { useEffect, useState } from "react";
import * as S from "./styles.jsx";

import { api } from "services/api.js";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function SelectBranchModal({ branchList }) {
	const useDispath = useDispatch();
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);

	async function changeBranchSelected(branchSelected) {
		try {
			if (!loading) {
				setLoading(true);
				const response = await api.post(`/change-branch`, { branchSelected });

				if (response.data.codStatus === 201) {
					useDispath(providerUpdateAppData(response.data));
					navigate("/home")
				} else {
					throw "ERRO";
				}
			}
		} catch (error) {
			setLoading(false);
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
