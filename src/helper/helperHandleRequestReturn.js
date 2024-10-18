/**
 *	TRATA OS STATUS DO RETORNO DA REQUISIÇÃO
 * @param {*} request - os dados de resposta da trquisição.
 * @param {*} notification - notifica o usuário de algum status.
 * @param {*} navigate - para ser redirecionado a outra página.
 * @param {*} setData - seta o estado onde os dados de resposta devem ser armazenados.
 * @param {*} transformData *optional - se não tiver os dados são passados diretamente para setData.
 * @returns
 */
export function helperRequestReturn(request, notification, setData, transformData = null) {
	if (request.data.codStatus == 200) {
		if (!transformData) {
			setData(request.data.data);
		} else {
			setData(transformData(request.data.data));
		}
	} else if (requestHTTPData.data.codStatus == 401) {
		clearData();
		notification({
			title: "NÃO AUTORIZADO",
			msg: "Por favor efetue o login novamente, redirecionando.",
			cb: navigate("/login")
		});
		setTimeout(() => navigate("/login"), 3000);
	} else if (this.requestHTTPData.data.codStatus == 422) {
		notification({ title: "Titulo", msg: "Mensagem" });
	} else {
		notification({ tile: "titulo", msg: "outra mensagem" });
	}

	return null;
}
