import { FormEvent, useState } from "react";
import { Title } from "../../containers/ToDos/styles";
import { Input } from "../Input/styles";
import { SaveButton } from "../Task/styles";
import { StyledForm, Options, Option } from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as enums from "../../utils/enums/Task";
import { cadastrar } from "../../store/reducers/tasks";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitTask = (event: FormEvent) => {

    event.preventDefault()
    
    dispatch(cadastrar({
      priority, status: enums.Status.PENDENTE, description, title
    }))
    navigate('/')
  }

  return (
    <>
      <Title as="h2">Nova tarefa</Title>
      <StyledForm onSubmit={submitTask}>
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Título"
          type="text"
        />
        <Input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        ></Input>
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="priority"
                type="radio"
                onChange={(event) => setPriority(event.target.value as enums.Priority)}
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
              />
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>

        <SaveButton type="submit">Cadastrar</SaveButton>
      </StyledForm>
    </>
  );
};
