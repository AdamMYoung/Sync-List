import Button from '../../button';

const Navigation = () => {
    return (
        <nav className="px-4 py-2 w-full flex items-center border-b-2">
            <p className="font-bold text-2xl">AYDev | Sync</p>
            <Button variant="primary" className="ml-auto">
                New Page
            </Button>
        </nav>
    );
};

export default Navigation;
