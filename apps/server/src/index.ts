import "dotenv/config";

import { test } from "@test-turbo-repo/db";

import cors from "cors";
import express from "express";

const app = express();

app.use(
	cors({
		origin: process.env.CORS_ORIGIN || "",
		methods: ["GET", "POST", "OPTIONS"],
	}),
);

app.use(express.json());

app.get("/", async (_req, res) => {
	// const user = await prisma.user.findFirst();
	const allo = test;
	res.status(200).send(allo);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
