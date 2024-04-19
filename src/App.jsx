import { Post } from './components/Post';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  
  return (
    <div>
      <Header/>
    
      <div className={styles.wrapper}>
       <Sidebar/>

        <main>
          <Post 
            author="Yurao da ZN"
            content="Cristiano de bicicleta minha nossa"
          />

          <Post 
            author="Cleitin do Pneu"
            content="Aiaiai ti taquei no carro bicho"
          />

          <Post 
            author="Roberval"
            content="Me gusta mutcho"
          />
        </main>
      </div>
  </div>
  )
}

