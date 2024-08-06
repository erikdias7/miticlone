import React from 'react'

interface UserInfoProps {
  name: string
  code: string
}

const UserInfo: React.FC<UserInfoProps> = ({ name, code }) => {
  return (
    <div className="mb-4">
      <p>Nome: {name}</p>
      <p>
        Código: {code}{' '}
        <button className="ml-2 bg-gray-200 p-1 rounded">Copiar</button>
      </p>
    </div>
  )
}

export default UserInfo
