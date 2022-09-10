import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
 
import style from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author:{
      avatarUrl:'https://github.com/marcosvnunes.png',
      name:'Marcos Vnuens',
      role:'Dev Front-end',
    },
    content: [
       {type:'paragraph', content: 'Fala galeraa 👋'},
       {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
       {type: 'link', content: '👉 jane.design/doctorcare'},       
    ],
    publishedAt: new Date('2022-09-08 21:00:00'),

  },

  {
    id: 2,
    author:{
      avatarUrl:'https://scontent.fjpa13-1.fna.fbcdn.net/v/t1.6435-9/43253679_2140024812982055_7628499565720633344_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHRGL0M_Ldhvu8639moTq8bbkEeAATSt4huQR4ABNK3iK16r1EVa8r58QsvYo47rnATYB2LO52-Txzak6RCFciI&_nc_ohc=M3dd7bJ_UAQAX99vPj4&tn=BTtxS0424wnajESM&_nc_ht=scontent.fjpa13-1.fna&oh=00_AT_rUtW-fvALOVvZHONEumbpV5x2cS3hse1pDZ3wBBBkPg&oe=6340D3DE',
      name:'Gleyciely Soares',
      role:'Ux | UI Disigner',
    },
    content: [
       {type:'paragraph', content: 'Fala galeraa 👋'},
       {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
       {type: 'link', content: '👉 jane.design/doctorcare'},       
    ],
    publishedAt: new Date('2022-09-09 20:00:00'),

  }
]


export function App(){
  return(
    <div> 
      <Header />
     
     <div className={style.wrapper}> 
      <Sidebar />
      <main>

      {posts.map(post => {
        return (
        <Post
        key={post.id}
         author={post.author}
         content={post.content}
         publishedAt={post.publishedAt}         
        />)
      })}

      </main>
     </div>


    </div>
  ) 
}
