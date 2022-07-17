import React, {useState} from 'react'

function MemberList({members, onDelete}) {
  return (
    <ul>
        {members.map((e,i) => {
            return <li key={i}>
                <h3>{e}</h3>
                <button onClick={()=>onDelete(i)}>Hapus orang ini</button>
            </li>
        })}
    </ul>
  )
}

function Sample(){
    const [member, setMember] = useState(["Andra", "Budi", "Chandra"])

    const deleteMember = (index)=>{
        setMember(prev => prev.splice(index, 1))
        console.log(`member dengan index ${index} telah dihapus`)
    }

    return (
        <MemberList members={member} onDelete={deleteMember}/>
    )
}

export default Sample;