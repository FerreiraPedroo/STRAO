import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { api } from "../../../services/api.js";
import { errorHandle } from "../../../services/ErrorHandle/index.jsx";
import { Notification } from "../../../component/Notification";

import { GlobalUseContext } from "../../../provider/app";

import { Button } from "../../../component/Button";
import { Input } from "../../../component/Input";

import * as S from "./styles.jsx";

export const AdminUserEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleContext, userTokenData } = useContext(GlobalUseContext);

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState();
  const [contracts, setContracts] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [departmentActions, setDepartmentActions] = useState([]);

  const [contractSelect, setContractSelect] = useState("");
  const [departmentSelect, setDepartmentSelect] = useState("");
  const [departmentActionSelect, setDepartmentActionSelect] = useState("");

  const [notificationModal, setNotificationModal] = useState({});

  const changeUpdate = async (_type, _action, _id) => {
    const dataOptions = {
      contract: {
        add: "allContracts",
        remove: "userContracts",
        addReverse: "userContracts",
        removeReverse: "allContracts",
        selectCategory: () => setContractSelect(""),
      },
      department: {
        add: "allDepartments",
        remove: "userDepartments",
        addReverse: "userDepartments",
        removeReverse: "allDepartments",
        selectCategory: () => setDepartmentSelect(""),
      },
      departmentActions: {
        add: "allDepartmentActions",
        remove: "userDepartmentActions",
        addReverse: "userDepartmentActions",
        removeReverse: "allDepartmentActions",
        selectCategory: () => setDepartmentActionSelect(""),
      },
    };

    try {
      const { data } = await api.put(
        "/admin/user/data/update",
        {
          data: {
            type: _type,
            action: _action,
            id: _id,
            email: userData.email,
          },
        },
        { headers: { "x-access-token": userTokenData } }
      );
      if (data.codStatus === 200) {
        setUserData((prev) => {
          const actual = { ...prev };
          const categoryData = actual[dataOptions[_type][_action]].find(
            (value) => value.id === _id
          );
          console.log(actual);

          if (categoryData) {
            actual[dataOptions[_type][_action]] = actual[
              dataOptions[_type][_action]
            ].filter((value) => value.id !== _id);

            actual[dataOptions[_type][_action + "Reverse"]].push(categoryData);
            dataOptions[_type].selectCategory();
          }

          return actual;
        });
      }
    } catch (error) {
      errorHandle(error.response.data, setNotificationModal, handleContext);
    }
  };

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data } = await api.get("admin/user/data", {
          params: { email: location.state.email },
          headers: { "x-access-token": userTokenData },
        });
        setUserData(data);
        setContracts(data.userContracts);
        setDepartments(data.userDepartments);
        setDepartmentActions(data.userDepartmentActions);
      } catch (error) {
        errorHandle(error.response.data, setNotificationModal, handleContext);
      }
      setLoading(false);
    };
    getUserInfo();
  }, []);

  return (
    <S.Container>
      {userData ? (
        <>
          <S.PageHeader>
            <Button typeStyle="back" value="<" onClick={() => navigate(-1)} />
            <S.PageTitleContainer>
              <S.PageTitle>{userData.name}</S.PageTitle>
              <S.PageSubTitle>
                STATUS:
                <S.SubTitleStatus status={userData.status}>
                  {userData.status === "active" ? "Ativo" : "Inativo"}
                </S.SubTitleStatus>
              </S.PageSubTitle>
            </S.PageTitleContainer>
          </S.PageHeader>
          <S.CenterContainer>
            <S.HeaderCenter>
              <S.HeaderTitle>Alterar dados do usuário</S.HeaderTitle>
              <S.RemoveButtonBox>
                <S.RemoveTitle>Remover usuário</S.RemoveTitle>
                <Button typeStyle="remove" />
              </S.RemoveButtonBox>
            </S.HeaderCenter>

            <S.PrincipalData>
              <Input
                title="Registro"
                value={userData.register}
                disabled={true}
                placeholder={"Registro"}
              />
              <Input
                title="Email"
                value={userData.email}
                disabled={true}
                placeholder={"Email"}
              />
              <Input
                title="Nome"
                value={userData.name}
                disabled={true}
                placeholder={"Nome"}
              />
              <Input
                title="Data de nascimento"
                value={userData.birthDate}
                disabled={true}
                placeholder={"Data de nascimento"}
              />
            </S.PrincipalData>

            <S.CategoryContainer>
              <S.LeftContainer>
                <S.HeaderTitle>Contratos</S.HeaderTitle>
                <S.InputBox>
                  <Input
                    type="select"
                    title="Contrato"
                    placeholder={"Contrato"}
                    value={contractSelect}
                    onChange={(e) => setContractSelect(e.target.value)}
                  >
                    {userData.allContracts.length && (
                      <option selected={!contractSelect} value={""}>
                        Selecione o contrato
                      </option>
                    )}
                    {userData.allContracts &&
                      userData.allContracts.map((contract) => (
                        <option
                          selected={contractSelect === contract.id}
                          value={contract.id}
                        >
                          {contract.name}
                        </option>
                      ))}
                  </Input>
                  <Button
                    typeStyle="correct"
                    disable={!contractSelect}
                    onClick={() =>
                      changeUpdate("contract", "add", contractSelect)
                    }
                  />
                </S.InputBox>
              </S.LeftContainer>
              <S.RightContainer>
                <S.HeaderTitle>Contratos associados</S.HeaderTitle>
                {userData.userContracts &&
                  userData.userContracts.map((contract) => (
                    <S.InputBox>
                      <Input
                        type="textonly"
                        disabled={true}
                        readOnly={true}
                        value={contract.name}
                      />
                      <Button
                        typeStyle="remove"
                        onClick={() =>
                          changeUpdate("contract", "remove", contract.id)
                        }
                      />
                    </S.InputBox>
                  ))}
              </S.RightContainer>
            </S.CategoryContainer>

            <S.DepartmentContainer>
              <S.SubDepartmentContainer>
                <S.LeftContainer>
                  <S.HeaderTitle>Departamentos</S.HeaderTitle>
                  <S.InputBox>
                    <Input
                      type="select"
                      title="Departamento"
                      placeholder={"Departamento"}
                      value={departmentSelect}
                      onChange={(e) => setDepartmentSelect(e.target.value)}
                    >
                      {userData.allDepartments.length && (
                        <option selected={!departmentSelect} value={""}>
                          Selecione o departamento
                        </option>
                      )}

                      {userData.allDepartments &&
                        userData.allDepartments.map((department) => (
                          <option
                            selected={departmentSelect === department.id}
                            value={department.id}
                          >
                            {department.name}
                          </option>
                        ))}
                    </Input>
                    <Button
                      typeStyle="correct"
                      disable={!departmentSelect}
                      onClick={() =>
                        changeUpdate("department", "add", departmentSelect)
                      }
                    />
                  </S.InputBox>
                </S.LeftContainer>
                <S.RightContainer>
                  <S.HeaderTitle>Departamentos associados</S.HeaderTitle>
                  {userData.userDepartments &&
                    userData.userDepartments.map((department) => (
                      <S.InputBox>
                        <Input
                          type="textonly"
                          disabled={true}
                          readOnly={true}
                          value={department.name}
                        />
                        <Button
                          typeStyle="remove"
                          onClick={() =>
                            changeUpdate("department", "remove", department.id)
                          }
                        />
                      </S.InputBox>
                    ))}
                </S.RightContainer>
              </S.SubDepartmentContainer>

              <S.SubDepartmentActionsContainer>
                <S.LeftContainer>
                  <S.HeaderTitle>Ações dos departamentos</S.HeaderTitle>
                  <S.InputBox>
                    <Input
                      type="select"
                      title="Ação do departamento"
                      placeholder={"Ação do departamento"}
                      value={departmentActionSelect}
                      onChange={(e) =>
                        setDepartmentActionSelect(e.target.value)
                      }
                    >
                      {userData.allDepartmentActions.length && (
                        <option selected={!departmentActionSelect} value={""}>
                          Selecione a ação
                        </option>
                      )}
                      {userData.allDepartmentActions &&
                        userData.userDepartments &&
                        userData.userDepartments.map((department) => (
                          <>
                            {userData.allDepartmentActions.map(
                              (action, index) => (
                                <>
                                  {index === 0 && (
                                    <optgroup label={department.name} />
                                  )}
                                  {action.department === department.id && (
                                    <option
                                      selected={
                                        departmentActionSelect === action.id
                                      }
                                      value={action.id}
                                    >
                                      {">> " + action.name}
                                    </option>
                                  )}
                                </>
                              )
                            )}
                          </>
                        ))}
                    </Input>
                    <Button
                      typeStyle="correct"
                      disable={!departmentActionSelect}
                      onClick={() =>
                        changeUpdate(
                          "departmentActions",
                          "add",
                          departmentActionSelect
                        )
                      }
                    />
                  </S.InputBox>
                </S.LeftContainer>
                <S.RightContainer>
                  <S.HeaderTitle>Ações associadas</S.HeaderTitle>
                  {userData.userDepartmentActions &&
                    userData.userDepartments &&
                    userData.userDepartments.map((department) => (
                      <>
                        {userData.userDepartmentActions.map((action, index) => (
                          <>
                            {index === 0 &&
                              userData.userDepartmentActions.find(
                                (av) => av.department === department.id
                              ) && (
                                <S.DepartmentAction>
                                  {department.name}
                                </S.DepartmentAction>
                              )}
                            {action.department === department.id && (
                              <S.InputBox>
                                <Input
                                  type="textonly"
                                  disabled={true}
                                  readOnly={true}
                                  value={action.name}
                                />
                                <Button
                                  typeStyle="remove"
                                  onClick={() =>
                                    changeUpdate(
                                      "departmentActions",
                                      "remove",
                                      action.id
                                    )
                                  }
                                />
                              </S.InputBox>
                            )}
                          </>
                        ))}
                      </>
                    ))}
                </S.RightContainer>
              </S.SubDepartmentActionsContainer>
            </S.DepartmentContainer>
          </S.CenterContainer>
        </>
      ) : (
        <>Carregando...</>
      )}
    </S.Container>
  );
};
