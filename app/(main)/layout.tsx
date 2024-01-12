import Navbar from "./_components/navbar"
import Footer from "./_components/footer"

const MainLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full bg-slate-100" style = {{height:"100vh"}}>
            <Navbar/>
            <main className="pt-40 pb-20 bg-slate-100">
                {children}
            </main>
            <Footer/>
        </div>
    )
};

export default MainLayout