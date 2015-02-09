/*

LittleGit

After Mary Rose Cook
http://gitlet.maryrosecook.com/
http://maryrosecook.com/blog/post/git-in-six-hundred-words

*/

function Git() {
	// Git index. Maps filenames to file contents.
	this.index = {};
	
	// Object database.
	this.objects = new GitDatabase();
	
	this.branches = {
		master: null
	};
	
	this.head = branches.master;
	
	this.remotes = {};
}

Git.prototype.commit = function(message, flags) {

}

Git.prototype.add = function() {

}

Git.prototype.clone = function() {

}

function GitDatabase() {
	this.blobs = {};
	
	this.commits = {};
}

function Blob(contents) {

}

function Commit() {

}

function Branch() {

}

function Tree() {

}


