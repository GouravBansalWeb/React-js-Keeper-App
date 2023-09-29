import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(Props) {
    const [isExpanded,setExpanded] = useState(false);
    const [note, setNote] = useState({
        title:" ",
        content:" "
    });

function handleChange(event){
    const {name, value} = event.target;
        setNote(PrevNote => {
    return{
        ...PrevNote,
        [name]:value
    }
    });
    }

function submitNote(event) {
    Props.onAdd(note);
    setNote({
        title: " ",
        content:" "
    });
    event.preventDefault();
}

function expand() {
    setExpanded(true);
}

return(
    <div className="createarea"><form>
    
    {isExpanded && (
    <input name = "title" 
    onChange={handleChange} 
    value={note.title} 
    placeholder="Title" />
    )}
    <textarea placeholder="Take a note..." onClick={expand} name="content" onChange={handleChange} value={note.content} rows = {isExpanded ? 3 : 1} />
    <Zoom in={isExpanded}>
    <Fab onClick={submitNote}><AddIcon /></Fab>    
    </Zoom>
    
    </form></div>
)
}
export default CreateArea;