const ClerkLayout = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full flex items-center justify-center" style = {{height:"100vh"}}>
            {children}
        </div>
    );
};

export default ClerkLayout