'use client'

import type { Note } from '@/@types/Note'
import { formatDistance } from 'date-fns'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import NoteFormModal from './NoteFormModal'
import DeleteConfirmationModal from './NoteDeleteModal'
import useNoteActions from '../hooks/useNoteActions'

interface NoteItemProps {
  note: Note
}

export default function NoteItem ({ note }: NoteItemProps) {
  const {
    editingNote,
    handleEdit,
    handleDelete,
    handleModalClose,
    isDeleteModalOpen,
    handleDeleteModalClose,
    handleDeleteConfirm
  } = useNoteActions({ note })
  return (
    <>
      <article className="bg-gray-900 shadow rounded overflow-hidden">
        <div className="bg-primary-700 px-4 py-2">
          <h2 className="text-lg font-bold">
            {note.title}
          </h2>
          <p className="text-xs opacity-70">
            Created {formatDistance(new Date(note.createdAt), new Date(), { addSuffix: true })}
          </p>
        </div>
        <div className="p-4">
          <p className="text-sm">
            {note.content}
          </p>
        </div>
        <div className="px-4 py-2 bg-gray-800 flex justify-end gap-4">
          <PencilSquareIcon
            role="button"
            className="w-6 h-6 text-gray-400 hover:text-gray-300 cursor-pointer"
            onClick={handleEdit}
          />
          <TrashIcon
            role="button"
            className="w-6 h-6 text-gray-400 hover:text-gray-300 cursor-pointer"
            onClick={handleDelete}
          />
        </div>
      </article>
      <NoteFormModal
        isModalOpen={!!editingNote}
        onModalClose={handleModalClose}
        editingNote={editingNote as Note}
      />
      <DeleteConfirmationModal
        isModalOpen={isDeleteModalOpen}
        onModalClose={handleDeleteModalClose}
        onConfirm={handleDeleteConfirm}
      />
    </>
  )
}
