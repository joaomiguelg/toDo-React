import { useEffect, useState } from 'react'
import * as S from './styles'

import { useDispatch } from 'react-redux'

import { remove, edit} from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'


type Props = TaskClass

const Task = ({title, priority, status, description: originalDescription, id}: Props) => {     
    
    const dispatch = useDispatch()

    const [isEditing, setIsEditing] = useState(false)

    const [description, setDescription] = useState('')

    useEffect(() => {
        if(originalDescription.length > 0) {
            setDescription(originalDescription)
        }
        
    }, [originalDescription])

    const cancelEdit = () => {

        setIsEditing(false) 
        setDescription(originalDescription)

    }


    return (
        <S.Card>
        <S.Title>{title}</S.Title>
        <S.Tag param='priority' priority={priority}>{priority}</S.Tag>
        <S.Tag param='status' status={status}>{status}</S.Tag>
        <S.Description value={description} onChange={event => setDescription(event.target.value)} disabled={!isEditing}/>
        <S.ActionBar>
            {isEditing ? (
                <>

                <S.SaveButton onClick={() => {
                    dispatch(edit({
                        description,
                        id,
                        priority,
                        title,
                        status
                    }))
                    setIsEditing(false)
                }}>Salvar</S.SaveButton>
                <S.CancelButton onClick={cancelEdit}>Cancelar</S.CancelButton>
                </>
            ): (
                <>
                <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
                <S.CancelButton onClick={() => dispatch(remove(id))}>Remover</S.CancelButton>
                </>
            )}
            
        </S.ActionBar>
    </S.Card>
    )
}

export default Task