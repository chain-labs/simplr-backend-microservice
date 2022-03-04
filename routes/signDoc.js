const express = require("express");
const router = express.Router();
const User = require("./../user");

router.post("/", (req, res) => {
	const { message, signature, signer } = req.body;
	User.findOne({ signer: signer }).then((user) => {
		if (user) {
			res.json({
				status: "signature",
				error: "User has already signed the terms and conditions",
			});
		} else 
		{
			const newUser = new User({
				message: message,
				signature: signature,
				signer: signer
			});
			newUser
				.save()
				.then(() =>
					res.json({
						message: "Signed Successfully",
						status: 200,
					})
				)
				.catch((err) =>
					res.json({
						status: 400,
						error: err,
					})
				);
		}
	});
});
module.exports = router;
