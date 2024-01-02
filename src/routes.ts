import express from "express";
import {
	deleteDiary,
	getDiaries,
	getDiary,
	postDiary,
	updateDiary,
} from "./services/diaries";
import { checkPostedDiary, checkUpdatedDiary } from "./utils";

const router = express.Router();

router.get("/", (_req, res) => {
	const diaries = getDiaries();
	res.send(diaries);
});

router.get("/:id", (req, res) => {
	const diary = getDiary(Number(req.params.id));
	diary != null ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {
	try {
		const checkedPostedDiary = checkPostedDiary(req.body);
		const diary = postDiary(checkedPostedDiary);
		res.send(diary);
	} catch (e) {
		if (e instanceof Error) {
			res.status(400).send(e.message);
		}
	}
});

router.put("/:id", (req, res) => {
	try {
		const checkedUpdatedDiary = checkUpdatedDiary(req.body);
		const diary = updateDiary(checkedUpdatedDiary);
		diary != null ? res.send(diary) : res.sendStatus(404);
	} catch (e) {
		if (e instanceof Error) {
			res.status(400).send(e.message);
		}
	}
});

router.delete("/:id", (req, res) => {
	const diary = deleteDiary(Number(req.params.id));
	diary != null ? res.send(diary) : res.sendStatus(404);
});

export default router;
