// We create mockup files with the same name as the files we want to test.
// We create the folder on the same level as our source code.

const fetchData = () => {
    return Promise.resolve({ title: "delectus aut autem" })
};

exports.fetchData = fetchData;