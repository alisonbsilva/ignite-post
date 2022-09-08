import style from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <img 
            className={style.cover}
            src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />

            <div 
            className={style.profile}
            >
            <img className={style.avatar} src="http://github.com/alisonbsilva.png"  />
                <strong> Alison Silva</strong>
                <span> Web Develop</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                    </a>
            </footer>
        </aside>
    )
}