import "dotenv/config";
import { prisma } from "@test-turbo-repo/db";
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
	const user = await prisma.user.findFirst();
	res.status(200).send(user);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
