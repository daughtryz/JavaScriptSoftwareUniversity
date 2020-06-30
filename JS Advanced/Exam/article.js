

class Article {


    constructor(title,creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = { };
        this._idIncrement = 1;
        this._replyIncrement = 0;

    }

    get likes() {

            if(this._likes[this.title].length === 0) {
                this._likes[this.title] = [];
                return `${this.title} has 0 likes`;
            } else if(this._likes[this.title].length === 1) {
                 
                return `${this._likes[this.title][0]} likes this article!`;
            } else {
                return `${this._likes[this.title][0]} and ${this._likes[this.title].length -1} others like this article!`;
            }
    }

  
    like(username) {

    
        if(!this._likes.hasOwnProperty(this.title)) {
            this._likes[this.title] = [];
        }
        let currUser = this._likes[this.title].find(l => l === username);

        if(currUser !== undefined) {
            throw new Error(`You can't like the same article twice!`);
        } else if(username === this.creator) {
            throw new Error(`You can't like your own articles!`);
        } else {
            this._likes[this.title].push(username);
            
            return `${username} liked ${this.title}!`;
        } 
    }

    dislike(username) {

        let currUser = this._likes[this.title].find(l => l === username);

        if(currUser === undefined) {
            throw new Error(`You can't dislike this article!`);
        } else {
            this._likes[this.title] = this._likes[this.title].filter(t => t !== username);
            return `${username} disliked ${this.title}`;
        }
    }

    comment (username, content, id) {
        
        
        let currComment = this._comments.find(c => c.id === id);

        if(currComment === undefined || id === undefined) {
            id = this._idIncrement;
            let replies = [];
            let commentObj = {id, content,username,replies};
            this._idIncrement++;
            this._comments.push(commentObj);
            //this._replyIncrement = 1;
            return `${username} commented on ${this.title}`;
        } else if(currComment !== undefined){
           
            //let replyId = this._replyIncrement;
            let commentId = id;
            let replyObj = {replyId: ++this._replyIncrement,content,username};
            let currCommentObj = this._comments.find(c => c.id === commentId);
            currCommentObj.replies.push(replyObj);
            //this._replyIncrement++;
            // if(currCommentObj !== undefined) {
            //     this._replyIncrement = 1;
            // } else {
            //     this._replyIncrement++;
            // }
            
            

            return `You replied successfully`;
        }

       

        
    }

    toString(sortingType) {
        let result = [];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes[this.title].length}`);
        result.push(`Comments:`);
        if(sortingType === 'asc') {
            this._comments = this._comments.sort(function(a,b) {return a.id - b.id});
            
            
            
            for(let comment of this._comments) {

                result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
                for(let reply of comment.replies.sort(function(a,b){ return a.replyId - b.replyId})) {
                    result.push(`--- ${comment.id}.${reply.replyId}. ${reply.username}: ${reply.content}`);
                }

            }
            


        } else if(sortingType === 'desc') {
            this._comments = this._comments.sort(function(a,b) {return b.id - a.id});
            for(let comment of this._comments) {

                result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
                for(let reply of comment.replies.sort(function(a,b){ return b.replyId - a.replyId})) {
                    result.push(`--- ${comment.id}.${reply.replyId}. ${reply.username}: ${reply.content}`);
                }

            }

        } else if(sortingType === 'username') {
            this._comments = this._comments.sort(function(a,b) {return a.username.localeCompare(b.username)});
            for(let comment of this._comments) {

                result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
                for(let reply of comment.replies.sort(function(a,b){ return a.username.localeCompare(b.username)})) {
                    result.push(`--- ${comment.id}.${reply.replyId}. ${reply.username}: ${reply.content}`);
                }

            }

        }

        return result.join('\n');
    }

}
let art = new Article("My Article", "Anny");
art.like("John");
art.likes;
//art.dislike("Sally");
art.like("Ivan");
art.like("Steven");
art.likes;
art.comment("Anny", "Some Content");
art.comment("Ammy", "New Content", 1);
art.comment("Zane", "Reply", 2);
art.comment("Jessy", "Nice :)");
art.comment("SAmmy", "Reply@", 2);
console.log(art.toString('asc'));


