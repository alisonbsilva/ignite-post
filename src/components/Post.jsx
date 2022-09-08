import style from './Post.module.css'
import { Comment } from './Comment'

export function Post(){
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img className={style.avatar} src="https://github.com/alisonbsilva.png"/>
                    <div className={style.authorInfo}>
                        <strong>Alison Silva</strong>
                        <span>Web Develeop</span>
                    </div>
                </div>

                <time title='07 de Setembro às 11:11h' dateTime='11:11:32 07-09-2022 '>Publicado a 1h</time>
            </header>
            <div className={style.content}>                
               <p> Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href='$'>jane.design/doctorcare</a></p>
                <p><a href='$'>#novoprojeto</a> <a href='$'>#nlw</a> <a href='$'>#rocketseat</a></p>               
            </div>
            <form className={style.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                placeholder='Deixe um comentario'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}