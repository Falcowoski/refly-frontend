/**
 * Uses form validation state to give isValid or isInvalid prop.
 */
function useFieldValidation(
    isTouched: boolean, 
    errorMessage: string | undefined
) {

    if (isTouched && errorMessage !== undefined)
        return { isInvalid: true };

    if (isTouched)
        return { isValid: true };

    return {};
}

export default useFieldValidation;