class BaseRepository {
  constructor(_collection) {
    this.collection = _collection;
  }

  async findAll() {
    var data = await this.collection.find().lean().exec();
    return data;
  }
  async findAllByUser() {
    var data = await this.collection.find({ user_id: req.user.id });
    return data;
  }
  async findById(id) {
    var data = await this.collection.findById(id);
    return data;
  }
  async create(model) {
    var data = await this.collection.create(model);
    return data;
  }
  async update(id, model) {
    var data = await this.collection.findByIdAndUpdate(id, model);
    return data;
  }
  async deleteById(id) {
    var data = await this.collection.findByIdAndDelete(id);
    return data;
  }
  async login(username) {
    var data = await this.collection.findOne({ username: username });

    return data;
  }
  async getCurrent(username) {
    var data = await this.collection.find({ username: username });
    return data;
  }
}

module.exports = BaseRepository;
