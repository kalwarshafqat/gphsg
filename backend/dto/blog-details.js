class BlogDetailsDTO {
    constructor(blog){
        this._id = blog._id;
        this.title = blog.title;
        this.content = blog.content;
        this.photo = blog.photo;
        this.createdAt = blog.createdAt;
        this.AuthorName = blog.author.name;
        this.AuthorUsername = blog.author.username;

    }
}

module.exports = BlogDetailsDTO;