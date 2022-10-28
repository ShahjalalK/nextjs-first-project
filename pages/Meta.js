import Head from "next/head"


const Meta = ({title, description, keywords}) => {
    return(
        <>
        
        <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
        
        </>
    )
}


Meta.defaultProps = {
    title: 'Application Test',
    description : 'Hellow Wrold',
    keywords: 'application defout props test and animation'
}

export default Meta