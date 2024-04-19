import styles from './Post.module.css';

export function Post(props) {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/yuriipoquini.png" />
                    <div className={styles.authorInfo}>
                        <strong>Yuri Poquini</strong>
                        <span>Dev</span>
                    </div>
                </div>

                <time dateTime="2024-04-18 08:15:32">
                    Publicado a 1h 
                </time>
            </header>

            <div className={styles.content}>
                <p>Marcelo, pro cristiano, olha iii iiii</p>
                <p>Olha o cristiano, buffon desesperado</p>
                <p>Rolou pra trás lucas vasquez</p>
                <strong>BUFOOONNNNN</strong>
                <p>CRISTIANO DE BICICLETA MINHA NOSSA</p>
            </div>
        </article>
    )
}


