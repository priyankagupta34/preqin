import { capitalise } from "./utils"

describe('check utils functions', () => {
    it('check capitalise', () => {
        const value = capitalise("this_id");
        expect(value).toBe('This Id');
    })
})