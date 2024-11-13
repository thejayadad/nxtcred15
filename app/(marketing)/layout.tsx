import Footer from "../_components/footer/footer";
import Header from "../_components/header/header";



const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
     <main className="flex-1 flex flex-col items-center justify-center">
     {children}
     </main>
     <Footer />
    </div>
  )
}

export default layout