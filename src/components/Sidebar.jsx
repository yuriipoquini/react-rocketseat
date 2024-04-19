
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1635710444991-f0f913392129?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVhbCUyMG1hZHJpZHxlbnwwfHwwfHx8MA%3D%3D" 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/yuriipoquini.png" />

                <strong>Yurao Da Zn</strong>
                <span>Dev</span>
            </div>

            <footer>
                <a href="#"> Editar Perfil</a>
            </footer>
        </aside>
    )
}