import { nanoid } from 'nanoid';
import Article from './Article';
import Video from './Video';
import WithHighlight from './WithHighlight';

function List(props) {
    const ItemVideo = WithHighlight(Video);
    const ItemArticle = WithHighlight(Article);

    return props.list.map((item) => {
        switch (item.type) {
            case 'video':
                return <ItemVideo {...item} key={nanoid()} />;
            case 'article':
                return <ItemArticle {...item} key={nanoid()} />;
        }
    });
}

export default List;
