import { Post } from './components/Post';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/yuriipoquini.png',
      name: 'Yuri Poquini',
      role: 'Developer',       
    },
    content: [
      {type: 'paragraph', content: 'Marcelo, pro cristiano, olha iii iiii'},
      {type: 'paragraph', content: 'Olha o cristiano, buffon desesperado'},
      {type: 'paragraph', content: 'Rolou pra trás lucas vasquez'},
      {type: 'paragraph', content: 'BUFOOONNNNN'},
      {type: 'paragraph', content: 'CRISTIANO DE BICICLETA MINHA NOSSA'},        
      {type: 'link', content: 'https://www.youtube.com/shorts/Vy_KO6lF0bw'},
    ],
    publishedAt: new Date('2024-06-15 11:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/DiegoBezerra89.png',
      name: 'Dig Bezerra',
      role: 'Front End Dev',      
    },
    content: [
      {type: 'paragraph', content: 'Se ninguem faz nada'},
      {type: 'paragraph', content: 'Se não tem coletivo'},
      {type: 'paragraph', content: 'Se não tem trabalho tatico'},
      {type: 'paragraph', content: 'EU RESOLVO. EU SOU O SENHOR CHAMPIONS'},       
      {type: 'link', content: 'https://www.youtube.com/watch?v=qnaGs3qlnAs'},
    ],
    publishedAt: new Date('2024-06-12 21:00:00'),
  },
];

export function App() {
  
  return (
    <div>
      <Header/>
    
      <div className={styles.wrapper}>
       <Sidebar/>

        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
  </div>
  )
}

