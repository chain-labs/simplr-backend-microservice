const express = require("express");
const router = express.Router();
const User = require("./../user");

router.post("/", (req, res) => {
	const { signer } = req.body;
    
	User.findOne({ signer: signer }).then((signer) => {
		if (signer) {
			res.json({
				status: "true",
				error: "User has already signed the terms and conditions",
			});
		} else {
            res.json({
				status: "false",
				error: "User does not exist",
			});
		}
	});
});
module.exports = router;
