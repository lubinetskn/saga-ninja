const user = require("./user")
// @ponicode
describe("user.getUser", () => {
    test("0", () => {
        let callFunction = () => {
            user.getUser("user_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            user.getUser("username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            user.getUser("user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            user.getUser("user name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            user.getUser("user-name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            user.getUser(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
