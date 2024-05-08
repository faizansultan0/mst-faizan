import Header from "../components/header/header";

const AppLayout = ({children}) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default AppLayout;