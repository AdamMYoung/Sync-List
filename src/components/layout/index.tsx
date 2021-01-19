import Footer from './footer';
import Navigation from './navigation';

const Layout: React.FC = (props) => {
    const { children } = props;

    return (
        <>
            <Navigation />
            <main className="container">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
