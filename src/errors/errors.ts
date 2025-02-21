const createErrors = (name:string) => class BusinessError extends Error {
    constructor(message:string) {
        super(message)
        this.name = name
    }
}


export const ValidationError = createErrors('Validation error')
export const FontError = createErrors('Error loading the fonts')
export const GroupsApiError = createErrors('Error from the use user groups context')
export const MessagesApiError = createErrors('Error from the messages api')
export const UserProfileError = createErrors('Error fetching the user profile from the api')