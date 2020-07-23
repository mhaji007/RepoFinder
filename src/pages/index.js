import React from 'react'

const index = () => {
    return (
        <div>
            
        </div>
    )
}

export const getServerSideProps = async() => {
    return {
        props: {
            value: 1
        }
    }
}

export default index;


