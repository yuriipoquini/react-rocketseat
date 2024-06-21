import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState([]);

    const [newComments, setNewComments] = useState('');

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewComments(event.target.value);
    }

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newComments]);
        setNewComments('');
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        });

        setComments(commentsWithoutDeletedOne);
    }

    function handleInvalidNewComment(){
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const dateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {dateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link'){
                        return <p key={line.content}><a href='#'>Veja Agora</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um Comentário'
                    value={newComments}
                    onChange={handleNewCommentChange}
                    onInvalid={handleInvalidNewComment}
                    required
                />

                <button type='submit' disabled={newComments.length === 0}>
                    Comentar
                </button>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
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


