const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  idrepo: Number,
  reponame: String,
  updated_at: Date,
  fork: Boolean,
  user: String,
  avatar_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (element) => {
  Repo.find({idrepo: element.id}, (err, res) => {
    if(res.length === 0){
      var info = new Repo({
        idrepo: element.id,
        reponame: element.name,
        updated_at: element.updated_at,
        fork: element.fork,
        user: element.owner.login,
        avatar_url: element.owner.avatar_url
      });
      info.save();
    }
  });
}

let list = (cb) => {
  Repo.find({}, cb);
}

module.exports.save = save;
module.exports.list = list;