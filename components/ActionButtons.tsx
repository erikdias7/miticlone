import React from 'react'

const ActionButtons: React.FC = () => {
  return (
    <div className="space-y-[19px] gap-1 flex flex-col">
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        COPIAR SEU LINK
      </button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        VER MINHA REDE
      </button>
    </div>
  )
}

export default ActionButtons
