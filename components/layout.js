import Head from "next/head";

export default function Layout({ title, children }){
    return (
    <div className="layout">
        <Head>
            <title>{title}</title>
        </Head>
        {children}
    </div>
    )
}