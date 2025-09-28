const express = require("express");
const app = express();
app.use(express.json());

let sessions = []; 


app.post("/storeJobId", (req, res) => {
    const { mainUser, jobId, placeId } = req.body;

    sessions = sessions.filter(s => s.mainUser !== mainUser);

    sessions.push({ mainUser, jobId, placeId });
    res.json({ success: true });
});

app.get("/getJobId", (req, res) => {
    res.json(sessions);
});

app.listen(3000, () => console.log("Server running on port 3000"));
