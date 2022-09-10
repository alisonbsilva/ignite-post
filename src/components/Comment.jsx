import { ThumbsUp,Trash } from 'phosphor-react'
import style from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(){
    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} src='https://github.com/alisonbsilva.png'/>
            <div className={style.commentBox}>

              <div className={style.commentContent}>
                
               <header>                    
                <div className={style.authorAndTime}>
                <strong>Alison Silva</strong>
                <time title='07 de Setembro às 11:11h' dateTime='11:11:32 07-09-2022 '>Cerca de 1h atrás</time>
                </div>

                <button title='Deletar comentário'> 
                <Trash size={24}/>
                </button>
               </header>

               <p>Muito bom Alison, Parabéns👍👏👏</p>
              </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
            
        </div>
    )
}