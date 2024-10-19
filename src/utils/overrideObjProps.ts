export default <T, K>(init: T,major:K): T & K => {
    return {
    ...init,
    ...major
    }
};
