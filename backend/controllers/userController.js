
const loginUser = async (req, res) => {
    res.json('login')
}


const signupUser = async (req, res) => {
    res.json('signup')
}

module.exports = { loginUser, signupUser}