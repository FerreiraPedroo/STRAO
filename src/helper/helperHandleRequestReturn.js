/**
 * 
 * @param {*} requestReturnData HTTP request return
 * @returns ()=> { setData, notification, navigate }
 */
export function helperHandleRequestReturn(requestReturnData) {
	// console.log(requestReturnData)
	const request = requestReturnData

	return ({ setData, notification, navigate }) => {
		if (request.data.codStatus == 200) {
			setData(request.data.data);
		} else if (request.data.codStatus == 422) {
            notification({
				title: "AÇÃO NÃO PERMITIDA",
				msg: "Houve algum erro, tente novamente.",
				cb: navigate("/login")
			});
		} else if (request.data.codStatus == 401) {
			notification({
				title: "NÃO AUTORIZADO",
				msg: "Por favor efetue o login novamente, redirecionando.",
				cb: navigate("/login")
			});
			setTimeout(() => navigate("/login"), 3000);
		}
	};
}
