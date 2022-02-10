import react from "react";
import Entry from "./Entry.jsx"
import emojipedia from "../components/Emojipedia.js"

//2. Create props for data
//3. Create mapping
function createEmoji(emojiTerm){
  return <Entry key={emojiTerm.id} emoji={emojiTerm.emoji} name={emojiTerm.name} description={emojiTerm.meaning} />
}
function App(){
  return(
    <div>
      <h1>Emojipedia</h1>
    
      <dl className="dictionary">
        {emojipedia.map(createEmoji)}
      </dl>
    </div>
  );
}

export default App;