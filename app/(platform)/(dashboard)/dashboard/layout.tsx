const DashLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl">
            <div>
                {children}
            </div>
        </main>
    )
}

export default DashLayout
