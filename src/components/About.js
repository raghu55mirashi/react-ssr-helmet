import React from 'react'
import { Helmet } from 'react-helmet'

export const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
                <meta name="description" content="About!" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>
            This is about page
        </div>
    )
}
