import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
 
import style from './App.module.css'
import './global.css'



export function App(){
  return(
    <div> 
      <Header />
     
     <div className={style.wrapper}> 
      <Sidebar />
      <main>
      <Post 
      author='Alison Silva'
      content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam ipsa, impedit nostrum sed fugit facere et placeat laborum nisi animi dicta alias inventore. Ipsam perferendis fugit nesciunt numquam blanditiis est.
      '
      />
      <Post
      author='Gleyciely Soares'
      content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis soluta, esse, consequuntur, quaerat quam minus ea quo voluptatibus sint totam iste mollitia distinctio laborum nesciunt accusamus blanditiis earum possimus. Libero?'      
      />
      </main>
     </div>


    </div>
  ) 
}
