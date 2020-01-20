'use strict'

// import user model
const User = use("App/Models/User");

class UserController {
	async create({ request }) {
		// get fields and set on data
		const data = request.only(["username", "email", "password"]);
		const user = await User.create(data);
		// return json user result
		return user;
	}
}

module.exports = UserController;
