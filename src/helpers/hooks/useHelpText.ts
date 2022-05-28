/**
 * Uses form validation state to give feedback.
 * 
 * WARNING: Don't use this hook in the `FieldCheckbox` component.
 */
function useHelpText(
    isTouched: boolean, 
    errorMessage: string | undefined, 
    defaultHelpMessage: string
): [string, string, string] {
    
    if (isTouched && errorMessage !== undefined)
        return ['is-invalid', 'invalid-feedback', errorMessage]

    if (isTouched)
        return ['is-valid', 'valid-feedback', 'Tudo certo!']

    return ['', 'text-muted', defaultHelpMessage]
}

export default useHelpText;