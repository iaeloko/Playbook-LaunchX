class User {
    constructor (id, username, name, bio){
        this.id=id
        this.username=username
        this.name=name
        this.bio=bio
        this.dateCreated=new Date() // test 2
        this.lastUpdated=new Date()
    }
    get getUsername(){     //test 3
        return this.username

    }

    set setUsername(newUsername) {
        this.username=newUsername
    }
}

module.exports = User