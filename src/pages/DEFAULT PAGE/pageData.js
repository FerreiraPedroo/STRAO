/**
 * PAGE DATA
 * Esta variavel é para auxiliar as páginas a personalizar os componentes
 * como listas, actions e os demais
 * 
 * ---------------------------------------------------------------------------------
 * Componente: <(PageList)>
 * pageData.columns
 *      listData = a lista com os dados que serão exibidos 
 *	    columns = as colunas que serão exibidas na lista.
 *      setDataSelected = seta se algum dado na lista foi selecionado.
 *      dataSelected = qual dado foi selecionado.
 *      loading = depende do component pai se estiver carregando algum dado.
 *      theme = tema do component.
 * ---------------------------------------------------------------------------------
 * Componente: <(PageAction)> 
 * pageData.actions
 *      name = nome do botão da ação.
 *      typeStyle = o estilo do tipo do botão, não é tema.
 *      show = exibe o botão.
 *      action = uma call back para ser executada quando o botão for apertado, podendo receber paramentros.
 * ---------------------------------------------------------------------------------
 */
const [pageData] = useState({
    columns: [
        {
            title: "STATUS",
            htmlName: "status",
            size: 96,
            minSize: 96,
            maxSize: 96,
            align: "center"
        },
        {
            title: "CODE",
            htmlName: "code",
            minSize: 96,
            maxSize: 96,
            align: "center"
        },
        {
            title: "NOME",
            htmlName: "name",
            size: 256,
            minSize: 256,
            maxSize: "auto"
        },
        {
            title: "CATEGORIA",
            htmlName: "category",
            size: 256,
            minSize: 128,
            maxSize: 208
        }
    ],
    actions: [
        {
            name: "Novo Item",
            typeStyle: "add",
            show: true,
            action: () => navigate("/management/warehouse/item/new")
        },
        {
            name: "Edit Item",
            typeStyle: "edit",
            show: false,
            action: (materialData) =>
                navigate(`/management/warehouse/item/edit`, { state: materialData })
        }
    ]
});