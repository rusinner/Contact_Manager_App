//import status codes package
httpStatusCodes = require("http-status-codes");

class BaseController {
  constructor(repoClass) {
    this.repo = new repoClass();
  }

  //common response methods
  ok(res, data) {
    if (data) {
      res.status(httpStatusCodes.OK).send(data);
    } else {
      return res.status(httpStatusCodes.OK).send({ message: "Ok!" });
    }
  }

  created(res, data) {
    return res
      .status(httpStatusCodes.CREATED)
      .send({ message: "Created", data: data });
  }
  unauthorized(res, message) {
    return res
      .status(httpStatusCodes.UNAUTHORIZED)
      .send({ message: "Unauthorized" });
  }
  forbidden(res, message) {
    return res.status(httpStatusCodes.FORBIDDEN).send({ message: "Forbidden" });
  }
  notFound(res, message) {
    return res.status(httpStatusCodes.NOT_FOUND).send({ message: "Not Found" });
  }
  conflict(res, message) {
    return res.status(httpStatusCodes.CONFLICT).send({ message: "Conflict" });
  }
  internalServerError(res, error) {
    console.log(error);
    return res
      .status(httpStatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }

  //common db opration methods
  //find all documents of a type contacts
  getAll = (req, res) => {
    this.repo
      .findAll()
      .then((docs) => {
        return this.ok(res, docs);
      })
      .catch((err) => {
        return this.internalServerError(res, err);
      });
  };
  //get byId
  getById = (req, res) => {
    let id = req.params.id;
    this.repo
      .findById(id)
      .then((doc) => {
        return this.ok(res, doc);
      })
      .catch((err) => {
        return this.internalServerError(res, err);
      });
  };
  //create new document
  add = (req, res) => {
    const body = req.body;
    const isNull = Object.values(body).every((value) => {
      if (value === null) {
        return true;
      }
      return false;
    });
    if (isNull) {
      console.log("Please fill all fields");
    } else {
      this.repo
        .create(body)
        .then((doc) => {
          return this.created(res, doc);
        })
        .catch((err) => {
          return { error: this.internalServerError(res, err), message: err };
        });
    }
  };

  update = (req, res) => {
    let id = req.params.id;
    const body = req.body;
    this.repo
      .update(id, body)
      .then((doc) => {
        return this.ok(res, doc);
      })
      .catch((err) => {
        console.log(err);
        return this.internalServerError(res, err);
      });
  };

  deleteById = (req, res) => {
    let id = req.params.id;
    this.repo
      .deleteById(id)
      .then((doc) => {
        return this.ok(res, doc);
      })
      .catch((err) => {
        return this.internalServerError(res, err);
      });
  };

  // register = (req, res) => {
  //   res.json({ message: "user register" });
  // };

  login = (req, res) => {
    res.json({ message: "user logged in" });
  };
}

module.exports = BaseController;
