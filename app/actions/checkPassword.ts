const commonPasswords = [
	"123456",
	"password",
	"123456789",
	"12345678",
	"12345",
	"1234567",
	"admin",
	"123123",
	"qwerty",
	"abc123",
	"letmein",
	"monkey",
	"111111",
	"password1",
	"qwerty123",
	"dragon",
	"1234",
	"baseball",
	"iloveyou",
	"trustno1",
	"sunshine",
	"princess",
	"football",
	"welcome",
	"shadow",
	"superman",
	"michael",
	"ninja",
	"mustang",
	"jessica",
	"charlie",
	"ashley",
	"bailey",
	"passw0rd",
	"master",
	"love",
	"hello",
	"freedom",
	"whatever",
	"nicole",
	"jordan",
	"cameron",
	"secret",
	"summer",
	"1q2w3e4r",
	"zxcvbnm",
	"starwars",
	"computer",
	"taylor",
	"startrek",
];

export default async function checkPassword(password: string) {
	let message;

	// Password should be at least 6 characters long
	if (password.length < 6) {
		message = "Password should be at least 6 characters long";
	}

	// Password should be at most 16 characters long
	if (password.length > 16) {
		message = "Password should be at most 16 characters long";
	}

	// Avoid common passwords
	if (commonPasswords.includes(password.toLowerCase())) {
		message = "Please choose a less common password";
	}

	// Avoid sequential or repeated characters
	if (/(\w)\1{2,}/.test(password)) {
		message = "Password should not contain repeated characters";
	}

	// Return the result
	return { error: message };
}
