import "dotenv/config";

import { prisma, test } from "@test-turbo-repo/db/index";
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
	const user = await prisma.user.create({
		data: {
			email: "useree@example.comr",
		},
	});
	console.log(test);
	console.log(user);

	// const allo = test.toString();
	res.status(200).send(process.env.HELLO);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
