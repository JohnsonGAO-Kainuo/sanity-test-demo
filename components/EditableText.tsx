'use client'

import { useState } from 'react'

interface EditableTextProps {
  initialValue: string
  documentId: string
  field: string
  className?: string
  placeholder?: string
}

export function EditableText({ 
  initialValue, 
  documentId, 
  field, 
  className = '',
  placeholder = '點擊編輯...'
}: EditableTextProps) {
  const [value, setValue] = useState(initialValue)
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async () => {
    if (value === initialValue) {
      setIsEditing(false)
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/sanity/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          documentId,
          field,
          value,
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        alert('✅ 內容已同步到 Sanity CMS！')
        setIsEditing(false)
      } else {
        alert('❌ 更新失敗: ' + result.error)
        setValue(initialValue) // 恢復原值
      }
    } catch (error) {
      alert('❌ 網絡錯誤，請重試')
      setValue(initialValue) // 恢復原值
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    setValue(initialValue)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`${className} border-2 border-blue-500 bg-blue-50 rounded px-2 py-1`}
          placeholder={placeholder}
          autoFocus
          disabled={isLoading}
        />
        <div className="flex gap-2 mt-2">
          <button
            onClick={handleSave}
            disabled={isLoading}
            className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 disabled:opacity-50"
          >
            {isLoading ? '同步中...' : '保存到 Sanity'}
          </button>
          <button
            onClick={handleCancel}
            disabled={isLoading}
            className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
          >
            取消
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      onClick={() => setIsEditing(true)}
      className={`${className} cursor-pointer hover:bg-yellow-100 hover:border hover:border-yellow-400 rounded px-1 transition-colors relative group`}
      title="點擊編輯並同步到 Sanity"
    >
      {value || placeholder}
      <span className="absolute -top-6 left-0 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        點擊編輯
      </span>
    </div>
  )
}