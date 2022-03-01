const express = require("express");
const router = express.Router();
const User = require("./../user");

router.post("/", (req, res) => {
	const { userId, signature } = req.body;
	User.findOne({ userId: userId }).then((user) => {
		if (user) {
			res.json({
				status: "signature",
				error: "User has already signed the terms and conditions",
			});
		} else {
			const newUser = new User({
				userId: userId,
				signature: signature,
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
