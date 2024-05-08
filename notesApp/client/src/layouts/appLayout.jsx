import Header from "../components/header/header";

const AppLayout = ({children}) => {
    return (
        <div style={{minHeight: '100vh'}}>
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default AppLayout;