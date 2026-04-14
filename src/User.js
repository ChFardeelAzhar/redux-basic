
import React from 'react'

// yahan hamne propts ko parameters ke andar phly initialize karna ha 
const User = (props) => {

    // aik veriable type vibe de rahay props ko data object bana rahay kah lo
    const {data} = props // yahan ham 'data' ki  jagah kuch or istmal ni kar sakay kyon ke ham props ko data me bhej rahay App.js me
    console.warn(props.data.name)

    return (
        <div>
            <h1>User Component</h1>
            <h4> {data.name}</h4>
              <h4> My age is : {data.age}</h4>
                <h4> I am a professional {data.title}</h4>
        </div>
    );

}

export default User ;