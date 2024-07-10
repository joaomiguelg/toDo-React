import styled from "styled-components";
import vars from "../../styles/vars";

import * as enums from '../../utils/enums/Task'

type TagProps = {
    priority?: enums.Priority,
    status?: enums.Status,
    param: 'status' | 'priority'
}

function returnBackgroundTag(props: TagProps): string {

    if(props.param === 'priority') {

        if (props.priority === enums.Priority.URGENTE) return vars.red
        if (props.priority === enums.Priority.IMPORTANTE) return vars.yellow2

    } else {

        if (props.status === enums.Status.PENDENTE) return vars.yellow
        if (props.status === enums.Status.CONCLUIDO) return vars.green

    }


    return '#ccc'

}


export const Card = styled.div`

background-color: #FCFCFC;
box-shadow: 0px 4px 4px 0px #00000040;
padding: 16px;
margin-bottom: 32px;
border-radius: 16px;
;

label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    
}

`

export const Title = styled.h3`

font-size: 18px;
font-weight: bold;
margin-left: 8px;


`

export const Tag = styled.span<TagProps>`

padding: 4px 8px;
color: #ffff;
font-weight: bold;
font-size: 10px;
background-color: ${(props) => returnBackgroundTag(props)};
border-radius: 8px;
margin-right: 16px;
display: inline-block;



`

export const Description = styled.textarea`

color: #8B8B8B;
font-size: 14px;
line-height: 24px;
font-family: 'Roboto Mono', monospace;
display: block;
width: 100%;
margin-bottom: 16px;
margin-top: 16px;
resize: none;
border: none;
background-color: transparent;

`

export const ActionBar = styled.div`

border-top: 1px solid rgba(0, 0, 0, 0.1);
padding-top: 16px;

`

export const Button = styled.button`

font-weight: bold;
font-size: 12px;
color: #ffff;
padding: 8px 12px;
border: none;
cursor: pointer;
background-color: #2f3640;
border-radius: 8px;
margin-right: 8px;

`

export const SaveButton = styled(Button)`

background-color: ${vars.green};

`

export const CancelButton = styled(Button)`

background-color: ${vars.red};

`