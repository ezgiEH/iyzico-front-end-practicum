import {useState} from 'react';

function Footer({todos, setTodos, setHide}){
    const unCompeleted = todos.filter((check) => check.checked === false)

    const [select, setSelect] = useState("selected", "","") 

    const clearCompleted = (e) => {
        setTodos(
            todos.filter((todo) => todo.checked === false)
        )
    }

    const selectedButton = (e) => {
        switch(e.target.id){
            case "All":
                setSelect(["selected", "",""])
                setHide("All")
                break;
            case "Active":
                setSelect(["","selected", ""])
                setHide("Active")
                break;
            case "Completed":
                setSelect(["","","selected"])
                setHide("Completed")
                break;
            default:
        }
    }

    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{unCompeleted.length}</strong> 
                {unCompeleted.length > 1 ? "items left" : "item left"}
            </span>
            <ul className="filters">
                <li>
                    <a id="All" className={select[0]} onClick={selectedButton}>All</a>
                </li>
                <li>
                    <a id="Active" className={select[1]} onClick={selectedButton}>Active</a>
                </li>
                <li>
                    <a id="Completed" className={select[2]} onClick={selectedButton}>Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>  
        </footer>
    )
}
export default Footer;