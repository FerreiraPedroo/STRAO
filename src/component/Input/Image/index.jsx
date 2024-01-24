import React, { useState } from "react";
import * as S from "./styles";

export const InputFile = ({
	id,
	name,
	value = null,
	onChange,
	placeholder,
	showInfo = false,
	width = "320px",
	errorMsg,
	onBlur = () => "",
	disabled,
	readOnly
}) => {
	const [files, setFiles] = useState([]);

	function blur(e) {
		const newBlobImg = new Blob([e.target.files[0]]);

		// const imgUrl = URL.createObjectURL(newImg);

		setFiles((prev) => {
			const newImg = [...prev];

			newImg.push(newBlobImg);

			return newImg;
		});

		onChange({ target: { value: files , name: name} });
	}

	console.log({ files });
	return (
		<S.Container width={width}>
			<S.TitleText disabled={disabled}>
				{((value && showInfo) || showInfo) && placeholder}
			</S.TitleText>

			<S.ContainerImg width={width}>
				<S.InputImg
					id={id}
					width={width}
					type="file"
					name={name}
					// value={value}
					accept="image/*"
					onChange={blur}
					onBlur={onBlur}
					placeholder={!showInfo ? placeholder : ""}
					disabled={disabled}
					readOnly={readOnly}
					userSelect={false}
				/>
				<S.ErrorMsg>{errorMsg}</S.ErrorMsg>

				<S.FilesContainer>
					{files.map((file, index) => (
						<S.FileLoadedImgBox key={index}>
							<S.FileLoadedImg src={file} />
							<S.DeleteFile />
						</S.FileLoadedImgBox>
					))}
				</S.FilesContainer>
			</S.ContainerImg>
		</S.Container>
	);
};
