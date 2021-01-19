import { FirebaseDatabaseMutation, FirebaseDatabaseNode } from '@react-firebase/database';
import { useParams } from 'react-router-dom';

import Input from '../../components/input';
import { PageEntry } from '../../types';
import TextEditor from '../../views/text-editor';

const List = () => {
    let { id } = useParams<{ id: string }>();

    return (
        <div className="mt-4">
            <FirebaseDatabaseMutation type="update" path={`pages/${id}`}>
                {({ runMutation }) => (
                    <FirebaseDatabaseNode path={`pages/${id}`}>
                        {(data) => {
                            const { isLoading, value: firebaseValue } = data;
                            const value: Partial<PageEntry> = firebaseValue;

                            if (isLoading) return <p>Loading...</p>;

                            const handleChange = (data: Partial<PageEntry>) =>
                                runMutation({ ...value, ...data }).then(console.log);

                            return (
                                <>
                                    <Input
                                        className="w-full"
                                        placeholder={id}
                                        value={value?.name}
                                        onChange={(e) => handleChange({ name: e.target.value })}
                                    />
                                    <TextEditor
                                        value={value?.content}
                                        onChange={(content) => handleChange({ content })}
                                    />
                                </>
                            );
                        }}
                    </FirebaseDatabaseNode>
                )}
            </FirebaseDatabaseMutation>
        </div>
    );
};

export default List;
