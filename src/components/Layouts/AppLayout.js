import { useAuth } from '@/hooks/auth'
import Navigation from '@/components/Layouts/Navigation'
import Footer from './Footer'
const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <div className="">
            <div
                className="rounded-lg shadow bg-base-200 flex flex-col min-h-screen "
                data-theme="cupcake">
                <Navigation user={user}>
                    <main className='flex-grow'>{children}</main>
                    <Footer/>
                </Navigation>
            </div>
        </div>
    )
}

export default AppLayout
