import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import style from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export function Post({ author, publishedAt, content }: PostProps){
    const [comments, setComments] = useState(['Olá Mundo!'])

    const [ newCommentText, setNewCommentText] = useState('')


  const publishedDataFormatted = format(publishedAt,"d 'de' LLLL 'às' HH:mm 'h'",{locale: ptBR})

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix:true
  })

  function handleCreateNewComment(event:FormEvent){
    event.preventDefault()
    setComments([...comments, newCommentText])  
    setNewCommentText('')  
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement> ) {
    event.target.setCustomValidity('')
   setNewCommentText(event.target.value)
  } 

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  function deleteComment( commentToDelete:String){
    const commentsWithoutDeletedOne = comments.filter(comment => {
        return comment !== commentToDelete 
    })
    
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder
                     src={author.avatarUrl}
                     />
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDataFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={style.content}>                
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link'){
                        return <p key={line.content}> <a href="">{line.content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={ handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentario'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                  <button
                    disabled={isNewCommentEmpty} 
                    type='submit'
                    >
                        Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                {comments.map( comment =>{
                    return (
                        <Comment 
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                        />
                        )
                })}
            </div>
        </article>
    )
}