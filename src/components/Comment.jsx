import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(){
    return(
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/yuriipoquini.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Yuri Poquini</strong>
                            <time title='14 de Junho às 08:12h' datetime="2024-06-14 08:12:22"></time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Está de pé o torcedor em Turim</p>
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