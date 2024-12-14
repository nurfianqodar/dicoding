const { Firestore } = require("@google-cloud/firestore");
const firestore = new Firestore({
	databaseId: "submissionmlgc-nurfianqodar-db",
	projectId: "submissionmlgc-nurfianqodar",
});

const predicttionsCollection = firestore.collection("predictions");

module.exports = {
	predicttionsCollection,
};
