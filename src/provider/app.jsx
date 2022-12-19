import React, { createContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [appLoading, setAppLoading] = useState(true);

	const [userToken, setUserToken] = useState();
	const [userData, setUserData] = useState();
	const [userDataVersion, setUserDataVersion] = useState();

	const newLoginData = (data) => {
		setUserToken(data.token);
		setUserData(data.userData);
		setUserDataVersion(data.dataVersion);
		localStorage.setItem("strao-token", data.token);
		localStorage.setItem("strao-user-data", JSON.stringify(data.userData));
		localStorage.setItem("strao-user-data-version", data.dataVersion);
	};

	const removeLoginData = () => {
		localStorage.removeItem("strao-token");
		localStorage.removeItem("strao-user-data");
		localStorage.removeItem("strao-user-data-version");
		setUserData("");
		setUserToken("");
		setUserDataVersion("");
	};

	const checkUserDataVersion = (version) => {
		if (userDataVersion === version) {
			return true;
		}
		return false;
	};

	const verifyTokenPresence = () => {
		const verifyUserToken = localStorage.getItem("strao-token");
		const verifyUserData = localStorage.getItem("strao-user-data");
		const verifyUserDataVersion = localStorage.getItem(
			"strao-user-data-version"
		);

		if (!verifyUserToken || !verifyUserData || !verifyUserDataVersion) {
			return false;
		}

		return true;
	};

	useEffect(() => {
		let storedToken = localStorage.getItem("strao-token");
		let storedDataVersion = localStorage.getItem("strao-user-data-version");
		let storedData;

		try {
			storedData = JSON.parse(localStorage.getItem("strao-user-data"));
		} catch (err) {
			storedData = null;
		}

		if (!storedToken || !storedData || !storedDataVersion) {
			localStorage.removeItem("strao-token");
			localStorage.removeItem("strao-user-data-version");
			localStorage.removeItem("strao-user-data");
			setUserToken("");
			setUserDataVersion("");
			setUserData();
			<Link to="/" />;
		}

		if (storedToken && storedData && storedDataVersion) {
			setUserToken(storedToken);
			setUserDataVersion(storedDataVersion);
			setUserData(storedData);
		}
	}, []);

	return (
		<GlobalContext.Provider
			value={{
				newLoginData,
                removeLoginData,
                checkUserDataVersion,
                verifyTokenPresence,
				userToken,
				userData,
				userDataVersion
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
