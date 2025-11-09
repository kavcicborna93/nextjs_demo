const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <p>About navbar</p>
            {children}
        </div>
    );
};

export default Layout;