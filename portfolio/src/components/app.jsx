function App(props){
    return(
        <h2>Hello {props.name}</h2>
    )
}

function SubmitButton(){
    return (
        <form action="">
            <label htmlFor="username">UserName</label>
            <input type="text"/>
            <label htmlFor="password">Password</label>
            <input type="password"/>
        </form>
    )}
function Footer(props){
    return(
        <footer>
            <div>
                <p>Hello {props.name} {props.cast}</p>
                <p>How are you?</p>
                <p>I am fine</p>
            </div>
        </footer>
    )
}
export  {SubmitButton,Footer}
export default App

