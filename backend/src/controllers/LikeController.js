const Post = require("../models/Post");

module.exports = {
    async store(req, res) {
        const post = await Post.findById(req.params.id);

        post.likes++;

        await post.save();  

        req.io.emit("like", post);

        return res.json(post);
    }
}