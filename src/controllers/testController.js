const getTest = (req, res) => {
    res.status(200).json({ message: "GET request successful", data: "This is a test response" });
};

const postTest = (req, res) => {
    const { body } = req;
    res.status(201).json({ message: "POST request successful", receivedData: body });
};

module.exports = {
    getTest,
    postTest
};