export const getHome = async (req, res) => {
    res.status(200).json({ message: "Hello World!" });
};