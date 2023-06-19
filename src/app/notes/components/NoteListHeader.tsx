'use client'

import Button from '@/components/Button'
import SectionContainer from '@/components/SectionContainer'
import { PlusIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import NoteCreateModal from './NoteFormModal'

interface NoteListHeaderProps {
  username: string
}

export default function NoteListHeader ({ username }: NoteListHeaderProps) {
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
        </div>
        <div>
          <Button className="flex items-center" onClick={handleModalOpen}>
            <PlusIcon className="w-6 h-6 mr-2" />
            Crear nota
          </Button>
        </div>
      </SectionContainer>
      <NoteCreateModal isModalOpen={isModalOpen} onModalClose={handleModalClose} />
    </>
  )
}
