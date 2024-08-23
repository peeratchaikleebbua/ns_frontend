export type ConfirmDialogType = {
    open: boolean
    onClose: () => void
    onConfirm: () => void
    title: string,
    message: string,
}