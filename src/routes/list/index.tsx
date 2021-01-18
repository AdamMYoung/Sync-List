import { useParams } from 'react-router-dom';

const List = () => {
    let { id } = useParams<{ id: string }>();

    return <div>List {id}</div>;
};

export default List;
