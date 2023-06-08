exports.mapApi = async (req, res) => {
    try {
        res.status(200).json({
            code: 200,
            message:"Get Map api ",
            mapApi: process.env.MAP_API
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: "success",
            message:"Error. Try again"
        })
    }
}