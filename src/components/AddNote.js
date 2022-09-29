import { useState } from "react";

const AddNote = ({ handleAddNote  }) => {

    const [noteText, setNoteText] = useState('');

    // Fonction permettant de définir la limite des caractères
    const characterLimit = 200; // se référer à la ligne 29


    // Fonction récupérant la valeur écrire de la nouvelle note
    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) { // Si la limite de caractères a atteint zéro, les caractères ne prennent plus une valeur négative (- 10) etc
            setNoteText(event.target.value);
        }
        
    };

    // Fonction enregistrant la note
    const handleSaveClick = () => {
        if(noteText.trim().length > 0) { // Si le texte de la note est vide, la note ne sera pas enregistrée
            handleAddNote(noteText); 
            setNoteText(''); // Lorsque la note est ajoutée, la prochaine tâche à écrire se se reinitialise et redevient vierge
        }
    } 

    return (
        <div className="note new">
            <textarea rows="8" cols="10" placeholder="Type to add a note..." value={noteText}  onChange={handleChange}>
            </textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small> 
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;