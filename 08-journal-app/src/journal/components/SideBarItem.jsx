import { useMemo } from "react";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({ id, title = '', date, body, imageUrls = [] }) => {

    const newTitle = useMemo(() => {
        return title.length > 17 
            ? title.substring(0,17) + '...' 
            : title;
    }, [title]);

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(setActiveNote({id, title, date, body, imageUrls}));
    }


    return (
        <ListItem disablePadding>

            <ListItemButton onClick={ onClick }>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>

                <Grid container>
                    <ListItemText primary={ newTitle }/>
                    <ListItemText secondary={ body }/>
                </Grid>

            </ListItemButton>
        </ListItem>
    )
}
