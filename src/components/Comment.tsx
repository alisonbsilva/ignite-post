import { ThumbsUp,Trash } from 'phosphor-react'
import style from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content: string;
    onDeleteComment:(comment: string) => void;
}



export function Comment({ content, onDeleteComment }: CommentProps){

    const [likeCount, setLikeCount] = useState(0)


    function handleLikeComment(){
        setLikeCount((state) =>{
            return state + 1
        } ) 
    }

    function handleDeleteComment(){
       onDeleteComment(content)
    }

    
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

                <button onClick={handleDeleteComment}title='Deletar comentário'> 
                <Trash size={24}/>
                </button>

               </header>

               <p>{content}</p>
              </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
            
        </div>
    )
}