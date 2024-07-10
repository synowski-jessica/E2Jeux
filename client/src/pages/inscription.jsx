import { useState} from "react"

const Inscription=()=>{
    const [pseudo, setPseudo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError]= useState('null')

    const handleSubmit= async(e)=>{
        
        e.preventDefault();
        const formData={pseudo,email,password};
        console.log(formData)
        await fetch('http://localhost:3001/api/user',{
            method:'POST',
            headers:{'Content-Type': 'application/json', 'mode':'no-cors'},
            body: JSON.stringify(formData),})
            .then (res=>{
            return res.json()
            })
            .then(res=>{
            setError(res.error)
             })
        ;}    

      
    const [checked,setChecked]=useState(true)
    const toggleCheck=()=>{
        setChecked(!checked)
    }
    return (
        <>
        <h1>inscription</h1>
        <div>
            <p>Merci de bien renseigner tous les champs de saisie.</p>
            <h2>INFORMATIONS PERSONNELLES</h2>
            <form action="/App.js" onSubmit={handleSubmit}>
                <label>Pseudo:<input type="text" value={pseudo} onChange={(e)=>setPseudo(e.target.value)}/></label><br></br>
                <label>Mail:<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></label><br></br>
                <label>Mot de passe:<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/></label><br></br>
                <input type="checkbox" checked={checked} onChange={toggleCheck}/>
                <label for="fcgu">Je déclare avoir lu et accepté les conditions générales d'utilisation du site</label><br></br>
                <button disabled={!checked}>Envoyer</button>
            </form>
            <div>{error}</div>
        </div>
        </>
    )
}

export default Inscription