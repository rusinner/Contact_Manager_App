class BaseRepository {
  constructor(_collection) {
    this.collection = _collection;
  }

  async findAll() {
    var data = await this.collection.find().lean().exec();
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
  async update(model) {
    var data = await this.collection.findByIdAndUpdate(model._id, model);
    return data;
  }
  async deleteById(id) {
    var data = await this.collection.findByIdAndDelete(id);
    return data;
  }
}

module.exports = BaseRepository;
