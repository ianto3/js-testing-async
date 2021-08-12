jest.mock("./http"); // jest replaces http.js with our mock file. Magic.

const { loadTitle } = require("./utils");

// We DO NOT want to test api requests nor library functions like axios.
// Testing APIs is done in the backend during the API creation. 

// We create mockups of the data fetched to test out our code that would
// work upon that data received.

test("Should return an uppercase text", () => {
    loadTitle().then(title => {
        expect(title).toBe("DELECTUS AUT AUTEM");
    })
})