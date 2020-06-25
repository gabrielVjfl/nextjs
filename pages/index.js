import React from 'react'

import 'isomorphic-fetch'

import Link from 'next/Link'


const Simple = ({repos}) => {

    Simple.getInitialProps = async () => {

        const response = await fetch("https://api.github.com/orgs/rocketseat/repos")
     
        const repos = await response.json()
     
        console.log(repos)
     
        return {repos}
     }

if(repos.length === 0) {
    return <h1>Carregando...</h1>
}


    return (
        <div>
            <Link href="/blog">
                <a>Blog</a>
            </Link>

{
    
    repos.map(repo => 
        <h2 key={repo.id}>{repo.name}</h2>
    ) 
}





</div>
    )
}


export default Simple

