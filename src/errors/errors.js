const createErrors = (name) => class BusinessError extends Error {
    constructor(message) {
        super(message)
        this.name = name
    }
}



export const ValidationError = createErrors('Validation error')
export const FontError = createErrors('Error loading the fonts')