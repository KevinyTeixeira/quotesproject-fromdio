import { Request, Response, Router } from "express"
import { Readable } from "stream";
import readline from 'readline';
import multer from "multer";

const router = Router();
const multerConfig = multer();

// router.post('/users', (request, response) => {
// 	return response.status(201).send();
// })

// var quoteList= [];

router.post(
	"/newQuote",
	multerConfig.single("file"),
	async (request: Request, response: Response) => {
		const { file } = request;
		const { buffer } = file;

		const readableFile = new Readable();
		readableFile.push(buffer);
		readableFile.push(null);

		const quotesLine = readline.createInterface({
			input: readableFile,
		})

		for await (let line of quotesLine) {
			line.split(";");
			console.log(quotesLine);
		}
		
		return response.send(); 
})

export { router }

