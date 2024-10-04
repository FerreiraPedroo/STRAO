

export async function handleChangeInput(event, setFormInput, action, type) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const inputType = event.target.type;

    switch (type) {
        case "text":
            setFormInput((prev) => {
                return {
                    ...prev,
                    [inputName]: inputValue
                }
            })
            break;

        case "files":
            if (action == "add") {
                setFormInput((prev) => {
                    return {
                        ...prev,
                        [inputName]: inputValue
                    }
                })
            } else if(action == "remove")
            
            break;
    }
}