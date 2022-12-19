import React from "react";

import * as S from "./styles";

export const DriverLicense = ({ formik }) => {
	const handleOpen = () => {};

	const handleNotLicence = (e) => {
		console.log(e);
	};

	return (
		<S.Container onClick={() => handleOpen}>
			<S.Title open={true}>
				<S.TitleBox>
					HABILITAÇÃO |{" "}
					<S.NotLicenceInput
						id="driver_license.without_license"
						type="checkbox"
						value={formik.values.driver_license.without_license}
						onChange={formik.handleChange}
					/>
					<S.NotLicence>Não habilitado</S.NotLicence>
				</S.TitleBox>
			</S.Title>
			<S.DataContainer>
				<S.CNHRegisterBox>
					<S.CNHRegisterText>REGISTRO CNH</S.CNHRegisterText>
					<S.CNHRegisterInput
						id="driver_license.register"
						value={formik.values.driver_license.register}
						onChange={formik.handleChange}
					/>
				</S.CNHRegisterBox>
				<S.CNHRegisterBox>
					<S.CNHRegisterText>VALIDADE</S.CNHRegisterText>
					<S.CNHRegisterInput
						id="driver_license.expire_date"
						value={formik.values.driver_license.expire_date}
						onChange={formik.handleChange}
					/>
				</S.CNHRegisterBox>
				<S.CNHRegisterBox>
					<S.CNHRegisterText>PONTOS</S.CNHRegisterText>
					<S.CNHRegisterInput
						id="driver_license.points"
						value={formik.values.driver_license.points}
						onChange={formik.handleChange}
					/>
				</S.CNHRegisterBox>
				<S.CNHRegisterBox>
					<S.CNHRegisterText>FOTO CNH</S.CNHRegisterText>
					<S.CNHRegisterPhoto
						type="driver_license.photo_driver_license"
						name="driver_license.photo_driver_license"
						id="driver_license.photo_driver_license"
						value={formik.values.driver_license.photo_driver_license}
						onChange={formik.handleChange}
					/>
				</S.CNHRegisterBox>
				<S.CategoryBox>
					<S.CategoryText>CATEGORIA</S.CategoryText>
					<S.Box>
						A
						<S.CategoryCheck
							type="checkbox"
							id="driver_license.category.A"
							value={formik.values.driver_license.category.A}
							onChange={formik.handleChange}
						/>
					</S.Box>
					<S.Box>
						B
						<S.CategoryCheck
							type="checkbox"
							id="driver_license.category.B"
							value={formik.values.driver_license.category.B}
							onChange={formik.handleChange}
						/>
					</S.Box>
					<S.Box>
						C
						<S.CategoryCheck
							type="checkbox"
							id="driver_license.category.C"
							value={formik.values.driver_license.category.C}
							onChange={formik.handleChange}
						/>
					</S.Box>
					<S.Box>
						D
						<S.CategoryCheck
							type="checkbox"
							id="driver_license.category.D"
							value={formik.values.driver_license.category.D}
							onChange={formik.handleChange}
						/>
					</S.Box>
					<S.Box>
						E
						<S.CategoryCheck
							type="checkbox"
							id="driver_license.category.E"
							value={formik.values.driver_license.category.E}
							onChange={formik.handleChange}
						/>
					</S.Box>
					<S.Box>
						AB
						<S.CategoryCheck
							type="checkbox"
							id="driver_license.category.AB"
							value={formik.values.driver_license.category.AB}
							onChange={formik.handleChange}
						/>
					</S.Box>
					<S.Box>
						AD
						<S.CategoryCheck
							type="checkbox"
							id="driver_license.category.AD"
							value={formik.values.driver_license.category.AD}
							onChange={formik.handleChange}
						/>
					</S.Box>
					<S.Box>
						AE
						<S.CategoryCheck
							type="checkbox"
							id="driver_license.category.AE"
							value={formik.values.driver_license.category.AE}
							onChange={formik.handleChange}
						/>
					</S.Box>
					<S.Box>
						OUTRO
						<S.CategoryOther
							type="text"
							id="driver_license.category.other"
							value={formik.values.driver_license.category.other}
							onChange={formik.handleChange}
						/>
					</S.Box>
				</S.CategoryBox>
			</S.DataContainer>
		</S.Container>
	);
};
