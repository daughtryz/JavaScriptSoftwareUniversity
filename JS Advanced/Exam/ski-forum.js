class Forum {
    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
    }

    register(username, password, repeatPassword, email) {
        if(username === '' || password === '' || repeatPassword === '' || email === '') {
            throw new Error('Input can not be empty');
        }
        let currUser = this._users.find(c => c.username === username);
        if(password !== repeatPassword) {
            throw new Error('Passwords do not match');
        }

        if(currUser !== undefined) {
            throw new Error('This user already exists!');
        }

        this._users.push({username,password,repeatPassword,email});
        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {
        if(username === '' || password === '') {
            throw new Error('Input can not be empty');
        }
        let currUser = this._users.find(c => c.username === username && c.password === password);

        if(currUser === undefined) {
            throw new Error('There is no such user');
        }

        return `Hello! You have logged in successfully`;
    }

    logout(username, password) {
        if(username === '' || password === '') {
            throw new Error('Input can not be empty');
        }
        let currUser = this._users.find(c => c.username === username && c.password === password);

        if(currUser === undefined) {
            throw new Error('There is no such user');
        }

        return `You have logged out successfully`;
    }

    postQuestion(username, question) {
        if(username === '' || question === '') {
            throw new Error('Input can not be empty');
        }
        let currUser = this._users.find(c => c.username === username);

        if(currUser === undefined) {
            throw new Error('You should be logged in to post questions');
        }

        if(question === '') {
            throw new Error('Invalid question');
        }

        
        let answers = [];
        let questionObj = {questionId: this._id,question,answers,user: currUser};
        this._id++;

        this._questions.push(questionObj);

        return `Your question has been posted successfully`;
    }

    postAnswer(username, questionId, answer) {
        if(username === '' || answer === '' || questionId === '') {
            throw new Error('Input can not be empty');
        }
        let currUser = this._users.find(c => c.username === username);

        if(currUser === undefined) {
            throw new Error('You should be logged in to post answers');
        }

        if(answer === '') {
            throw new Error('Invalid answer');
        }
        let currQuestion = this._questions.find(c => c.questionId === questionId);

        if(currQuestion === undefined) {
            throw new Error('There is no such question');
        }
        let answerObj = {answer,user: currUser};
        currQuestion.answers.push(answerObj);

        return `Your answer has been posted successfully`;

    }

    showQuestions() {
        let result = [];
        for(let quest of this._questions) {
            result.push(`Question ${quest.questionId} by ${quest.user.username}: ${quest.question}`);
            for(let ans of quest.answers) {
                result.push(`---${ans.user.username}: ${ans.answer}`);
            }
        }

        return result.join('\n');
    }

    


}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael',2, "How old is she?");
forum.postAnswer('Michael',2, "Tell us how tall she is.");

console.log(forum.showQuestions());
