import { useDispatch, useSelector } from "react-redux"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../view/NoteView"
import { NothingSelectedView } from "../view/NothingSelectedView"
import { startNewNote } from "../../store/journal/thunks"
import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {

    const dispatch = useDispatch();
    const { isSaving, active } = useSelector(state => state.journal);

    const onClickNewNote = () => {
        dispatch( startNewNote() );
    }

    return (
        <JournalLayout>

            {
                (!!active)
                ? <NoteView />
                : <NothingSelectedView />
            }

            <IconButton
                onClick={ onClickNewNote }
                disabled={ isSaving }
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover':{ backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>
    )
}