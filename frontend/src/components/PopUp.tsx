import { useEffect, useRef } from "react"

interface Props {
  open: boolean
  updateModalState: React.Dispatch<React.SetStateAction<boolean>>
}

const PopUp = ({ children, open, updateModalState }: React.PropsWithChildren<Props>) => {
  const modalRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (open) {
      modalRef.current?.showModal()
    }
  })

  const handleModalClose = () => {
    modalRef.current?.close()
    updateModalState(false)
  }

  return (
    <dialog className="max-w-[80svw] w-fit rounded-md h-[80svh]" ref={modalRef}>
      <div className="h-full border border-black rounded-md overflow-hidden flex flex-col">
        <div className="p-4 h-full overflow-auto">
          {children}
        </div>
        <div className="flex justify-end border-t border-black p-4">
          <button onClick={handleModalClose} className="empty-button">Close</button>
        </div>
      </div>
    </dialog>
  )
}

export default PopUp