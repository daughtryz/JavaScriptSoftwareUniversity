

function solve() {


    class Post {
        constructor(title,content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return [
                `Post: ${this.title}`,
            `Content: ${this.content}`

            ].join('\n');
        }
    }

    class SocialMediaPost extends Post {
      
        constructor(title,content,likes,dislikes) {
            super(title,content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let allComments = [];
            this.comments.forEach(i => allComments.push(` * ${i}`));
            return allComments.length !== 0 ? super.toString() + `\nRating: ${this.likes - this.dislikes}` + `\nComments:\n` + allComments.join('\n') : super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            
        }

    }

    class BlogPost extends Post {

        constructor(title,content,views) {
            super(title,content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

let result = solve();

let test = new result.BlogPost("TestTitle", "TestContent", 5);

test.view().view().view();

console.log(test.toString());