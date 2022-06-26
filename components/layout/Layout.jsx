import {Header, Footer} from '../../sections'

export default function Layout({Children}) {
    return(
        <>
            <Header />
                {Children}
            <Footer />
        </>
    )
}