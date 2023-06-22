'use client'

import Button from '@/components/Button'
import SectionContainer from '@/components/SectionContainer'
import { PlusIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import NoteCreateModal from './NoteFormModal'
import useLogout from '@/hooks/useLogout'

interface NoteListHeaderProps {
  username: string
  onRefetch: () => Promise<void>
}

export default function NoteListHeader ({ username, onRefetch }: NoteListHeaderProps) {
  const logout = useLogout()
  const [isModalOpen, setModalOpen] = useState(false)

  const handleModalOpen = () => {
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  return (
    <>
      <SectionContainer className="my-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">
            Notas de
            {' '}
            <span className="text-primary-500">@{username}</span>
          </h1>
          <p className="text-xl">
            Aquí puedes ver todas tus notas
          </p>
          <p className="text-md mt-2">
            <button className="text-primary-500 hover:underline" type="button" onClick={logout}>
              Cerrar sesión
            </button>
          </p>
        </div>
        <div>
          <Button className="flex items-center" onClick={handleModalOpen}>
            <PlusIcon className="w-6 h-6 mr-2" />
            Crear nota
          </Button>
        </div>
      </SectionContainer>
      <NoteCreateModal
        isModalOpen={isModalOpen}
        onModalClose={handleModalClose}
        onRefetch={onRefetch}
      />
    </>
  )
}
