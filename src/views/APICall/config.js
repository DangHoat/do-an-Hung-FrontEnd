export const url  = process.env.SERVER || "http://localhost:"
export const port = process.env.PORTSERVER || 3000
export const version = "/api/v1"
export const root = url + port +version
export const login = root +"/auth/login"