import express from "express";
import cors from "cors";
import router from "./routes";

const app = express();

const PORT = 8080;

app.use(express.json());

app.use(cors());

app.use("/api/diaries", router);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
